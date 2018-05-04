/// <reference types="react" />
import * as React from 'react';
import './style.css';
export interface IState {
    open: boolean;
}
declare class Example extends React.Component<{}, IState> {
    constructor(props: any);
    handleOpen: () => void;
    handleClose: () => void;
    render(): JSX.Element;
}
export default Example;
