import React, { useMemo } from "react";
import Connection from "./Connection";
import Marker from "./Marker";
import RouteMap from "./RouteMap";

export interface RouteProps {
	title: string;
	connections: Array<{
		title: string;
		description: string;
		origin: {
			name: string;
			coordinates: {
				lat: number;
				lng: number;
			};
		};
		destination: string;
		startTime: string;
		endTime: string;
	}>;
}

const Route: React.FC<RouteProps> = ({ title, connections }) => {
	const originCoordinates: any = useMemo(
		() =>
			connections.map(
				(a) => new google.maps.LatLng(a.origin.coordinates)
			),
		[connections]
	);
	return (
		<div className="route">
			<h2>Reiseplan: {title}</h2>
			{connections.map((connection, index: number) => (
				<Connection {...connection} key={index} />
			))}

			<RouteMap
				center={center(connections.map((a) => a.origin.coordinates))}
				zoom={7.5}
			>
				{originCoordinates.map((a: any, index: number) => (
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
		</div>
	);
};

const center = (arr: any) => {
	var x = arr.map((xy: any) => xy.lat);
	var y = arr.map((xy: any) => xy.lng);
	var cx = (Math.min(...x) + Math.max(...x)) / 2;
	var cy = (Math.min(...y) + Math.max(...y)) / 2;
	return { lat: cx, lng: cy };
};

const imgUrl = (a: any) =>
	"http://maps.google.com/mapfiles/kml/paddle/" + a + ".png";

export default Route;
