// node层代码  通过webpack dev:server打包babel处理
import React from "react";
import express from "express";
import { renderToString } from "react-dom/server";
import routes from "../src/App";
import { StaticRouter, matchPath, Route } from "react-router-dom";
import { Provider } from "react-redux";
import { serverStore } from "../src/store/index";
import Header from "../src/views/Header";

const store = serverStore();
const app = express();
app.use(express.static("public")); // 将public转化为静态资源，引用时不必写入如19行
app.get("*", (req, res) => {
	// routes.some(route => {
	//   // use `matchPath` here
	//   const match = matchPath(req.path, route);
	//   if (match) promises.push(route.loadData(match));
	//   return match;
	// });
	// 服务端初始化时，请求所有异步数据，并存入promises中，执行完数据后插入到首页

	let promises = [];
	routes.some(route => {
		const match = matchPath(req.url, route);
		if (match) {
			const { loadData } = route.component;
			if (loadData) {
				promises.push(loadData(store));
			}
		}
	});
	Promise.all(promises).then((data) => {
		const content = renderToString(
			<>
			<Provider store={store}>
				
				<StaticRouter location={req.url}>
					<Header />
					{routes.map(route => (
						<Route {...route}></Route>
					))}
				</StaticRouter>
			</Provider>
			</>
		); // 把dom解析成字符串

		console.log(data, 'data-------Promise')
		res.send(`
      <html>
        <head>
          <meta charset="utf-8"/>
          <title>react-ssr</title>
        </head>
        <body>
          <div id="root">${content}</div>
          <script>
            window.__context = ${JSON.stringify(store.getState())}
          </script>
          <script src="./bundle.js"></script>
        </body>
      </html>
    `);
	}).catch(e => {
		console.log(e)
	})
})
app.listen("3000", () => {
	console.log("监听成功！");
});
