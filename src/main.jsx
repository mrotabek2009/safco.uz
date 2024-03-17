import React from 'react'
import ReactDOM from 'react-dom/client'
import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import App from './App'
import './index.css'
import NotFound from './pages/404'
import About from './pages/About'
import Catalog from './pages/Catalog'
import Delivery from './pages/Delivery'
import News from './pages/News'
import Services from './pages/Services'

import './i18n.js'

const router = createBrowserRouter([
	{
		path: '/',
		element: <App />,
	},
	{
		path: '/catalog',
		element: <Catalog />,
	},
	{
		path: '/about',
		element: <About />,
	},
	{
		path: '/services',
		element: <Services />,
	},
	{
		path: '/delivery',
		element: <Delivery />,
	},
	{
		path: '/news',
		element: <News />,
	},
	{
		path: '/contact',
		element: <About />,
	},
	{
		path: '*',
		element: <NotFound />,
	},
])

ReactDOM.createRoot(document.getElementById('root')).render(
	<React.StrictMode>
		<RouterProvider router={router} />
	</React.StrictMode>
)
