import React, { useEffect } from "react";
import { connect } from "react-redux";
import {getUserInfo} from "../store/userInfo";
console.log(getUserInfo)

function User(props) {
	useEffect(() => {
		if (!props.userInfoLists.length) {
			props.getUserInfo();
		}
	}, []);
	return (
		<div>
			<div>我是来自用户信息的数据</div>
			<ul>
				{props.userInfoLists.map(item => {
					return <li key={item.id}>{item.name}</li>;
				})}
			</ul>
		</div>
	);
}
// 通过初始化静态方法来请求异步数据
User.loadData = (store) => {
	console.log('-----startgetUserInfo',store.dispatch(getUserInfo()))
	return store.dispatch(getUserInfo());
}

// export default <App title="你好"/>;
export default connect(state => ({ userInfoLists: state.userInfo.lists }), {
	getUserInfo
})(User);
