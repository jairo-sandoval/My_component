import Link from 'next/link';
import {Button} from 'antd';
import 'antd/dist/antd.css';

function register() {
    return(
        <div>
            <h1>sing up</h1>
            <label>What's your name ?</label>
            <input type="text" placeholder="Name"/><br/>
            <label>What's your last name ?</label>
            <input type="text" placeholder="Last name"/><br/>
            <label>how old are you</label> 
            <input type="text" placeholder="Age"/><br/>
            <label>Email</label>
            <input type="text" placeholder="email"/><br/>
            
            <Link href="/login">
                <a>login</a>
            </Link>
            <Button type="dashed">submit</Button>
        </div>
    )
}

export default register