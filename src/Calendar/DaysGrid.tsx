import React from 'react'
import { useCalendar } from './Context'
import CustomDate from './CustomDate'
import { Actions } from './Reducer'

const DaysGrid = (): React.ReactElement => {
  const { currentMonth, dispatch } = useCalendar()
  const generator = currentMonth.firstDayOfMonth().firstDayOfWeek().enumerateDays()
  return (
    <tbody>
      {new Array(currentMonth.countDistinctWeeks()).fill(null).map((_, week) => (
        <tr key={week}>
          {new Array(7).fill(null).map((_2, dayIndex) => (
            <td key={dayIndex}>
              {(() => {
                // needs to be a copy here because of closure
                const day = new CustomDate(generator.next().value)
                return (
                  <button
                    type="button"
                    onClick={() => dispatch({ type: Actions.submit, date: day })}
                    className={`day ${(!day.inMonth(currentMonth)) ? 'last-month' : ''} ${(day.isToday()) ? 'today' : ''}`}>
                    {day.getDate()}
                  </button>
                )
              })()}
            </td>
          ))}
        </tr>
      ))}
    </tbody>
  )
}

export default DaysGrid
