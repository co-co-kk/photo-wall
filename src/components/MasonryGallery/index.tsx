import { useState, useEffect } from 'react'
import PHOTOS from '../data/photos'
import PhotoModal from '../PhotoModal/index'

export default function MasonryGallery() {
  const [current, setCurrent] = useState(0)
  const [modal, setModal] = useState<number | null>(null)

  // 自动播放
  useEffect(() => {
    if (modal !== null) return
    const timer = setInterval(() => {
      setCurrent(c => (c + 1) % PHOTOS.length)
    }, 2500)
    return () => clearInterval(timer)
  }, [modal])

  // 分 3 列瀑布流
  const columns = [[], [], []] as string[][]
  PHOTOS.forEach((photo, i) => columns[i % 3].push(photo))

  return (
    <>
      <div className="flex gap-6 px-8 py-6 max-w-6xl mx-auto">
        {columns.map((col, ci) => (
          <div key={ci} className="flex-1 flex flex-col gap-6">
            {col.map((src, i) => {
              const idx = ci + i * 3
              return (
                <img
                  key={src + idx}
                  src={src}
                  alt=""
                  className={`w-full rounded-xl shadow-xl cursor-pointer transition-all duration-300 ${idx === current ? 'ring-4 ring-sky-400 scale-105' : 'hover:scale-105'}`}
                  onClick={() => setModal(idx)}
                  style={{
                    aspectRatio: '1/1.3',
                    objectFit: 'cover',
                  }}
                />
              )
            })}
          </div>
        ))}
      </div>
      <PhotoModal
        src={modal !== null ? PHOTOS[modal] : ''}
        open={modal !== null}
        onClose={() => setModal(null)}
      />
    </>
  )
}