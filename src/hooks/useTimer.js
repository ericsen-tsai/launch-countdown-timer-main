import { useState, useEffect, useCallback } from "react"

import { endDate } from "../constants"

export const useTimer = () => {
  const [seconds, setSeconds] = useState(0)
  const [minutes, setMinutes] = useState(0)
  const [hours, setHours] = useState(0)
  const [days, setDays] = useState(0)

  useEffect(() => {
    const interval = setInterval(() => {
      let diff = endDate - new Date()

      const allSecs = Math.floor(diff / 1000)
      setSeconds(allSecs % 60)

      const allMins = Math.floor(allSecs / 60)
      setMinutes(allMins % 60)

      const allHours = Math.floor(allMins / 60)
      setHours(allHours % 24)

      const allDays = Math.floor(allHours / 24)
      setDays(allDays)
    }, 1000)
    return () => {
      clearInterval(interval)
    }
  }, [])

  return { seconds, minutes, hours, days }
}
