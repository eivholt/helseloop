import React from "react";

export interface ConnectionProps {
	startTime: Date;
	origin: string;
	title: string;
}

const Connection: React.FC<ConnectionProps> = ({
	startTime,
	origin,
	title,
}) => {
	const formatNumber = (a: number): string =>
		a < 10 ? "0" + a : a.toString();

	const formatedTime =
		formatNumber(startTime.getHours()) +
		":" +
		formatNumber(startTime.getMinutes());

	return (
		<>
			<h3>
				{formatedTime} {origin}
			</h3>
			<p>{title}</p>
		</>
	);
};

export default Connection;
