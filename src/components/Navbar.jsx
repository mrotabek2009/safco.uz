import {
	Facebook,
	Instagram,
	LocateIcon,
	Mail,
	Phone,
	Twitter,
} from 'lucide-react'
import { NavLink } from 'react-router-dom'
import { ThemeToggle } from './ThemeToggle'

const Navbar = () => {
	return (
		<div className='flex flex-col gap-3'>
			<div className='flex items-center justify-center lg:justify-between -mt-5'>
				<p>Производство спецодежды в Узбекистане</p>
				<div className='hidden lg:flex items-center gap-4'>
					<label htmlFor='my_modal_7' className='btn'>
						Вход
					</label>
					<span>|</span>
					<div className='hidden lg:flex'>
						<p>Корзина / UZS0.00 </p>
					</div>
				</div>
				<input type='checkbox' id='my_modal_7' className='modal-toggle' />
				<div className='modal' role='dialog'>
					<div className='modal-box flex flex-col gap-3 text-start'>
						<h3 className='text-lg font-bold'>LOGIN</h3>
						<label>Username or email address *</label>
						<label className='input input-bordered flex items-center gap-2'>
							<svg
								xmlns='http://www.w3.org/2000/svg'
								viewBox='0 0 16 16'
								fill='currentColor'
								className='w-4 h-4 opacity-70'
							>
								<path d='M2.5 3A1.5 1.5 0 0 0 1 4.5v.793c.026.009.051.02.076.032L7.674 8.51c.206.1.446.1.652 0l6.598-3.185A.755.755 0 0 1 15 5.293V4.5A1.5 1.5 0 0 0 13.5 3h-11Z' />
								<path d='M15 6.954 8.978 9.86a2.25 2.25 0 0 1-1.956 0L1 6.954V11.5A1.5 1.5 0 0 0 2.5 13h11a1.5 1.5 0 0 0 1.5-1.5V6.954Z' />
							</svg>
							<input type='text' className='grow' placeholder='Email' />
						</label>
						<label>Password *</label>
						<label className='input input-bordered flex items-center gap-2'>
							<svg
								xmlns='http://www.w3.org/2000/svg'
								viewBox='0 0 16 16'
								fill='currentColor'
								className='w-4 h-4 opacity-70'
							>
								<path
									fillRule='evenodd'
									d='M14 6a4 4 0 0 1-4.899 3.899l-1.955 1.955a.5.5 0 0 1-.353.146H5v1.5a.5.5 0 0 1-.5.5h-2a.5.5 0 0 1-.5-.5v-2.293a.5.5 0 0 1 .146-.353l3.955-3.955A4 4 0 1 1 14 6Zm-4-2a.75.75 0 0 0 0 1.5.5.5 0 0 1 .5.5.75.75 0 0 0 1.5 0 2 2 0 0 0-2-2Z'
									clipRule='evenodd'
								/>
							</svg>
							<input type='password' placeholder='Password' className='grow' />
						</label>
						<div className='form-control flex items-start'>
							<label className='cursor-pointer flex gap-3 label'>
								<input
									type='checkbox'
									defaultChecked
									className='checkbox checkbox-sm checkbox-accent'
								/>
								<span className='label-text'>Remember me</span>
							</label>
						</div>
						<button className='btn'>Login</button>
					</div>
					<label className='modal-backdrop' htmlFor='my_modal_7'>
						Close
					</label>
				</div>
				<div className='hidden lg:flex items-center gap-3'>
					<ThemeToggle />
					<span>|</span>
					<a href='/'>
						<Facebook />
					</a>
					<a href='/'>
						<Instagram />
					</a>
					<a href='/'>
						<Twitter />
					</a>
					<a href='/'>
						<Mail />
					</a>
				</div>
			</div>
			<hr />
			<div className='text-start hidden lg:flex items-center justify-between'>
				<a href={'/'}>
					<h1 className='text-3xl font-bold'>
						<span className='text-emerald-500'>SAFE</span> COLLECTION
					</h1>
				</a>
				<div className='flex gap-10'>
					<div className='flex flex-col items-center gap-3'>
						<p className='flex items-center gap-1'>
							<Phone />
							(+998 93) 525-25-75
						</p>
						<p className='flex items-center gap-1'>
							<Phone />
							(+998 93) 525-26-62
						</p>
						<p className='flex items-center gap-1'>
							<Phone />
							(+998 75) 221-03-60
						</p>
					</div>

					<div className='flex flex-col items-center gap-3'>
						<p className='flex items-center gap-1'>
							<LocateIcon />
							ул. Шеркулов 7А, Карши
						</p>
						<p className='flex items-center gap-1'>
							<LocateIcon />
							Учтепинский р-н, г. Ташкент
						</p>
						<p className='flex items-center gap-1'>
							<Mail />
							info@safco.uz
						</p>
					</div>
				</div>
			</div>
			<div className='flex flex-wrap gap-5 items-center justify-center'>
				<NavLink
					to='/'
					className={({ isActive }) =>
						isActive ? 'bg-black/20 rounded-lg' : ''
					}
				>
					<button className='btn btn-outline'>ГЛАВНАЯ</button>
				</NavLink>
				<NavLink
					to='/catalog'
					className={({ isActive }) =>
						isActive ? 'bg-black/20 rounded-lg' : ''
					}
				>
					<button className='btn btn-outline'>КАТАЛОГ</button>
				</NavLink>
				<NavLink
					to='/about'
					className={({ isActive }) =>
						isActive ? 'bg-black/20 rounded-lg' : ''
					}
				>
					<button className='btn btn-outline'>О КОМПАНИИ</button>
				</NavLink>
				<NavLink
					to='/services'
					className={({ isActive }) =>
						isActive ? 'bg-black/20 rounded-lg' : ''
					}
				>
					<button className='btn btn-outline'>УСЛУГИ</button>
				</NavLink>
				<NavLink
					to='/delivery'
					className={({ isActive }) =>
						isActive ? 'bg-black/20 rounded-lg' : ''
					}
				>
					<button className='btn btn-outline'>ДОСТАВКА</button>
				</NavLink>
				<NavLink
					to='/news'
					className={({ isActive }) =>
						isActive ? 'bg-black/20 rounded-lg' : ''
					}
				>
					<button className='btn btn-outline'>НОВОСТИ</button>
				</NavLink>
				<NavLink
					to='/contact'
					className={({ isActive }) =>
						isActive ? 'bg-black/20 rounded-lg' : ''
					}
				>
					<button className='btn btn-outline'>КОНТАКТЫ</button>
				</NavLink>{' '}
				<input
					type='text'
					placeholder='Search'
					className='input input-bordered w-72 md:w-40'
				/>
			</div>
			<div className='flex flex-col lg:flex-row items-center justify-between'>
				<p>Лидер на узбекском рынке спецодежды</p>
				<span className='rotate-90 lg:rotate-0'>|</span>
				Cоотношение цены и качества.
				<span className='rotate-90 lg:rotate-0'>|</span>
				Бесплатная доставка по всей стране
			</div>
		</div>
	)
}

export default Navbar
