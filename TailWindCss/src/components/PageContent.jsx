import React, { useState } from "react";
import Clock from "./Clock"
import Input from './Input';
import Button from './Button';

const PageContent = () => {
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
        <div className='w-full h-5/6'>
            <div className='card'>
                <button onClick={ () => setVisibility(!visibility) }>BOTÃO</button>
                {visibility && <h3>Faça um botão que altere a visibilidade de um texto dentro da página. visível ou escondido.</h3>}
            </div>

            <div className='card'>
                <Clock/>
                <h3>Exiba o horário atual, atualizado de segundo em segundo.</h3>
            </div>

            <div className='card'>
                <button onClick={ () => setCounter(counter + 1) }>BOTÃO</button>
                <h3>Você clicou {counter} vezes.</h3>
                <h3>Exiba um contador de cliques ao centro da tela.</h3>
            </div>

            <div className='card' style={{ backgroundColor: color }}>
                <button onClick={ () => setColor( color == '#F0F2F5' ? 'aquamarine' : '#F0F2F5' ) }>BOTÃO</button>
                <h3>Faça um botão que altere a cor de fundo de uma div.</h3>
            </div>

            <div className='card'>
                <form onSubmit={handleSubmit}>
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

export default PageContent;