import React, { Component } from "react";
import css from "./css/Content.module.css";
import { savedPosts } from "../posts.json";

export class Content extends Component {
	constructor(props) {
		super(props);

		this.state = {};
	}
	render() {
		return (
			<div className={css.Content}>
				<div className={css.TitleBar}>
					<h1>My Posts</h1>
				</div>
				<div className={css.SearchResults}>
					{savedPosts.map((post) => {
						return (
							<div className={css.SearchItem} key={post.title}>
								<p>{post.title}</p>
								<p>{post.name}</p>
								<img src={post.image}></img>
								<p>{post.description}</p>
							</div>
						);
					})}
				</div>
			</div>
		);
	}
}

export default Content;
