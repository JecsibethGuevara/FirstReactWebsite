import React from 'react'

export default function Banner(){
    return(
        <header className='header'>
            <div className='header-text'>
                <h1> Gabriella's Cafe</h1>
                <h3> Health and taste in one plate</h3>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Distinctio labore eos ullam. Porro itaque saepe tempora reprehenderit odio explicabo! Impedit repellendus ea ducimus, maiores unde quas blanditiis quae? Quisquam, provident.</p>
                <button className='btn btn-sm'>See more </button>
            </div>
            <div className='header-img'>
                <img src='headerimg.png'/>
            </div>  
        </header>
    )
}