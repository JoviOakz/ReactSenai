import React, { useState } from "react";

const PageContent = () => {
    const [visibility, setVisibility] = useState(true);

    return (
        <div className='page-content'>
            <div className='card'>
                <button onClick={ () => setVisibility(!visibility) }>BOTÃO</button>
                {visibility && <h1>Krovi</h1>}
            </div>

            <div className='card'>
                
            </div>

            <div className='card'>

            </div>

            <div className='card'>

            </div>

            <div className='card'>

            </div>
        </div>
    )
}

export default PageContent;