import { Canvas } from '@react-three/fiber'
import { Points, PointMaterial } from '@react-three/drei'
import { Suspense, useMemo } from 'react'

function StarsInner() {
  const points = useMemo(() => {
    const positions = new Float32Array(5000 * 3)
    for (let i = 0; i < 5000; i++) {
      positions[i * 3 + 0] = (Math.random() - 0.5) * 200
      positions[i * 3 + 1] = (Math.random() - 0.5) * 200
      positions[i * 3 + 2] = (Math.random() - 0.5) * 200
    }
    return positions
  }, [])
  return (
    <Points positions={points} stride={3} frustumCulled>
      <PointMaterial transparent color="#85ffd6" size={0.02} sizeAttenuation depthWrite={false} />
    </Points>
  )
}

export default function Starfield() {
  return (
    <div className="canvas-wrap" aria-hidden>
      <Canvas camera={{ position: [0, 0, 1] }}>
        <Suspense fallback={null}>
          <StarsInner />
        </Suspense>
      </Canvas>
    </div>
  )
}
