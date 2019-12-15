import React, { useState, useEffect } from "react";
import { connect } from "react-redux";
import { getProduct } from "../store/product";

function Index(props) {
	const [count, setCount] = useState(1);
	useEffect(() => {
		if (!props.productLists.length) {
			props.getProduct();
		}
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
// 通过初始化静态方法来请求异步数据
Index.loadData = (store) => {
	console.log('-----startgetProduct',store.dispatch(getProduct()))
	return store.dispatch(getProduct());
}

// export default <App title="你好"/>;
export default connect(state => ({ productLists: state.product.lists }), {
	getProduct
})(Index);
