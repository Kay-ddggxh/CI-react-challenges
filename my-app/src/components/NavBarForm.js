import React from "react";
import css from "./css/NavBarForm.module.css";

class NavBarForm extends React.Component {
	constructor(props) {
		super(props);

		this.state = {
			isLoggedIn: true,
		};
	}

	handleClick() {
		this.setState(
			(prevState) => ({
				isLoggedIn: prevState.isLoggedIn === true ? false : true,
			}),
			() => console.log(this.state.isLoggedIn)
		);
	}

	render() {
		return (
			<div className={css.NavBar}>
				<h1>My Gallery</h1>
				{this.state.isLoggedIn ? (
					<button onClick={() => this.handleClick()}>Login</button>
				) : (
					<from>
						<label>Username:</label>
						<input type="text" value="Username"></input>
						<label>Password:</label>
						<input type="text" value="Password"></input>
						<button onClick={() => this.handleClick()}>Submit</button>
					</from>
				)}
			</div>
		);
	}
}

export default NavBarForm;
