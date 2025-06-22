import { useState, useEffect } from 'react'
import { useSpring, animated } from 'react-spring'
import PHOTOS from '../data/photos'
import PhotoModal from '../PhotoModal/index'
import './index.css'

const RADIUS = 200

function getPos(idx: number, total: number, rotate: number) {
  const angle = (360 / total) * idx + rotate
  const rad = (angle * Math.PI) / 180
  return {
    x: Math.sin(rad) * RADIUS,
    y: Math.cos(rad) * RADIUS * 0.6,
    z: Math.cos(rad) * RADIUS,
    angle,
  }
}

export default function GlobeGallery() {
  const [rotate, setRotate] = useState(0)
  const [current, setCurrent] = useState(0)
  const [modal, setModal] = useState<number | null>(null)

  // 自动旋转
  useEffect(() => {
    if (modal !== null) return
    const timer = setInterval(() => {
      setRotate(r => r + 30)
      setCurrent(c => (c + 1) % PHOTOS.length)
    }, 2200)
    return () => clearInterval(timer)
  }, [modal])

  return (
    <div className="img-ball relative h-[480px] flex items-center justify-center overflow-hidden">
      <div className="img-box relative w-[480px] h-[480px] perspective-3d">
        {PHOTOS.map((src, idx) => {
          const { x, y, z, angle } = getPos(idx, PHOTOS.length, rotate)
          // z越大越靠前
          return (
            <animated.img
              key={src}
              src={src}
              alt=""
              className={`absolute rounded-xl shadow-xl cursor-pointer transition-all duration-300 border-2 ${idx === current ? 'border-sky-400 scale-110 z-20' : 'border-white/30 z-10'}`}
              style={{
                left: '50%',
                top: '50%',
                width: 120,
                height: 160,
                transform: `translate(-50%,-50%) translate3d(${x}px,${y}px,${z}px) rotateY(${angle}deg)`,
                boxShadow: z > 0 ? '0 10px 40px #0006' : '0 4px 16px #0003',
                opacity: z > -100 ? 1 : 0.3,
                transition: 'all 0.8s cubic-bezier(.22,1,.36,1)',
              }}
              onClick={() => setModal(idx)}
            />
          )
        })}
      </div>
      {/* <PhotoModal
        src={modal !== null ? PHOTOS[modal] : ''}
        open={modal !== null}
        onClose={() => setModal(null)}
      /> */}
    </div>
  )
}
