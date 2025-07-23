import React from 'react';
import Header from '../../HomePage/components/Header';
import Footer from '../../HomePage/components/Footer';

const TermsAndCondition = () => {
	return (
		<>
			<div className="font-body text-dark min-h-screen privacy-policy bg-white">
				<Header />

				{/* Hero Section */}
				<section className="h-[200px] sm:h-[300px] bg-cover bg-center flex items-center justify-center text-white text-center title-hero-bg">
					<div className="bg-black/20 w-full h-full flex items-center justify-center">
						<h1 className="text-3xl sm:text-5xl font-semibold drop-shadow-lg">Terms and Conditions</h1>
					</div>
				</section>

				{/* Privacy Policy Content */}
				{/* Terms Content */}
				<div className="max-w-6xl mx-auto px-4 py-12 space-y-6 text-gray-800">

					<h2 className="text-xl font-semibold mt-6">Terms and Conditions</h2>
					<p>
						Welcome to StyleVerse!
					</p>
					<p>
						These terms and conditions outline the rules and regulations for the use of StyleVerse Website, located at Website.com.
					</p>
					<p>
						By accessing this website we assume you accept these terms and conditions. Do not continue to use Website Name if you do not agree to all the terms and conditions stated on this page.
					</p>
					<p>
						The following terminology applies to these Terms and Conditions, Privacy Statement and Disclaimer Notice and all Agreements:
						“Client”, “You” and “Your” refers to you, the person accessing this website and compliant with the Company’s terms and conditions.
						“The Company”, “Ourselves”, “We”, “Our” and “Us”, refers to our Company. “Party”, “Parties”, or “Us”, refers to both the Client and ourselves.
						All terms refer to the offer, acceptance and consideration of payment necessary to undertake the process of our assistance to the Client in the most appropriate manner
						for the express purpose of meeting the Client’s needs in respect of provision of the Company’s stated services, in accordance with and subject to, prevailing law of Netherlands.
					</p>

					<h2 className="text-xl font-semibold mt-6">Cookies</h2>
					<p>
						We employ the use of cookies. By accessing Website Name, you agreed to use cookies in agreement with the Company Name's Privacy Policy.
						Cookies are used to enable certain functionality and enhance the user experience. Some of our affiliate/advertising partners may also use cookies.
					</p>

					<h2 className="text-xl font-semibold mt-6">License</h2>
					<p>
						Unless otherwise stated, Company Name and/or its licensors own the intellectual property rights for all material on Website Name. All rights are reserved.
						You may access this for your own personal use subject to restrictions.
					</p>
					<ul className="list-disc list-inside">
						<li>Republish material from Website Name</li>
						<li>Sell, rent or sub-license material from Website Name</li>
						<li>Reproduce, duplicate or copy material from Website Name</li>
						<li>Redistribute content from Website Name</li>
					</ul>

					<h2 className="text-xl font-semibold mt-6">Comments</h2>
					<p>
						Parts of this website allow users to post opinions and information. Comments do not reflect the views of the Company, and the Company is not liable for them.
						We reserve the right to monitor and remove inappropriate comments.
					</p>
					<p>You warrant that:</p>
					<ul className="list-disc list-inside">
						<li>You have the rights and licenses to post the Comments.</li>
						<li>The Comments do not infringe any intellectual property rights.</li>
						<li>The Comments do not contain defamatory, libelous, offensive, or unlawful content.</li>
						<li>The Comments will not be used to solicit or promote business or unlawful activity.</li>
					</ul>

					<h2 className="text-xl font-semibold mt-6">Hyperlinking to Our Content</h2>
					<p>
						Certain organizations may link to our Website without prior approval, such as government agencies, search engines, and news organizations.
						We may approve link requests from other entities if the link is appropriate and non-deceptive.
					</p>

					<h2 className="text-xl font-semibold mt-6">iFrames</h2>
					<p>
						Without prior approval, you may not create frames around our webpages that alter their visual presentation.
					</p>

					<h2 className="text-xl font-semibold mt-6">Content Liability</h2>
					<p>
						We are not responsible for any content appearing on your website. You agree to defend us against any claims arising from content on your site that may violate laws or rights.
					</p>

					<h2 className="text-xl font-semibold mt-6">Reservation of Rights</h2>
					<p>
						We reserve the right to request removal of any or all links to our Website. By linking to our Website, you agree to be bound by these terms and conditions.
					</p>

					<h2 className="text-xl font-semibold mt-6">Removal of Links</h2>
					<p>
						If you find any link on our Website offensive, you may contact us. We will consider removal requests but are not obligated to comply.
					</p>

					<h2 className="text-xl font-semibold mt-6">Disclaimer</h2>
					<p>
						To the fullest extent permitted by law, we exclude all representations, warranties and conditions relating to our website.
						This does not limit any liability that cannot be excluded under applicable law.
						As long as the website is free to use, we are not liable for any loss or damage of any nature.
					</p>

					{/* Back to Top Button */}
					{/* <div className="flex justify-end">
						<button
							onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
							className="fixed bottom-6 right-6 bg-gray-800 text-white p-3 rounded-full shadow hover:bg-gray-700 transition"
							title="Back to top"
						>
							↑
						</button>
					</div> */}
				</div>
				<Footer />
			</div>
		</>
	);
};

export default TermsAndCondition;
