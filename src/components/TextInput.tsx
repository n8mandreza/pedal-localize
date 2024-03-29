import { JSX, h } from "preact";
import MagnifyingGlass from "../icons/MagnifyingGlass";

interface SelectProps {
  id: string
  label: string
  showLabel?: boolean
  placeholder?: string
  onInput?: (event: JSX.TargetedEvent<HTMLInputElement, Event>) => void
}

export default function TextInput({id, label, showLabel, placeholder, onInput}: SelectProps) {
  return (
    <div class="flex flex-col gap-1 w-full">
      <label for={id} class={`text-xs font-medium ${showLabel === false ? 'hidden' : ''}`}>
        {label}
      </label>

      <input id={id} type="text" placeholder={placeholder} onInput={onInput} class="w-full px-2 py-2 text-base rounded-lg surface-01 placeholder:text-02"/>
    </div>
  )
}