# Launch Countdown Timer

## Table of contents

- [Launch Countdown Timer](#launch-countdown-timer)
  - [Table of contents](#table-of-contents)
  - [Overview](#overview)
    - [Screenshot](#screenshot)
    - [Links](#links)
  - [Process](#process)
    - [Built with](#built-with)
    - [Note](#note)
      - [Countdown Timer Card Flipping Animation](#countdown-timer-card-flipping-animation)
  - [Author](#author)
  - [Acknowledgement](#acknowledgement)

## Overview

### Screenshot

![Preview](./design/desktop-preview.jpg)

### Links

- [Netlify](https://62b1cafcbdd5b60008b8f8a8--graceful-starburst-9bf6b1.netlify.app/)

## Process

### Built with

- Sass
- React
- Vite

### Note

#### Countdown Timer Card Flipping Animation

> Seperate time clock into four parts.
> Each parts represent background top, bottom and foreground flipping front and back,respectively.

```jsx
// ./src/components/TimeClock.jsx

/*
Four steps to finish flipping card
1. As time changes, set the value in foregroud-back and background-top corresponding to time value.
2. Set foreground to "display: inline-block;" to start the animation.
3. When animation ends, set the value in foregroud-front and background-bottom corresponding to time value.
4. Set foreground to "display: none;" to hide cards.
*/


const TimeClock = ({ unit, val }) => {

  // useState to preserve previous value
  const [originalForegroundVal, setOriginalForegroundVal] = useState(val)
  const [originalBackgroundVal, setOriginalBackgroundVal] = useState(val)

  // useRef to access foreground cards
  const foregroundFrontRef = useRef()
  const foregroundBackRef = useRef()

  useEffect(() => {
    foregroundFrontRef.current.style.display = "inline-block"
    foregroundBackRef.current.style.display = "inline-block"
  }, [val])

  const handleAnimationEnd = async () => {
    setOriginalBackgroundVal(val)
    // use timeout to prevent foregroud card disappear before background value changing
    setTimeout(() => {
      foregroundFrontRef.current.style.display = "none"
      foregroundBackRef.current.style.display = "none"
      setOriginalForegroundVal(val)
    }, 5)
  }

  return (
    <div className={`timeclock__counter timeclock__counter--${unit}`}>
      <div className="foreground foreground--front" ref={foregroundFrontRef}>
        <span className="foreground__text">
          {originalForegroundVal >= 10
            ? originalForegroundVal
            : `0${originalForegroundVal}`}
        </span>
      </div>
      <div
        onAnimationEnd={handleAnimationEnd}
        className="foreground foreground--back"
        ref={foregroundBackRef}
      >
        <span className="foreground__text">{val >= 10 ? val : `0${val}`}</span>
      </div>

      <div className="background background--top">
        <span className="background__text">{val >= 10 ? val : `0${val}`}</span>
      </div>
      <div className="background background--bottom">
        <span className="background__text">
          {originalBackgroundVal >= 10
            ? originalBackgroundVal
            : `0${originalBackgroundVal}`}
        </span>
      </div>
    </div>
  )
}
```

## Author

- GitHub - [Ericsen Tsai](https://github.com/ericsen-tsai)

## Acknowledgement

- 💡 Jörg Jäckel
