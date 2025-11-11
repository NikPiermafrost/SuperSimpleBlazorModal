# Changelog

All notable changes to this project will be documented in this file.

The format is based on [Keep a Changelog](https://keepachangelog.com/en/1.0.0/), and this project adheres to [Semantic Versioning](https://semver.org/spec/v2.0.0.html).

## [1.3.0] - 2025-11-11
- Added support to net10.0

## [1.2.0]- 2025-08-23
- Updated package reference to use any version of `Microsoft.AspNetCore.Components.Web` for the target framework reference

## [1.1.4]- 2025-01-27
- Github pages now working

## [1.1.3]- 2025-01-27
- Preparing deploy to github pages

## [1.1.2]- 2025-01-27
- Fixed `OnModalStateChange` returning always `true`

## [1.1.1] - 2025-01-21
- Fixed typo on `OpenOnFirstRender`

## [1.1.0] - 2025-01-21
- Removed `OnModalReady` callback
- Removed Js scoped module
- Added `OpenOnFirstRender` property. It triggers OnAfterRenderAsync and opens the modal if set to true
- Added `OnModalStateChange` EventCallback to signal the current state of the modal to a parent component

## [1.0.1] - 2025-01-20

### Added
- Added changelog
- Fixed an issue where if no value is provided for parameter `OnModalReady` an object reference is not set to an istance of an object was thrown

## [Unreleased]

### Added
- Initial release of Super Simple Blazor Modal.
- Support for .NET 8 and .NET 9.
- Simple and intuitive API for creating modals.
- Customizable with CSS classes.
- JavaScript interop for showing and closing modals.