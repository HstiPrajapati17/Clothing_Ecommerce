import React from 'react';
import Header from '../../HomePage/components/Header';
import Footer from '../../HomePage/components/Footer';

const PrivacyPolicy = () => {
	return (
		<>
			<div className="font-body text-dark min-h-screen privacy-policy bg-white">
				<Header />
				
				{/* Hero Section */}
				<section className="h-[200px] sm:h-[300px] bg-cover bg-center flex items-center justify-center text-white text-center title-hero-bg">
					<div className="bg-black/20 w-full h-full flex items-center justify-center">
						<h1 className="text-3xl sm:text-5xl font-semibold drop-shadow-lg">Privacy Policy</h1>
					</div>
				</section>

				{/* Privacy Policy Content */}
				<div className="max-w-6xl mx-auto px-4 py-12 space-y-8 text-gray-800">
					<div>
						<h2 className="text-2xl font-semibold mb-4">Sample Privacy Policy Template</h2>
						<p>
							A Privacy Policy is a legal statement found on a website or app that outlines explicit details on how it will use personal data provided by users.
							Such personal data may include details like names, addresses, phone numbers, date of birth or data related to one’s financial information like credit card details.
							Other than outlining how your website will use the data, a Privacy Policy also describes the legal obligations you have if you fail to meet stipulated responsibilities as the website owner.
						</p>
						<p className="mt-2">
							As a business owner who's considering putting up a website, this article will give you a basic understanding of why you need to have a Privacy Policy and how you should incorporate one.
							As part of an array of privacy laws available across the globe, if your website will collect user information, you are legally required to have a Privacy Policy in place.
						</p>
						<p className="mt-2">
							If you are a resident member of the EU, having a Privacy Policy shows compliance with the General Data Protection Regulation (GDPR). Failure to comply with this EU regulation can lead to a fine of up to 20 million Euros according to Intersoft Consulting.
							The U.S., on the other hand, doesn’t have a singular governing data protection legislation. Rather, the U.S. uses a combination of related data privacy laws at the federal and state level.
						</p>
						<p className="mt-2">
							For instance, the Federal Trade Commission Act (FTCA) empowers the Federal Trade Commission to enforce privacy and data protection laws in federal jurisdiction.
							On the other hand, the California Online Privacy Protection Act (CalOPPA) is one such data privacy law which protects users with residency in California.
						</p>
						<p className="mt-2">
							A Privacy Policy also instils trust into users that their information is safe from unrelated parties. If not, you might be liable to legal repercussions.
							In general, a Privacy policy further legitimises your business by ensuring all the parties involved are part of a legally binding agreement.
						</p>
						<p className="mt-2">
							Having a strong Privacy Policy also offers a substantial competitive advantage. We don’t precisely understand how Google’s search algorithm works,
							but the biggest consensus is that if Google trusts your business, the higher your chances of appearing on its first search results pages.
						</p>
						<p className="mt-2">
							According to Woorank, most SEO experts believe that a website’s privacy policy has a pivotal role to play in how Google and other search engines ultimately identify you as "trust-worthy."
						</p>
					</div>

					<div>
						<h3 className="text-xl font-semibold mb-2">What to Include in Your Privacy Policy</h3>
						<p>
							The content of your Privacy Policy will largely depend on the function of your website, the information gathered and how you intend to use said information.
							However, to pass legal standards, all Privacy policies should have these basic elements within the text.
						</p>
					</div>

					<div>
						<h4 className="text-lg font-semibold mt-6 mb-2">Your Business Contact Information</h4>
						<p>
							Your Privacy needs to display your organization details like the legal name, contact details and place of business.
							Best practice recommends that this part should appear as the first or the last part of your Privacy Policy for visibility.
						</p>
					</div>

					<div>
						<h4 className="text-lg font-semibold mt-6 mb-2">The Type of Data You Will Collect</h4>
						<p>
							This ranges from emails, physical and IP addresses, credit card details, phone numbers or tracking locations.
							CalOPPA goes a step further to mandate that commercial or online websites collecting information on California residents must categorically list the type of personal information collected.
						</p>
					</div>

					<div>
						<h4 className="text-lg font-semibold mt-6 mb-2">How You Will Collect the Information</h4>
						<p>
							In addition to filling out forms, you can also collect data automatically through the use of cookies.
							Internet cookies are, by far, the easiest way to collect user data since browsers collect and save information from an array of sites users have previously visited.
							However, you must also obtain consent from users to use their cookies when collecting information.
						</p>
					</div>

					<div>
						<h4 className="text-lg font-semibold mt-6 mb-2">How You Intend to Use the Data</h4>
						<p>
							A vital element of a Privacy Policy is describing how you intend to use the data collected. This clause is particularly important if third-parties like advertising programs or fintech companies are in the loop.
						</p>
						<p className='mt-2'>
							Will you use the data for transactional purposes alone or will you also send newsletters to your visitors? Will your company share information with other third-party entities like merchants? If so, the law legally requires you to list down all the relevant parties who will also have access to user information alongside your business.
							In Quora's Privacy Policy, they have explained in great detail how they intend to use user information, and even further clarifying that they do not sell to third parties:
						</p>
					</div>

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

export default PrivacyPolicy;
