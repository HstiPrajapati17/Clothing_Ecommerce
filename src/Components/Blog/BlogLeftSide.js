import React from 'react';
import Header from '../HomePage/components/Header';
import Footer from '../HomePage/components/Footer';

const BlogLeftSide = () => {
	const blogs = [
		{
			id: 1,
			image: 'https://plus.unsplash.com/premium_photo-1683147858150-d1f96bae7d8f?fm=jpg&q=60&w=3000&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8c2hvcHBpbmclMjBtYWxsfGVufDB8fDB8fHww',
			date: 'April 9, 2019',
			admin: 'Admin',
			comments: 3,
			title: 'Even the all-powerful Pointing has no control about the blind texts',
			desc: 'Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts.'
		},
		{
			id: 2,
			image: 'https://media.istockphoto.com/id/1446098147/photo/shopping-happy-and-portrait-of-customer-with-bag-after-shopping-spree-buying-retail-fashion.jpg?s=612x612&w=0&k=20&c=OFL3OPm9SPaaUveM_z3-0DaFcvorK4H_wK4KnmSY0Og=',
			date: 'April 9, 2019',
			admin: 'Admin',
			comments: 3,
			title: 'Even the all-powerful Pointing has no control about the blind texts',
			desc: 'Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts.'
		},
		{
			id: 3,
			image: 'https://media.istockphoto.com/id/1369227756/photo/giggling-their-way-through-the-mall.jpg?s=612x612&w=0&k=20&c=QCk2FJg1m0bTFCOAvspDbCnM1p-NMMM7qdnPJXCwqH4=',
			date: 'April 9, 2019',
			admin: 'Admin',
			comments: 3,
			title: 'Even the all-powerful Pointing has no control about the blind texts',
			desc: 'Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts.'
		},
		{
			id: 4,
			image: 'https://housing.com/news/wp-content/uploads/2023/10/Mani-Square-Mall-Kolkata-Shopping-dining-and-entertainment-choices-f.jpg',
			date: 'April 9, 2019',
			admin: 'Admin',
			comments: 3,
			title: 'Even the all-powerful Pointing has no control about the blind texts',
			desc: 'Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts.'
		},
		{
			id: 5,
			image: 'https://t3.ftcdn.net/jpg/02/99/72/80/360_F_299728067_2WmK7Q4YXy5fzI86sgPznDKuw3QSeQYW.jpg',
			date: 'April 9, 2019',
			admin: 'Admin',
			comments: 3,
			title: 'Even the all-powerful Pointing has no control about the blind texts',
			desc: 'Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts.'
		},

		// Add more blog posts here
	];

	return (
		<>
			<div className='blog-page'>
				<Header />
				<div className="max-w-7xl mx-auto px-4 py-20">
					<div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
						{/* Blog List */}
						<div className="lg:col-span-2 space-y-10">
							{blogs.map(blog => (
								<div key={blog.id} className="flex flex-col md:flex-row gap-6">
									<img src={blog.image} alt="Blog" className="w-full md:w-64 h-48 object-cover rounded" />
									<div>
										<p className="text-sm text-gray-400 uppercase">{blog.date} &nbsp; {blog.admin} &nbsp; 💬 {blog.comments}</p>
										<h2 className="text-xl font-semibold mt-2 mb-2 text-gray-800 hover:text-black cursor-pointer">{blog.title}</h2>
										<p className="text-gray-600 mb-3">{blog.desc}</p>
										<button className="bg-black/90 text-white text-sm px-4 py-2 rounded hover:bg-black">Read more</button>
									</div>
								</div>
							))}
						</div>

						{/* Sidebar */}
						<div className="space-y-10">
							<div>
								<input type="text" placeholder="Type a keyword and hit enter" className="w-full border border-gray-300 px-4 py-2 rounded" />
							</div>

							<div>
								<h3 className="text-lg font-semibold mb-2">Categories</h3>
								<ul className="space-y-2 text-gray-600">
									<li>Bags (12)</li>
									<li>Shoes (22)</li>
									<li>Dress (37)</li>
									<li>Accessories (14)</li>
									<li>Makeup (42)</li>
									<li>Beauty (140)</li>
								</ul>
							</div>

							<div>
								<h3 className="text-lg font-semibold mb-2">Tag Cloud</h3>
								<div className="flex flex-wrap gap-2">
									{["Shop", "Products", "Shirt", "Jeans", "Shoes", "Dress", "Coats", "JumpSuits"].map(tag => (
										<span key={tag} className="text-lg bg-gray-200 px-3 py-1 rounded cursor-pointer hover:bg-gray-300">{tag}</span>
									))}
								</div>
							</div>

							<div>
								<h3 className="text-lg font-semibold mb-2">Paragraph</h3>
								<p className="text-md text-gray-600">
									Lorem ipsum dolor sit amet, consectetur adipisicing elit. Doloribus itaque, autem necessitatibus voluptate
									quod mollitia delectus est, sunt placeat nam vero cum culpa sapiente consectetur similique, inventore eos
									fugit cupiditate numquam!
								</p>
							</div>
						</div>
					</div>
				</div>
				<Footer />
			</div>
		</>
	);
};

export default BlogLeftSide;
