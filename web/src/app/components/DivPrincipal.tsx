import React from 'react'
import Image from 'next/image'
import imagemLogo from '../../assets/CatwikiLogo.svg'
import imagemGato1 from '../../assets/gato1.jpg'
import imagemGato2 from '../../assets/gato2.png'
import imagemGato3 from '../../assets/gato3.png'
import imagemGato4 from '../../assets/gato4.png'
import imagemBackDiv from '../../assets/HeroImagelg.png'
import { Montserrat } from 'next/font/google'
import { BarraDePesquisa } from './BarraDePesquisa'
import { ArrowRight } from '@phosphor-icons/react'

const montserrat = Montserrat({
    weight: ['500', '600', '700'],
    subsets: ['latin'],
})

export default function DivPrincipal() {
    const handlePesquisar = (termo: string) => {
        console.log('Pesquisando por:', termo);
    };
    return (
        <div className='text-zinc-300 h-[1200px] rounded-3xl flex flex-col overflow-hidden'>
            {PartIDiv(handlePesquisar)}
            {PartIIDiv()}
        </div>
    )
}

const PartIDiv = (handlePesquisar: (termo: string) => void) => {
    return (
        <div className='h-1/2 bg-[imagemBackDiv] relative'>
            <Image src={imagemBackDiv} alt='Fundo da div' layout='fill' objectFit='cover' className='z-0' />
            <div className='z-10 px-[80px] py-12 flex flex-col'>
                <Image src={imagemLogo} alt='Logo' className='invert' width={350} />
                <div className='w-[370px] text-white z-10 text-[24px]'>
                    <p className={montserrat.className}>Get to know more about your cat breed</p>
                </div>
                <BarraDePesquisa onPesquisar={handlePesquisar} />
            </div>
        </div>
    )
}

const PartIIDiv = () => {
    return (
        <div className='h-1/2 bg-coloraux px-[80px] py-12'>
            <div className='text-colorTextAux text-[18px]'>
                <p className={montserrat.className}>Most Searched Breeds</p>
                <div className='w-[60px] h-[3px] bg-[#291507]'></div>
                <div className='flex flex-row'>
                    <div className='w-1/2 text-[48px] mt-12 font-[700]'>
                        <p className={montserrat.className}>66+ Breeds For you to discover</p>
                    </div>
                    <div className='w-1/2 relative'>
                        <div className='absolute bottom-0 right-0 p-4 text-[#291507] opacity-60 flex flex-row items-center gap-2 font-[700]'>
                            <p className={montserrat.className}>SEE MORE</p>
                            <ArrowRight />
                        </div>
                    </div>
                </div>
                <div className='flex flex-row justify-between mt-6'>
                    <div>
                        <div className='w-[220px] h-[220px] bg-[imagemGato1] rounded-[24px] overflow-hidden'>
                            <Image src={imagemGato1} alt='gato 1' className='w-full h-full object-contain' />
                        </div>
                        <div className='text-[16px] text-[#291507] font-[600] mt-2 px-1'>
                            <p className={montserrat.className}>Bengal</p>
                        </div>
                    </div>
                    <div >
                        <div className='w-[220px] h-[220px] bg-[imagemGato2] rounded-[24px] overflow-hidden'>
                            <Image src={imagemGato2} alt='gato 2' className='w-full h-full object-cover' />
                        </div>
                        <div className='text-[16px] text-[#291507] font-[600] mt-2 px-1'>
                            <p className={montserrat.className}>Savannah</p>
                        </div>
                    </div>
                    <div>
                        <div className='w-[220px] h-[220px] bg-[imagemGato3] rounded-[24px] overflow-hidden'>
                            <Image src={imagemGato3} alt='gato 3' className='w-full h-full object-cover' />
                        </div>
                        <div className='text-[16px] text-[#291507] font-[600] mt-2 px-1'>
                            <p className={montserrat.className}>Norwegian Forest Cat</p>
                        </div>
                    </div>
                    <div>
                        <div className='w-[220px] h-[220px] bg-[imagemGato4] rounded-[24px] overflow-hidden'>
                            <Image src={imagemGato4} alt='gato 4' className='w-full h-full object-cover' />
                        </div>
                        <div className='text-[16px] text-[#291507] font-[600] mt-2 px-1'>
                            <p className={montserrat.className}>Selkirk Rex</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}