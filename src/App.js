import React from "react";
// import { Route } from 'react-router-dom'
import Index from './views/Index'
import About from './views/About'
import User from './views/User'



// export default (
// 	<>
// 	<Route exact path="/" component={Index}></Route>
// 	<Route path="/about" component={About}></Route>
// 	</>
// )

export default [
	{
		path: '/',
		// exact: true,
		component: Index,
		key:'index'
	}, {
		path: '/about',
		exact: true,
		component: About,
		key: 'about'
	},{
		path: '/user',
		exact: true,
		component: User,
		key: 'user'
	}
]
