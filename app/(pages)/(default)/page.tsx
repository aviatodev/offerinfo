import React from "react";
import CompanyLogoDisplay from "../../components/CompanyLogoDisplay";

export default function Welcome() {
	return (
		<main className="mt-16 md:mt-20 max-w-7xl m-auto">
			<div className="text-4xl text-center justify-center items-center mt-1 mb-1 lg:mt-4 lg:mb-8">
				<p className="text-sm md:text-lg mb-4">
					A database to assist your job hunting
				</p>
				<p className="text-xs lg:text-base">
					Contributed by our kind applicants
				</p>

				<CompanyLogoDisplay />

				<p className="text-sm md:text-lg mb-4">
					Leave your interview progress and feedback here
				</p>
				<p className="text-xs lg:text-base">Thank you!</p>
			</div>
		</main>
	);
}
