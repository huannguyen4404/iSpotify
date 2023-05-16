import spotifyLogo from '@/assets/spotify-logo.png'
import { GetServerSidePropsContext } from 'next'
import { ClientSafeProvider, getProviders, signIn } from 'next-auth/react'
import Image from 'next/image'

export interface LoginProps {
  providers: Awaited<ReturnType<typeof getProviders>>
}

export default function Login({ providers }: LoginProps) {
  const { name: providerName, id: providerId } = providers?.spotify as ClientSafeProvider

  const handleClickLogin = () => {
    signIn(providerId, { callbackUrl: '/' })
  }

  return (
    <div className="flex flex-col justify-center items-center bg-black h-screen">
      <div className="mb-6">
        <Image src={spotifyLogo} alt="Spotify Logo" height="200" width="200" />
      </div>

      <button className="bg-[#18D860] text-white p-5 rounded-full" onClick={handleClickLogin}>
        Login with {providerName}
      </button>
    </div>
  )
}

export const getServerSideProps = async (context: GetServerSidePropsContext) => {
  const providers = await getProviders()
  return {
    props: {
      providers,
    },
  }
}
