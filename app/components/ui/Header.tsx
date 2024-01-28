import Link from "next/link";
import MobileMenu from "./MobileMenu";

export default function Header() {
	return (
		<header className="absolute w-full z-30">
			<div className="max-w-6xl mx-auto px-4 sm:px-6">
				<div className="flex items-center justify-between h-16 md:h-20">
					{/* Site branding */}
					<div className="shrink-0 mr-4">
						{/* Logo */}
						<Link
							href="/"
							className="block"
							aria-label="Offerinfo"
						>
							<span className="w-8 h-8 fill-current text-gray-200">
								Offerinfo Station
							</span>
						</Link>
					</div>

					{/* Desktop navigation */}
					<nav className="hidden md:flex md:grow">
						{/* Desktop sign in links */}
						<ul className="flex grow justify-end flex-wrap items-center">
							<li>
								<Link
									href="/"
									className="font-medium text-gray-400 hover:text-gray-200 px-4 py-3 flex items-center transition duration-150 ease-in-out"
								>
									Sign in
								</Link>
							</li>
							<li>
								<Link
									href="/"
									className="btn-sm text-gray-400 hover:text-gray-200 ml-3"
								>
									Sign up
								</Link>
							</li>
						</ul>
					</nav>

					<MobileMenu />
				</div>
			</div>
		</header>
	);
}
