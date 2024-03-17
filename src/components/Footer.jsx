import { Facebook, Twitter, Youtube } from 'lucide-react'

const Footer = () => {
	return (
		<footer className='footer flex flex-col lg:flex-row justify-between items-center p-2 text-neutral-content'>
			<aside className='items-center grid-flow-col'>
				<a href={'/'}>
					<h1 className='text-3xl font-bold'>
						<span className='text-emerald-500'>SAFE</span> COLLECTION
					</h1>
				</a>
			</aside>
			<p>Copyright © 2024 - All right reserved</p>
			<nav className='grid-flow-col gap-4 md:place-self-center md:justify-self-end'>
				<a href='/'>
					<Twitter />
				</a>
				<a href='/'>
					<Youtube />
				</a>
				<a href='/'>
					<Facebook />
				</a>
			</nav>
		</footer>
	)
}

export default Footer
