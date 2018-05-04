/// <reference types="react" />
import * as React from 'react';
import './styles/index.css';
export interface IProps {
    year: void | number;
    month: void | number;
    startYear?: number;
    open: boolean;
    className?: string;
    onChange: (selectedYear: number, selectedMonth: number) => void;
    onClose: () => void;
    onOutsideClick?: (e: React.MouseEvent<HTMLDivElement>) => void;
}
export interface IState {
    years: Array<number>;
    selectedYear: void | number;
    selectedMonth: void | number;
    currentView: string;
}
declare class MonthCalendar extends React.Component<IProps, IState> {
    constructor(props: IProps);
    componentWillReceiveProps(nextProps: any): void;
    onChange: (selectedYear: any, selectedMonth: any) => void;
    onClose: () => void;
    selectYear: (selectedYear: number) => void;
    selectMonth: (selectedMonth: number) => void;
    previous: () => void;
    next: () => void;
    updateYears: (startYear: number) => void;
    isYears: () => boolean;
    renderMonths: () => JSX.Element[];
    renderYears: () => JSX.Element[];
    render(): JSX.Element;
}
export default MonthCalendar;
