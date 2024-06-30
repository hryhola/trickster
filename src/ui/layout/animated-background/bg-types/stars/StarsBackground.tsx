import { useEffect, useRef } from 'react'
import styles from './stars-background.module.scss'

export const StarsBackground: React.FC = () => {
    const canvasRef = useRef<HTMLCanvasElement>(null)

    useEffect(() => {
        const canvas = canvasRef.current

        if (!canvas) {
            return
        }

        const ctx = canvas.getContext('2d')!

        let width: number
        let height: number

        const setCanvasExtents = () => {
            width = document.body.clientWidth
            height = document.body.clientHeight

            canvas.width = width
            canvas.height = height
        }

        setCanvasExtents()

        window.onresize = () => {
            setCanvasExtents()
        }

        const makeStars = (count: number) => {
            const out = []
            for (let i = 0; i < count; i++) {
                const s = {
                    x: Math.random() * 1600 - 800,
                    y: Math.random() * 900 - 450,
                    z: Math.random() * 1000,
                }
                out.push(s)
            }
            return out
        }

        let stars = makeStars(5000)

        const clear = () => {
            ctx.fillStyle = 'black'
            ctx.fillRect(0, 0, canvas.width, canvas.height)
        }

        const putPixel = (x: number, y: number, brightness: number) => {
            const intensity = brightness * 255
            let rgb =
                'rgb(' + intensity + ',' + intensity + ',' + intensity + ')'

            if (document.documentElement.dataset.theme === 'light') {
                const c = getComputedStyle(
                    document.documentElement,
                ).getPropertyValue('--secondary-rgb-inverted')

                rgb =
                    'rgb(' +
                    c.split(',').map((v) => Number(v) * brightness) +
                    ')'
            }

            ctx.fillStyle = rgb
            ctx.fillRect(x, y, 1, 1)
        }

        const moveStars = (distance: number) => {
            const count = stars.length
            for (var i = 0; i < count; i++) {
                const s = stars[i]
                s.z -= distance
                while (s.z <= 1) {
                    s.z += 1000
                }
            }
        }

        let prevTime: number

        const init = (time: number) => {
            prevTime = time
            requestAnimationFrame(tick)
        }
        const tick = (time: number) => {
            let elapsed = time - prevTime
            prevTime = time

            moveStars(elapsed * 0.1)

            clear()

            const cx = width / 2
            const cy = height / 2

            const count = stars.length
            for (var i = 0; i < count; i++) {
                const star = stars[i]

                const x = cx + star.x / (star.z * 0.001)
                const y = cy + star.y / (star.z * 0.001)
                if (x < 0 || x >= width || y < 0 || y >= height) {
                    continue
                }

                const d = star.z / 1000.0
                const b = 1 - d * d

                putPixel(x, y, b)
            }

            requestAnimationFrame(tick)
        }

        requestAnimationFrame(init)
    }, [])

    return (
        <>
            <div className={styles.gradient}></div>
            <div className={styles['canvas-wrapper']}>
                <canvas
                    id="stars-canvas"
                    className={styles.canvas}
                    ref={canvasRef}
                ></canvas>
            </div>
        </>
    )
}
