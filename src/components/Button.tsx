import { h } from "preact"

interface ButtonProps {
  label: string
  fullWidth?: boolean
  size?: 'regular' | 'compact'
  disabled?: boolean
  onClick: () => void
}

export default function Button({label, fullWidth, size = 'regular', disabled = false, onClick}: ButtonProps) {
  return (
    <button
      disabled={disabled}
      onClick={onClick}
      class={`interactive-01 text-white font-semibold rounded-lg${fullWidth ? ' w-full' : ''} ${size === 'compact' ? ' text-xs py-2 px-3' : ' text-base py-2 px-3'}${disabled ? ' interactive-disabled' : ' hover:opacity-80'}`}
    >
      {label}
    </button>
  )
}