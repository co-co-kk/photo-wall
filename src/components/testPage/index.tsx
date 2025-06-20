import { useState, useEffect, useRef } from 'react'
import {
  animated,
  useSprings,
  config
} from "react-spring";
import PHOTOS from '../data/photos'

const ITEM_WIDTH = 380
const ITEM_GAP = 8
const VISIBLE_COUNT = 3 // 可视区域显示几张

export default function TestPage() {
  // 拼接两份图片用于无缝滚动
  const images = [...PHOTOS, ...PHOTOS]
  const [hovered, setHovered] = useState<number | null>(null)
  const scrollRef = useRef<HTMLDivElement>(null)
  const [autoScroll, setAutoScroll] = useState(true)
  const [autoAnimate, setAutoAnimate] = useState(true)
  const [current, setCurrent] = useState(0) // 当前高亮索引

  // 自动横向无缝滚动
  useEffect(() => {
    if (!autoScroll) return
    const el = scrollRef.current
    if (!el) return
    let frame: number
    const speed = 1.2 // 滚动速度
    function scrollStep() {
      if (!el) return
      el.scrollLeft += speed
      // 到达一半时瞬间回到起点
      const totalWidth = (ITEM_WIDTH + ITEM_GAP) * PHOTOS.length
      if (el.scrollLeft >= totalWidth) {
        el.scrollLeft -= totalWidth
      }
      // 自动高亮中间图片
      if (autoAnimate) {
        const center = el.scrollLeft + el.clientWidth / 2
        
        const idx = Math.round(center / (ITEM_WIDTH + ITEM_GAP)) % PHOTOS.length

        setCurrent(idx)
      }
    
      frame = requestAnimationFrame(scrollStep)
    }
    frame = requestAnimationFrame(scrollStep)
    return () => cancelAnimationFrame(frame)
  }, [autoScroll, autoAnimate])

  // 鼠标悬停时高亮，自动动画时只高亮 current
  const springs = useSprings(
    images.length,
    images.map((_, idx) => {
      const isHovered = !autoAnimate && hovered === idx
      // const isCurrent = autoAnimate && (idx % PHOTOS.length) === current && idx >= PHOTOS.length
      const isCurrent = autoAnimate && (idx % PHOTOS.length) === current //&& idx >= PHOTOS.length
      return {
        scale: isHovered || isCurrent ? 1.10 : 0.8,
        opacity: isHovered || isCurrent ? 1 : 0.5,
        // TransformStream: isHovered || isCurrent ? 1 : 0.5,
        borderColor: isCurrent ? '#38bdf8' : 'rgba(255,255,255,0.3)',
        config: config.wobbly,
      }
    })
  )

  return (
    <div className="img-ball h-[100%] min-h-[450px] w-full flex flex-col items-center justify-start overflow-hidden">
      <div className="mb-2 flex gap-4">
        <label>
          <input type="checkbox" checked={autoScroll} onChange={e => setAutoScroll(e.target.checked)} />
          自动滚动
        </label>
        <label>
          <input type="checkbox" checked={autoAnimate} onChange={e => setAutoAnimate(e.target.checked)} />
          自动动画
        </label>
      </div>
      <div
        className="flex h-[400px] pt-2.5  overflow-y-hidden overflow-x-scroll gap-2"
        ref={scrollRef}
        style={{
          width: (ITEM_WIDTH + ITEM_GAP) * VISIBLE_COUNT,
          scrollBehavior: 'auto',
        }}
      >
        {springs.map((spring, idx) => (
          
          
          // <div>{idx}

          <animated.img
            key={idx}
            className="h-[200px]"
            src={images[idx % PHOTOS.length]}
            alt={`${idx}`}
            title={`${idx}`}
            width={ITEM_WIDTH}
            height={200}
            style={{
              ...spring,
              marginRight: ITEM_GAP,
              borderWidth: 2,
              borderStyle: 'solid',
              borderRadius: 16,
              boxShadow: '0 4px 24px #0003',
              cursor: 'pointer',
              background: '#222',
              WebkitBoxReflect: 'below 3px linear-gradient(transparent, #0006)',
            }}
            onMouseEnter={() => {
              if (!autoAnimate) setHovered(idx)
            }}
            onMouseLeave={() => {
              if (!autoAnimate) setHovered(null)
            }}
          />
          // </div>
        ))}
      </div>
    </div>
  )
}
