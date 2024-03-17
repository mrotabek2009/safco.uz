import { Link } from 'react-router-dom'
import Slider from './Slider'

const Hero = () => {
	return (
		<div>
			<div className='flex-col lg:flex-row flex gap-5 items-center justify-between mx-auto mt-10'>
				<Slider />
				<div>
					<Link to={'/services'}>
						<div className='card cursor-pointer hover:scale-105 transition-all duration-300 mx-auto w-80 md:w-96 h-[12.7rem] bg-[url("/public/clothes2.png")] bg-center bg-cover bg-no-repeat'>
							<h1 className='text-black text-center text-2xl mt-20'>
								НАНЕСЕНИЕ ЛОГОТИПА
							</h1>
						</div>
					</Link>
					<Link to={'/services'}>
						<div className='card cursor-pointer hover:scale-105 transition-all duration-300 mt-3 mx-auto w-80 md:w-96 h-[12.7rem] bg-[url("/public/clothes.jpg")]'>
							<h1 className='text-black text-center text-2xl mt-20'>
								ПОШИВ НА ЗАКАЗ
							</h1>
						</div>
					</Link>
				</div>
			</div>
		</div>
	)
}

export default Hero
