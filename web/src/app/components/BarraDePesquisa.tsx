'use client'
import React, { useState } from "react";
import { MagnifyingGlass } from '@phosphor-icons/react'

interface BarraProps {
    onPesquisar: (termo: string) => void;
}

export const BarraDePesquisa: React.FC<BarraProps> = ({ onPesquisar }) => {

    const [termo, setTermo] = useState('');

    const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setTermo(event.target.value)
    }

    const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault()
        onPesquisar(termo); //chamando a função que fará alguma coisa com o que está sendo digitado
    }

    return (
        <form className="z-10 mt-12" onSubmit={handleSubmit}>
            <div className="bg-white h-14 w-72 rounded-[60px] p-4 flex flex-row items-center justify-between">
                <input
                    type="text"
                    value={termo}
                    onChange={handleInputChange}
                    placeholder="Enter your bred"
                    className="placeholder-black font-semibold focus:outline-none text-black"
                />
                <MagnifyingGlass className="w-6 h-6 text-black" />
            </div>
        </form>
    )
}