// eslint-disable-next-line react/prop-types
const Product = ({ image, category }) => {
	return (
		<div className='p-2'>
			<img src={image} alt='clothes' />
			<p className='text-lg font-bold'>{category}</p>
			<h1 className='w-[80%]'>Модел UNG-10: Зимняя куртка для рабочих</h1>
		</div>
	)
}

export default Product
