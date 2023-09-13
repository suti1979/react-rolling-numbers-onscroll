# React rolling numbers onscroll (NPM package)

A React component for animate (roll) numbers from zero (or the "from" number) to the actual number.

Animation starts, when the element is in the view.

You can add an "easeOut" prop for a smooth ending.

### Install:

```console
npm install react-rolling-numbers-onscroll
or
yarn add react-rolling-numbers-onscroll
```

### Import:

```js
import RollingNumbers from 'react-rolling-numbers-onscroll'
```

### Usage:

```jsx
<RollingNumbers to={42} />
<RollingNumbers to={42} from={-42} />
<RollingNumbers to={42} from={-42} millis={4000} />
<RollingNumbers to={-42} from={42} millis={4000} easeOut />
```

### Props (all optional):

```console
- to (or num): Integer to roll up from 0
- from: Integer roll to "num"
- millis: milliseconds for animation effect. By default it is 500.
- easeOut: ease out the end of the animation
```

Feel free to ask or contribute.

### CHANGELOG:

- 1.0.0 - Base version
- 1.1.0 - Added "from" prop.
  - 1.1.1 - Update readme
- 1.2.0 - Added "ease Out" function. Added "to" prop instead of "num" prop. The "num" prop still works, so it's not a breaking change. You can use either of them, it just makes more sense to use "to" prop.
  - 1.2.1 - Changed import for mjs.
