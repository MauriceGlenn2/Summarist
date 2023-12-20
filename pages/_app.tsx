import SearchBar from '@/components/SearchBar'
import SideBar from '@/components/SideBar';
import '@/styles/globals.css'
import type { AppProps } from 'next/app'

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <Component {...pageProps} />
    </>
  );
  
 
}
