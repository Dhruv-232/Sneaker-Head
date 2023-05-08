import { useEffect } from "react"
import { useNavigate } from "react-router-dom"

function Home() {
    const navigate = useNavigate()

    useEffect(() => {
        if (!localStorage.getItem('token')) {
            navigate('/login')
        }
    }, [])
    return(
        <div>
            home
            <button onClick={()=>{
                localStorage.clear()
                navigate('/login')
            }}>LOGOUT</button>
        </div>
    )
}

export default Home