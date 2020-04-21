import * as React from 'react';
import ReactQuill, { Quill } from 'react-quill';
//import 'react-quill/dist/quill.snow.css'; // ES6

export interface IRichtextEditorProps {
    textChanged?: (newValue: string) => void;
    text: string;
    readonly: boolean;
}

export interface IState {
    text: string;
    readonly: boolean;
}



export class RichtextEditor extends React.Component<IRichtextEditorProps, IState>
{

    constructor(props: IRichtextEditorProps) {
        super(props);
        this.state = { text: props.text, readonly: props.readonly } // You can also pass a Quill Delta here
        this.handleChange = this.handleChange.bind(this);

    }

    shouldComponentUpdate(nextProps: IRichtextEditorProps) {
        return (this.props.text !== nextProps.text);
    }

    handleChange(value: string) {
        if (this.props.textChanged) {
            this.props.textChanged(value);
        }
    }

    render() {
        return (
            <ReactQuill value={this.props.text} readOnly={this.props.readonly}
                onChange={this.handleChange} />
        );
    }
}