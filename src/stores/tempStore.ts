import { create } from "zustand"

type TempStore = {
	isLoggedIn: boolean
	toggleLogIn: () => void
}

const useTempStore = create<TempStore>((set) => ({
	isLoggedIn: localStorage.getItem("temp-user-status") === "true" || false,
	toggleLogIn: () => {
		set((state) => {
			const newStatus =
				localStorage.getItem("temp-user-status") === "true"
					? false
					: true
			localStorage.setItem("temp-user-status", String(newStatus))
			return { isLoggedIn: !state.isLoggedIn }
		})
	},
}))

export default useTempStore
