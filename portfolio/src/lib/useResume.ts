import { useEffect, useState } from 'react'
import type { Resume } from './types'

export function useResume() {
  const [data, setData] = useState<Resume | null>(null)
  const [loading, setLoading] = useState(true)
  useEffect(() => {
    fetch('/resume.json')
      .then(r => r.json())
      .then((d: Resume) => { setData(d); setLoading(false) })
      .catch(() => setLoading(false))
  }, [])
  return { data, loading }
}
