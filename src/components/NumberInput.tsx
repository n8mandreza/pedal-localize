import { JSX, h } from "preact"

interface NumberInputProps {
  label: string
  defaultValue: string
  onChange: (event: JSX.TargetedEvent<HTMLInputElement>) => void
}

export default function NumberInput({label, defaultValue, onChange}: NumberInputProps) {
  return (
    <div class="flex flex-col gap-1">
      <label for="number" class="text-xs font-medium">{label}</label>

      <input type="number" id="number" name="number" defaultValue={defaultValue.toString()} onChange={onChange} class="px-2 py-1 text-base rounded-md surface-01"/>
    </div>
  )
}
