import { Center, Player, Sidebar } from '@/components'
import PlaylistContextProvider from '@/contexts/PlaylistContext'
import SongContextProvider from '@/contexts/SongContext'
import { Inter } from 'next/font/google'
import Head from 'next/head'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <div className="bg-black h-screen overflow-hidden">
      <PlaylistContextProvider>
        <SongContextProvider>
          <Head>
            <title>iSpotify 2.0</title>
            <meta name="description" content="iSpotify to learning NextJS" />
            <link rel="icon" href="/favicon.ico" />
          </Head>

          <main className="flex">
            <Sidebar />
            <Center />
          </main>

          <div className="sticky bottom-0 text-white">
            <Player />
          </div>
        </SongContextProvider>
      </PlaylistContextProvider>
    </div>
  )
}
