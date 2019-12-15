import React from "react";
import ReactDom from "react-dom";
import { BrowserRouter, Route } from "react-router-dom";
import routes from "../src/App";
import { Provider } from 'react-redux'
import { clientStore } from '../src/store/index'
import Header from "../src/views/Header";

const store = clientStore()
const Page = (
  <Provider store={store}>
    <BrowserRouter>
      <Header />
      {routes.map(route => {
        return (
          <Route {...route}></Route>
        )
      })
    }
    </BrowserRouter>
  </Provider>)
// 注水 客户端入口
ReactDom.hydrate(Page, document.getElementById("root"));
