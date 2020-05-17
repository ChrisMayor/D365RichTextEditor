import { IInputs, IOutputs } from "./generated/ManifestTypes";
import { IRichtextEditorProps, RichtextEditor, IExpVal } from "./components/richtextEditor"
import * as React from 'react';
import * as ReactDOM from 'react-dom';

export class D365RichtextEditor implements ComponentFramework.StandardControl<IInputs, IOutputs> {


	private queueActive: boolean = false;
	private notifyOutputChanged: () => void;
	private theContainer: HTMLDivElement;
	private previousValues: IExpVal[] = [];

	private props: IRichtextEditorProps = {
		textChanged: this.textChanged.bind(this),
		text: "",
		readonly: false,
		maxLength: 9999,
		minheight: 200,
		maxheight: 200,
		height: 200
	}
	private _controlViewRendered: boolean = false;
	private _richtextText: RichtextEditor;
	getOutputsRun: boolean;
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
		let controltextchanged: boolean;

		if (context.parameters.text.raw != null) {
			controltextchanged = this.checkIfCurrentTextChanged(context.parameters.text.raw);
		}
		else {
			controltextchanged = false;
		}

		if (!this._controlViewRendered) {
			this.props.readonly = context.mode.isControlDisabled;
			this.props.maxLength = context.parameters.text.attributes?.MaxLength ?? 9999;
			if (context.parameters.height.raw != null && context.parameters.height.raw != 0) {
				this.props.height = context.parameters.height.raw;
			}

			if (context.parameters.minheight.raw != null && context.parameters.minheight.raw != 0) {
				this.props.minheight = context.parameters.minheight.raw;
			}

			if (context.parameters.maxheight.raw != null && context.parameters.maxheight.raw != 0) {
				this.props.maxheight = context.parameters.maxheight.raw;
			}

			this.theContainer.style.height = this.props.height + 40 + "px";

			if (context.parameters.text.raw != null && controltextchanged) {
				this.props.text = context.parameters.text.raw;
				if (this._controlViewRendered) {
					this._richtextText.setStateText(this.props.text);
				}
			}

			var element = React.createElement(RichtextEditor, this.props);
			this._richtextText = ReactDOM.render(
				element,
				this.theContainer
			);
			this._controlViewRendered = true;
		}

		if (this._controlViewRendered && readOnlyChanged) {
			this.props.readonly = context.mode.isControlDisabled;
			this._richtextText.setStateReadOnly(this.props.readonly);
		}

		if (controltextchanged) {
			if (context.parameters.text.raw != null && !this.previousValueMatches(context.parameters.text.raw)) {
				this.props.text = context.parameters.text.raw ?? "";
				this._richtextText.setStateText(this.props.text);
			}
		}

	}

	private setPreviousValue(value: string) {
		let previousValue: IExpVal = { text: value, expireson: new Date(new Date().getTime() + 500) }
		this.previousValues.push(previousValue)
	}

	private previousValueMatches(value: string): boolean {
		let matches: boolean = false;
		let toRemove: IExpVal[] = [];
		this.previousValues.forEach(element => {
			if (new Date() > element.expireson) {
				toRemove.push(element);
			}
			else if (value == element.text) {
				matches = true;
			}
		});

		toRemove.forEach(element => this.previousValues.splice(this.previousValues.indexOf(element), 1));
		return matches;
	}

	/** 
	 * It is called by the framework prior to a control receiving new data. 
	 * @returns an object based on nomenclature defined in manifest, expecting object[s] for property marked as “bound” or “output”
	 */
	public getOutputs(): IOutputs {
		let text = this.props.text;
		if (text != "") {
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
			this.setPreviousValue(this.props.text)
			this.props.text = text;
			this.queueNotifiyChanged();

		}
	}

	private queueNotifiyChanged() {
		if (!this.queueActive) {
			this.queueActive = true;
			setTimeout(() => {
				this.notifyOutputChanged();
				this.queueActive = false;
			}, 100
			);
		}
	}

	private checkIfCurrentTextChanged(newText: string) {
		if (this._richtextText != undefined && this._richtextText) {
			return this._richtextText.getCurrentTextFromState() != newText;
		}
		else {
			return this.props.text != newText;
		}

	}
}