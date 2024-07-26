import React, { Component } from "react";
import css from "./css/Content.module.css";
import { savedPosts } from "../posts.json";
import PostItem from "./PostItem";
import Loader from "./Loader";

export class Content extends Component {
	constructor(props) {
		super(props);

		this.state = {
			isLoaded: false,
			posts: [],
		};
	}

	componentDidMount() {
		setTimeout(() => {
			this.setState({
				isLoaded: true,
				posts: savedPosts,
			});
		}, 2000);
	}

	handleSearch = (event) => {
		const name = event.target.value.toLowerCase();
		const filteredPosts = savedPosts.filter((post) => {
			return post.name.toLowerCase().includes(name);
		});

		this.setState({
			posts: filteredPosts,
		});
	};

	render() {
		return (
			<div className={css.Content}>
				<div className={css.TitleBar}>
					<h1>My Posts</h1>
					<form>
						<label htmlFor="searchInput">Search:</label>
						<input
							id="searchInput"
							type="search"
							name="searchInput"
							onChange={(event) => this.handleSearch(event)}
						></input>
						<h4>posts found {this.state.posts.length}</h4>
					</form>
				</div>
				{this.state.isLoaded ? (
					<div className={css.SearchResults}>
						<PostItem post={savedPosts} />
					</div>
				) : (
					<Loader />
				)}
			</div>
		);
	}
}

export default Content;
