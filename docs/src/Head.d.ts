/// <reference types="react" />
import * as React from 'react';
export interface IProps {
    month: void | number;
    year: void | number;
    onNext: () => any;
    onPrev: () => any;
    onValueClick: () => any;
}
declare class Head extends React.Component<IProps> {
    selectedValue(): string | number;
    render(): JSX.Element;
}
export default Head;
