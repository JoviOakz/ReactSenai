import React, { useState } from "react";

const AboutContent = () => {
    const [visibility, setVisibility] = useState(true);

    return (
        <div className='flex flex-wrap justify-between items-center p-12 w-full h-5/6'>
            <div className='flex flex-col w-60 h-80 p-4 space-y-5 items-center border-solid border-2 border-gray-400 rounded shadow-md'>
                <button className='bg-blue-500 hover:bg-blue-600 text-white font-bold py-1 px-2 shadow-md rounded transform hover:scale-105 transition-transform duration-300' onClick={ () => setVisibility(!visibility) }>BOTÃO</button>
                {visibility && <h3>Faça um botão que altere a visibilidade de um texto dentro da página. visível ou escondido.</h3>}
                {visibility && <h3>Página sobre a página.</h3>}
            </div>
        </div>
    )
}

export default AboutContent;