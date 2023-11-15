import { JSX, h } from 'preact'

interface TimeInputProps {
  value: string
  onChange: (event: JSX.TargetedEvent<HTMLInputElement, Event>) => void
}

export default function TimeInput({onChange}: TimeInputProps) {
  return (
    <div class="flex flex-col gap-1">
      <label for="time" class="text-xs font-medium">Time</label>

      <input type="time" id="time" name="time" defaultValue="10:00" onChange={onChange} class="px-2 py-1 text-base rounded-lg surface-01"/>
    </div>
  )
}