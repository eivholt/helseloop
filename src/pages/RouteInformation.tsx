import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

// 	setIsCompanionWanted: (value: boolean) => void;
// 	data: any;
// }

// const RouteInformation: React.FC<RouteInformationProps> = ({
// 	isCompanionWanted,
// 	setIsCompanionWanted,
// 	data,
// }) => {
const RouteInformation = () => {
	const [data, setData] = useState<any>(null);
	const [isCompanionWanted, setIsCompanionWanted] = useState<boolean>(true);

	const fetchData = async () =>
		fetch("/routeplannerData.json", {
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
			<h2>{data.title}</h2>
			<h3>Tid:</h3>
			<p>{new Date(data.date).toString()}</p>

			<h3>Avreise fra:</h3>
			<p>{data.address}</p>

			<h3>Reiseledsager:</h3>

			<input
				type="checkbox"
				name="companion"
				id="companion"
				checked={isCompanionWanted}
				onChange={() => setIsCompanionWanted(!isCompanionWanted)}
			/>
			<label htmlFor="companion">Jeg ønsker ledsager</label>
			{isCompanionWanted && <p>{data.companion}</p>}

			<Link to="/routeplanner/plan">Finn reiseplan</Link>
		</>
	);
};

export default RouteInformation;
