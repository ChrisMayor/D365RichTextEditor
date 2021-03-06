<img src="https://dev.azure.com/ich0166/D365RichTextControl/_apis/build/status/ChrisMayor.D365RichTextEditor?branchName=master"></img>
# D365RichTextEditor
Dynamics 365 Rich text editor for Unified Interface / Based on PowerApps component framework, React and quill

Please note: since October, Microsoft rolled out "Microsoft Dynamics 365 – Release Wave 2 2020" including the brand new "Rich Text Editer Control". I will keep this Repository public for maintainance reasons, but you should consider using the new control included in D365.

## Description

Rich text editor control for Dynamics 365 Unified Interface and Microsoft Power Apps.

This control is based on React 16.x, TypeScript, Quill-react and Power Apps Component Framework 1.2.  

The rich text editor can be used as multi line text control in Dynamics 365 Unified Interface (not compatible with classic ui!)

## Highlights

* React 16.x
* TypeScript
* Quill-react
* Power Apps Component Framework

## Minimum requirements:

* Tested on Dynamics 365 9.1

## Releases for download as managed solution (V2.6)

[link to solution](https://github.com/ChrisMayor/D365RichTextEditor/blob/master/solution/D365RichTextEditorSolution.zip)

## Screenshots

### Dynamics 365 Unified Interface Screenshot
![UI Screenshot](https://github.com/ChrisMayor/D365RichTextEditor/blob/master/Screenshots/6.JPG)

## Installation of Solution in Dynamics 365 and setup

* Install managed solution

![UI Screenshot](https://github.com/ChrisMayor/D365RichTextEditor/blob/master/Screenshots/1.JPG)

* Publish customizing

![UI Screenshot](https://github.com/ChrisMayor/D365RichTextEditor/blob/master/Screenshots/2.JPG)

* Add multi line text field to entity

![UI Screenshot](https://github.com/ChrisMayor/D365RichTextEditor/blob/master/Screenshots/3.JPG)

* Change control of multi line text field to D365RichTextControl

![UI Screenshot](https://github.com/ChrisMayor/D365RichTextEditor/blob/master/Screenshots/4.JPG)

![UI Screenshot](https://github.com/ChrisMayor/D365RichTextEditor/blob/master/Screenshots/5.JPG)

![UI Screenshot](https://github.com/ChrisMayor/D365RichTextEditor/blob/master/Screenshots/controlsettings.jpg)

* Control settings: you may leave height, min-height, max-height empty, then the control will default to a 200px fixed size

* Open form in Unified Interface

## Build

To build

* Verify required toolset (Visual Studio or Visual Studio Build Tools / Power Apps Component Framework CLI / .NET 4.6.2 SDK / MS BUILD Tools min. v15.9 (Visual Studio 2017+) / Nodejs)
* Open command prompt in project root
* npm install
* npm run build
* cd D365RichtextEditor
* md D365RichTextEditorSolution
* cd D365RichTextEditorSolution
* pac solution init --publisher-name chrisMayor --publisher-prefix cmey
* pac solution add-reference --path ..
* "C:\Program Files (x86)\Microsoft Visual Studio\2019\BuildTools\MSBuild\Current\Bin\msbuild" /t:build /restore

## Changelog

### Update V2.6

* Fixed read only flag / disabling of form

### Update V2.5

* Support of SetValue() in Dynamics https://github.com/ChrisMayor/D365RichTextEditor/issues/6 (async changes are currently really bad handled in the pcf framework, so several workarounds were necessary)

### Update V2.4

* Empty strings - in any length and also if they are mixed with html tags - are now handled as null (issue https://github.com/ChrisMayor/D365RichTextEditor/issues/5)

### Update V2.0 -> V2.2
* Update your V2.0 managed solution with the default settings

Features added:
* Size adjustable, by adding parameters height, max-height, min-height in control

![UI Screenshot](https://github.com/ChrisMayor/D365RichTextEditor/blob/master/Screenshots/controlsettings.jpg)

you may leave height, min-height, max-height empty, then the control will default to a 200px fixed size

Bugs fixed:
* Empty control doesnt return some html string instead of NULL (https://github.com/ChrisMayor/D365RichTextEditor/issues/5)
* Max length of text field isn't respected in control: Now the text is limited to max length (max length = plain text + HTML)
* Control doesnt support disabling (https://github.com/ChrisMayor/D365RichTextEditor/issues/4)
* Control doesnt behave like other controls in Dynamics (auto groth, size not adjustable) (https://github.com/ChrisMayor/D365RichTextEditor/issues/4)

### Update instructions V1.0 -> V2.0

* From V2.0 the solution is now managed to avoid issues, that further version updates are not reflected in Dynamics
* To update from V1.0 to V2.0 there are some manual steps in Dynamics necessary, because the V1.0 is unmanaged:

1) Go to solutions and delete the existing D365RichTextEditor solution
2) Go to your customizings and remove any reference to the existing D365RichTextEditor control (switch back to the default text editor on all fields where you use this custom control)
3) Go to the default solution and open the customizings
4) Go to Components/Custom Controls
5) Delete the unamanged D365Richtexteditor Control
6) Publish all customizations
7) Install the current Solution Package zip

## 3rd party licenses

* The quill license and the quill-react license are preserved in git root

## Disclaimer / Impressum

* Published under the MIT license
* Use at your own risk

<a href="https://github.com/ChrisMayor/Impressum">Impressum / Imprint in German language to comply with German tele-media regulations.
