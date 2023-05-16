import Image from 'next/image'
import spotifyLogo from '@/assets/spotify-logo.png'

export interface LoginProps {}

export default function Login(props: LoginProps) {
  const handleClickLogin = () => {}

  return (
    <div className="flex flex-col justify-center items-center bg-black h-screen">
      <div className="mb-6">
        <Image src={spotifyLogo} alt="Spotify Logo" height="200" width="200" />
      </div>

      <button className="bg-[#18D860] text-white p-5 rounded-full" onClick={handleClickLogin}>
        Login with Spotify
      </button>
    </div>
  )
}
