export const metadata = {
	title: "Terms and Conditions",
	description: "Terms and Conditions",
};

export default function Terms() {
	return (
		<section>
			<div className="max-w-6xl mx-auto px-4 sm:px-6">
				<div className="pt-20 md:py-20 border-t border-gray-800">
					{/* Section header */}
					<div className="max-w-3xl mx-auto text-center pb-12 md:pb-16">
						<h1 className="h2 mb-4">Terms and Conditions</h1>
						<p className="text-sm md:text-lg text-gray-400">
							We do not have too much rules here. Just be honest,
							helpful and respectful to others on this platform.
							Let us make the community greater and useful.
						</p>
						<h1 className="pt-8 lg:pt-12 h2 mb-4">Core Values</h1>
						<div className="inline-flex text-sm font-semibold py-1 px-3 m-2 text-green-600 bg-green-200 rounded-full mb-4">
							Compassion - Helpful
						</div>
						<div className="inline-flex text-sm font-semibold py-1 px-3 m-2 text-green-600 bg-green-200 rounded-full mb-4">
							Integrity - Honest
						</div>
						<div className="inline-flex text-sm font-semibold py-1 px-3 m-2 text-green-600 bg-green-200 rounded-full mb-4">
							Inclusion - Respect
						</div>
						<div className="inline-flex text-sm font-semibold py-1 px-3 m-2 text-green-600 bg-green-200 rounded-full mb-4">
							Community - Growth
						</div>
						<h1 className="pt-8 lg:pt-12 h2 mb-4">Message</h1>
						<p className="text-sm md:text-lg text-gray-400">
							The free tier database that our team is using only
							last for 3 months. Ads will be added if the service
							provider charges our team a cost that we cannot
							afford. Our team guarantees that this is and forever
							be a non-profit making website.
						</p>
					</div>
				</div>
			</div>
		</section>
	);
}
