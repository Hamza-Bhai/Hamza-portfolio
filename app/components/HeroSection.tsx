'use client';

import { motion } from 'framer-motion';
import { useState } from 'react';

export default function HeroSection() {
	const [selectedStack, setSelectedStack] = useState<'frontend' | 'backend' | 'devops' | null>(null);

	return (
		<section className="min-h-screen relative overflow-hidden py-24 md:py-0">
			<div className="absolute inset-0">
				<div className="absolute inset-0 bg-[url('/grid.svg')] opacity-10" />
			</div>

			<div className="relative z-10 min-h-screen flex flex-col items-center justify-center px-4 pt-8 md:pt-0">
				<motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="text-center mb-8 md:mb-12">
					<div className="space-y-3 md:space-y-4 mb-6 md:mb-8">
						<h1 className="text-4xl md:text-7xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-blue-500 via-purple-500 to-teal-500">
							Hamza Pervaiz
						</h1>
						<h2 className="text-2xl md:text-4xl font-bold text-white">SR Frontend Developer</h2>
						<p className="text-lg md:text-xl text-gray-400 max-w-2xl mx-auto">
							Experienced Senior Frontend Developer with 4+ years of experience in React.js and Next.js , and 1 year in Angular. Skilled in building responsive, high-performance web apps with clean, maintainable code. Passionate about user experience, modern web practices, and continuous learning.
						</p>
						<p className="text-base md:text-lg text-gray-500 max-w-2xl mx-auto">
							Previously Senior Frontend  Developer at <span className="text-blue-400">Appiskey</span> and Frontend  Lead at{' '}
							<span className="text-purple-400">Brandigo</span>
						</p>
					</div>
					<div className="flex flex-wrap justify-center gap-2 md:gap-3 mb-6 md:mb-8 w-9/12 m-auto">
						{/* <!-- Frontend --> */}
						<span className="px-3 md:px-4 py-1.5 md:py-2 bg-orange-500/10 rounded-full text-orange-400 text-xs md:text-sm">HTML5</span>
						<span className="px-3 md:px-4 py-1.5 md:py-2 bg-blue-500/10 rounded-full text-blue-400 text-xs md:text-sm">CSS3</span>
						<span className="px-3 md:px-4 py-1.5 md:py-2 bg-indigo-500/10 rounded-full text-indigo-400 text-xs md:text-sm">Bootstrap</span>
						<span className="px-3 md:px-4 py-1.5 md:py-2 bg-blue-500/10 rounded-full text-blue-400 text-xs md:text-sm">Tailwind CSS</span>
						<span className="px-3 md:px-4 py-1.5 md:py-2 bg-indigo-500/10 rounded-full text-indigo-400 text-xs md:text-sm">React-Bootstrap</span>
						<span className="px-3 md:px-4 py-1.5 md:py-2 bg-purple-500/10 rounded-full text-purple-400 text-xs md:text-sm">Material-UI</span>
						<span className="px-3 md:px-4 py-1.5 md:py-2 bg-yellow-500/10 rounded-full text-yellow-400 text-xs md:text-sm">JavaScript</span>
						<span className="px-3 md:px-4 py-1.5 md:py-2 bg-blue-500/10 rounded-full text-blue-500 text-xs md:text-sm">TypeScript</span>
						<span className="px-3 md:px-4 py-1.5 md:py-2 bg-purple-500/10 rounded-full text-purple-400 text-xs md:text-sm">React.js</span>
						<span className="px-3 md:px-4 py-1.5 md:py-2 bg-purple-500/10 rounded-full text-purple-400 text-xs md:text-sm">Next.js</span>
						<span className="px-3 md:px-4 py-1.5 md:py-2 bg-teal-500/10 rounded-full text-teal-400 text-xs md:text-sm">Redux Toolkit</span>
						<span className="px-3 md:px-4 py-1.5 md:py-2 bg-pink-500/10 rounded-full text-pink-400 text-xs md:text-sm">TanStack Query</span>
						<span className="px-3 md:px-4 py-1.5 md:py-2 bg-green-500/10 rounded-full text-green-400 text-xs md:text-sm">GSAP</span>
						{/* <!-- Forms & Validation --> */}
						<span className="px-3 md:px-4 py-1.5 md:py-2 bg-indigo-500/10 rounded-full text-indigo-400 text-xs md:text-sm">Formik</span>
						<span className="px-3 md:px-4 py-1.5 md:py-2 bg-indigo-500/10 rounded-full text-indigo-400 text-xs md:text-sm">React Hook Form</span>
						<span className="px-3 md:px-4 py-1.5 md:py-2 bg-purple-500/10 rounded-full text-purple-400 text-xs md:text-sm">Zod</span>
						{/* <!-- Backend & Database --> */}
						<span className="px-3 md:px-4 py-1.5 md:py-2 bg-teal-500/10 rounded-full text-teal-400 text-xs md:text-sm">Node.js</span>
						<span className="px-3 md:px-4 py-1.5 md:py-2 bg-green-500/10 rounded-full text-green-500 text-xs md:text-sm">MongoDB</span>
						{/* <!-- DevOps & Deployment --> */}
						<span className="px-3 md:px-4 py-1.5 md:py-2 bg-orange-500/10 rounded-full text-orange-400 text-xs md:text-sm">Git</span>
						<span className="px-3 md:px-4 py-1.5 md:py-2 bg-purple-500/10 rounded-full text-purple-400 text-xs md:text-sm">Vercel</span>
						<span className="px-3 md:px-4 py-1.5 md:py-2 bg-indigo-500/10 rounded-full text-indigo-400 text-xs md:text-sm">Railway</span>
						<span className="px-3 md:px-4 py-1.5 md:py-2 bg-yellow-500/10 rounded-full text-yellow-500 text-xs md:text-sm">AWS</span>
						{/* <!-- Analytics & Monitoring --> */}
						<span className="px-3 md:px-4 py-1.5 md:py-2 bg-green-500/10 rounded-full text-green-400 text-xs md:text-sm">Google Analytics</span>
						<span className="px-3 md:px-4 py-1.5 md:py-2 bg-green-500/10 rounded-full text-green-400 text-xs md:text-sm">Google Tag Manager</span>
						<span className="px-3 md:px-4 py-1.5 md:py-2 bg-red-500/10 rounded-full text-red-400 text-xs md:text-sm">Sentry</span>
						{/* <!-- Other --> */}
						<span className="px-3 md:px-4 py-1.5 md:py-2 bg-yellow-500/10 rounded-full text-yellow-500 text-xs md:text-sm">Firebase</span>
					</div>
				</motion.div>
				{/* Interactive System Architecture */}
				<div className="w-full max-w-5xl mx-auto relative px-2 md:px-4">
					<motion.div
						initial={{ opacity: 0 }}
						animate={{ opacity: 1 }}
						transition={{ delay: 0.3 }}
						className="bg-gray-900/50 backdrop-blur-sm rounded-lg border border-gray-800 p-4 md:p-8"
					>
						<div className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-8">
							{/* Frontend Layer */}
							<div
								className={`p-4 md:p-6 rounded-lg transition-colors border-2 ${selectedStack === 'frontend' ? 'bg-blue-500/20 border-blue-500/50' : 'bg-gray-800/50 hover:bg-gray-800/80 border-transparent'
									}`}
								onMouseEnter={() => setSelectedStack('frontend')}
								onMouseLeave={() => setSelectedStack(null)}
							>
								<h3 className="text-lg md:text-xl font-semibold mb-3 md:mb-4 text-blue-400">Frontend Development</h3>
								<ul className="space-y-1.5 md:space-y-2 text-xs md:text-sm text-gray-400">
									<li className="flex items-center gap-2">
										<div className="w-1.5 h-1.5 bg-blue-500 rounded-full" />
										Modern React Architectures
									</li>
									<li className="flex items-center gap-2">
										<div className="w-1.5 h-1.5 bg-blue-500 rounded-full" />
										Performance Optimization
									</li>
									<li className="flex items-center gap-2">
										<div className="w-1.5 h-1.5 bg-blue-500 rounded-full" />
										Responsive & Interactive UIs
									</li>
								</ul>
							</div>

							{/* Backend Layer */}
							<div
								className={`p-4 md:p-6 rounded-lg transition-colors border-2 ${selectedStack === 'backend' ? 'bg-purple-500/20 border-purple-500/50' : 'bg-gray-800/50 hover:bg-gray-800/80 border-transparent'
									}`}
								onMouseEnter={() => setSelectedStack('backend')}
								onMouseLeave={() => setSelectedStack(null)}
							>
								<h3 className="text-lg md:text-xl font-semibold mb-3 md:mb-4 text-purple-400">Backend Development</h3>
								<ul className="space-y-1.5 md:space-y-2 text-xs md:text-sm text-gray-400">
									<li className="flex items-center gap-2">
										<div className="w-1.5 h-1.5 bg-purple-500 rounded-full" />
										API Design & Deployment
									</li>
									<li className="flex items-center gap-2">
										<div className="w-1.5 h-1.5 bg-purple-500 rounded-full" />
										Database Integration
									</li>
									<li className="flex items-center gap-2">
										<div className="w-1.5 h-1.5 bg-purple-500 rounded-full" />
										Implement CRUD operations
									</li>
								</ul>
							</div>

							{/* DevOps Layer */}
							<div
								className={`p-4 md:p-6 rounded-lg transition-colors border-2 ${selectedStack === 'devops' ? 'bg-teal-500/20 border-teal-500/50' : 'bg-gray-800/50 hover:bg-gray-800/80 border-transparent'
									}`}
								onMouseEnter={() => setSelectedStack('devops')}
								onMouseLeave={() => setSelectedStack(null)}
							>
								<h3 className="text-lg md:text-xl font-semibold mb-3 md:mb-4 text-teal-400">DevOps & Cloud</h3>
								<ul className="space-y-1.5 md:space-y-2 text-xs md:text-sm text-gray-400">
									<li className="flex items-center gap-2">
										<div className="w-1.5 h-1.5 bg-teal-500 rounded-full" />
										AWS EC2
									</li>
									<li className="flex items-center gap-2">
										<div className="w-1.5 h-1.5 bg-teal-500 rounded-full" />
										Vercel Deployment
									</li>
									<li className="flex items-center gap-2">
										<div className="w-1.5 h-1.5 bg-teal-500 rounded-full" />
										Railway Deployment
									</li>
								</ul>
							</div>
						</div>
					</motion.div>
				</div>
			</div>
		</section>
	);
}
