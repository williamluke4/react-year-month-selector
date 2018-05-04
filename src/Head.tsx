import * as React from 'react';

export interface IProps {
  month: void|number;
  year: void|number;
  onNext: () => any;
  onPrev: () => any;
  onValueClick: () => any;
}

class Head extends React.Component<IProps> {
  selectedValue(): string|number {
    const { month, year } = this.props;

    if (typeof year !== 'number') {
      return '';
    } else if (typeof month !== 'number') {
      return year;
    } else {
      const monthVal = month < 10 ? '0' + month : month;
      return monthVal + '/' + year;
    }
  }

  render(): JSX.Element {
    return (
      <div className="ryms-section_mp ryms-group_mp">
        <div className="ryms-col_mp ryms-span_1_of_3_mp ryms-arrows_mp"
          onClick={this.props.onPrev}>&lt;</div>

        <div className="ryms-col_mp ryms-span_1_of_3_mp ryms-selected_date_mp"
          onClick={this.props.onValueClick}
        >
          {this.selectedValue()}
        </div>

        <div className="ryms-col_mp ryms-span_1_of_3_mp ryms-arrows_mp"
          onClick={this.props.onNext}>&gt;</div>
      </div>
    );
  }
}

export default Head;
