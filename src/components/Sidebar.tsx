import {
  BuildingLibraryIcon,
  HeartIcon,
  HomeIcon,
  MagnifyingGlassIcon,
  PlusCircleIcon,
  RssIcon,
} from '@heroicons/react/24/outline'
import { IconButton } from './IconButton'
import { usePlaylistContext } from '@/contexts/PlaylistContext'

const Divider = () => <hr className="border-t-[0.1px] border-gray-900" />

export function Sidebar() {
  const {
    playlistContextState: { playlists },
  } = usePlaylistContext()

  return (
    <div className="text-gray-500 px-5 pt-5 pb-36 text-xs lg:text-sm border-r border-gray-900 h-screen overflow-y-scroll scrollbar-hidden sm:max-w-[12rem] lg:max-w-[15rem] hidden md:block">
      <div className="space-y-4">
        <IconButton icon={HomeIcon} label="Home" />
        <IconButton icon={MagnifyingGlassIcon} label="Search" />
        <IconButton icon={BuildingLibraryIcon} label="Your Library" />

        <Divider />

        <IconButton icon={PlusCircleIcon} label="Create Playlist" />
        <IconButton icon={HeartIcon} label="Liked Songs" />
        <IconButton icon={RssIcon} label="Your episodes" />

        <Divider />

        {/* Playlists */}
        {playlists.map(({ id, name }) => (
          <p key={id} className="cursor-pointer hover:text-white">
            {name}
          </p>
        ))}
      </div>
    </div>
  )
}
