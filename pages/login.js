import Link from 'next/link'
import {Button} from 'antd';
import 'antd/dist/antd.css';

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
                <Link href="/sing-up">
                    <a>sing-up</a>
                </Link>
                <Button type="dashed">submit</Button>

            </div>
    )
}

export default Index