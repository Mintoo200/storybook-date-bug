import React, { useReducer } from 'react'
import Context from './Context'
import CustomDate from './CustomDate'
import DaysGrid from './DaysGrid'
import Months from './Months'
import Reducer from './Reducer'

import './style.css'

export type Props = {
  onSubmit: (date: CustomDate) => void
}

const Table = (): React.ReactElement => (
  <table className="calendar">
    <Months />
    <thead>
      <tr>
        {['M', 'T', 'W', 'T', 'F', 'S', 'S'].map((day, index) => (
          <th key={`${day}${index}`}>{day}</th>
        ))}
      </tr>
    </thead>
    <DaysGrid />
  </table>
)

const Calendar = ({ onSubmit }: Props): React.ReactElement => {
  const [state, dispatch] = useReducer(Reducer, {
    currentMonth: new CustomDate(Date.now()),
    onSubmit,
    dispatch: () => { throw new Error() },
  })
  return (
    <Context.Provider value={{
      ...state,
      dispatch,
    }}>
      <Table />
    </Context.Provider>
  )
}

export default Calendar
