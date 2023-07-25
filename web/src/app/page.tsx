'use client'
import Image from 'next/image'
import imagemLogo from '../assets/CatwikiLogo.svg'
import imagemBackDiv from '../assets/HeroImagelg.png'
import { Montserrat } from 'next/font/google'
import { BarraDePesquisa } from './components/BarraDePesquisa'
import DivPrincipal from './components/DivPrincipal'

const montserrat = Montserrat({
  weight: ['500', '600', '700'],
  subsets: ['latin'],
})

export default function Home() {
  const handlePesquisar = (termo: string) => {
    console.log('Pesquisando por:', termo);
  };

  return (
    <main className='px-16 py-4'>
      <Image src={imagemLogo} alt='Logo' />
      <DivPrincipal />
    </main >
  )
}
