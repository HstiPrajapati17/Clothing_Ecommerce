import React from "react";
import Slider from "react-slick";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa";
import "../../Styles/home-page.css";
import { Cmn_section_title } from "../../Assets/cmn_components/Cmn_comp";

const reviewsData = [
	{
		img: "https://img.freepik.com/free-photo/horizontal-portrait-smiling-happy-young-pleasant-looking-female-wears-denim-shirt-stylish-glasses-with-straight-blonde-hair-expresses-positiveness-poses_176420-13176.jpg?semt=ais_hybrid&w=740",
		text: "Find the perfect balance of comfort and style with clothing designed for your daily life. From casual basics to fashion-forward looks, we’ve got you covered.",
		name: "MONICA JOHNS, COSMOPOLITAN",
	},
	{
		img: "https://media.istockphoto.com/id/1309328823/photo/headshot-portrait-of-smiling-male-employee-in-office.jpg?s=612x612&w=0&k=20&c=kPvoBm6qCYzQXMAn9JUtqLREXe9-PlZyMl9i-ibaVuY=",
		text: "Explore our latest collection of trendy and timeless outfits made to fit your unique vibe—easy to wear, easy to love.",
		name: "MADELYN GEORGE, ELLE",
	},
	{
		img: "https://www.shutterstock.com/image-photo/close-head-shot-portrait-preppy-600nw-1433809418.jpg",
		text: "Style meets comfort in our versatile fashion range. Whether you're dressing up or keeping it casual, we have something for every occasion.",
		name: "SARAH KIM, FORBES",
	},
];

// Custom Arrows
const PrevArrow = ({ onClick }) => (
	<button className="arrow-btn left" onClick={onClick}>
		<FaArrowLeft />
	</button>
);

const NextArrow = ({ onClick }) => (
	<button className="arrow-btn right" onClick={onClick}>
		<FaArrowRight />
	</button>
);

const Reviews = () => {
	const settings = {
		dots: true,
		infinite: true,
		speed: 500,
		centerMode: true,
		autoplay: true,
		autoplaySpeed: 3000,

		centerPadding: "0px",
		slidesToShow: 1,
		prevArrow: <PrevArrow />,
		nextArrow: <NextArrow />,
	};

	return (
		<section className="reviews-section">
			<Cmn_section_title main_title={"Customer Reviews"} title_des={"What our customers are saying about us."} />
			<div className="reviews-slider-container">
				<Slider {...settings}>
					{reviewsData.map((review, index) => (
						<div key={index} className="review-card p-[28px] sm:p-[38px]">
							<div className="review-avatar-container">
								<img
									src={review.img}
									alt={review.name}
									className="review-avatar"
								/>
							</div>
							<p className="review-text">{review.text}</p>
							<strong className="review-name">{review.name}</strong>
						</div>
					))}
				</Slider>
			</div>
		</section>
	);
};

export default Reviews;