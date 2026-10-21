import type { Track } from '../data/types'

const appleMusicLink = (track: Track) => `https://music.apple.com/de/song/${track.appleId}`

export function TrackLink({ track }: { track: Track }) {
  return (
    <a href={appleMusicLink(track)} target="_blank" rel="noopener">
      {track.artist} – {track.title}
    </a>
  )
}
