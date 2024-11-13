import React from 'react';
import {
    Activity,
    Globe,
    Brain,
    Cpu,
    Shield,
    Sparkles,
    Microscope
} from 'lucide-react';
import HeroSection from '../components/HeroSection';

const Home = () => {
    return (
        <div className="min-h-screen bg-gradient-to-br from-blue-950 to-blue-900 text-white overflow-hidden">
            <HeroSection />

            {/* Innovation Hub */}
            <section className="py-24 relative">
                <div className="absolute inset-0 bg-black/50" />
                <div className="max-w-7xl mx-auto px-4">
                    <h2 className="text-5xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-600 mb-16 text-center">
                        Pioneering the Future of AI
                    </h2>
                    <div className="grid md:grid-cols-3 gap-12">
                        {[
                            { icon: Brain, title: "Neural Networks", desc: "Advanced deep learning architectures pushing the boundaries of AI capabilities" },
                            { icon: Globe, title: "Global Impact", desc: "Transforming industries across continents with state-of-the-art AI solutions" },
                            { icon: Activity, title: "Real-time Processing", desc: "Lightning-fast inference engines for immediate AI-powered decisions" }
                        ].map((item, index) => (
                            <div key={index} className="group hover:scale-105 transition-all duration-300">
                                <div className="bg-gradient-to-br from-gray-900 to-gray-800 p-8 rounded-2xl border border-gray-700 hover:border-purple-500">
                                    <item.icon className="w-12 h-12 text-purple-500 mb-6" />
                                    <h3 className="text-2xl font-semibold mb-4">{item.title}</h3>
                                    <p className="text-gray-400">{item.desc}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* AI Solutions Grid */}
            <section className="py-24 bg-gray-900">
                <div className="max-w-7xl mx-auto px-4">
                    <h2 className="text-4xl font-bold mb-16 text-center">
                        Cutting-edge AI Solutions
                    </h2>
                    <div className="grid md:grid-cols-4 gap-8">
                        {[
                            { title: "Computer Vision", desc: "Advanced image and video analysis" },
                            { title: "NLP Systems", desc: "Human-like text understanding" },
                            { title: "Predictive Analytics", desc: "Future-proof decision making" },
                            { title: "Quantum AI", desc: "Next-generation computing" }
                        ].map((item, index) => (
                            <div key={index} className="bg-gradient-to-br from-blue-900/50 to-purple-900/50 p-6 rounded-xl border border-gray-700">
                                <h3 className="text-xl font-semibold mb-3 text-blue-400">{item.title}</h3>
                                <p className="text-gray-400">{item.desc}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Stats Section */}
            <section className="py-24 relative overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-r from-purple-900/20 to-blue-900/20" />
                <div className="max-w-7xl mx-auto px-4">
                    <div className="grid md:grid-cols-4 gap-12">
                        {[
                            { number: "99.9%", label: "Accuracy Rate" },
                            { number: "500+", label: "Global Clients" },
                            { number: "50M+", label: "AI Predictions" },
                            { number: "24/7", label: "System Uptime" }
                        ].map((stat, index) => (
                            <div key={index} className="text-center">
                                <div className="text-5xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-600 mb-2">
                                    {stat.number}
                                </div>
                                <div className="text-gray-400">{stat.label}</div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Technology Stack */}
            <section className="py-24 bg-gray-900/50">
                <div className="max-w-7xl mx-auto px-4">
                    <h2 className="text-4xl font-bold mb-16 text-center">Our Technology Stack</h2>
                    <div className="grid md:grid-cols-3 gap-8">
                        {[
                            { icon: Cpu, title: "Quantum Processing", desc: "Leveraging quantum computing for complex AI operations" },
                            { icon: Shield, title: "Secure Infrastructure", desc: "Enterprise-grade security for your AI applications" },
                            { icon: Sparkles, title: "AutoML Systems", desc: "Automated machine learning pipeline optimization" }
                        ].map((item, index) => (
                            <div key={index} className="bg-gradient-to-br from-gray-800 to-gray-900 p-8 rounded-xl border border-gray-700">
                                <item.icon className="w-12 h-12 text-purple-500 mb-6" />
                                <h3 className="text-2xl font-semibold mb-4">{item.title}</h3>
                                <p className="text-gray-400">{item.desc}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Research & Development */}
            <section className="py-24">
                <div className="max-w-7xl mx-auto px-4">
                    <h2 className="text-4xl font-bold mb-16 text-center">R&D Initiatives</h2>
                    <div className="grid md:grid-cols-2 gap-12">
                        {[
                            { icon: Microscope, title: "Autonomous Systems", desc: "Developing next-generation autonomous decision-making systems" },
                            { icon: Brain, title: "Cognitive Computing", desc: "Advancing human-like reasoning capabilities" }
                        ].map((item, index) => (
                            <div key={index} className="bg-gradient-to-br from-blue-900/30 to-purple-900/30 p-12 rounded-2xl border border-gray-700">
                                <item.icon className="w-16 h-16 text-purple-500 mb-6" />
                                <h3 className="text-3xl font-semibold mb-4">{item.title}</h3>
                                <p className="text-gray-400 text-lg">{item.desc}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Use Cases */}
            <section className="py-24 bg-gray-900/50">
                <div className="max-w-7xl mx-auto px-4">
                    <h2 className="text-4xl font-bold mb-16 text-center">Industry Applications</h2>
                    <div className="grid md:grid-cols-3 gap-8">
                        {[
                            "Healthcare AI", "Financial Technology", "Industrial Automation",
                            "Smart Cities", "E-commerce", "Cybersecurity"
                        ].map((item, index) => (
                            <div key={index} className="bg-gradient-to-br from-gray-800 to-gray-900 p-6 rounded-xl border border-gray-700 hover:border-purple-500 transition-all duration-300">
                                <h3 className="text-xl font-semibold text-center text-blue-400">{item}</h3>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* AI Ethics */}
            <section className="py-24">
                <div className="max-w-7xl mx-auto px-4 text-center">
                    <h2 className="text-4xl font-bold mb-8">Responsible AI Development</h2>
                    <p className="text-xl text-gray-400 max-w-3xl mx-auto mb-12">
                        We're committed to developing AI systems that are ethical, transparent, and beneficial to humanity.
                    </p>
                    <div className="grid md:grid-cols-4 gap-8">
                        {[
                            "Transparency", "Fairness", "Privacy", "Accountability"
                        ].map((item, index) => (
                            <div key={index} className="bg-gradient-to-br from-blue-900/30 to-purple-900/30 p-6 rounded-xl border border-gray-700">
                                <h3 className="text-xl font-semibold text-blue-400">{item}</h3>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Partners */}
            <section className="py-24 bg-gray-900/50">
                <div className="max-w-7xl mx-auto px-4">
                    <h2 className="text-4xl font-bold mb-16 text-center">Trusted By Industry Leaders</h2>
                    <div className="grid md:grid-cols-5 gap-8">
                        {[1, 2, 3, 4, 5].map((_, index) => (
                            <div key={index} className="bg-gray-800 h-24 rounded-xl flex items-center justify-center">
                                <div className="text-2xl text-gray-600">Partner {index + 1}</div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Contact Section */}
            <section className="py-24">
                <div className="max-w-7xl mx-auto px-4 text-center">
                    <h2 className="text-4xl font-bold mb-8">Ready to Transform Your Future?</h2>
                    <p className="text-xl text-gray-400 max-w-3xl mx-auto mb-12">
                        Connect with our AI experts to explore how we can revolutionize your business
                    </p>
                    <button className="px-8 py-4 bg-gradient-to-r from-purple-600 to-blue-600 rounded-xl text-lg font-semibold hover:scale-105 transition-all duration-300">
                        Schedule a Consultation
                    </button>
                </div>
            </section>

            {/* Footer */}
            <footer className="py-12 bg-gray-900 text-center relative overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-r from-purple-900/20 to-blue-900/20" />
                <div className="relative z-10">
                    <div className="text-gray-400 mb-4 pr-3">
                        &copy; 2022 AI Innovations. All rights reserved.
                    </div>
                    <div className="flex justify-start space-x-6 ring-offset-fuchsia-900">
                        <a href="hariompandit.me" className="text-gray-400 hover:text-purple-500 transition-colors duration-300">Privacy Policy</a>
                        <a href="hariompandit.me" className="text-gray-400 hover:text-purple-500 transition-colors duration-300">Terms of Service</a>
                        <a href="hariompandit.me" className="text-gray-400 hover:text-purple-500 transition-colors duration-300">Contact Us</a>
                    </div>
                </div>
            </footer>
        </div>
    );
};

export default Home;