import { IInputs, IOutputs } from "./generated/ManifestTypes";
import { IRichtextEditorProps, RichtextEditor } from "./components/richtextEditor"
import * as React from 'react';
import * as ReactDOM from 'react-dom';

export class D365RichtextEditor implements ComponentFramework.StandardControl<IInputs, IOutputs> {


	private notifyOutputChanged: () => void;
	private theContainer: HTMLDivElement;
	private props: IRichtextEditorProps = {
		textChanged: this.textChanged.bind(this),
		text: "",
		readonly: false
	}
	private _controlViewRendered: boolean = false;

	/**
	 * Empty constructor.
	 */
	constructor() {

	}

	/**
	 * Used to initialize the control instance. Controls can kick off remote server calls and other initialization actions here.
	 * Data-set values are not initialized here, use updateView.
	 * @param context The entire property bag available to control via Context Object; It contains values as set up by the customizer mapped to property names defined in the manifest, as well as utility functions.
	 * @param notifyOutputChanged A callback method to alert the framework that the control has new outputs ready to be retrieved asynchronously.
	 * @param state A piece of data that persists in one session for a single user. Can be set at any point in a controls life cycle by calling 'setControlState' in the Mode interface.
	 * @param container If a control is marked control-type='standard', it will receive an empty div element within which it can render its content.
	 */
	public init(context: ComponentFramework.Context<IInputs>, notifyOutputChanged: () => void, state: ComponentFramework.Dictionary, container: HTMLDivElement) {
		this.notifyOutputChanged = notifyOutputChanged;
		this.theContainer = container;

	}


	/**
	 * Called when any value in the property bag has changed. This includes field values, data-sets, global values such as container height and width, offline status, control metadata values such as label, visible, etc.
	 * @param context The entire property bag available to control via Context Object; It contains values as set up by the customizer mapped to names defined in the manifest, as well as utility functions
	 */
	public updateView(context: ComponentFramework.Context<IInputs>): void {
		let readOnlyChanged = this.props.readonly != context.mode.isControlDisabled;
		if (!this._controlViewRendered || readOnlyChanged) {
			var controltextchanged = this.props.text != context.parameters.text.raw
			this.props.readonly = context.mode.isControlDisabled;
			if (context.parameters.text.raw != null && controltextchanged) {
				this.props.text = context.parameters.text.raw;
			}

			ReactDOM.render(
				React.createElement(
					RichtextEditor,
					this.props
				),
				this.theContainer
			);
			this._controlViewRendered = true;
		}

	}

	/** 
	 * It is called by the framework prior to a control receiving new data. 
	 * @returns an object based on nomenclature defined in manifest, expecting object[s] for property marked as “bound” or “output”
	 */
	public getOutputs(): IOutputs {
		let text = this.props.text;
		if (text != "<p><br></p>") {
			return {
				text: this.props.text
			};
		}
		else {
			return {
				text: undefined
			};
		}
	}



	/** 
	 * Called when the control is to be removed from the DOM tree. Controls should use this call for cleanup.
	 * i.e. cancelling any pending remote calls, removing listeners, etc.
	 */
	public destroy(): void {
		ReactDOM.unmountComponentAtNode(this.theContainer);
	}

	private textChanged(text: string) {
		if (this.props.text !== text) {
			this.props.text = text;
			this.notifyOutputChanged();
		}
	}
}