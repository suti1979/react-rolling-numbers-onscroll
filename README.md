# React rolling numbers onscroll

A React component for animate (roll) numbers from zero (or the "from" number) to the actual number.
Starts, when the element is in the view.

## Install:

- `npm i react-rolling-numbers-onscroll`
- `yarn add react-rolling-numbers-onscroll`

## Import:

- `import RollingNumbers from "react-rolling-numbers-onscroll"`

## Usage:

`<RollingNumbers num={42} />`

`<RollingNumbers num={42} from={-42} />`

`<RollingNumbers num={42} from={-42} millis={1000}/>`

- num: Integer to roll up from 0
- from (optional): Integer to roll up to "num"
- millis (optional): milliseconds for animation effect. By default it is 500.

The animation starts, when the element is in the view.

That's it for now.

Feel free to ask or contribute. ;)

CHANGELOG:

- 1.1.0 - Added "from" prop.
