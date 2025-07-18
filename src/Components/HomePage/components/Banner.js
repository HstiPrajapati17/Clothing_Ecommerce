import React from 'react'
import "../../Styles/home-page.css"
import "../../Styles/cmn-css.css"
import { Cmn_btn } from '../../Assets/cmn_components/Cmn_comp'

const Banner = ({ img }) => {
	return <>
		<div className="banner bg-[#d1d5db96] py-[46px] md:py-[80px]">
			<div className="max-w-7xl mx-auto flex justify-center items-stretch px-4 flex-wrap">
				<div className="w-full sm:w-1/3">
					<img src={img} alt="Winter Collection" className="object-cover" />
				</div>
				<div className="bg-white p-8 md:p-[60px] flex flex-col justify-center text-left w-full sm:w-1/2">
					<h4 className="text-[28px] md:text-[38px] font-semibold mb-5 lg:mb-6 leading-[36px] md:leading-[46px]">
						Classic Winter Collection
					</h4>
					<p className='text-black/80 text-[16px] xl:text-[18px]'>
						Dignissim lacus, turpis ut suspendisse vel tellus. Turpis purus, gravida orci, fringilla a. Ac sed eu fringilla odio mi. Consequat pharetra at magna imperdiet cursus ac faucibus sit libero. Ultricies quam nunc, lorem sit lorem urna, pretium aliquam ut..
					</p>
					<Cmn_btn className={"main-btn main-btn2 max-w-xs"} btn_name={"Shop Collection"} />
				</div>
			</div>
		</div>
	</>
}

export default Banner
