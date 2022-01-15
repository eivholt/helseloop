import React from "react";
import { Routes, Route } from "react-router";
import Appointment from "./pages/Appointment";
import RouteInformation from "./pages/RouteInformation";
import RoutePlan from "./pages/RoutePlan";
import RoutePlanner from "./pages/RoutePlanner";

function App() {
	return (
		<div className="App">
			<Routes>
				<Route index element={<Appointment />} />

				<Route path="routeplanner" element={<RoutePlanner />}>
					<Route path="plan" element={<RoutePlan />} />
					<Route index element={<RouteInformation />} />
				</Route>
			</Routes>
		</div>
	);
}

export default App;
