import { Swiper, SwiperSlide } from 'swiper/react'
import Product from './Product'

import 'swiper/css'
import 'swiper/css/pagination'

const WinterCollection = () => {
	return (
		<div>
			<h1 className='text-3xl mt-10 font-bold'>ЗИМНЯЯ КОЛЛЕКЦИЯ</h1>
			<div className='flex items-center justify-between mt-10'>
				<Swiper
					pagination={{ clickable: true }}
					slidesPerView={4}
					className='mySwiper flex items-center justify-between my-auto'
				>
					<SwiperSlide className='lg:flex cursor-pointer items-center hover:scale-105 transition-all duration-300'>
						<Product image={'/ItemClothes.jpg'} category={'Зимняя'} />
					</SwiperSlide>
					<SwiperSlide className='lg:flex cursor-pointer items-center hover:scale-105 transition-all duration-300'>
						<Product image={'/ItemClothes.jpg'} category={'Зимняя'} />
					</SwiperSlide>
					<SwiperSlide className='lg:flex cursor-pointer items-center hover:scale-105 transition-all duration-300'>
						<Product image={'/ItemClothes.jpg'} category={'Зимняя'} />
					</SwiperSlide>
					<SwiperSlide className='lg:flex cursor-pointer items-center hover:scale-105 transition-all duration-300'>
						<Product image={'/ItemClothes.jpg'} category={'Зимняя'} />
					</SwiperSlide>
					<SwiperSlide className='lg:flex cursor-pointer items-center hover:scale-105 transition-all duration-300'>
						<Product image={'/ItemClothes.jpg'} category={'Зимняя'} />
					</SwiperSlide>
					<SwiperSlide className='lg:flex cursor-pointer items-center hover:scale-105 transition-all duration-300'>
						<Product image={'/ItemClothes.jpg'} category={'Зимняя'} />
					</SwiperSlide>
					<SwiperSlide className='lg:flex cursor-pointer items-center hover:scale-105 transition-all duration-300'>
						<Product image={'/ItemClothes.jpg'} category={'Зимняя'} />
					</SwiperSlide>
					<SwiperSlide className='lg:flex cursor-pointer items-center hover:scale-105 transition-all duration-300'>
						<Product image={'/ItemClothes.jpg'} category={'Зимняя'} />
					</SwiperSlide>
				</Swiper>
			</div>
		</div>
	)
}

export default WinterCollection
