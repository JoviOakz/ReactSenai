import React, { useState } from "react";

const PageContent = () => {
    const [visibility, setVisibility] = useState(true);
    const [counter, setCounter] = useState(0);

    return (
        <div className='page-content'>
            <div className='card'>
                <button onClick={ () => setVisibility(!visibility) }>BOTÃO</button>
                {visibility && <h2>Faça um botão que altere a visibilidade de um texto dentro da página. visível ou escondido.</h2>}
            </div>

            <div className='card'>
                <h2>Exiba o horário atual, atualizado de segundo em segundo.</h2>
            </div>

            <div className='card'>
                <button onClick={ () => setCounter(counter + 1) }>BOTÃO</button>
                <h3>Você clicou {counter} vezes.</h3>
                <h2>Exiba um contador de cliques ao centro da tela.</h2>
            </div>

            <div className='card'>
                <h2>Faça um botão que altere a visibilidade de um texto dentro da página. visível ou escondido.</h2>
            </div>

            <div className='card'>
                <h2>Faça um campo de texto que exiba uma mensagem de bem-vindo com o nome inserido, alterando o estado.</h2>
            </div>
        </div>
    )
}

export default PageContent;