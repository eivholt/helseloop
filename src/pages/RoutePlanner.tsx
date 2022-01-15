import React from "react";
import { Outlet } from "react-router-dom";

const RoutePlanner = () => {
	return (
		<div className="container">
			<h1>Reiseplanlegger</h1>
			<Outlet />
		</div>
	);
};

export default RoutePlanner;
