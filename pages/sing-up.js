import Link from 'next/link';

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
            <button>submit</button>
            <Link href="/login">
                <a>login</a>
            </Link>
        </div>
    )
}

export default register