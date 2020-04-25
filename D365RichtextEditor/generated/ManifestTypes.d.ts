/*
*This is auto generated from the ControlManifest.Input.xml file
*/

// Define IInputs and IOutputs Type. They should match with ControlManifest.
export interface IInputs {
    text: ComponentFramework.PropertyTypes.StringProperty;
    height: ComponentFramework.PropertyTypes.WholeNumberProperty;
    minheight: ComponentFramework.PropertyTypes.WholeNumberProperty;
    maxheight: ComponentFramework.PropertyTypes.WholeNumberProperty;
}
export interface IOutputs {
    text?: string;
    height?: number;
    minheight?: number;
    maxheight?: number;
}
