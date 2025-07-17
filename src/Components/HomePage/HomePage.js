import React from 'react'
import "../Styles/home-page.css"
import { IoPersonOutline, IoSearchOutline } from "react-icons/io5";
import { HiOutlineShoppingBag } from 'react-icons/hi';
import { LiaShoppingBagSolid } from 'react-icons/lia';
import Header from './components/Header';
import HeroSlider from './components/HeroSlider';
import TopCollections from './components/Card';
const HomePage = () => {
	return <>
		<div className='home-page'>
			<Header />
			<div className="hero-container relative h-[320px] sm:h-[400px] md:h-[520px] lg:h-[675px]">
				<HeroSlider />
			</div>
			<TopCollections />
		</div>
	</>
}

export default HomePage

