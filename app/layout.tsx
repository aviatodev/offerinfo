import "/public/static/css/style.css";

import { Montserrat } from "next/font/google";
import Header from "./components/ui/Header";
import Footer from "./components/ui/Footer";

const montserrat = Montserrat({
	weight: "400",
	subsets: ["latin"],
});

export const metadata = {
	title: "Offer Station",
	description: "We are here for the same goal.",
};

export default function RootLayout({
	children,
}: {
	children: React.ReactNode;
}) {
	return (
		<html lang="en">
			<body
				className={`${montserrat.className} font-inter antialiased bg-gray-900 text-gray-200 tracking-tight`}
			>
				<div className="flex flex-col min-h-screen overflow-hidden">
					<Header />
					{children}
					<Footer />
				</div>
			</body>
		</html>
	);
}
