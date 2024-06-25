import { useEffect } from "react";

const useClickOutside = (ref: any, handleChange: () => void) => {
	/* eslint-disable react-hooks/exhaustive-deps*/
	useEffect(() => {
		function handleClickOutside(event: { target: any }) {
			if (ref.current && !ref.current.contains(event.target)) {
				handleChange();
			}
		}

		// Bind the event listener
		document.addEventListener("mousedown", handleClickOutside);
		return () => {
			// Unbind the event listener on clean up
			document.removeEventListener("mousedown", handleClickOutside);
		};
	}, [ref]);
};

export default useClickOutside;
