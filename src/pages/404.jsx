import { Link } from 'react-router-dom'
import Navbar from '../components/Navbar'

const NotFound = () => {
	return (
		<div>
			<Navbar />
			<div className='flex flex-col gap-3 h-[50vh] items-center justify-center'>
				<h1 className='text-8xl font-bold'>404</h1>
				<Link className='btn btn-outline' to={'/'}>
					Back to home
				</Link>
			</div>
		</div>
	)
}

export default NotFound
