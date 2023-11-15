import { JSX, h } from 'preact'
import RightChevron from '../icons/RightChevron'

interface SelectProps {
  label: string
  options: string[]
  selection: string | undefined
  caption?: string
  onChange: (event: JSX.TargetedEvent<HTMLSelectElement, Event>) => void
}

export default function Select({label, options, selection, caption, onChange}: SelectProps) {
  return (
    <div class="flex flex-col gap-1 grow">
      <label for="locale" class="text-xs font-medium">{label}</label>

      <div class="relative text-base rounded-md surface-01 cursor-pointer">
        <div class="flex justify-between pointer-events-none pl-2 pr-3 py-1">
          <span>{selection}</span>
          <div class="rotate-90">
            <RightChevron/>
          </div>
        </div>

        <select id="locale" name="locale" onChange={onChange} class="absolute appearance-none opacity-0 h-full w-full bg-transparent px-2 top-0 right-0 left-0 bottom-0 cursor-pointer">
          {options.length > 0 ? (
            options.map((option: string) => (
              options.indexOf(option) === 0 ?
                <option selected>{option}</option> : <option>{option}</option>
            ))
          ) : null}
        </select>
      </div>

      {caption ? <p class="text-xs text-02">{caption}</p> : null}
    </div>
  )
}