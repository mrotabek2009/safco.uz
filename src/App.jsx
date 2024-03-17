import { ArrowUpCircleIcon } from 'lucide-react'
import { useState } from 'react'
import './App.css'
import About from './components/About'
import Contact from './components/Contact'
import Footer from './components/Footer'
import Hero from './components/Hero'
import Navbar from './components/Navbar'
import SummerCollection from './components/SummerCollection'
import WinterCollection from './components/WinterCollection'

function App() {
	const [showScrollButton, setShowScrollButton] = useState(false)

	const scrollFunction = () => {
		if (
			document.body.scrollTop > 20 ||
			document.documentElement.scrollTop > 20
		) {
			setShowScrollButton(true)
		} else {
			setShowScrollButton(false)
		}
	}

	const scrollToTop = () => {
		document.body.scrollTop = 0
		document.documentElement.scrollTop = 0
	}

	window.onscroll = () => scrollFunction()

	return (
		<div className='container relative'>
			<Navbar />
			<Hero />
			<WinterCollection />
			<SummerCollection />
			<About />
			<Contact />
			<Footer />
			{showScrollButton && (
				<button className='scroll-button' onClick={scrollToTop}>
					<ArrowUpCircleIcon className='w-10 h-10 fixed bottom-5 right-5 z-10' />
				</button>
			)}
		</div>
	)
}

export default App
