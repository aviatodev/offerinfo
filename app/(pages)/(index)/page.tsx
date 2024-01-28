import React from "react";
import CompanyLogoDisplay from "../../components/CompanyLogoDisplay";

export default function Welcome() {
	return (
		<div className="text-4xl text-center justify-center items-center mt-1 mb-1 lg:mt-4 lg:mb-8">
			<p className="text-sm lg:text-lg xl:text-2xl mb-4">
				A database to assist your job hunting
			</p>
			<p className="text-xs lg:text-base">
				Contributed by our kind applicants
			</p>

			<CompanyLogoDisplay />

			<p className="text-sm lg:text-lg xl:text-2xl mb-4">
				Leave your interview progress and feedback here
			</p>
			<p className="text-xs lg:text-base">Thank you!</p>
		</div>
	);
}
