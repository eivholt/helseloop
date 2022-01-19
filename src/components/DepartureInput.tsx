import React from "react";

interface DepartureInputProps {
	isEditing: boolean;
	departure: string;
	setDeparture: (value: string) => void;
}

const DepartureInput: React.FC<DepartureInputProps> = ({
	isEditing,
	departure,
	setDeparture,
}) => {
	return (
		<>
			{isEditing ? (
				<>
					<label htmlFor="address">Adresse:</label>
					<input
						type="text"
						id="address"
						value={departure}
						onChange={(e) => setDeparture(e.target.value)}
					/>
				</>
			) : (
				<p>{departure}</p>
			)}
		</>
	);
};

export default DepartureInput;
