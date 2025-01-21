# Super Simple Blazor Modal

Super Simple Blazor Modal is a lightweight and easy-to-use modal component for Blazor applications implementing the browsers [dialog api](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/dialog). It allows you to create modals with minimal configuration and effort.

## Features

- Simple and intuitive API
- Lightweight and fast
- Customizable with CSS classes
- Supports .NET 8 and .NET 9

## Installation

To install the package, run the following command:

```sh
dotnet add package SuperSimpleBlazorModal
```

## Usage

Use the SimpleModal component in your Blazor pages or components:
```cs
@using SuperSimpleBlazorModal
@rendermode InteractiveAuto
<h3>ModalTester</h3>

<SimpleModal 
    @ref="ModalRef" 
    Id="MannajaStaModale" 
    ExtraCssClass="modal-reset" 
    OnModalStateChange="ModalStateChanged"
    OpenOnFirstRender="true">
    <h1>Modal Content</h1>
    <p>This is the content of the modal</p>
    <button class="btn btn-secondary" @onclick="CloseModal">Close</button>
</SimpleModal>

<button class="btn btn-primary" @onclick="ShowModal">Show Modal</button>

@code {
    private SimpleModal? ModalRef;

    async Task ShowModal()
    {
        await ModalRef.ShowModal();
    }

    async Task CloseModal()
    {
        await ModalRef.CloseModal();
    }

    void ModalStateChanged(bool isOpen) 
    {
        // do stuff when modal state changes
    }
}

```

## Backdrop customization

If you have assigned an ID to your modal:
```css
#MyCustomModalId::backdrop {
    background-image: linear-gradient(45deg,
            magenta,
            rebeccapurple,
            dodgerblue,
            green);
    opacity: 0.75;
}
```
If not, you can still customize the `::backdrop` pseudo element
```css
::backdrop {
    background-image: linear-gradient(45deg,
            magenta,
            rebeccapurple,
            dodgerblue,
            green);
    opacity: 0.75;
}
```

## Parameters
- `ChildContent` (RenderFragment): The content to be displayed inside the modal.
- `Id` (string): The unique identifier for the modal. Default is a new GUID.
- `ExtraCssClass` (string): Additional CSS classes to apply to the modal.
- `OnModalStateChange` (EventCallback): Callback signaling the state of the modal (true for open, false for close).
- `OpenOnFirstRender` (bool): Set it to true if you desire to open the modal on first render

## Methods

- `ShowModal()`: Opens the modal
- `CloseModal()` Closes the modal