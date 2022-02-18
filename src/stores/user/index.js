import { createStore } from "redux";

const userReducer = (state, payload) => {
	const {type, data } = payload;

	switch (type) {
		case 'LOGIN':
			return {
				id: data.user.id,
				name: data.user.username,
			}
		case 'LOGOUT':
			return {
				id: null,
				name: null,
			}
		default:
			return state;
	}


}

export default createStore(userReducer);
