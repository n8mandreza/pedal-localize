import { emit } from '@create-figma-plugin/utilities'
import { JSX, h } from 'preact'
import { useState } from 'preact/hooks'
import Select from './Select'
import Button from './Button'
import NumberInput from './NumberInput'
import Preview from './Preview'

export default function CurrencyLocalizer () {
  const [number, setNumber] = useState<number>(123456.789)
  const [locale, setLocale] = useState<string>('en-US')
  const [currency, setCurrency] = useState<string>('USD')
  const options: Intl.NumberFormatOptions = {
    style: 'currency',
    currency: currency
  }
  const formattedNumber = new Intl.NumberFormat(locale, options).format(number);

  const locales = ['en-US', 'en-CA', 'en-GB', 'en-AU', 'fr-FR', 'fr-CA']
  const currencies = ['USD', 'CAD', 'GBP', 'EUR', 'AUD']

  function handleNumberChange(event: JSX.TargetedEvent<HTMLInputElement>) {
    const newNumber = event.currentTarget.valueAsNumber // returns as string

    setNumber(newNumber)
  }

  function handleLocaleChange(event: JSX.TargetedEvent<HTMLSelectElement>) {
    const newValue = event.currentTarget.value

    setLocale(newValue);
  }

  function handleCurrencyChange(event: JSX.TargetedEvent<HTMLSelectElement>) {
    const newCurrency = event.currentTarget.value as Intl.NumberFormatOptions['currency']

    setCurrency(newCurrency || '');
  }

  function submitNumber () {
    emit('CREATE-NUMBER', formattedNumber)
  }

  return (
    <div class="flex flex-col gap-4 p-4">
      <div class="flex flex-col gap-1">
        <h1 class="text-lg font-bold">Localize currencies</h1>

        <p class="text-sm text-02">"Local eyes localize local lies" – Confucius</p>
      </div>

      <Preview value={formattedNumber}/>

      <div class="flex gap-3 flex-col">
        <NumberInput label="Number" defaultValue={number.toString()} onChange={handleNumberChange}/>

        <div class="flex gap-3">
          <Select label='Locale' options={locales} selection={locale} onChange={handleLocaleChange}/>

          <Select label='Currency' options={currencies} selection={currency} onChange={handleCurrencyChange}/>
        </div>

        <div class="mt-2">
          <Button label="Apply" fullWidth onClick={submitNumber}/>
        </div>
      </div>
    </div>
  )
}
