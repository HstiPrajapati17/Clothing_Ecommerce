import React from "react";
// import "../Styles/top-collections.css";
import "../../Styles/home-page.css"
import men from "../../Assets/Images/image7.jpg";
import women from "../../Assets/Images/image.jpg";
import couple from "../../Assets/Images/couple4.jpg";
import { Cmn_title_btn } from "../../Assets/cmn_components/Cmn_comp";

const collections = [
	{ name: "Men", img: men },
	{ name: "Women", img: women },
	{ name: "Couple", img: couple },
];

const TopCollections = () => {
	return (
		<section className="top-collections relative max-w-7xl mx-auto">
			<h2 className="title">Categories</h2>
			<p className="subtitle">
				Express your style with our standout collection—fashion meets sophistication.
			</p>
			<div className="collection-grid">
				{collections.map((item, index) => (
					<div className="collection-card" key={index}>
						<img src={item.img} alt={item.name} />
						<Cmn_title_btn className={'title-btn collection-label xl m-3 flex justify-center items-center'} btn_title={item.name} />
					</div>
				))}
			</div>
		</section>
	);
};

export default TopCollections;
