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

1) Add the following line to your _Imports.razor file:
```cs
@using SuperSimpleBlazorModal
```
2) Use the SimpleModal component in your Blazor pages or components:
```cs
<SimpleModal Id="myModal" ExtraCssClass="custom-modal">
    <h3>Modal Title</h3>
    <p>This is the content of the modal.</p>
    <button @onclick="CloseModal">Close</button>
</SimpleModal>

<button @onclick="ShowModal">Open Modal</button>

@code {
    private SimpleModal? modal;

    private async Task ShowModal()
    {
        if (modal is not null)
        {
            await modal.ShowModal();
        }
    }

    private async Task CloseModal()
    {
        if (modal is not null)
        {
            await modal.CloseModal();
        }
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

## Methods

- `ShowModal()`: Opens the modal
- `CloseModal()` Closes the modal