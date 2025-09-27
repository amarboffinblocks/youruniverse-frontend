"use client"
import * as React from "react"
import { cn } from "@/lib/utils"
import { Copy, Check } from "lucide-react" // using lucide icons for copy & check

interface InputProps extends React.ComponentProps<"input"> {
  showCopyButton?: boolean; // optional prop to show copy button
}

function Input({ className, type, showCopyButton, ...props }: InputProps) {
  const [copied, setCopied] = React.useState(false)
  const inputRef = React.useRef<HTMLInputElement>(null)

  const handleCopy = () => {
    if (inputRef.current) {
      navigator.clipboard.writeText(inputRef.current.value)
      setCopied(true)
      setTimeout(() => setCopied(false), 1500) // revert after 1.5s
    }
  }

  return (
    <div className="relative w-full flex items-center">
      <input
        ref={inputRef}
        type={type}
        data-slot="input"
        className={cn(
          "file:text-muted text-white/80 placeholder:text-muted selection:bg-primary selection:text-primary-foreground dark:bg-input/30 border-primary/80 flex h-9 w-full min-w-0 rounded-xl border bg-primary/30 backdrop-blur-2xl px-3 py-1 text-base shadow-xs transition-[color,box-shadow] outline-none file:inline-flex file:h-7 file:border-0 file:bg-transparent file:text-sm file:font-medium disabled:pointer-events-none disabled:cursor-not-allowed disabled:opacity-50 md:text-sm",
          "focus-visible:border-primary focus-visible:ring-ring/50 focus-visible:ring-[3px]",
          "aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 aria-invalid:border-destructive",
          showCopyButton && "pr-10", // add right padding if button exists
          className
        )}
        {...props}
      />

      {showCopyButton && (
        <button
          type="button"
          onClick={handleCopy}
          className="absolute right-2 flex items-center justify-center p-1 text-muted-foreground hover:text-white transition cursor-pointer"
        >
          {copied ? <Check size={16} className="text-green-400" /> : <Copy size={16} />}
        </button>
      )}
    </div>
  )
}

export { Input }
