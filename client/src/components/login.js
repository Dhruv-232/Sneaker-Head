import {useState} from "react"
import { Link } from "react-router-dom"

function Login() {

    const [userName, setUserName] = useState('')
    const [password, setPassword] = useState('')
    const handleLogin = () => {
        console.log(userName, password)
    }
    return (
        <div>
            <h1> LOGIN PAGE </h1>
            USERNAME -
            <input type = "text" value={userName} onChange={(e) => { 
                setUserName(e.target.value)
            }} /> <br /> <br />
            PASSWORD - 
            <input type = "text" value={password} onChange={(e) => { 
                setPassword(e.target.value)
            }}/> <br /> <br />

            <button onClick={handleLogin}> SUBMIT </button>
            
        </div>
    )
}

export default Login;