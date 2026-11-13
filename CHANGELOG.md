# Changelog

All notable changes to this project will be documented in this file.

The format is based on [Keep a Changelog](https://keepachangelog.com/en/1.0.0/), and this project adheres to [Semantic Versioning](https://semver.org/spec/v2.0.0.html).

## [2.0.0] - 2026-11-13
- **BREAKING** Dropped support for .NET 8 and .NET 9; the library now targets .NET 10 and .NET 11 only
- Added support for .NET 11 (`Microsoft.AspNetCore.Components.Web` 11.0.*)
- Fixed all new .NET 11 `BL0016` JS-interop analyzer warnings — module import and modal open/close calls are guarded (`JSDisconnectedException`/`JSException`), and open/close no longer report state change if the interop call failed
- Sample app ported to .NET 11 and migrated from deprecated `Microsoft.AspNetCore.Components.WebAssembly.DevServer` to `Microsoft.AspNetCore.Components.Gateway`

## [1.5.1] - 2026-08-12
- Documented the `BackdropClose` parameter in the README, including its default value and backdrop-click behavior

## [1.5.0] - 2026-08-12
- Added `BackdropClose` parameter; when true the modal renders `closedby="any"`, and when false the `closedby` attribute is omitted
- Expanded the Bootstrap sample home page to demonstrate both backdrop behaviors and all SimpleModal configuration/method usage

## [1.4.0] - 2026-05-25
- Replaced `eval()` JS interop with isolated JS module via `IJSObjectReference`
- Added `ElementReference` for direct dialog element access (no `getElementById`)
- Added `IAsyncDisposable` for proper JS module cleanup
- Added `JSDisconnectedException` handling for server-side Blazor resilience
- Renamed private field `IsOpen` to `_isOpen`

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