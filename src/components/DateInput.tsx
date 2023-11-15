import { JSX, h } from 'preact'

interface DateInputProps {
  today: Date
  onChange: (event: JSX.TargetedEvent<HTMLInputElement, Event>) => void
}

export default function DateInput({today, onChange}: DateInputProps) {
  return (
    <div class="flex flex-col gap-1">
      <label for="date" class="text-xs font-medium">Date</label>

      <input type="date" id="date" name="date" defaultValue={today.toISOString().split('T')[0]} onChange={onChange} class="px-2 py-1 text-base rounded-md surface-01"/>
    </div>
  )
}