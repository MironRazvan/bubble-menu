import clsx from "clsx"
import { Home, Info, LogOut, Signature, User } from "lucide-react"
import { NavLink, useNavigate } from "react-router-dom"
import useTempStore from "../stores/tempStore"

const Header = () => {
	const { toggleLogIn } = useTempStore()
	const navigate = useNavigate()

	const handleLogOut = () => {
		toggleLogIn()
		navigate("/")
	}

	const getClassName = (initial: string) => {
		return clsx(
			initial,
			({
				isActive,
				isPending,
			}: {
				isActive: boolean
				isPending: boolean
			}) => (isPending ? "pending" : isActive ? "active" : "")
		)
	}

	return (
		<header className="header-container">
			<nav className="menu-container">
				<ul className="menu-list">
					<li className="menu-item">
						<NavLink
							to={"/"}
							className={getClassName("menu-item-link")}
						>
							<Home />
						</NavLink>
					</li>
					<li className="menu-item">
						<NavLink
							to={"profile"}
							className={getClassName("menu-item-link")}
						>
							<User />
						</NavLink>
					</li>
					<li className="menu-item">
						<NavLink
							to={"about"}
							className={getClassName("menu-item-link")}
						>
							<Info />
						</NavLink>
					</li>
					<li className="menu-item">
						<NavLink
							to={"contact"}
							className={getClassName("menu-item-link")}
						>
							<Signature />
						</NavLink>
					</li>
					<li className="menu-item">
						<div
							onClick={handleLogOut}
							className={getClassName("menu-item-link")}
						>
							<LogOut />
						</div>
					</li>
				</ul>
			</nav>
		</header>
	)
}

export default Header
