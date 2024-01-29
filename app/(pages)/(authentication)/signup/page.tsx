export const metadata = {
	title: "Sign Up",
	description: "Sign up to Offerinfo",
};

import Link from "next/link";

export default function SignUp() {
	return (
		<section className="relative">
			<div className="max-w-6xl mx-auto px-4 sm:px-6">
				<div className="pt-20 pb-8 md:pt-40 md:pb-20">
					{/* Page header */}
					<div className="max-w-3xl mx-auto text-center pb-8 md:pb-12">
						<h1 className="h1">Register now</h1>
					</div>

					{/* Form */}
					<div className="max-w-sm mx-auto">
						<form>
							{/* Username */}
							<div className="flex flex-wrap -mx-3 mb-4">
								<div className="w-full px-3">
									<label
										className="block text-gray-300 text-sm font-medium mb-1"
										htmlFor="full-name"
									>
										Username{" "}
										<span className="text-red-600">*</span>
									</label>
									<input
										id="full-name"
										type="text"
										className="form-input w-full text-gray-300"
										placeholder="Username (at least 5 characters)"
										required
									/>
								</div>
							</div>
							{/* ITSC Email */}
							<div className="flex flex-wrap -mx-3 mb-4">
								<div className="w-full px-3">
									<label
										className="block text-gray-300 text-sm font-medium mb-1"
										htmlFor="email"
									>
										ITSC Email{" "}
										<span className="text-red-600">*</span>
									</label>
									<input
										id="email"
										type="email"
										className="form-input w-full text-gray-300"
										placeholder="xxx@connect.xxxxx.com"
										required
									/>
								</div>
							</div>
							{/* Institution Name */}
							<div className="flex flex-wrap -mx-3 mb-4">
								<div className="w-full px-3">
									<label
										className="block text-gray-300 text-sm font-medium mb-1"
										htmlFor="institution-name"
									>
										Institution Name{" "}
										<span className="text-red-600">*</span>
									</label>
									<input
										id="institution-name"
										type="text"
										className="form-input w-full text-gray-300"
										placeholder="Harvard University"
										required
									/>
								</div>
							</div>
							{/* Program and Major */}
							<div className="flex flex-wrap -mx-3 mb-4">
								<div className="w-full px-3">
									<label
										className="block text-gray-300 text-sm font-medium mb-1"
										htmlFor="program-major"
									>
										ITSC Email{" "}
										<span className="text-red-600">*</span>
									</label>
									<input
										id="program-major"
										type="text"
										className="form-input w-full text-gray-300"
										placeholder="BEng in Googling and ChatGPT"
										required
									/>
								</div>
							</div>
							<div className="flex flex-wrap -mx-3 mb-4">
								<div className="w-full px-3">
									<label
										className="block text-gray-300 text-sm font-medium mb-1"
										htmlFor="password"
									>
										Password{" "}
										<span className="text-red-600">*</span>
									</label>
									<input
										id="password"
										type="password"
										className="form-input w-full text-gray-300"
										placeholder="Password (at least 6 characters)"
										required
									/>
								</div>
							</div>
							<div className="text-sm text-gray-500 text-center">
								I agree the shared data are valid and open to
								all users.{" "}
								<Link
									href="/terms"
									className="underline text-gray-400 hover:text-gray-200 hover:no-underline transition duration-150 ease-in-out"
								>
									Privacy Policy
								</Link>
								.
							</div>
							<div className="flex flex-wrap -mx-3 mt-6">
								<div className="w-full px-3">
									<button className="btn text-white bg-green-500 hover:bg-green-600 w-full">
										Sign up
									</button>
								</div>
							</div>
						</form>
						<div className="text-gray-400 text-center mt-6">
							Already using Offerinfo?{" "}
							<Link
								href="/signin"
								className="underline text-gray-400 hover:text-gray-200 transition duration-150 ease-in-out"
							>
								Sign in
							</Link>
						</div>
					</div>
				</div>
			</div>
		</section>
	);
}
