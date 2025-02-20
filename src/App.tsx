import "./styles/App.css"
import {
	BrowserRouter as Router,
	Routes,
	Route,
	Navigate,
} from "react-router-dom"

import Header from "./components/Header"
import Main from "./layouts/Main"
import About from "./pages/About"
import Contact from "./pages/Contact"
import Profile from "./pages/Profile"
import Home from "./pages/Home"
import LandingPage from "./pages/LandingPage"
import LoginRegister from "./pages/LoginRegister"

import useTempStore from "./stores/tempStore"

const App = () => {
	const { isLoggedIn } = useTempStore()

	return (
		<Router>
			{!isLoggedIn ? (
				<>
					<Routes>
						<Route path="/" element={<Main />}>
							<Route index element={<LandingPage />} />
							<Route
								path="login-register"
								element={<LoginRegister />}
							/>
						</Route>
						<Route path="*" element={<Navigate to="/" />} />
					</Routes>
				</>
			) : (
				<>
					<Header />
					<Routes>
						<Route path="/" element={<Main />}>
							<Route index element={<Home />} />
							<Route path="about" element={<About />} />
							<Route path="profile" element={<Profile />} />
							<Route path="contact" element={<Contact />} />
						</Route>
						<Route path="*" element={<Navigate to="/" />} />
					</Routes>
				</>
			)}
		</Router>
	)
}

export default App
