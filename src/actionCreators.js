const logIn = user => {
	return {
		type: "LOG_IN",
		user

	}
} 

const logOut = user => {
	return {
		type: "LOG_OUT",
		user
	}
	
} 


export {logIn, logOut};