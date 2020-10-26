import Link from 'next/link'

function Index (){
    return(
        <div>
                <h1>login</h1>
                <label>correo electronico</label>
                <br/>
                <input 
                type="text" placeholder="write your email."
                />
                <br/>
                <label>Contraseña</label> 
                <br/>
                <input type="text" 
                placeholder= "password"/><br/>
                <button>log-in</button>
                <Link href="/sing-up">
                    <a>sing-up</a>
                </Link>
            </div>
    )
}

export default Index