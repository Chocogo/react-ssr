import React from "react";
import { Route } from 'react-router-dom'
import Index from './views/Index'
import About from './views/About'

export default (
	<>
	<Route exact path="/" component={Index}></Route>
	<Route path="/about" component={About}></Route>
	</>
)
