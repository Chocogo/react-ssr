import React, { useState } from "react";

function App(props) {
	const [count, setCount] = useState(1);
	return (
		<div>
			<div>
				initial hello world {props.title}, {count}
			</div>
			<button onClick={ () => {setCount(count +1)} }>add</button>
		</div>
	);
}

export default <App title="你好"/>;
