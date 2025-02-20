import { NavLink } from "react-router-dom"
import "../styles/LandingPage.css"

const LandingPage = () => {
	return (
		<main className="landing-page">
			<div className="hero-section">
				<div className="hero-text">
					Build Better <strong>Habbits</strong>
				</div>
				<div className="hero-subtext">One Day At A Time</div>
				<NavLink className="hero-cta-btn" to={"login-register"}>
					Try Now
				</NavLink>
			</div>
		</main>
	)
}

export default LandingPage
