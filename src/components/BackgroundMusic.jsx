import { useCallback, useEffect, useRef, useState } from 'react'
import { Music2, VolumeX } from 'lucide-react'
import './BackgroundMusic.css'

export default function BackgroundMusic() {
  const audioRef = useRef(null)
  const playRequestRef = useRef(null)
  const [isPlaying, setIsPlaying] = useState(false)
  const [hasError, setHasError] = useState(false)
  const [hasEnded, setHasEnded] = useState(false)

  const startPlayback = useCallback(async () => {
    const audio = audioRef.current
    if (!audio || audio.ended) return false
    if (!audio.paused) return true
    if (playRequestRef.current) return false

    try {
      const request = audio.play()
      playRequestRef.current = request
      await request
      return true
    } catch (error) {
      if (error.name !== 'NotAllowedError' && error.name !== 'AbortError') {
        console.error('Background music could not be played.', error)
      }
      return false
    } finally {
      playRequestRef.current = null
    }
  }, [])

  useEffect(() => {
    const audio = audioRef.current
    if (!audio) return undefined

    audio.volume = 0.2
    audio.loop = false

    const onPlay = () => setIsPlaying(true)
    const onPause = () => setIsPlaying(false)
    const onEnded = () => {
      setIsPlaying(false)
      setHasEnded(true)
    }
    const onError = () => {
      setHasError(true)
      console.error('Background music failed to load.', audio.error)
    }

    audio.addEventListener('play', onPlay)
    audio.addEventListener('pause', onPause)
    audio.addEventListener('ended', onEnded)
    audio.addEventListener('error', onError)

    return () => {
      audio.removeEventListener('play', onPlay)
      audio.removeEventListener('pause', onPause)
      audio.removeEventListener('ended', onEnded)
      audio.removeEventListener('error', onError)
    }
  }, [])

  useEffect(() => {
    let isMounted = true

    const onFirstInteraction = (event) => {
      if (event.target instanceof Element && event.target.closest('[data-music-control]')) {
        return
      }

      window.removeEventListener('pointerdown', onFirstInteraction)
      window.removeEventListener('keydown', onFirstInteraction)
      void startPlayback()
    }

    const attemptAutoplay = async () => {
      const started = await startPlayback()
      if (isMounted && !started && !audioRef.current?.ended && audioRef.current?.paused) {
        window.addEventListener('pointerdown', onFirstInteraction, { passive: true })
        window.addEventListener('keydown', onFirstInteraction)
      }
    }

    void attemptAutoplay()

    return () => {
      isMounted = false
      window.removeEventListener('pointerdown', onFirstInteraction)
      window.removeEventListener('keydown', onFirstInteraction)
    }
  }, [startPlayback])

  const togglePlayback = () => {
    const audio = audioRef.current
    if (!audio || hasError || hasEnded) return

    if (!audio.paused || playRequestRef.current) {
      audio.pause()
      setIsPlaying(false)
      return
    }

    void startPlayback()
  }

  return (
    <>
      <audio
        ref={audioRef}
        src="/audio/background-music.mp3"
        loop={false}
        preload="none"
        aria-hidden="true"
      />
      <button
        className="background-music-control"
        type="button"
        data-music-control
        data-playing={isPlaying}
        onClick={togglePlayback}
        disabled={hasError || hasEnded}
        aria-label={
          hasError
            ? 'Background music unavailable'
            : hasEnded
              ? 'Background music finished'
            : isPlaying
              ? 'Pause background music'
              : 'Play background music'
        }
        aria-pressed={isPlaying}
        title={
          hasError
            ? 'Background music unavailable'
            : hasEnded
              ? 'Background music finished'
              : 'Background music'
        }
      >
        {isPlaying ? (
          <Music2 size={18} strokeWidth={1.8} aria-hidden="true" />
        ) : (
          <VolumeX size={18} strokeWidth={1.8} aria-hidden="true" />
        )}
        {isPlaying && (
          <span className="background-music-control__pulse" aria-hidden="true">
            <span />
            <span />
            <span />
          </span>
        )}
      </button>
    </>
  )
}
