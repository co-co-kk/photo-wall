import { useEffect } from 'react'
import clsx from 'clsx'

interface Props {
  src: string
  open: boolean
  onClose: () => void
}

export default function PhotoModal({ src, open, onClose }: Props) {
  useEffect(() => {
    if (!open) return
    const onKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose()
    }
    window.addEventListener('keydown', onKeyDown)
    return () => window.removeEventListener('keydown', onKeyDown)
  }, [open, onClose])

  return (
    <div
      className={clsx(
        'fixed inset-0 z-50 flex items-center justify-center bg-black/80 transition-opacity',
        open ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'
      )}
      onClick={onClose}
    >
      <img
        onClick={e => e.stopPropagation()}
        src={src}
        alt="预览"
        className="max-h-[90vh] max-w-[90vw] rounded-lg shadow-2xl border-4 border-white"
      />
    </div>
  )
}