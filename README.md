<img src="https://dev.azure.com/ich0166/D365RichTextControl/_apis/build/status/ChrisMayor.D365RichTextEditor?branchName=master"></img>
# D365RichTextEditor
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

* Install managed solution

![UI Screenshot](https://github.com/ChrisMayor/D365RichTextEditor/blob/master/Screenshots/1.JPG)

* Publish customizing

![UI Screenshot](https://github.com/ChrisMayor/D365RichTextEditor/blob/master/Screenshots/2.JPG)

* Add multi line text field to entity

![UI Screenshot](https://github.com/ChrisMayor/D365RichTextEditor/blob/master/Screenshots/3.JPG)

* Change control of multi line text field to D365RichTextControl

![UI Screenshot](https://github.com/ChrisMayor/D365RichTextEditor/blob/master/Screenshots/4.JPG)

![UI Screenshot](https://github.com/ChrisMayor/D365RichTextEditor/blob/master/Screenshots/5.JPG)

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

## To do's
* Testing and release of V1.0

## 3rd party licenses

* The quill license and the quill-react license are preserved in git root

## Disclaimer / Impressum

* Published under the MIT license
* Use at your own risk

<a href="https://github.com/ChrisMayor/Impressum">Impressum / Imprint in German language to comply with German tele-media regulations.
