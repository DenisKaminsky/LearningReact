import React, { useState } from "react";

const Greeting = () => {
 	const [isClicked, setIsClicked] = useState(false);

	const onButtonClick = () => {
		setIsClicked((state) => !state);
	}

	return <React.Fragment>
		<h2>Hello world!</h2>
		{!isClicked && <p>Not clicked</p>}
		{isClicked && <p>Clicked</p>}
		<button onClick={onButtonClick}>Toggle text</button>
	</React.Fragment>
}

export default Greeting;