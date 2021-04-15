import React, { useContext } from 'react'
import CustomDate from './CustomDate'
import { Action } from './Reducer'

export type ContextType = {
  currentMonth: CustomDate,
  dispatch: React.Dispatch<Action>,
  onSubmit: (date: CustomDate) => void,
}

const Context = React.createContext<ContextType | undefined>(undefined)

export default Context

export function useCalendar(): ContextType {
  const context = useContext(Context)

  if (context == null) {
    throw new Error()
  }

  return context
}
