import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Connection from "../components/Connection";
import RouteMap from "../components/RouteMap";

const RoutePlan = () => {
	const [data, setData] = useState<any>(null);

	const fetchData = async () =>
		fetch("/connections.json", {
			headers: {
				"Content-Type": "application/json",
				Accept: "application/json",
			},
		})
			.then((res) => res.json())
			//convert date string to Date object
			.then((res) =>
				res.connections.map((a: any) => ({
					...a,
					startTime: new Date(a.startTime),
				}))
			);

	useEffect(() => {
		fetchData().then((jsonRes) => setData(jsonRes));
	}, []);

	if (!data) return <></>;

	return (
		<>
			<Link to="/routeplanner">Tilbake</Link>
			<h2>Reiseplan</h2>
			{data.map((connection: any, index: number) => (
				<Connection {...connection} key={index} />
			))}
			<RouteMap
				center={{ lat: 67.279999, lng: 14.40501 }}
				zoom={7}
			></RouteMap>
		</>
	);
};

export default RoutePlan;
