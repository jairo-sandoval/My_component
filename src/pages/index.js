import Link from 'next/link'
import React from 'react'

const user= {
    email: "admin@test.com", 
    password: "Test1235", 
}

const login = () => {
    const user ={
        email: "admin@test.com",
        password: "Test1235",
    }
    return(
        <div>
            <body>
            <header style={{
                border: '1px solid black',
                background: "red",
            }}>

            </header>
            <label>correo electronico</label>
            <input placeholder="email"></input> <br/>
            <label>contraseña</label>
            <input placeholder="password"></input><br/>

            </body>
        </div>
    )
}

export default login