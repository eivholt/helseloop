import React from "react";
import ReactDOM from "react-dom";
import "./index.scss";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import { BrowserRouter } from "react-router-dom";
import { Status, Wrapper } from "@googlemaps/react-wrapper";

const render = (status: Status) => {
	return <h1>{status}</h1>;
};

ReactDOM.render(
	<React.StrictMode>
		<BrowserRouter>
			<Wrapper
				apiKey={process.env.REACT_APP_GOOGLE_MAPS_API_KEY || ""}
				render={render}
			>
				<App />
			</Wrapper>
		</BrowserRouter>
	</React.StrictMode>,
	document.getElementById("root")
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
