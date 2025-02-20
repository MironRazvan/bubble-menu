import { useNavigate } from "react-router-dom"
import useTempStore from "../stores/tempStore"

const LoginRegister = () => {
	const { toggleLogIn } = useTempStore()
	const navigate = useNavigate()

	const handleLogIn = () => {
		toggleLogIn()
		navigate("/")
	}

	return (
		<div>
			Login-Register
			<br></br>
			<button onClick={handleLogIn}>LogIn</button>
		</div>
	)
}

export default LoginRegister
