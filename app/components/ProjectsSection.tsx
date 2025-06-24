'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';
import { useRouter } from 'next/navigation'
export default function ProjectsSection() {
	const router = useRouter()
	return (
		<section className="py-20 px-4">
			<div className="max-w-6xl mx-auto">
				<motion.h2 initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }} className="text-3xl font-bold mb-16 text-center">
					Full Stack Projects
				</motion.h2>

				<div className="space-y-16">
					{/*  order.love2laundry.com */}
					<motion.div
						initial={{ opacity: 0, y: 20 }}
						whileInView={{ opacity: 1, y: 0 }}
						viewport={{ once: true }}
						className="bg-gray-900/50 rounded-xl overflow-hidden border border-gray-800"
					>
						<div className="p-8">
							<div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
								<div className="space-y-6">
									<div>
										<h3 className="text-2xl font-bold mb-4">Order.love2laundry - Laundry Order Management System</h3>
										<p className="text-gray-400">
											Order.love2laundry is a laundry order management system that allows users to place laundry orders, track their status, and manage their laundry orders
										</p>
									</div>

									<div className="grid grid-cols-2 gap-6">
										<div>
											<h4 className="text-sm font-semibold text-blue-400 mb-3">Frontend Tech Stack</h4>
											<ul className="space-y-2 text-sm text-gray-400">
												<li>• Nextjs</li>
												<li>• Bootstrap</li>
												<li>• React Bootstrap</li>
												<li>• MUI</li>
											</ul>
										</div>
										<div>
											<h4 className="text-sm font-semibold text-purple-400 mb-3">Backend Tech Stack</h4>
											<ul className="space-y-2 text-sm text-gray-400">
												<li>• Freshchat</li>
												<li>• Smartlook Client</li>
												<li>• Firebase</li>
												<li>• Google Analytics</li>
											</ul>
										</div>
									</div>
								</div>
								<div className="bg-black/30 rounded-xl flex justify-center cursor-pointer">
									<Image src="/lovetolaundry.png" alt="lovetolaundry" width={500} height={200} onClick={() => { router.push('https://order.love2laundry.com/') }} />
								</div>
							</div>
						</div>
					</motion.div>
					{/*  Resumetry */}
					<motion.div
						initial={{ opacity: 0, y: 20 }}
						whileInView={{ opacity: 1, y: 0 }}
						viewport={{ once: true }}
						className="bg-gray-900/50 rounded-xl overflow-hidden border border-gray-800"
					>
						<div className="p-8">
							<div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
								<div className="space-y-6">
									<div>
										<h3 className="text-2xl font-bold mb-4">Resumetry - Resume Builder</h3>
										<p className="text-gray-400">
											Resumetry is a resume builder that allows users to create a professional resume in minutes and share it with potential employers.
										</p>
									</div>

									<div className="grid grid-cols-2 gap-6">
										<div>
											<h4 className="text-sm font-semibold text-blue-400 mb-3">Frontend Tech Stack</h4>
											<ul className="space-y-2 text-sm text-gray-400">
												<li>• Vite</li>
												<li>• Reactjs</li>
												<li>• CSR</li>
												<li>• Tailwindcss</li>
												<li>• axios</li>
											</ul>
										</div>
										<div>
											<h4 className="text-sm font-semibold text-purple-400 mb-3">Backend Tech Stack</h4>
											<ul className="space-y-2 text-sm text-gray-400">
												<li>• Nodejs</li>
												<li>• Expressjs</li>
												<li>• MongoDB</li>
												<li>• Mongoose</li>
												<li>• Multer</li>
												<li>• Nodemon</li>
											</ul>
										</div>
									</div>
								</div>
								<div className="bg-black/30 rounded-xl flex justify-center cursor-pointer">
									<Image src="/resumetry.png" alt="resumetry" width={500} height={200} onClick={() => { router.push('https://resumetry-one.vercel.app/') }} />
								</div>
							</div>
						</div>
					</motion.div>
					{/* Offersjustforme */}
					<motion.div
						initial={{ opacity: 0, y: 20 }}
						whileInView={{ opacity: 1, y: 0 }}
						viewport={{ once: true }}
						className="bg-gray-900/50 rounded-xl overflow-hidden border border-gray-800"
					>
						<div className="p-8">
							<div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
								<div className="space-y-6">
									<div>
										<h3 className="text-2xl font-bold mb-4">Offersjustforme - Affiliate Marketing Website</h3>
										<p className="text-gray-400">
											Offersjustforme built an affiliate-based coupon and deals platform using Next.js
											13, with a custom React.js admin panel and a Laravel 7 backend for secure API
											communication. Integrated a WordPress-powered blog via GraphQL for dynamic
											content rendering.

										</p>
									</div>

									<div className="grid grid-cols-2 gap-6">
										<div>
											<h4 className="text-sm font-semibold text-blue-400 mb-3">Frontend Tech Stack</h4>
											<ul className="space-y-2 text-sm text-gray-400">
												<li>• Next.js for (SSR)</li>
												<li>• Reactjs for (Admin Panel)</li>
												<li>• Graphql for (Apis)</li>
												<li>• Wordpress for (Blogs)</li>
											</ul>
										</div>
										<div>
											<h4 className="text-sm font-semibold text-purple-400 mb-3">Backend Tech Stack</h4>
											<ul className="space-y-2 text-sm text-gray-400">
												<li>• Laravel 7 for (APIs)</li>
												<li>• MySQL for (Database)</li>
												<li>• Secure Apis communication</li>
												<li>• 300ms Average API Response Time</li>
											</ul>
										</div>
									</div>

									{/* <div className="space-y-3">
										<h4 className="text-sm font-semibold text-teal-400">Key Achievements</h4>
										<ul className="space-y-2 text-sm text-gray-400">
											<li>• 99.99% Uptime with Blue-Green Deployment</li>
											<li>• 300ms Average API Response Time</li>
											<li>• 45% Reduction in Infrastructure Costs</li>
										</ul>
									</div> */}
								</div>
								<div className="bg-black/30 rounded-xl flex justify-center cursor-pointer">
									<Image src="/offersjustforme.png" alt="Offersjustforme" width={500} height={200} onClick={() => { router.push('https://offersjustforme.netlify.app/') }} />
								</div>
							</div>
						</div>
					</motion.div>

					{/* WireframeToCode */}
					<motion.div
						initial={{ opacity: 0, y: 20 }}
						whileInView={{ opacity: 1, y: 0 }}
						viewport={{ once: true }}
						className="bg-gray-900/50 rounded-xl overflow-hidden border border-gray-800"
					>
						<div className="p-8">
							<div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
								<div className="space-y-6">
									<div>
										<h3 className="text-2xl font-bold mb-4">WireframeToCode - Wireframe into Reactjs code</h3>
										<p className="text-gray-400">
											WireframeToCode is an AI-powered app that converts wireframe images into
											clean React (JSX) and Tailwind CSS code, built with Next.js 15 App Router to
											streamline UI development.

										</p>
									</div>

									<div className="grid grid-cols-2 gap-6">
										<div>
											<h4 className="text-sm font-semibold text-blue-400 mb-3">Frontend Tech Stack</h4>
											<ul className="space-y-2 text-sm text-gray-400">
												<li>• Nextjs</li>
												<li>• Axios</li>
												<li>• Cloudinary</li>
												<li>• codesandbox</li>
											</ul>
										</div>
										<div>
											<h4 className="text-sm font-semibold text-purple-400 mb-3">Backend Tech Stack</h4>
											<ul className="space-y-2 text-sm text-gray-400">
												<li>• Nodejs</li>
												<li>• NeonDB</li>
												<li>• Drizzle-ORM</li>
												<li>• OpenRouter for (AI Model)</li>
											</ul>
										</div>
									</div>

									{/* <div className="space-y-3">
										<h4 className="text-sm font-semibold text-teal-400">Performance Metrics</h4>
										<ul className="space-y-2 text-sm text-gray-400">
											<li>• 1M+ Events/Minute Processing</li>
											<li>• Sub-second Query Response</li>
											<li>• 99.99% Data Accuracy</li>
										</ul>
									</div> */}
								</div>

								<div className="bg-black/30 rounded-xl flex justify-center cursor-pointer">
									<Image src="/wireframe.png" alt="wireframe" width={500} height={200} onClick={() => { router.push('https://wireframe-to-code-zeta.vercel.app/') }} />
								</div>
							</div>
						</div>
					</motion.div>
					{/*  Theapstore IPTV Selling Platform */}
					<motion.div
						initial={{ opacity: 0, y: 20 }}
						whileInView={{ opacity: 1, y: 0 }}
						viewport={{ once: true }}
						className="bg-gray-900/50 rounded-xl overflow-hidden border border-gray-800"
					>
						<div className="p-8">
							<div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
								<div className="space-y-6">
									<div>
										<h3 className="text-2xl font-bold mb-4">TheApstore - IPTV Subscription Selling Platform</h3>
										<p className="text-gray-400">
											TheAPStore.com is an IPTV subscription service website where I contributed to building a responsive and user-friendly frontend using modern React practices. The site includes features like subscription management, pricing pages, live chat integration, and mobile-first design to ensure a seamless user experience.
										</p>
									</div>

									<div className="grid grid-cols-2 gap-6">
										<div>
											<h4 className="text-sm font-semibold text-blue-400 mb-3">Frontend Tech Stack</h4>
											<ul className="space-y-2 text-sm text-gray-400">
												<li>• Nextjs</li>
												<li>• React Bootstrap</li>
											</ul>
										</div>
									</div>

									{/* <div className="space-y-3">
										<h4 className="text-sm font-semibold text-teal-400">Performance Metrics</h4>
										<ul className="space-y-2 text-sm text-gray-400">
											<li>• 1M+ Events/Minute Processing</li>
											<li>• Sub-second Query Response</li>
											<li>• 99.99% Data Accuracy</li>
										</ul>
									</div> */}
								</div>

								<div className="bg-black/30 rounded-xl flex justify-center cursor-pointer">
									<Image src="/ss-theapstore.png" alt="theapstore" width={500} height={200} onClick={() => { router.push('https://www.theapstore.com/') }} />
								</div>
							</div>
						</div>
					</motion.div>
				</div>
			</div>
		</section>
	);
}
