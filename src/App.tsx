import "./styles/App.css"
import { BrowserRouter as Router, Routes, Route } from "react-router-dom"

import Header from "./components/Header"
import Main from "./layouts/Main"
import About from "./pages/About"
import Contact from "./pages/Contact"
import Profile from "./pages/Profile"
import Home from "./pages/Home"

function App() {
	return (
		<Router>
			<Header />
			<Routes>
				<Route path="/" element={<Main />}>
					<Route index element={<Home />} />
					<Route path="about" element={<About />} />
					<Route path="profile" element={<Profile />} />
					<Route path="contact" element={<Contact />} />
				</Route>
			</Routes>
		</Router>
	)
}

export default App
