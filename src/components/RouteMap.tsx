import React from "react";
import { isLatLngLiteral } from "@googlemaps/typescript-guards";
import { createCustomEqual } from "fast-equals";

const RouteMap: React.FC<google.maps.MapOptions> = ({
	children,
	...options
}) => {
	const ref = React.useRef<HTMLDivElement>(null);
	const [map, setMap] = React.useState<google.maps.Map>();

	React.useEffect(() => {
		if (ref.current && !map) {
			setMap(new window.google.maps.Map(ref.current, {}));
		}
	}, [ref, map]);

	useDeepCompareEffectForMaps(() => {
		if (map) {
			map.setOptions(options);
		}
	}, [map, options]);

	return (
		<div
			ref={ref}
			id="map"
			style={{ width: "min(100%, 800px)", height: "500px" }}
		>
			{React.Children.map(children, (child) => {
				if (React.isValidElement(child)) {
					// set the map prop on the child component
					return React.cloneElement(child, { map });
				}
			})}
		</div>
	);
};

const deepCompareEqualsForMaps = createCustomEqual(
	(deepEqual) => (a: any, b: any) => {
		if (
			isLatLngLiteral(a) ||
			a instanceof google.maps.LatLng ||
			isLatLngLiteral(b) ||
			b instanceof google.maps.LatLng
		) {
			return new google.maps.LatLng(a).equals(new google.maps.LatLng(b));
		}

		// TODO extend to other types

		// use fast-equals for other objects
		return deepEqual(a, b);
	}
);

function useDeepCompareMemoize(value: any) {
	const ref = React.useRef();

	if (!deepCompareEqualsForMaps(value, ref.current)) {
		ref.current = value;
	}

	return ref.current;
}

function useDeepCompareEffectForMaps(
	callback: React.EffectCallback,
	dependencies: any[]
) {
	React.useEffect(callback, dependencies.map(useDeepCompareMemoize));
}

export default RouteMap;
