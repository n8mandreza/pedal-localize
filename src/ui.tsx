import { render, useWindowResize } from '@create-figma-plugin/ui'
import { emit } from '@create-figma-plugin/utilities'
import { ResizeWindowHandler } from './types'
import { h } from 'preact'
import { useState } from 'preact/hooks'
import DateLocalizer from './components/DateLocalizer'
import NumberLocalizer from './components/NumberLocalizer'
import TabItem from './components/TabItem'
import '!./output.css'
import TimeLocalizer from './components/TimeLocalizer'
import CurrencyLocalizer from './components/CurrencyLocalizer'
import IconButton from './components/IconButton'
import { BookOpenText } from 'lucide-preact'

function Plugin () {
  const [mode, setMode] = useState('date')

  function onWindowResize(windowSize: { width: number; height: number }) {
    emit<ResizeWindowHandler>('RESIZE_WINDOW', windowSize)
  }
  useWindowResize(onWindowResize, {
    maxHeight: 640,
    maxWidth: 440,
    minHeight: 420,
    minWidth: 320,
    resizeBehaviorOnDoubleClick: 'minimize'
  })

  let currentView;
  if (mode === 'date') {
    currentView = <DateLocalizer/>
  } else if (mode === 'time') {
    currentView = <TimeLocalizer/>
  } else if (mode === 'currency') {
    currentView = <CurrencyLocalizer/>
  } else if (mode === 'number') {
    currentView = <NumberLocalizer/>
  }

  return (
    <div class="flex flex-col text-01 screen-02 w-full h-full">
      <div class="flex border-b stroke-01 px-2 fixed top-0 left-0 right-0 surface-sticky">
        <TabItem
          label="Date"
          selected={mode === 'date' ? true : false}
          onClick={() => setMode('date')}
        />

        <TabItem
          label="Time"
          selected={mode === 'time' ? true : false}
          onClick={() => setMode('time')}
        />

        <TabItem
          label="Currency"
          selected={mode === 'currency' ? true : false}
          onClick={() => setMode('currency')}
        />

        <TabItem
          label="Number"
          selected={mode === 'number' ? true : false}
          onClick={() => setMode('number')}
        />

        <div class="ml-auto flex items-center justify-center">
          <IconButton onClick={() => window.open('https://zeroheight.com/69dd510dd/v/latest/p/456d8b-localization', '_blank')}>
            <BookOpenText size={16} strokeWidth={1.25} />
          </IconButton>
        </div>
      </div>

      <div class="screen-02 mt-11">
        {currentView}
      </div>
    </div>
  )
}

export default render(Plugin)
