import React from 'react'
import Header from '../../HomePage/components/Header'
import error_img from "../../Assets/Images/error.png"
import { Cmn_btn } from '../../Assets/cmn_components/Cmn_comp'

const Error404 = () => {
	return <>
		<div className='error-404 '>
			<Header />
			<div className='flex justify-center items-center my-14 text-center'>
				<div className='error-img'>
					<img src={error_img} alt="Error 404 - Page Not Found" className=" w-full" />
					<h3 className='text-black text-4xl font-semibold mb-3'>Page Not Found</h3>
					<p className='mb-4'>Please back to homepage or check our offer</p>
					<Cmn_btn className={"main-btn main-btn2"} btn_name="Back to HomePage" link={"/"} />
				</div>
			</div>
		</div>
	</>
}
export default Error404;