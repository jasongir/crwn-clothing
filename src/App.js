import React from "react";
import "./App.css";

import { Switch, Route, Link } from "react-router-dom";

import HomePage from "./pages/homepage/homepage.component";
import ShopPage from "./pages/shop/shop.component";

const HatsPage = (props) => {
	console.log(props);

	return (
		<div>
			<h1>Hats page</h1>
			<Link to={"/"}>home</Link>
			<Link to={"/hats"}>hats</Link>
			<Link to={"/topics"}>topics</Link>
			<button onClick={() => props.history.push("/topics")}>Topics</button>
		</div>
	);
};

const TopicsPage = (props) => (
	<div>
		<h1>Topics page</h1>
		<Link to={`${props.match.url}/13`}>To topic 13</Link>
		<Link to={`${props.match.url}/14`}>To topic 14</Link>
		<Link to={`${props.match.url}/16`}>To topic 16</Link>
	</div>
);

const TopicsDetail = (props) => {
	console.log(props);
	return (
		<div>
			<h1>Topics Detail page: {props.match.params.topicId}</h1>
		</div>
	);
};

function App() {
	return (
		<div>
			<Switch>
				{/* chooses the first route that matches */}
				<Route exact path="/" component={HomePage} />
				<Route exact path="/shop" component={ShopPage} />

				{/* <Route exact path="/topics" component={TopicsPage} />
				<Route exact path="/topics/:topicId" component={TopicsDetail} />
   <Route exact path="/shop/hats" component={HatsPage} />*/}
			</Switch>
		</div>
	);
}

export default App;
