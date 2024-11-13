import { motion } from 'framer-motion';
import { useEffect, useState } from 'react';
import Particles, { initParticlesEngine } from '@tsparticles/react';
import { loadSlim } from '@tsparticles/slim';

export default function WelcomeScreen({ onComplete }) {
    const [init, setInit] = useState(false);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        // Initialize the particles engine and load the slim preset
        initParticlesEngine(async (engine) => {
            await loadSlim(engine);
        }).then(() => {
            setInit(true);
        });

        // Simulate a loading delay of 7 seconds
        const timer = setTimeout(() => {
            setLoading(false);
            onComplete(); // Callback to indicate loading is done
        }, 7000);

        // Cleanup timeout on component unmount
        return () => clearTimeout(timer);
    }, [onComplete]);

    const particlesOptions = {
        particles: {
            color: { value: '#ffffff' },
            number: { value: 50 },
            opacity: { value: { min: 0.1, max: 0.5 } },
            size: { value: { min: 1, max: 3 } },
            move: { enable: true, speed: 1 },
        },
        background: { color: '#000' },
    };

    return (
        <div className="relative min-h-screen w-full overflow-hidden bg-black">
            {/* Particles effect */}
            {init && <Particles className="absolute inset-0" options={particlesOptions} />}

            {/* Circuit lines (motion animations) */}
            <div className="absolute inset-0 overflow-hidden">
                <motion.div
                    className="absolute left-0 top-1/2 h-[1px] w-1/3 bg-gradient-to-r from-transparent via-purple-500 to-transparent"
                    animate={{ scaleX: [0, 1], opacity: [0, 1, 0] }}
                    transition={{ duration: 2, repeat: Infinity, repeatType: 'reverse' }}
                />
                <motion.div
                    className="absolute right-0 top-1/2 h-[1px] w-1/3 bg-gradient-to-r from-transparent via-purple-500 to-transparent"
                    animate={{ scaleX: [0, 1], opacity: [0, 1, 0] }}
                    transition={{ duration: 2, repeat: Infinity, repeatType: 'reverse', delay: 1 }}
                />
            </div>

            {/* Main content (motion effects for text) */}
            <div className="relative flex min-h-screen items-center justify-center">
                <motion.div
                    initial={{ scale: 0.8, opacity: 0 }}
                    animate={{ scale: 1, opacity: 1 }}
                    transition={{ duration: 0.8, ease: 'easeOut' }}
                    className="relative"
                >
                    <div className="relative rounded-lg bg-gradient-to-br from-purple-900/50 to-blue-900/50 p-8 backdrop-blur-sm">
                        {/* Glow effects */}
                        <div className="absolute -top-20 left-1/2 h-40 w-1 -translate-x-1/2 bg-gradient-to-b from-purple-500 via-purple-500 to-transparent" />
                        <div className="absolute -bottom-20 left-1/2 h-40 w-1 -translate-x-1/2 bg-gradient-to-t from-purple-500 via-purple-500 to-transparent" />

                        {/* Welcome text and progress bar */}
                        <motion.div
                            className="relative z-10 max-w-md text-center"
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.3 }}
                        >
                            <h1 className="mb-6 bg-gradient-to-r from-purple-400 to-blue-400 bg-clip-text text-4xl font-bold text-transparent">
                                Welcome to the Hariom's web-house
                            </h1>
                            <motion.div
                                className="h-1 w-full bg-gradient-to-r from-purple-500 to-blue-500"
                                initial={{ scaleX: 0 }}
                                animate={{ scaleX: loading ? 0.3 : 1 }}
                                transition={{ duration: 2, ease: 'easeInOut' }}
                            />
                            <motion.p
                                className="mt-4 text-sm text-gray-400"
                                initial={{ opacity: 0 }}
                                animate={{ opacity: loading ? 1 : 0 }}
                                transition={{ duration: 0.7 }}
                            >
                                {loading ? "Just a sec..." : "Welcome"}
                            </motion.p>
                        </motion.div>
                    </div>
                </motion.div>
            </div>
        </div>
    );
}
