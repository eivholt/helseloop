import React, { useEffect, useState } from "react";
import EditIcon from "../icons/edit.svg";
import NavIcon from "../icons/navigation.svg";
import SaveIcon from "../icons/save.svg";
import CancelIcon from "../icons/x.svg";
import { Link } from "react-router-dom";
import DepartureInput from "../components/DepartureInput";
import CompanionInput from "../components/CompanionInput";
import { getNorwegianDateString } from "../components/utils";

const RouteInformation = () => {
	const [data, setData] = useState<any>(null);
	const [isCompanionWanted, setIsCompanionWanted] = useState<boolean>(true);
	const [companion, setCompanion] = useState<string>("");
	const [departure, setDeparture] = useState<string>("");
	const [isEditing, setIsEditing] = useState<boolean>(false);

	const fetchData = async () =>
		fetch("/routeplannerData.json", {
			headers: {
				"Content-Type": "application/json",
				Accept: "application/json",
			},
		}).then((res) => res.json());

	useEffect(() => {
		fetchData().then((res) => {
			setData(res);
			setCompanion(res.companion);
			setDeparture(res.departure);
		});
	}, []);

	const saveChanges = () => {
		if (isEditing) {
			setData({ ...data, companion, departure });
			setIsEditing(false);
		}
	};

	const cancelChanges = () => {
		setCompanion(data.companion);
		setDeparture(data.departure);
		setIsEditing(false);
	};

	if (!data) return <></>;

	return (
		<>
			<h2>{data.title}</h2>

			<h3>Tid:</h3>
			<p>{getNorwegianDateString(new Date(data.date))}</p>

			<h3>Sted:</h3>
			<p>{data.address}</p>

			<h3>Avreise fra:</h3>
			<DepartureInput {...{ isEditing, departure, setDeparture }} />

			<h3>Reiseledsager:</h3>
			<CompanionInput
				{...{
					isEditing,
					isCompanionWanted,
					setIsCompanionWanted,
					companion,
					setCompanion,
				}}
			/>

			<div className="actions">
				{!isEditing ? (
					<>
						<button
							className="withIcon"
							onClick={() => setIsEditing(true)}
						>
							<img src={EditIcon} alt="Rediger" />
							<span>Rediger informasjon</span>
						</button>
						<Link to="/routeplanner/plan" className="withIcon">
							<img src={NavIcon} alt="Navigasjon" />
							<span>Finn reiseplan</span>
						</Link>
					</>
				) : (
					<>
						<button
							className="withIcon"
							onClick={() => saveChanges()}
						>
							<img src={SaveIcon} alt="Rediger" />
							<span>Lagre</span>
						</button>
						<button
							className="withIcon"
							onClick={() => cancelChanges()}
						>
							<img src={CancelIcon} alt="Rediger" />
							<span>Avbryt</span>
						</button>
					</>
				)}
			</div>
		</>
	);
};

export default RouteInformation;
