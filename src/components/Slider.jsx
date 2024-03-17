import { Swiper, SwiperSlide } from 'swiper/react'

import 'swiper/css'
import 'swiper/css/pagination'

const Slider = () => {
	return (
		<>
			<Swiper pagination={{ clickable: true }} className='mySwiper'>
				<SwiperSlide className='h-[0rem] lg:h-[26rem] hidden relative lg:flex cursor-move items-center'>
					<div className='pl-5 flex flex-col gap-5'>
						<h2 className='text-3xl text-white uppercase w-40'>
							Собственное производства
						</h2>
						<button className='btn btn-outline text-white w-40'>КАТАЛОГ</button>
					</div>
					<div className='absolute -z-10'>
						<img
							src={'/public/sliderImg1.png'}
							className='object-fill w-[350px] h-[300px] md:!w-[1700px] md:!h-[500px]'
							alt='Slider Image 1'
						/>
					</div>
				</SwiperSlide>
				<SwiperSlide className='h-[0rem] lg:h-[26rem] hidden relative lg:flex cursor-move items-center'>
					<div className='pl-5 flex flex-col gap-5'>
						<h2 className='text-3xl text-start text-black uppercase w-72'>
							Более 200 компаний нам доверяют
						</h2>
						<button className='btn btn-outline text-black w-40'>
							О КОМПАНИИ
						</button>
					</div>
					<div className='absolute -z-10'>
						<img
							src={'/public/sliderImg2.png'}
							className='object-fill w-[350px] h-[300px] md:!w-[1700px] md:!h-[500px]'
							alt='Slider Image 2'
						/>
					</div>
				</SwiperSlide>
			</Swiper>
		</>
	)
}

export default Slider
