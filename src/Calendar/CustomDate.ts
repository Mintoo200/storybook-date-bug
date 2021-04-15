export default class CustomDate extends Date {
  // override
  getDay(): number {
    // shift Sunday from first to last day
    return ((super.getDay() + 6) % 7)
  }

  diffMonth(date: Date): number {
    return (
      (this.getFullYear() - date.getFullYear()) * 12
      + (this.getMonth() - date.getMonth())
    )
  }

  addMonth(): CustomDate {
    const result = new CustomDate(this)
    result.setMonth(result.getMonth() + 1)
    if (result.diffMonth(this) !== 1) {
      result.setDate(0)
    }
    return result
  }

  subtractMonth(): CustomDate {
    const result = new CustomDate(this)
    result.setMonth(result.getMonth() - 1)
    if (result.diffMonth(this) !== -1) {
      result.setDate(0)
    }
    return result
  }

  firstDayOfMonth(): CustomDate {
    const result = new CustomDate(this)
    result.setDate(1)
    return result
  }

  weekInSingleMonth(): boolean {
    const day = this.getDay() + 1
    return this.getDate() >= day
  }

  countDistinctWeeks(): number {
    let count = 0
    const firstDay = this.firstDayOfMonth()
    while (firstDay.diffMonth(this) === 0
      || !firstDay.weekInSingleMonth()) {
      count += 1
      firstDay.setDate(firstDay.getDate() + 7)
    }
    return count
  }

  * enumerateDays(): Generator<CustomDate> {
    const currentDate = new CustomDate(this)
    while (true) {
      yield currentDate
      currentDate.setDate(currentDate.getDate() + 1)
    }
  }

  firstDayOfWeek(): CustomDate {
    const result = new CustomDate(this)
    result.setDate(result.getDate() - this.getDay())
    return result
  }

  isToday(): boolean {
    const copy = new CustomDate(this)
    copy.setHours(0, 0, 0, 0)
    return copy.valueOf() === new CustomDate(Date.now()).setHours(0, 0, 0, 0).valueOf()
  }

  inMonth(month: Date): boolean {
    return (
      this.getMonth() === month.getMonth()
      && this.getFullYear() === month.getFullYear()
    )
  }
}
