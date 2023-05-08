import { Link } from "react-router-dom"

function Login() {
    return (
        <div>
            <h1> LOGIN PAGE </h1>
            USERNAME -
            <input type = "text"/>
            <br />
            <br />
            PASSWORD - 
            <input type = "text"/>
            <br />
            <br />
            <button> SUBMIT </button>
            
        </div>
    )
}

export default Login;