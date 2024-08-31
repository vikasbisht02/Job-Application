import { create } from "zustand";
import axios from "axios";


// For Development Purpose
const API_URL = "http://localhost:5000";

axios.defaults.withCredentials = true;

export const useAuthStore = create((set) => ({
	user: null,
	error: null,
	isLoading: false,

	signup: async (email, password, name) => {
		set({ isLoading: true, error: null });
		try {
			const response = await axios.post(`${API_URL}/signup`, { email, password, name });
			set({ user: response.data.user, isLoading: false });
		} catch (error) {
			set({ error: error.response.data.message || "Error signing up", isLoading: false });
			throw error;
		}
	},
}));
