import React from 'react'
import { useCalendar } from './Context'
import { Actions } from './Reducer'

const Months = (): React.ReactElement => {
  const { currentMonth, dispatch } = useCalendar()
  return (
    <caption>
      <div>
        <button
          type="button"
          onClick={() => dispatch({ type: Actions.previousMonth })}>
          {'<'}
        </button>
        <div>{`${currentMonth.toLocaleString('default', { month: 'long' })} ${currentMonth.getFullYear()}`}</div>
        <button
          type="button"
          onClick={() => dispatch({ type: Actions.nextMonth })}>
          {'>'}
        </button>
      </div>
    </caption>
  )
}

export default Months
