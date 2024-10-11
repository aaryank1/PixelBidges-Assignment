import React from 'react'

const Card = (props) => {
    return (
        <div
        style={{backgroundImage: `url(${props.backgroundImage})`, fontFamily: 'cheeseburgaregular'}}
        className='flex flex-col justify-between items-center text-center bg-cover bg-center rounded-lg mx-1'
        >
            <div className='flex justify-center items-center'>
                <img src={props.merch} alt="merch" />
            </div>
        </div>
    )
}

export default Card