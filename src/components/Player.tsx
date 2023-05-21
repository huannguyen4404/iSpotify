import {
  ArrowsRightLeftIcon,
  BackwardIcon,
  ForwardIcon,
  PauseIcon,
  PlayIcon,
  ArrowPathRoundedSquareIcon,
  SpeakerWaveIcon,
} from '@heroicons/react/24/solid'

export interface PlayerProps {}

const isPlaying = false

export function Player(props: PlayerProps) {
  return (
    <div className="h-24 bg-gradient-to-b from-black to-gray-900 grid grid-cols-3 text-xs md:text-base px-2 md:px-8">
      <div className="flex items-center space-x-4">SELECT SONG</div>

      <div className="flex justify-evenly items-center">
        <ArrowsRightLeftIcon className="icon-playback" />
        <BackwardIcon className="icon-playback" />
        {isPlaying ? (
          <PauseIcon className="icon-playback" />
        ) : (
          <PlayIcon className="icon-playback" />
        )}
        <ForwardIcon className="icon-playback" />
        <ArrowPathRoundedSquareIcon className="icon-playback" />
      </div>

      <div className="flex justify-end items-center pr-5 space-x-3 md:space-x-4">
        <SpeakerWaveIcon className="icon-playback" />
        <input type="range" min={0} max={100} className="w-20 md:w-auto" />
      </div>
    </div>
  )
}
