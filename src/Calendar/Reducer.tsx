import { Reducer as ReducerType } from 'react'
import { ContextType } from './Context'
import CustomDate from './CustomDate'

export enum Actions {
  nextMonth,
  previousMonth,
  setMonth,
  submit,
}

export type Action = {
  type: Actions.setMonth,
  month: CustomDate,
} | {
  type: Actions.submit,
  date: CustomDate,
} | {
  type: Actions.nextMonth | Actions.previousMonth,
  date?: never,
  month?: never,
}

const Reducer: ReducerType<ContextType, Action> = (state, action) => {
  switch (action.type) {
    case Actions.nextMonth: {
      return {
        ...state,
        currentMonth: state.currentMonth.addMonth(),
      }
    }
    case Actions.previousMonth: {
      return {
        ...state,
        currentMonth: state.currentMonth.subtractMonth(),
      }
    }
    case Actions.setMonth:
      // FIXME:
      return {
        ...state,
      }
    case Actions.submit:
      state.onSubmit(action.date)
      return state
    default:
      throw new Error()
  }
}

export default Reducer
