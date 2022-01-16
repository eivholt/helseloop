import React, { useEffect, useMemo, useState } from "react";
import { Link } from "react-router-dom";
import Connection from "../components/Connection";
import Marker from "../components/Marker";
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

	const coordinates: any = useMemo(
		() => data?.map((a: any) => a.coordinates),
		[data]
	);

	if (!data) return <></>;

	return (
		<>
			<Link to="/routeplanner">Tilbake</Link>
			<h2>Reiseplan</h2>
			{data.map((connection: any, index: number) => (
				<Connection {...connection} key={index} />
			))}

			<RouteMap center={center(coordinates)} zoom={7.5}>
				{coordinates.map((a: any, index: number) => (
					<Marker
						position={a}
						key={index}
						icon={{
							url: imgUrl(index + 1),
							scaledSize: new google.maps.Size(40, 40),
						}}
					/>
				))}
			</RouteMap>
		</>
	);
};

const center = (arr: { lat: number; lng: number }[]) => {
	var x = arr.map((xy) => xy.lat);
	var y = arr.map((xy) => xy.lng);
	var cx = (Math.min(...x) + Math.max(...x)) / 2;
	var cy = (Math.min(...y) + Math.max(...y)) / 2;
	return { lat: cx, lng: cy };
};

const imgUrl = (a: any) =>
	"http://maps.google.com/mapfiles/kml/paddle/" + a + ".png";

export default RoutePlan;
