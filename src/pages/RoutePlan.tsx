import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Route, { RouteProps } from "../components/Route";

interface jsonFormat {
	routeSuggestion: Array<RouteProps>;
}

const RoutePlan = () => {
	const [data, setData] = useState<jsonFormat | null>(null);

	const fetchData = async () =>
		fetch("/connections.json", {
			headers: {
				"Content-Type": "application/json",
				Accept: "application/json",
			},
		}).then((res) => res.json());

	useEffect(() => {
		fetchData().then((jsonRes) => setData(jsonRes));
	}, []);

	if (!data) return <></>;

	return (
		<>
			<Link to="/routeplanner">Tilbake</Link>

			{data.routeSuggestion.map((route) => (
				<Route {...route} key={route.title} />
			))}
		</>
	);
};

export default RoutePlan;
