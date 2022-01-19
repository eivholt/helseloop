import React from "react";

interface CompanionInputProps {
	isEditing: boolean;
	isCompanionWanted: boolean;
	setIsCompanionWanted: (value: boolean) => void;
	companion: string;
	setCompanion: (value: string) => void;
}

const CompanionInput: React.FC<CompanionInputProps> = ({
	isEditing,
	isCompanionWanted,
	setIsCompanionWanted,
	companion,
	setCompanion,
}) => {
	return (
		<>
			{isEditing ? (
				<>
					<div>
						<input
							type="checkbox"
							name="companion"
							id="companion-choice"
							checked={isCompanionWanted}
							onChange={() =>
								setIsCompanionWanted(!isCompanionWanted)
							}
						/>
						<label htmlFor="companion-choice">
							Jeg ønsker ledsager
						</label>
					</div>
					<div>
						<label htmlFor="companion-input">Ledsager: </label>
						<input
							id="companion-input"
							type="text"
							disabled={!isCompanionWanted}
							value={companion}
							onChange={(e) => setCompanion(e.target.value)}
						/>
					</div>
				</>
			) : (
				<p>
					{isCompanionWanted && companion ? companion : "Ikke ønsket"}
				</p>
			)}
		</>
	);
};

export default CompanionInput;
