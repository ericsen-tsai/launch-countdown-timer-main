import React, { useEffect, useRef, useState } from "react"

import "./TimeClock.scss"

const TimeClock = ({ unit, val }) => {
  const foregroundFrontRef = useRef()
  const foregroundBackRef = useRef()
  const backgroundTopRef = useRef()
  const backgroundBottomRef = useRef()

  const [isAnimationOver, setIsAnimationOver] = useState(true)

  useEffect(() => {
    setIsAnimationOver(false)
    foregroundFrontRef.current.style.display = "inline-block"
    foregroundBackRef.current.style.display = "inline-block"
  }, [val])

  const handleAnimationEnd = () => {
    setIsAnimationOver(true)
    foregroundFrontRef.current.style.display = "none"
    foregroundBackRef.current.style.display = "none"
  }

  return (
    <div className={`timeclock__counter timeclock__counter--${unit}`}>
      <div className="foreground foreground--front" ref={foregroundFrontRef}>
        <span className="foreground__text">{val}</span>
      </div>
      <div
        onAnimationEnd={handleAnimationEnd}
        className="foreground foreground--back"
        ref={foregroundBackRef}
      >
        <span className="foreground__text">{val + 1}</span>
      </div>

      <div className="background background--top" ref={backgroundTopRef}>
        <span className="background__text">{val}</span>
      </div>
      <div className="background background--bottom" ref={backgroundBottomRef}>
        <span className="background__text">
          {isAnimationOver ? val : val + 1}
        </span>
      </div>
    </div>
  )
}

export default TimeClock
