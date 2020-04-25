import * as React from 'react';
import ReactQuill from 'react-quill';
import * as Quill from "quill";
//import 'react-quill/dist/quill.snow.css'; // ES6

export interface IRichtextEditorProps {
    textChanged?: (newValue: string) => void;
    text: string;
    readonly: boolean;
    maxLength: number;
    height: number;
    minheight: number;
    maxheight: number;
}

export interface IState {
    text: string;
    readonly: boolean;
    maxLength: number;
    previousText: string;
    height: number;
    minheight: number;
    maxheight: number;
}




export class RichtextEditor extends React.Component<IRichtextEditorProps, IState>
{



    constructor(props: IRichtextEditorProps) {
        super(props);
        this.state = { previousText: props.text, text: props.text, readonly: props.readonly, maxLength: props.maxLength, height: this.props.height, minheight: this.props.minheight, maxheight: this.props.maxheight } // You can also pass a Quill Delta here
        this.handleChange = this.handleChange.bind(this);
    }


    handleChange(value: string, delta: Quill.Delta, source: Quill.Sources, editor: any) {
        if (value == "<p><br></p>") {
            value = "";
        }

        if (value.length > this.state.maxLength) {
            value = this.state.previousText;
            this.setState({ text: value })
        }

        this.setState({ previousText: value, text: value })

        if (this.props.textChanged) {
            this.props.textChanged(value);
        }
    }

    render() {

        const dynamicsStyle = {
            height: {
                minheight: this.props.minheight + 'px',
                maxheight: this.props.maxheight + 'px'
            },
            position: {
                height: this.props.height + 'px',
                minheight: this.props.minheight + 'px',
                maxheight: this.props.maxheight + 'px'
            },
            active: {
                backgroundPosition: '-235px -147px'
            }
        };



        return (
            <ReactQuill value={this.state.text} readOnly={this.props.readonly} style={Object.assign({}, dynamicsStyle.height, dynamicsStyle.position)}
                onChange={this.handleChange} />
        );
    }
}