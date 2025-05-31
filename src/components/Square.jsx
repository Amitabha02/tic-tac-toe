import React from 'react'

const Square = (props)=>{

    return (
        
        <div
        onClick = {props.onClick}
        className=' flex justify-center items-center border-white border-solid border-2 h-36 w-full'>
            <h5 className='font-semibold text-white text-4xl'>
                {props.value}
            </h5>
        </div>
    );
}

export default Square