import { Swiper, SwiperSlide } from 'swiper/react'
import Product from './Product'

import 'swiper/css'
import 'swiper/css/pagination'

const SummerCollection = () => {
	return (
		<div>
			<h1 className='text-3xl mt-10 font-bold'>ЛЕТНЯЯ КОЛЛЕКЦИЯ</h1>
			<div className='flex items-center justify-between mt-10'>
				<Swiper
					pagination={{ clickable: true }}
					slidesPerView={4}
					className='mySwiper flex items-center justify-between my-auto'
				>
					<SwiperSlide className='lg:flex cursor-pointer items-center hover:scale-105 transition-all duration-300'>
						<Product image={'/public/ItemClothes2.jpg'} category={'Летный'} />
					</SwiperSlide>
					<SwiperSlide className='lg:flex cursor-pointer items-center hover:scale-105 transition-all duration-300'>
						<Product image={'/public/ItemClothes2.jpg'} category={'Летный'} />
					</SwiperSlide>
					<SwiperSlide className='lg:flex cursor-pointer items-center hover:scale-105 transition-all duration-300'>
						<Product image={'/public/ItemClothes2.jpg'} category={'Летный'} />
					</SwiperSlide>
					<SwiperSlide className='lg:flex cursor-pointer items-center hover:scale-105 transition-all duration-300'>
						<Product image={'/public/ItemClothes2.jpg'} category={'Летный'} />
					</SwiperSlide>
					<SwiperSlide className='lg:flex cursor-pointer items-center hover:scale-105 transition-all duration-300'>
						<Product image={'/public/ItemClothes2.jpg'} category={'Летный'} />
					</SwiperSlide>
					<SwiperSlide className='lg:flex cursor-pointer items-center hover:scale-105 transition-all duration-300'>
						<Product image={'/public/ItemClothes2.jpg'} category={'Летный'} />
					</SwiperSlide>
					<SwiperSlide className='lg:flex cursor-pointer items-center hover:scale-105 transition-all duration-300'>
						<Product image={'/public/ItemClothes2.jpg'} category={'Летный'} />
					</SwiperSlide>
					<SwiperSlide className='lg:flex cursor-pointer items-center hover:scale-105 transition-all duration-300'>
						<Product image={'/public/ItemClothes2.jpg'} category={'Летный'} />
					</SwiperSlide>
				</Swiper>
			</div>
		</div>
	)
}

export default SummerCollection
