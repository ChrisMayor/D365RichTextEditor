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


## Screenshots


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

* Testing and release of V1.0

## Disclaimer / Impressum

* Published under the MIT license
* Use at your own risk

<a href="https://github.com/ChrisMayor/Impressum">Impressum / Imprint in German language to comply with German tele-media regulations.