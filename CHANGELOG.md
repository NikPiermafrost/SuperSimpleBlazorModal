# Changelog

All notable changes to this project will be documented in this file.

The format is based on [Keep a Changelog](https://keepachangelog.com/en/1.0.0/), and this project adheres to [Semantic Versioning](https://semver.org/spec/v2.0.0.html).

## [1.1.1] - 2026-01-21
- Fixed typo on `OpenOnFirstRender`

## [1.1.0] - 2026-01-21
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