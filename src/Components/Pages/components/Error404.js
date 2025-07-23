import React from 'react'
import Header from '../../HomePage/components/Header'
import error_img from "../../Assets/Images/error.png"

const Error404 = () => {
	return <>
		<div className='error-404 '>
			<Header />
			<div className='flex justify-center items-center my-14 text-center'>
				<div className='error-img'>
					<img src={error_img} alt="Error 404 - Page Not Found" className=" w-full" />
					<h3 className='text-black text-4xl font-semibold'>Page Not Found</h3>
					
				</div>
			</div>
		</div>
	</>
}
export default Error404;