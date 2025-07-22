import t_shirt from "../Assets/Images/tshirt.jpg"
import t_shirt2 from "../Assets/Images/tshirt2.jpg"
import t_shirt3 from "../Assets/Images/tshirt3.jpg"
import t_shirt4 from "../Assets/Images/img20.jpg"
import t_shirt5 from "../Assets/Images/img20(1).jpg"
import t_shirt6 from "../Assets/Images/img20(2).jpg"
import dress from "../Assets/Images/img13.jpg"
import dress2 from "../Assets/Images/img13(1).jpg"
import dress3 from "../Assets/Images/img18.jpg"
import dress4 from "../Assets/Images/img18(1).jpg"
import top1 from "../Assets/Images/top.jpg"
import top2 from "../Assets/Images/top2.jpg"
import top3 from "../Assets/Images/img14.jpg"
import top4 from "../Assets/Images/img14(1).jpg"
import shirt from "../Assets/Images/shirt.jpg"
import shirt2 from "../Assets/Images/shirt2.jpg"
import shirt5 from "../Assets/Images/shirt5.jpg"
import shirt6 from "../Assets/Images/shirt6.jpg"
import shirt7 from "../Assets/Images/shirt3.jpg"
import shirt8 from "../Assets/Images/shirt4.jpg"
import shirt9 from "../Assets/Images/img22.jpg"
import shirt10 from "../Assets/Images/img22(1).jpg"
import couple from "../Assets/Images/couple1.jpg"
import couple5 from "../Assets/Images/couple5.jpg"
import couple8 from "../Assets/Images/couple8.jpg"
import Skirt from "../Assets/Images/skirt5.jpg";
import Skirt2 from "../Assets/Images/skirt5(1).jpg";
import Skirt3 from "../Assets/Images/denim skirt.jpg";
import short from "../Assets/Images/shorts1.jpg";
import short2 from "../Assets/Images/shorts1(1).jpg";
import { desc } from "framer-motion/m"
export const productsData = [
	{
		id: 1,
		name: "Classic Winter T-Shirt",
		description: "This classic winter t-shirt offers the perfect blend of comfort and warmth. Made from soft, insulating fabric, it’s ideal for layering or wearing solo on cooler days. The simple, timeless design makes it a must-have for your cold-weather wardrobe.",
		category: "Men",
		price: 799,
		oldPrice: 999,
		color: "White",
		size: "M",
		type: "T-Shirt",
		image: t_shirt,
		isPreOrder: false,
		isOnSale: true,
		discount: 20,
		colors: [
			{ colorCode: '#f1ebdf', image: t_shirt }
		],
	},
	{
		id: 2,
		name: "Simple Classic Couple Outfit",
		description: "This simple classic couple outfit brings effortless coordination and timeless charm. Made with soft, breathable fabric, it ensures all-day comfort while keeping your style in sync. Designed for everyday wear or casual outings, its clean lines and matching tones make it a go-to pick for modern couples who love to stay connected in style.",
		category: "Couple",
		price: 799,
		image: couple,
		color: "#75888a",
		colors: [{
			colorCode: "#75888a", image: couple
		}],
		size: "L",
		type: "Skirt",
	},
	{
		id: 3,
		name: "Plain Flair Dress",
		description: "Elegant and effortlessly stylish, this plain flair dress features a flowing silhouette that flatters every figure. Crafted from soft, breathable fabric, it’s perfect for both casual days and special outings. With its simple design and graceful movement, this dress brings timeless charm to any wardrobe.",
		category: "Women",
		price: 1799,
		image: dress3,
		color: "#975c40",
		colors: [
			{ colorCode: '#727c64', image: dress3 },
			{ colorCode: '#975c40', image: dress4 },
		],
		size: "L",
		type: "Dress",
	},
	{
		id: 4,
		name: "Stylish Casual Shirt",
		description: "Blending comfort with modern style, this stylish casual shirt is perfect for everyday wear. Made from lightweight, breathable fabric, it offers a relaxed fit with a clean finish. Whether you're heading out with friends or dressing down for the weekend, this shirt adds a sharp yet effortless touch to your look.",
		category: "Men",
		price: 1799,
		image: shirt,
		color: "#975c40",
		colors: [
			{ colorCode: '#975c40', image: shirt },
			{ colorCode: '#727c64', image: shirt2 },
		],
		size: "M",
		type: "Shirt",
	},
	{
		id: 5,
		name: "Classic Women Top",
		description: "Designed for everyday elegance, this classic women’s top combines simplicity with a flattering fit. Crafted from soft, breathable fabric, it offers all-day comfort and pairs effortlessly with both jeans and skirts. A timeless wardrobe staple for casual and semi-formal looks.",
		category: "Women",
		price: 2999,
		image: top1,
		color: "#aa858f",
		colors: [
			{ colorCode: '#aa858f', image: top1 },
			{ colorCode: '#f2eeee', image: top2 },
		],
		size: "XL",
		type: "Top",
	},
	{
		id: 6,
		name: "Stylish Women T-shirt",
		description: "Step into effortless style with this chic women’s t-shirt, crafted for comfort and versatility. Its soft, stretchable fabric hugs just right, making it perfect for daily wear or layering. A modern fit with timeless appeal—your go-to for casual yet polished looks.",
		category: "Women",
		price: 499,
		image: t_shirt4,
		color: "#d5aa8a",
		colors: [
			{ colorCode: '#d5aa8a', image: t_shirt4 },
			{ colorCode: '#b2af90', image: t_shirt5 },
			{ colorCode: '#d3c0dd', image: t_shirt6 },
		],
		size: "S",
		type: "T-shirt",
	},
	{
		id: 7,
		name: "Flowered Designed Men's Shirt",
		description: "Add a fresh touch to your wardrobe with this flowered design men’s shirt. Crafted from smooth, breathable fabric, it features an eye-catching floral pattern that’s perfect for casual outings or beach vibes. Its relaxed fit and stylish flair make it a standout piece for every season.",
		category: "Men",
		price: 799,
		image: shirt5,
		color: "#e2d6ca",
		colors: [
			{ colorCode: "#e2d6ca", image: shirt5 },
			{ colorCode: "#d1dfeb", image: shirt6 },
		],
		size: "XL",
		type: "Shirt",
	},
	{
		id: 8,
		name: "Simple Classic Skirt",
		description: "Graceful and versatile, this simple classic skirt features a clean silhouette that pairs effortlessly with any top. Made from soft, flowy fabric, it offers a comfortable fit for all-day wear. Perfect for casual days or dressed-up evenings, it's a timeless addition to your wardrobe.",
		category: "Women",
		price: 2489,
		image: Skirt,
		color: "#75888a",
		colors: [
			{ colorCode: "#6c6f54", image: Skirt },
			{ colorCode: "#d7bca9", image: Skirt2 }
		],
		size: "S",
		type: "Skirt",
	},
	{
		id: 9,
		name: "Casual Plain T-Shirt",
		description: "Keep it easy and effortless with this casual plain t-shirt. Made from soft, breathable fabric, it offers a relaxed fit that’s perfect for everyday wear. Whether layered or worn solo, its minimalist design makes it a versatile must-have for any wardrobe.",
		category: "Men",
		price: 999,
		image: t_shirt2,
		color: "#fff",
		colors: [
			{ colorCode: '#9fa58f', image: t_shirt2 },
			{ colorCode: '#bde0f6', image: t_shirt3 },
		],
		size: "M",
		type: "T-Shirt",
	},
	{
		id: 10,
		name: "Simple Classic Couple Outfit",
		description: "Celebrate togetherness in style with this simple classic couple outfit. Designed for coordinated comfort, it features soft, breathable fabric and a timeless look that’s perfect for everyday moments or casual outings. A subtle yet meaningful way to show your connection through fashion.",
		category: "Couple",
		price: 2046,
		image: couple5,
		color: "#ac704c",
		colors: [
			{ colorCode: '#ac704c', image: couple5 }
		],
		size: "L",
		type: "Dress",
	},
	{
		id: 11,
		name: "Plain Party Dress",
		description: "Sleek and sophisticated, this plain party dress brings understated elegance to any occasion. Designed with a flattering fit and smooth, flowy fabric, it lets your natural beauty shine. Perfect for evening events, dinners, or celebrations where less truly is more.",
		category: "Women",
		price: 799,
		image: dress,
		color: "#36030c",
		colors: [
			{ colorCode: '#36030c', image: dress },
			{ colorCode: '#141529', image: dress2 }
		],
		size: "M",
		type: "Dress",
	},
	{
		id: 12,
		name: "Classic Denim Jacket",
		description: "Timeless and versatile, this classic denim jacket adds the perfect layer to any outfit. Made from durable, soft-washed denim, it offers a comfortable fit and a laid-back vibe. Whether paired with casual tees or dresses, it’s a staple piece for effortless everyday style.",
		category: "Men",
		price: 1099,
		image: shirt9,
		color: "#5d8ea2",
		colors: [
			{ colorCode: '#5d8ea2', image: shirt9 },
			{ colorCode: '#718ab2', image: shirt10 },
		],
		size: "XL",
		type: "Jacket",
	},
	{
		id: 13,
		name: "Women Shorts",
		description: "Stay cool and stylish with these women’s shorts, designed for everyday comfort and ease. Made from lightweight, breathable fabric, they offer a flattering fit with just the right amount of stretch. Perfect for casual outings, lounging, or sunny-day adventures.",
		category: "Women",
		price: 799,
		image: short,
		color: "#926351",
		colors: [
			{ colorCode: '#926351', image: short },
			{ colorCode: '#e6e1d8', image: short2 },
		],
		size: "L",
		type: "Short",
	},
	{
		id: 14,
		name: "Korean Style Couple Outfit",
		description: "Show off your bond in trendsetting fashion with this Korean style couple outfit. Featuring clean lines, soft pastels, and coordinated pieces, it blends minimalism with modern charm. Perfect for casual dates, strolls, or matching moments that turn heads with subtle sophistication.",
		category: "Couple",
		price: 1000,
		image: couple8,
		color: "#c08090",
		colors: [
			{ colorCode: '#c08090', image: couple8 },
		],
		size: "L",
		type: "T-Shirt",
	},
	{
		id: 15,
		name: "Checks Patterned Shirt",
		description: "Classic meets casual with this checks patterned shirt, crafted for both comfort and style. Made from soft, breathable fabric, it features a timeless checkered design that suits any occasion—from relaxed weekends to smart casual outings. A must-have staple for a sharp, everyday look.",
		category: "Men",
		price: 899,
		image: shirt7,
		color: "#ded0ca",
		colors: [
			{ colorCode: '#ded0ca', image: shirt7 },
			{ colorCode: '#a17b67', image: shirt8 },
		],
		size: "L",
		type: "Jacket",
	},
	{
		id: 16,
		name: "Denim Women Skirt",
		description: "A timeless wardrobe essential, this denim women’s skirt blends classic style with modern comfort. Made from durable, stretch-friendly denim, it offers a flattering fit that’s perfect for casual outings or styled-up looks. Pair it with anything from tees to blouses for effortless charm.",
		category: "Women",
		price: 799,
		image: Skirt3,
		color: "#94b2ca",
		colors: [{
			colorCode: "#94b2ca", image: Skirt3
		}],
		size: "L",
		type: "Skirt",
	},
	{
		id: 17,
		name: "Designed Korean Style Women Top",
		description: "Elevate your everyday look with this Korean-style women’s top, featuring unique design details and a flattering silhouette. Crafted from soft, lightweight fabric, it blends minimalism with modern flair—perfect for casual outings, café dates, or adding a trendy twist to your wardrobe.",
		category: "Women",
		price: 489,
		image: top3,
		color: "#cbd4e7",
		colors: [
			{ colorCode: "#cbd4e7", image: top3 },
			{ colorCode: "#8f8a70", image: top4 }
		],
		size: "L",
		type: "Top",
	},
];