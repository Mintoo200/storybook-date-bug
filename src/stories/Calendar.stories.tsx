import React from 'react'
import { Story } from '@storybook/react'
import Calendar, { Props as CalendarProps } from '../Calendar/Calendar'
import CustomDate from '../Calendar/CustomDate'

export default {
  title: 'Calendar',
  component: Calendar,
}

const Template: Story<CalendarProps> = (args) => <Calendar {...args} />

export const Default = Template.bind({})
Default.args = {
  /* eslint-disable-next-line no-alert */
  onSubmit: (date: CustomDate) => alert(date),
}
