import React from "react";
import Link from "next/link";

export default function Footer() {
	return (
		<footer>
			<div className="pb-12 md:pb-16 text-xs lg:text-base">
				<div className="max-w-6xl mx-auto px-4 sm:px-6">
					{/* Top area: Blocks */}
					<div className="grid md:grid-cols-12 gap-8 lg:gap-20 mb-8 md:mb-12">
						{/* 1st block */}
						<div className="md:col-span-4 lg:col-span-5">
							<div className="mb-2">
								{/* Logo */}
								<span className="text-base lg:text-2xl">
									To our users
								</span>
							</div>
							<div className="text-gray-400 mb-2">
								The HK economy is bad. Telegram groups are
								useless. Our team hopes everyone here can leave
								their job hunting experiences and update their
								interview progresses.
							</div>
							<div className="text-base lg:text-2xl">
								Every little helps!
							</div>
						</div>

						{/* 2nd, 3rd and 4th blocks */}
						<div className="md:col-span-8 lg:col-span-7 grid sm:grid-cols-3 gap-2 lg:gap-8">
							{/* 'News Sharing Platform' block */}
							<div className="text-xs lg:text-sm">
								<h6 className="text-gray-200 font-medium mb-1">
									News Sharing Platform
								</h6>
								<ul>
									<li className="mb-1 cursor-pointer">
										<Link
											href="https://t.me/+YhZ4l0Gj3BU2YzU1"
											rel="noopener noreferrer"
											target="_blank"
											className="text-gray-400 hover:text-gray-100 transition duration-150 ease-in-out"
										>
											2024 Fresher (Telegram)
										</Link>
									</li>
									<li className="mb-1 cursor-pointer">
										<Link
											href="https://t.me/+25h4NtLVSvQ1MDk1"
											rel="noopener noreferrer"
											target="_blank"
											className="text-gray-400 hover:text-gray-100 transition duration-150 ease-in-out"
										>
											2024 Internship (Telegram)
										</Link>
									</li>
									<li className="mb-1 cursor-pointer">
										<Link
											href="https://lihkg.com/thread/3536288/page/1"
											rel="noopener noreferrer"
											target="_blank"
											className="text-gray-400 hover:text-gray-100 transition duration-150 ease-in-out"
										>
											LIHKG Forum
										</Link>
									</li>
									<li className="mb-1">
										<span className="text-gray-400 hover:text-gray-100 transition duration-150 ease-in-out">
											Mainland Social Platforms
										</span>
									</li>
								</ul>
							</div>

							{/* 'Job Hunting Platforms' block */}
							<div className="text-xs lg:text-sm">
								<h6 className="text-gray-200 font-medium mb-1">
									Job Hunting Platforms
								</h6>
								<ul>
									<li className="mb-1 cursor-pointer">
										<Link
											href="https://www.linkedin.com/"
											rel="noopener noreferrer"
											target="_blank"
											className="text-gray-400 hover:text-gray-100 transition duration-150 ease-in-out"
										>
											Linkedin
										</Link>
									</li>
									<li className="mb-1 cursor-pointer">
										<Link
											href="https://hk.jobsdb.com/"
											rel="noopener noreferrer"
											target="_blank"
											className="text-gray-400 hover:text-gray-100 transition duration-150 ease-in-out"
										>
											JobsDB
										</Link>
									</li>
									<li className="mb-1 cursor-pointer">
										<Link
											href="https://hk.indeed.com/"
											rel="noopener noreferrer"
											target="_blank"
											className="text-gray-400 hover:text-gray-100 transition duration-150 ease-in-out"
										>
											Indeed
										</Link>
									</li>
									<li className="mb-1 cursor-pointer">
										<Link
											href="https://www.efinancialcareers.hk/"
											rel="noopener noreferrer"
											target="_blank"
											className="text-gray-400 hover:text-gray-100 transition duration-150 ease-in-out"
										>
											eFinancialCareers
										</Link>
									</li>
									<li className="mb-1 cursor-pointer">
										<Link
											href="https://hk.gradconnection.com/"
											rel="noopener noreferrer"
											target="_blank"
											className="text-gray-400 hover:text-gray-100 transition duration-150 ease-in-out"
										>
											GradConnection
										</Link>
									</li>
								</ul>
							</div>

							{/* Miscellaneous block */}
							<div className="text-xs lg:text-sm">
								<h6 className="text-gray-200 font-medium mb-1"></h6>
								<ul>
									<li className="mb-1">
										<Link
											href="/"
											className="text-gray-400 hover:text-gray-100 transition duration-150 ease-in-out"
										>
											Join Us
										</Link>
									</li>
									<li className="mb-1">
										<Link
											href="/"
											className="text-gray-400 hover:text-gray-100 transition duration-150 ease-in-out"
										>
											Partnership
										</Link>
									</li>
									<li className="mb-1">
										<Link
											href="/"
											className="text-gray-400 hover:text-gray-100 transition duration-150 ease-in-out"
										>
											Sponsorship
										</Link>
									</li>
									<li className="mb-1">
										<Link
											href="/"
											className="text-gray-400 hover:text-gray-100 transition duration-150 ease-in-out"
										>
											Prayer Room
										</Link>
									</li>
								</ul>
							</div>
						</div>
					</div>

					{/* Bottom area */}
					<div className="md:flex md:items-center md:justify-between">
						{/* Copyrights note */}
						<div className="text-gray-400 text-xs lg:text-sm mr-4">
							&copy; Aviato. All rights not reserved.
						</div>
					</div>
				</div>
			</div>
		</footer>
	);
}
