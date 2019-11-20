<img src="https://dev.azure.com/ich0166/D365SwotMatrix/_apis/build/status/ChrisMayor.D365SwotMatrix?branchName=master"></img>
# D365RichTextEditor 0.1
Dynamics 365 Rich text editor for Unified Interface / Based on PowerApps component framework, React and quill

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

## Releases for download as managed solution

[link to solution](https://github.com/ChrisMayor/D365RichTextEditor/blob/master/solution/D365RichTextEditorSolution.zip)

## Screenshots

### Dynamics 365 Unified Interface Screenshot
![UI Screenshot](https://github.com/ChrisMayor/D365RichTextEditor/blob/master/Screenshots/1-d365richtext.JPG)

## Installation of Solution in Dynamics 365 and setup

... will be inserted soon ...

## Build

To build

* Verify required toolset (Visual Studio or Visual Studio Build Tools / Power Apps Component Framework CLI / .NET 4.6.2 SDK / Nodejs)
* Open command prompt in project root
* npm install
* md D365RichTextEditorSolution
* cd D365RichTextEditorSolution
* pac solution init --publisher-name chrisMayor --publisher-prefix cmey
* pac solution add-reference --path ..
* msbuild /t:build /restore

## To do's

* Screenshots of solution installation and usage in Dynamics 365 9.1
* Project AzureDevops integration
* Testing and release of V1.0

## 3rd party licenses

* The quill license and the quill-react license are preserved in git root

## Disclaimer / Impressum

* Published under the MIT license
* Use at your own risk

<a href="https://github.com/ChrisMayor/Impressum">Impressum / Imprint in German language to comply with German tele-media regulations.
