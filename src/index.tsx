import * as React from 'react';
import Head from './Head';
import { MONTHS_NAMES, VIEW_MONTHS, VIEW_YEARS } from './constants';
import './styles/index.css';

export interface IProps {
  year: void|number;
  month: void|number;
  startYear?: number;
  open: boolean;
  className?: string;
  onChange: (selectedYear: number, selectedMonth: number) => void;
  onClose: (e: React.MouseEvent<HTMLDivElement>) => void;
}

export interface IState {
  years: Array<number>;
  selectedYear: void|number;
  selectedMonth: void|number;
  currentView: string;
}

class MonthCalendar extends React.Component<IProps, IState> {
  constructor(props: IProps) {
    super(props);

    const { year, month } = this.props;

    const startYear: number = this.props.startYear || new Date().getFullYear() - 6;

    this.state = {
      years: Array.from({length: 12}, (_v, k) => k + startYear),
      selectedYear: year,
      selectedMonth: month,
      currentView: year ? VIEW_MONTHS : VIEW_YEARS,
    };
  }
  componentWillReceiveProps(nextProps) {
    const { year, month } = nextProps;
    const { selectedYear, selectedMonth } = this.state;

    if (typeof year === 'number' &&
      typeof month === 'number' &&
      (year !== selectedYear || month !== selectedMonth)
    ) {
      this.setState({
        selectedYear: year,
        selectedMonth: month,
        currentView: VIEW_MONTHS
      });
    }
  }

  onChange = (selectedYear, selectedMonth): void => {
    if (typeof selectedYear === 'number' && typeof selectedMonth === 'number') {
      this.props.onChange(selectedYear, selectedMonth);
    }
  }
  onClose = (): void => {
    this.props.onClose();
  }

  selectYear = (selectedYear: number): void => {
    this.setState({ selectedYear, currentView: VIEW_MONTHS });
    this.onChange(selectedYear, this.state.selectedMonth);
  }

  selectMonth = (selectedMonth: number): void => {
    this.setState({ selectedMonth });
    this.onChange(this.state.selectedYear, selectedMonth);
    this.onClose();
  }

  previous = (): void => {
    const startYear = this.state.years[0] - 12;
    this.updateYears(startYear);
  }

  next = (): void => {
    const startYear = this.state.years[11] + 1;
    this.updateYears(startYear);
  }

  updateYears = (startYear: number): void => {
    const years = Array.from({length: 12}, (_v, k) => k + startYear);

    this.setState({ years, currentView: VIEW_YEARS });
  }

  isYears = (): boolean => {
    return this.state.currentView === VIEW_YEARS;
  }

  renderMonths = (): JSX.Element[] => {
    const { selectedMonth } = this.state;

    return MONTHS_NAMES.map((month, index) => {
      const selectedKlass = selectedMonth === index ? 'ryms-selected_cell' : '';

      return (
        <div
          key={index}
          onClick={() => this.selectMonth(index)}
          className={`ryms-col_mp ryms-span_1_of_3_mp ${selectedKlass}`}
        >{month}</div>
      );
    });
  }

  renderYears = (): JSX.Element[] => {
    const { selectedYear } = this.state;

    return this.state.years.map((year, i) => {
      const selectedClass = selectedYear === year ? 'ryms-selected_cell' : '';

      return (
        <div
          key={i}
          onClick={() => this.selectYear(year)}
          className={`ryms-col_mp ryms-span_1_of_3_mp ${selectedClass}`}
        >{year}</div>
      );
    });
  }

  render(): JSX.Element {
    const { selectedYear, selectedMonth } = this.state;
    const { open, className } = this.props;
    if (open) {
      return (
        <div className={`ryms-container ${className || ''}`}>
        <div
          className="ryms-clickout"
          onClick={this.props.onClose}
        />
          <Head
            year={selectedYear}
            month={selectedMonth ? selectedMonth + 1 : undefined}
            onValueClick={() => this.setState({ currentView: VIEW_YEARS })}
            onPrev={this.previous}
            onNext={this.next} />

          {this.isYears() ? this.renderYears() : this.renderMonths()}
        </div>
      );
    } else { return <div/>; }
  }
}

export default MonthCalendar;
