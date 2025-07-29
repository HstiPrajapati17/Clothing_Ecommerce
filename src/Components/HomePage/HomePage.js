import React from 'react'
import "../Styles/home-page.css"
import Header from './components/Header';
import HeroSlider from './components/HeroSlider';
import Cards from './components/Card';
import Banner from './components/Banner';
import winter_collection from "../Assets/Images/winter-collection3.jpg"
import { ProductCard, ProductCard2 } from './components/Product_cards';
import img1 from "../Assets/Images/img19.jpg"
import img_1 from "../Assets/Images/img19(1).jpg"
import img_2 from "../Assets/Images/img19(2).jpg"
import img_3 from "../Assets/Images/img(2).jpg"
import img2 from "../Assets/Images/img15.jpg"
import img2_1 from "../Assets/Images/img15(1).jpg"
import img3 from "../Assets/Images/img21.jpg"
import img3_1 from "../Assets/Images/img21(1).jpg"
import img3_2 from "../Assets/Images/img21(2).jpg"
import img4 from "../Assets/Images/img17.jpg"
import img4_1 from "../Assets/Images/img17(1).jpg"
import img4_2 from "../Assets/Images/img17(2).jpg"
import { Cmn_section_title } from '../Assets/cmn_components/Cmn_comp';
import Bls_Shipping from './components/Bls_Shipping';
import img5 from "../Assets/Images/img1.jpg"
import img5_1 from "../Assets/Images/img(1).jpg"
import img6 from "../Assets/Images/img7.jpg"
import img6_1 from "../Assets/Images/img7(1).jpg"
import img7 from "../Assets/Images/img10.jpg"
import img7_1 from "../Assets/Images/img10(1).jpg"
import img8 from "../Assets/Images/img8.jpg"
import img8_1 from "../Assets/Images/img8(1).jpg"
import img9 from "../Assets/Images/img12.jpg"
import img9_1 from "../Assets/Images/img12(1).jpg"
import img10 from "../Assets/Images/img2.jpg"
import img10_1 from "../Assets/Images/img2(1).jpg"
import img11 from "../Assets/Images/img3.jpg"
import img11_1 from "../Assets/Images/img3(1).jpg"
import img12 from "../Assets/Images/img4.jpg"
import img12_1 from "../Assets/Images/img4(1).jpg"
import CTASection from './components/Cta_section';
import Reviews from './components/Reviews';
import Brand_logo from './components/Brand_logo';
import Footer from './components/Footer';


const HomePage = () => {
	const BestSellers = [
		{
			name: "Puff Sleeve Square Neck Mini Dress",
			image: img1,
			price: 210,
			colors: [
				{ colorCode: 'rgb(212 158 156)', image: img1 },
				{ colorCode: 'rgb(208 173 129)', image: img_1 },
				{ colorCode: 'rgb(31 24 28)', image: img_2 },
				{ colorCode: 'rgb(161 15 26)', image: img_3 },
			],
			isPreOrder: true,
			isOnSale: false,
			isMarquee: false,
		},
		{
			name: "Scallop Edge Embroidered Blouse",
			image: img2,
			price: 145,
			colors: [
				{ colorCode: 'rgb(224 226 225)', image: img2 },
				{ colorCode: 'rgb(232 194 217)', image: img2_1 },
			],
			isPreOrder: false,
			isOnSale: false,
			isMarquee: true,

		},
		{
			name: "Men's Slim Fit Lightweight Puffer Jacket",
			image: img3,
			price: 130,
			oldPrice: 160,
			colors: [
				{ colorCode: 'rgb(176 180 178)', image: img3 },
				{ colorCode: 'rgb(124 113 94)', image: img3_1 },
				{ colorCode: 'rgb(41 41 45)', image: img3_2 },
			],
			isPreOrder: false,
			isOnSale: true,
			isMarquee: false,
			discount: 19,
		},
		{
			name: "Polka Dot Chiffon Tiered Mini Dress",
			image: img4,
			price: 240,
			colors: [
				{ colorCode: 'rgb(211 176 235)', image: img4 },
				{ colorCode: 'rgb(158 190 236)', image: img4_1 },
				{ colorCode: 'rgb(160 203 198)', image: img4_2 },
			],
			isPreOrder: true,
			isOnSale: false,
			isMarquee: false,

		},
	];
	const Trending_Outfits = [
		{
			name: "Long Sleeve Tops",
			image: img5,
			hoverImage: img5_1,
			price: 210,
			isPreOrder: false,
			isOnSale: false,
			isMarquee: false,
		},
		{
			name: "Winter Long Jacket",
			image: img6,
			hoverImage: img6_1,
			price: 320,
			oldPrice: 360,
			isPreOrder: false,
			isOnSale: true,
			isMarquee: false,
			discount: 12,
		},
		{
			name: "Winter Short Jacket",
			image: img7,
			hoverImage: img7_1,
			price: 200,
			isPreOrder: false,
			isOnSale: false,
			isMarquee: false,
		},
		{
			name: "Men’s Cozy Wool-Blend Sweater",
			image: img8,
			hoverImage: img8_1,
			price: 160,
			oldPrice: 280,
			isPreOrder: true,
			isOnSale: true,
			isMarquee: true,
			discount: 19,
		},
		{
			name: "Light Blue Tweed Jacket",
			image: img9,
			hoverImage: img9_1,
			price: 230,
			isPreOrder: true,
			isOnSale: false,
			isMarquee: false,
		},
		{
			name: "Long Sleeve Short Hoodie",
			image: img10,
			hoverImage: img10_1,
			price: 180,
			isPreOrder: false,
			isOnSale: false,
			isMarquee: false,
		},
		{
			name: "Two-in-One Hoodie Jacket",
			image: img11,
			hoverImage: img11_1,
			price: 260,
			oldPrice: 280,
			isPreOrder: false,
			isOnSale: false,
			isMarquee: false,
		},
		{
			name: "Short Casual jacket",
			image: img12,
			hoverImage: img12_1,
			price: 220,
			isPreOrder: false,
			isOnSale: true,
			isMarquee: false,
			discount: "16",
		},
	]
	return <>
		<div className='home-page'>
			<Header />
			<div className="hero-container relative h-[320px] sm:h-[400px] md:h-[520px] lg:h-[675px]">
				<HeroSlider />
			</div>
			<div className='py-[46px] md:py-[80px]'>
				<Cmn_section_title main_title={"Our Best-Sellers"} title_des={"Unmatched design—superior performance and customer satisfaction in one."} />
				<div className='flex flex-wrap gap-6 justify-center'>
					{BestSellers.map((product, idx) => (
						<ProductCard key={idx} {...product} />
					))}
				</div>
			</div>
			<Banner img={winter_collection} />
			<Bls_Shipping />
			<Cards />
			<div className='max-w-7xl mx-auto py-[46px] md:py-[80px]'>
				<Cmn_section_title main_title={"Trending Outfits"} title_des={"Here is our New Trending Outfits that you may like."} />
				<div className='flex flex-wrap gap-6 justify-center'>
					{Trending_Outfits.map((product, idx) => (
						<ProductCard2 key={idx} {...product} />
					))}
				</div>
			</div>
			<CTASection />
			<Reviews />
			<Brand_logo />
			<Footer />
			<div className="flex justify-end">
				<button
					onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
					className="fixed bottom-6 h-[50px] w-[50px] right-6 bg-gray-800 text-white p-3 text-xl rounded-full shadow hover:bg-gray-700 transition"
					title="Back to top"
				>
					↑
				</button>
			</div>
		</div>
	</>
}

export default HomePage

