# React Native Screen Layouts

This is a very rudimentary, initial implementation of these screen templates. Please create issues or reply to me where ever.

Each layout component has a very verbose, long, detailed name. The point is so you know exactly what it's used for.

These components can just wrap your main screen components each, and handle adding a safe-area for you. Your App should still have a SafeAreaProvider at the top level somewhere.

## NoNav_NoScroll_KeyboardAvoid

This component is good for maybe a Login screen. It's outside your apps main Nav, and there is nothing to Scroll, but the view will avoid keyboards for inputs.

Has the ability to extend the background color of your app outside the safe-area, differently on the top and bottom. These can be optionally be passed in as props: `topColor` or `bottomColor`.

## NoScroll_YesNav_KeyboardAvoid

This one accounts for top header/bottom-nav in react navigation. Uses keyboard avoid. Has no Scroll-View.

## YesScroll_YesNav_KeyboardAvoid

This one accounts for top header/bottom-nav in react navigation. It also accounts for a keyboard-avoiding scroll-view.

## YesScroll_YesNav_BottmButtons_KeyboardAvoid

This one accounts for top header/bottom-nav in react navigation. It also accounts for a keyboard-avoiding scroll-view, but expects button(s) to be fixed at the bottom of the scroll-view. Below it specifically.

This component, in addition to children, take a `bottomFixed` prop. This is just the component you want fixed at the bottom as you scroll.
