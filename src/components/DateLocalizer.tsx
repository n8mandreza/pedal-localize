import { emit } from '@create-figma-plugin/utilities'
import { JSX, h } from 'preact'
import { useState } from 'preact/hooks'
import DateInput from './DateInput'
import Select from './Select'
import Button from './Button'
import Preview from './Preview'

export default function DateLocalizer () {
  const today = new Date()
  const [date, setDate] = useState<Date>(today)
  const [locale, setLocale] = useState<string>('en-US')
  const [dateStyle, setDateStyle] = useState<Intl.DateTimeFormatOptions['dateStyle']>('short')
  const options: Intl.DateTimeFormatOptions = {
    dateStyle: dateStyle,
    timeZone: 'UTC'
  }
  const formattedDate = new Intl.DateTimeFormat(locale, options).format(date);

  const locales = ['en-US', 'en-CA', 'en-GB', 'en-AU', 'fr-FR', 'fr-CA']
  const dateStyles = ['short', 'medium', 'long', 'full']

  function handleDateChange(event: JSX.TargetedEvent<HTMLInputElement>) {
    const newDate = event.currentTarget.value // returns as string
    const newDateAsDate = new Date(newDate) // convert back to Date

    setDate(newDateAsDate)
  }

  function handleLocaleChange(event: JSX.TargetedEvent<HTMLSelectElement>) {
    const newValue = event.currentTarget.value

    setLocale(newValue);
  }

  function handleDateStyleChange(event: JSX.TargetedEvent<HTMLSelectElement>) {
    const newValue = event.currentTarget.value as Intl.DateTimeFormatOptions['dateStyle']

    setDateStyle(newValue);
  }

  function submitDate() {
    emit('CREATE-DATE', formattedDate)
  }

  return (
    <div class="flex flex-col gap-4 p-4">
      <div class="flex flex-col gap-1">
        <h1 class="text-lg font-bold">Localize dates</h1>

        <p class="text-sm text-02">"Local eyes localize local lies" – Confucius</p>
      </div>

      <Preview value={formattedDate}/>

      <div class="flex gap-3 flex-col">
        <DateInput today={today} onChange={handleDateChange}/>

        <div class="flex gap-3">
          <Select label='Locale' options={locales} selection={locale} onChange={handleLocaleChange}/>

          <Select label='Date style' options={dateStyles} selection={dateStyle} onChange={handleDateStyleChange}/>
        </div>

        <div class="mt-2">
          <Button label="Apply" fullWidth onClick={submitDate}/>
        </div>
      </div>
    </div>
  )
}
