import React, { useState } from "react";
import Clock from "./Clock"
import Input from './Input';
import Button from './Button';

const HomeContent = () => {
    const [visibility, setVisibility] = useState(true);
    const [counter, setCounter] = useState(0);
    const [color, setColor] = useState('#F0F2F5');
    const [name, setName] = useState('');
    const [confirmedName, setConfirmedName] = useState('...');

    const handleSubmit = (e) => {
        e.preventDefault();
        setConfirmedName(name);
    };

    return (
        <div className='flex flex-wrap justify-between items-center p-12 w-full h-5/6'>
            <div className='flex flex-col w-60 h-80 p-4 space-y-5 items-center border-solid border-2 border-gray-400 rounded shadow-md'>
                <button className='bg-blue-500 hover:bg-blue-600 text-white font-bold py-1 px-2 shadow-md rounded transform hover:scale-105 transition-transform duration-300' onClick={ () => setVisibility(!visibility) }>BOTÃO</button>
                {visibility && <h3>Faça um botão que altere a visibilidade de um texto dentro da página. visível ou escondido.</h3>}
            </div>

            <div className='flex flex-col w-60 h-80 p-4 space-y-5 items-center border-solid border-2 border-gray-400 rounded shadow-md'>
                <Clock/>
                <h3>Exiba o horário atual, atualizado de segundo em segundo.</h3>
            </div>

            <div className='flex flex-col w-60 h-80 p-4 space-y-5 items-center border-solid border-2 border-gray-400 rounded shadow-md'>
                <button className='bg-blue-500 hover:bg-blue-600 text-white font-bold py-1 px-2 shadow-md rounded transform hover:scale-105 transition-transform duration-300' onClick={ () => setCounter(counter + 1) }>BOTÃO</button>
                <h3>Você clicou {counter} vezes.</h3>
                <h3>Exiba um contador de cliques ao centro da tela.</h3>
            </div>

            <div className='flex flex-col w-60 h-80 p-4 space-y-5 items-center border-solid border-2 border-gray-400 rounded shadow-md' style={{ backgroundColor: color }}>
                <button className='bg-blue-500 hover:bg-blue-600 text-white font-bold py-1 px-2 shadow-md rounded transform hover:scale-105 transition-transform duration-300' onClick={ () => setColor( color == '#F0F2F5' ? 'aquamarine' : '#F0F2F5' ) }>BOTÃO</button>
                <h3>Faça um botão que altere a cor de fundo de uma div.</h3>
            </div>

            <div className='flex flex-col w-60 h-80 p-4 space-y-5 items-center border-solid border-2 border-gray-400 rounded shadow-md'>
                <form className="space-y-2" onSubmit={handleSubmit}>
                    <Input
                        type="text"
                        placeholder="Name"
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                    />

                    <Button type="submit">Confirm</Button>
                </form>

                <h3>Seja bem vindo {confirmedName}!</h3>
                <h3>Faça um campo de texto que exiba uma mensagem de bem-vindo com o nome inserido, alterando o estado.</h3>
            </div>
        </div>
    )
}

export default HomeContent;