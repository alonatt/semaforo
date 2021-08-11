import React, { useState } from "react";

//include images into your bundle
import rigoImage from "../../img/rigo-baby.jpg";

//create your first component
const Home = () => {
	const [color, setcolor] = useState("");
	return (
		<div className="semaforo">
			<div className="rojo luzred">rojo</div>
			<div className="amarillo luzamarilla">amarillo</div>
			<div className="verde luzverde">verde</div>
		</div>
	);
};

export default Home;
