import React, { useEffect, useState } from 'react';

const Button = ({ children, className, ...props }) => (
    <button className={`px-4 py-2 rounded ${className}`} {...props}>
        {children}
    </button>
);

const HeroSection = () => {
    const [isVisible, setIsVisible] = useState(false);

    useEffect(() => {
        setIsVisible(true);
    }, []);

    return (
        <div className="min-h-screen bg-gradient-to-br from-blue-950 to-blue-900 text-white overflow-hidden">

            <main className="container mx-auto px-4 mt-20 grid md:grid-cols-2 gap-12 items-center">
                <div
                    className={`space-y-6 transition-all duration-1000 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
                        }`}
                >
                    <h1 className="text-5xl md:text-6xl font-bold leading-tight">
                        Raise
                        <br />
                        your business
                        <br />
                        <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-300">
                            above the expected
                        </span>
                    </h1>
                    <p className="text-gray-300 leading-relaxed max-w-xl">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed diam nonummy nibh euismod tincidunt ut
                        laoreet dolore magna aliquam erat volutpat. Ut wisi enim ad minim veniam, quis nostrud exerci tation
                        ullamcorper suscipit lobortis nisl ut aliquip.
                    </p>
                    <Button
                        className="rounded-full px-8 py-6 bg-white/10 hover:bg-white/20 backdrop-blur-sm border border-white/20 
                     transition-all hover:scale-105 hover:shadow-lg hover:shadow-purple-500/20"
                    >
                        LEARN MORE
                    </Button>
                </div>

                {/* Enhanced Animated 3D Ring Effect */}
                <div className="relative">
                    <div
                        className={`w-[500px] h-[500px] relative transition-all duration-1000 ${isVisible ? "opacity-100 scale-100" : "opacity-0 scale-90"
                            }`}
                    >
                        <div className="absolute inset-0 rounded-full bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 animate-spin-slow opacity-50 blur-2xl" />
                        <div className="absolute inset-4 rounded-full bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 animate-spin-slow opacity-70 blur-xl" />
                        <div className="absolute inset-8 rounded-full bg-gradient-to-r from-blue-700 via-purple-700 to-pink-700 animate-spin-slow opacity-80 blur-lg" />
                        <div className="absolute inset-12 rounded-full bg-gradient-to-r from-blue-800 via-purple-800 to-pink-800 animate-spin-slow" />
                        <div className="absolute inset-[3.5rem] rounded-full bg-blue-950 shadow-2xl overflow-hidden">
                            <div className="absolute inset-4 bg-blue-900 rounded-full animate-pulse" />
                            <div className="absolute inset-8 border-2 border-blue-400 rounded-full animate-ping" />
                            <div className="absolute inset-0 flex items-center justify-center">
                                <div className="w-16 h-16 bg-gradient-to-br from-blue-400 to-purple-500 rounded-full animate-bounce" />
                            </div>
                            <div className="absolute inset-0 flex items-center justify-center">
                                <div className="w-32 h-32 border border-pink-400 rounded-full animate-spin-slow opacity-30" />
                            </div>
                            {[...Array(20)].map((_, i) => (
                                <div
                                    key={i}
                                    className="absolute w-1 h-1 bg-white rounded-full animate-float"
                                    style={{
                                        top: `${Math.random() * 100}%`,
                                        left: `${Math.random() * 100}%`,
                                        animationDelay: `${Math.random() * 5}s`,
                                    }}
                                />
                            ))}
                        </div>
                    </div>
                </div>
            </main>

            <style jsx>{`
        @keyframes spin-slow {
          from { transform: rotate(0deg); }
          to { transform: rotate(360deg); }
        }
        @keyframes float {
          0%, 100% { transform: translateY(0); }
          50% { transform: translateY(-10px); }
        }
        .animate-spin-slow {
          animation: spin-slow 5s linear infinite;
        }
        .animate-float {
          animation: float 3s ease-in-out infinite;
        }
      `}</style>
        </div>
    );
};

export default HeroSection;
