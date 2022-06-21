import React, { useState, useEffect } from "react"

import { useTimer } from "../hooks/useTimer"

import TimeClock from "./TimeClock"
import "./TimeClockContainer.scss"

const units = ["days", "hours", "minutes", "seconds"]

const TimeClockContainer = () => {
  const time = useTimer()

  return (
    <div className="timeclock">
      <h3 className="timeclock__header">We're launching soon</h3>
      <div className="timeclock__counter-box">
        {units.map((unit) => (
          <TimeClock unit={unit} key={unit} val={time[unit]} />
        ))}
      </div>
      <div className="timeclock__unit-box">
        {units.map((unit) => (
          <h5 className="timeclock__unit" key={`${unit}--name`}>
            {unit}
          </h5>
        ))}
      </div>
    </div>
  )
}

export default TimeClockContainer
