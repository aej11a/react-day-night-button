# react-day-night-button

React implementation of this day-night toggle
https://codepen.io/bnthor/pen/WQBNxO/

## Usage

`yarn add react-day-night-button`

```jsx
import React from 'react'
import DayNightToggle from 'react-day-night-button'

const App = () => (
    <DayNightToggle 
        onChange={booleanValue => console.log(booleanValue)} 
        defaultsNight={true}
        className={"additional-class"}
    />
)
```

The argument passed to the `onChange` prop is a boolean, `true` is PM and `false` is AM.

###Future Releases
In the future, the text will be controllable by props.