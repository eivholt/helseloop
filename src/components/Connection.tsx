import React from "react";
import { formatedTime, formatNumber } from "./utils";

export interface ConnectionProps {
	startTime: string;
	title: string;
	description: string;
}

const Connection: React.FC<ConnectionProps> = ({
	startTime,
	description,
	title,
}) => {
	return (
		<>
			<h3>
				{formatedTime(new Date(startTime))} {title}
			</h3>
			<p>{description}</p>
		</>
	);
};

export default Connection;
