import React from 'react';
import { Route, Routes, BrowserRouter } from 'react-router-dom';


//Components
import Login from './pages/login';
import Home from './pages/home';
import AuthApp from './pages/auth-app';
import Product from './pages/product';
import Batch from './pages/batch';



const routes = (
	<Routes>
		<Route path="/login" element={<Login />} />
		<Route path="/" element={<AuthApp />}>
			<Route exact path="/" element={<Home />} />
			<Route exact path="/product" element={<Product />} />
			<Route exact path="/batch/:packageId" element={<Batch />} />
		</Route>
	</Routes>
);


export default function configureRoutes() {
	return <BrowserRouter>{routes}</BrowserRouter>;
}
