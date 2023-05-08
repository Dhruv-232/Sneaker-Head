import {useState} from "react"
import { Link, useNavigate } from "react-router-dom"
import axios from "axios"

function Login() {
    const navigate = useNavigate()
    const [userName, setUserName] = useState('')
    const [password, setPassword] = useState('')
    const handleLogin = () => {
        
        console.log(userName, password)
        
        const data = { email: userName , password: password }
        axios.post('https://reqres.in/api/login', data)
            .then((res) => {
                console.log(res.data.token,17)
                if (res.data.token) {
                    localStorage.setItem('token', res.data.token)
                    navigate('/home') 
                }
                
            })
            .catch((err) => {
                console.log(err, 20)
            })
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