# Promisify-react-modals

This Sandbox explores the idea of wrapping React Modals in a Promise and allow it to be called from anywhere.

## See it in action

You can start the upsell flow by clicking the "Upgrade to business" button in the top-right corner.

## How it works

1. We take a normal React modal (see './modal/components.\*.tsx' files)
1. Wrap that modal in the createModal curried function (see './modal/globalModals.ts')
1. These wrapped functions are then callable and you can pass the props into them (see './checkout.tsx' for example)
1. The returned promise will resolve when you fire the onSubmit prop in the component and reject when onCancel is fired.

## Caveats

1. When firing the curried function outside of React(JSX) you might not be able to pass JSX children. I don't know if that is really an issue though.
1. If you fire a modal from within another modal you will have to manually set the currently open modal's isOpen = false to avoid a darker overlay. You can see this happen in the demo because we trigger chekout modals inside of the Upsell one.
