import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

interface AppointmentType {
	title: string;
	date: Date;
	instruction: string;
	address: string;
}

const Appointment: React.FC = () => {
	const [data, setData] = useState<AppointmentType | null>(null);

	const fetchData = async (): Promise<AppointmentType> =>
		fetch("appointmentData.json", {
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
		<div className="container">
			<h1>Innkalling til time</h1>
			<h2>{data.title}</h2>

			<h3>Tid:</h3>
			<p>{new Date(data.date).toString()}</p>

			<h3>Oppmøte:</h3>
			<p>Se innkallingsbrev</p>

			<h3>Sted:</h3>
			<p>{data.address}</p>

			<Link to="/routeplanner">Åpne reiseplanlegger</Link>

			<h3>VIKTIG!</h3>
			<p>{data.instruction}</p>
		</div>
	);
};

export default Appointment;
