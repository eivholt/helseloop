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
			.then((res) => {
				console.log(res);
				var noe = res.connections.map((a: any) => ({
					...a,
					startTime: new Date(a.startTime),
				}));
				console.log({ noe });
				return noe;
			});

	useEffect(() => {
		fetchData().then((jsonRes) => setData(jsonRes));
	}, []);

	if (!data) return <></>;

	console.log({ data });

	return (
		<>
			<Link to="/routeplanner">Tilbake</Link>
			<h2>Reiseplan</h2>

			{data.map((connection: any, index: number) => (
				<Connection {...connection} key={index} />
			))}

			<RouteMap coordinates={data.map((a: any) => a.coordinates)} />
		</>
	);
};

export default RoutePlan;
