import clsx from "clsx"
import { Home, Info, Signature, User } from "lucide-react"
import { NavLink } from "react-router-dom"

const Header = () => {
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
				</ul>
			</nav>
		</header>
	)
}

export default Header
