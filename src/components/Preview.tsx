import { h } from "preact";

interface PreviewProps {
  value: string
}

export default function Preview({value}: PreviewProps) {
  return (
    <div class="relative rounded-md flex flex-col gap-2 px-4 py-6 items-center justify-center surface-01">
      <p class="text-xs text-02 absolute top-2 left-2">Preview</p>
      <p class="text-base text-center">{value}</p>
    </div>
  )
}