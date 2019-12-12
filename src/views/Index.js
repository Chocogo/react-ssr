import React, { useState, useEffect } from "react";
import { connect } from "react-redux";
import { getProduct } from "../store/product";

function Index(props) {
	const [count, setCount] = useState(1);
	useEffect(() => {
		props.getProduct();
	}, []);
	return (
		<div>
			<div>initial hello world, {count}</div>
			<button
				onClick={() => {
					setCount(count + 1);
				}}
        >
				add
			</button>
			<ul>
				{props.productLists.map(item => {
					return <li key={item.id}>{item.name}</li>;
				})}
			</ul>
		</div>
	);
}

// export default <App title="你好"/>;
export default connect(state => ({ productLists: state.product.lists }), {
	getProduct
})(Index);
