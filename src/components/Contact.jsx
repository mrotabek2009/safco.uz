import { zodResolver } from '@hookform/resolvers/zod'
import { Mail, MessageCircle, User } from 'lucide-react'
import { useForm } from 'react-hook-form'
import { Toaster, toast } from 'sonner'
import { z } from 'zod'

const formSchema = z.object({
	name: z.string().nonempty('Пожалуйста, введите ваше имя'),
	email: z.string().email('Пожалуйста, введите корректный email адрес'),
	message: z.string().nonempty('Пожалуйста, введите ваше сообщение'),
})

const Contact = () => {
	const {
		register,
		handleSubmit,
		reset,
		formState: { errors },
	} = useForm({
		resolver: zodResolver(formSchema),
		defaultValues: {
			email: '',
			message: '',
			name: '',
		},
	})

	const onSubmit = data => {
		const telegramBotId = import.meta.env.VITE_PUBLIC_TELEGRAMBOT_API
		const telegramChatId = import.meta.env.VITE_PUBLIC_CHAT_ID

		fetch(`https://api.telegram.org/bot${telegramBotId}/sendMessage`, {
			method: 'POST',
			headers: {
				'Content-Type': 'application/json',
				'cache-control': 'no-cache',
			},
			body: JSON.stringify({
				chat_id: telegramChatId,
				text: `Имя: ${data.name}\nEmail: ${data.email}\nСообщение: ${data.message}`,
			}),
		})
			.then(() => {
				reset()
				toast.success('Сообщение успешно отправлено!')
			})
			.catch(error => {
				toast.error('Что-то пошло не так!')
				console.error('Ошибка при отправке сообщения:', error)
			})
	}

	return (
		<div className='w-1/2 mx-auto my-20'>
			<div className='flex flex-col gap-3 text-start'>
				<h3 className='text-2xl font-bold text-center'>Контакт</h3>
				<form
					className='flex  flex-col gap-4'
					onSubmit={handleSubmit(onSubmit)}
				>
					<label className='input input-bordered flex items-center gap-2'>
						<User />
						<input
							type='text'
							placeholder='Ваше имя (обязательно) *'
							{...register('name')}
							className='grow'
						/>
					</label>
					{errors?.name && (
						<span className='text-red-500'>{errors.name.message}</span>
					)}
					<label className='input input-bordered flex items-center gap-2'>
						<Mail />
						<input
							type='email'
							placeholder='Ваш E-mail (обязательно) *'
							{...register('email')}
							className='grow'
						/>
					</label>
					{errors?.email && (
						<span className='text-red-500'>{errors.email.message}</span>
					)}
					<label className='input input-bordered flex items-center gap-2'>
						<MessageCircle />
						<input
							type='text'
							placeholder='Сообщение'
							{...register('message')}
							className='grow'
						/>
					</label>
					{errors?.message && (
						<span className='text-red-500'>{errors.message.message}</span>
					)}
					<Toaster position='top-center' />
					<button type='submit' className='btn w-full'>
						Отправить
					</button>
				</form>
			</div>
		</div>
	)
}

export default Contact
