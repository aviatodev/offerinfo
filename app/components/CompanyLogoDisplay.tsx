import React from "react";
import Image from "next/image";

// import accenture_logo from "/public/static/images/company_logo/transparent_bg/accenture.png";
// import clp_logo from "/public/static/images/company_logo/transparent_bg/clp.png";
// import gammon_logo from "/public/static/images/company_logo/transparent_bg/gammon.png";
// import hkex_logo from "/public/static/images/company_logo/transparent_bg/hkex.png";
// import hkjc_logo from "/public/static/images/company_logo/transparent_bg/hkjc.png";
// import hongkong_electric_logo from "/public/static/images/company_logo/transparent_bg/hongkong_electric.png";
// import hongkong_government_logo from "/public/static/images/company_logo/transparent_bg/hongkong_government.png";
// import hongkong_monetary_authority_logo from "/public/static/images/company_logo/transparent_bg/hongkong_monetary_authority.png";
// import hsbc_logo from "/public/static/images/company_logo/transparent_bg/hsbc.png";
// import jpmorgan_logo from "/public/static/images/company_logo/transparent_bg/jpmorgan.png";
// import morganstanley_logo from "/public/static/images/company_logo/transparent_bg/morganstanley.png";
// import mtr_logo from "/public/static/images/company_logo/transparent_bg/mtr.png";
// import swire_logo from "/public/static/images/company_logo/transparent_bg/swire.png";
// import towngas_logo from "/public/static/images/company_logo/transparent_bg/towngas.png";

import allin1 from "/public/static/images/company_logo/transparent_bg/allin1.png";

// const companyLogoList = [
// 	{
// 		name: "accenture",
// 		image: accenture_logo,
// 		description: "accenture-logo",
// 	},
// 	{
// 		name: "clp",
// 		image: clp_logo,
// 		description: "clp-logo",
// 	},
// 	{
// 		name: "gammon",
// 		image: gammon_logo,
// 		description: "gammon-logo",
// 	},
// 	{
// 		name: "hkex",
// 		image: hkex_logo,
// 		description: "hkex-logo",
// 	},
// 	{
// 		name: "hkjc",
// 		image: hkjc_logo,
// 		description: "hkjc-logo",
// 	},
// 	{
// 		name: "hongkong_electric.png",
// 		image: hongkong_electric_logo,
// 		description: "hongkong_electric-logo",
// 	},
// 	{
// 		name: "hongkong_government",
// 		image: hongkong_government_logo,
// 		description: "hongkong_government-logo",
// 	},
// 	{
// 		name: "hongkong_monetary_authority",
// 		image: hongkong_monetary_authority_logo,
// 		description: "hongkong_monetary_authority-logo",
// 	},
// 	{
// 		name: "hsbc",
// 		image: hsbc_logo,
// 		description: "hsbc-logo",
// 	},
// 	{
// 		name: "jpmorgan",
// 		image: jpmorgan_logo,
// 		description: "jpmorgan-logo",
// 	},
// 	{
// 		name: "morganstanley",
// 		image: morganstanley_logo,
// 		description: "morganstanley-logo",
// 	},
// 	{
// 		name: "mtr",
// 		image: mtr_logo,
// 		description: "mtr-logo",
// 	},
// 	{
// 		name: "swire",
// 		image: swire_logo,
// 		description: "swire-logo",
// 	},
// 	{
// 		name: "towngas",
// 		image: towngas_logo,
// 		description: "towngas-logo",
// 	},
// ];

export default function CompanyLogoDisplay() {
	return (
		<div className="flex flex-wrap my-4 gap-12 justify-center bg-slate-200">
			{/* {companyLogoList.map((company_logo, index) => (
					<Image
						src={company_logo.image}
						key={index}
						alt={company_logo.description}
						className="max-h-28 max-w-52 bg-slate-100"
					/>
				))} */}
			<Image
				src={allin1}
				alt="company logo"
				priority={true}
			/>
		</div>
	);
}
