import React, { useEffect, useRef, useState } from "react"

import "./TimeClock.scss"

const TimeClock = ({ unit, val }) => {
  const [originalForegroundVal, setOriginalForegroundVal] = useState(val)
  const [originalBackgroundVal, setOriginalBackgroundVal] = useState(val)

  const foregroundFrontRef = useRef()
  const foregroundBackRef = useRef()

  useEffect(() => {
    foregroundFrontRef.current.style.display = "inline-block"
    foregroundBackRef.current.style.display = "inline-block"
  }, [val])

  const handleAnimationEnd = () => {
    setOriginalBackgroundVal(val)
    foregroundFrontRef.current.style.display = "none"
    foregroundBackRef.current.style.display = "none"
    setOriginalForegroundVal(val)
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

export default TimeClock
