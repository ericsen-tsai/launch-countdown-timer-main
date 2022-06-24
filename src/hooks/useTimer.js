import { useState, useEffect, useCallback } from "react"

import { END_DATE } from "../constants"

export const useTimer = () => {
  const [seconds, setSeconds] = useState(0)
  const [minutes, setMinutes] = useState(0)
  const [hours, setHours] = useState(0)
  const [days, setDays] = useState(0)

  const setCurrentTime = useCallback(() => {
    let totalDiffMillisecs = END_DATE - new Date()

    const totalDiffSecs = Math.floor(totalDiffMillisecs / 1000)
    const totalDiffMins = Math.floor(totalDiffSecs / 60)
    const totalDiffHours = Math.floor(totalDiffMins / 60)
    const totalDiffDays = Math.floor(totalDiffHours / 24)

    setSeconds(totalDiffSecs % 60)
    setMinutes(totalDiffMins % 60)
    setHours(totalDiffHours % 24)
    setDays(totalDiffDays)
  }, [seconds, minutes, hours, days])

  useEffect(() => {
    const interval = setInterval(() => setCurrentTime(), 1000)

    return () => clearInterval(interval)
  }, [setCurrentTime])

  return { seconds, minutes, hours, days }
}
