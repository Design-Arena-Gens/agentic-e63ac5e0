'use client'

import { useEffect, useRef } from 'react'
import styles from './page.module.css'

export default function Home() {
  const canvasRef = useRef<HTMLCanvasElement>(null)

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return

    const ctx = canvas.getContext('2d')
    if (!ctx) return

    canvas.width = window.innerWidth
    canvas.height = window.innerHeight

    const particles: Array<{
      x: number
      y: number
      size: number
      speedX: number
      speedY: number
      opacity: number
      life: number
    }> = []

    for (let i = 0; i < 50; i++) {
      particles.push({
        x: Math.random() * canvas.width,
        y: Math.random() * canvas.height,
        size: Math.random() * 4 + 1,
        speedX: (Math.random() - 0.5) * 0.5,
        speedY: (Math.random() - 0.5) * 0.5,
        opacity: Math.random() * 0.5 + 0.2,
        life: Math.random() * 100
      })
    }

    function animate() {
      if (!ctx || !canvas) return

      ctx.clearRect(0, 0, canvas.width, canvas.height)

      particles.forEach((particle, index) => {
        particle.x += particle.speedX
        particle.y += particle.speedY
        particle.life += 0.5

        if (particle.x < 0 || particle.x > canvas.width) particle.speedX *= -1
        if (particle.y < 0 || particle.y > canvas.height) particle.speedY *= -1

        const pulse = Math.sin(particle.life * 0.05) * 0.3 + 0.7

        ctx.beginPath()
        ctx.arc(particle.x, particle.y, particle.size * pulse, 0, Math.PI * 2)
        ctx.fillStyle = `rgba(218, 165, 32, ${particle.opacity * pulse})`
        ctx.shadowBlur = 20
        ctx.shadowColor = 'rgba(218, 165, 32, 0.8)'
        ctx.fill()
        ctx.shadowBlur = 0
      })

      requestAnimationFrame(animate)
    }

    animate()

    const handleResize = () => {
      canvas.width = window.innerWidth
      canvas.height = window.innerHeight
    }

    window.addEventListener('resize', handleResize)
    return () => window.removeEventListener('resize', handleResize)
  }, [])

  return (
    <div className={styles.container}>
      <canvas ref={canvasRef} className={styles.canvas} />

      <div className={styles.lightBeam1}></div>
      <div className={styles.lightBeam2}></div>
      <div className={styles.lightBeam3}></div>

      <div className={styles.content}>
        <div className={styles.logoSection}>
          <h1 className={styles.brandName}>Ameerat Al Arab</h1>
          <p className={styles.tagline}>The Essence of Royalty</p>
        </div>

        <div className={styles.bottleStage}>
          <div className={styles.reflectiveSurface}></div>

          <div className={styles.bottleWrapper}>
            <div className={styles.boxContainer}>
              <div className={styles.boxLid}></div>
              <div className={styles.boxBase}>
                <div className={styles.boxInner}></div>
              </div>
            </div>

            <div className={styles.bottle}>
              <div className={styles.bottleGlass}>
                <div className={styles.liquidRed}></div>
                <div className={styles.glassShine}></div>
                <div className={styles.glassHighlight1}></div>
                <div className={styles.glassHighlight2}></div>
              </div>

              <div className={styles.bottleLabel}>
                <div className={styles.labelShimmer}></div>
                <span className={styles.labelText}>Ameerat Al Arab</span>
              </div>

              <div className={styles.bottleCap}>
                <div className={styles.capTop}>
                  <div className={styles.capEngraving}></div>
                </div>
                <div className={styles.capMiddle}></div>
                <div className={styles.capBase}></div>
                <div className={styles.capShine}></div>
              </div>

              <div className={styles.bottleShadow}></div>
            </div>
          </div>

          <div className={styles.spotlight1}></div>
          <div className={styles.spotlight2}></div>
          <div className={styles.spotlight3}></div>
        </div>

        <div className={styles.descriptionSection}>
          <p className={styles.description}>
            A symphony of rare ingredients, crafted for those who embrace elegance
          </p>
          <div className={styles.features}>
            <span className={styles.feature}>100ml Eau de Parfum</span>
            <span className={styles.separator}>•</span>
            <span className={styles.feature}>Long-Lasting</span>
            <span className={styles.separator}>•</span>
            <span className={styles.feature}>Limited Edition</span>
          </div>
        </div>
      </div>

      <div className={styles.vignette}></div>
    </div>
  )
}
