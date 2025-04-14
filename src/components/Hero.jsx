import { motion, useMotionValue, useTransform } from "framer-motion";
import { useRef, useEffect } from "react";
import Pfp from "../assets/Pfp.jpg";
import { TypeAnimation } from 'react-type-animation';
import { IoIosArrowDown } from "react-icons/io";

function Hero() {
    const containerRef = useRef(null);
    const x = useMotionValue(0);
    const y = useMotionValue(0);
    const rotateX = useTransform(y, [0, 1], [10, -10]);
    const rotateY = useTransform(x, [0, 1], [-10, 10]);

    useEffect(() => {
        const handleMouseMove = (e) => {
            const bounds = containerRef.current.getBoundingClientRect();
            const xVal = (e.clientX - bounds.left) / bounds.width;
            const yVal = (e.clientY - bounds.top) / bounds.height;
            x.set(xVal);
            y.set(yVal);
        };

        const el = containerRef.current;
        el.addEventListener("mousemove", handleMouseMove);
        return () => el.removeEventListener("mousemove", handleMouseMove);
    }, [x, y]);

    return (
        <div
            ref={containerRef}
            className="modern-gradient relative min-h-screen flex flex-col lg:flex-row items-center justify-center px-6 lg:px-20 text-center lg:text-left overflow-hidden gap-20"
        >
            {/* Abstract background blobs */}
            <div className="absolute inset-0 z-0">
                <div className="absolute w-[400px] h-[400px] rounded-full bg-gradient-to-r from-gradient2 to-gradient3 blur-3xl opacity-30 top-[10%] left-[5%] animate-pulse" />
                <div className="absolute w-[300px] h-[300px] rounded-full bg-gradient-to-r from-gradient1 to-gradient4 blur-2xl opacity-20 bottom-[10%] right-[10%] animate-pulse-slow" />
            </div>

            {/* Text */}
            <div className="flex flex-col items-center lg:items-start gap-4 z-10">
                <div className="text-xl sm:text-2xl mb-8 text-gray-300">
                    <TypeAnimation
                        sequence={[
                            'Full Stack Developer',
                            2000,
                            'UI/UX Designer',
                            2000,
                            'Problem Solver',
                            2000,
                        ]}
                        wrapper="span"
                        speed={50}
                        repeat={Infinity}
                        className="font-medium"
                    />
                </div>

                <motion.div
                    initial={{ opacity: 0, x: -100 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.8, delay: 0.2 }}
                >
                    <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white mb-4">
                        Hello!, I&apos;m <br />
                        <span className="gradient-text">Raghav Katta</span>
                    </h1>
                    <p className="text-lg md:text-xl text-white/90 max-w-2xl mb-6">
                        Specializing in building modern web applications with React, Node.js, and cloud technologies.
                        Passionate about creating seamless user experiences and scalable backend solutions.
                    </p>
                    <div className="flex gap-4 justify-center lg:justify-start">
                        <motion.a
                            href="#Contact"
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.95 }}
                            className="bg-gradient-to-r from-[#205295] to-[#2C74B3] text-white font-bold px-8 py-3 rounded-lg shadow-lg hover:shadow-[#2C74B3]/50 transition-all"
                        >
                            Contact Me
                        </motion.a>
                        <motion.a
                            href="#Projects"
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.95 }}
                            className="px-8 py-3 border border-[#205295] text-white rounded-lg font-bold hover:bg-[#205295]/10 transition-all"
                        >
                            View Work
                        </motion.a>
                    </div>
                </motion.div>
            </div>

            {/* Profile with holographic ring and 3D tilt */}
            <motion.div
                className="relative z-10"
                style={{ rotateX, rotateY }}
            >
                {/* Holographic animated aura ring */}
                <div className="absolute -inset-6 rounded-full bg-gradient-to-r from-gradient3 via-gradient2 to-gradient1 blur-2xl opacity-50 animate-spin-slow" />

                <motion.img
                    src={Pfp}
                    alt="Profile Pic"
                    initial={{ opacity: 0, scale: 0.5 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.8, delay: 0.4 }}
                    className="w-48 sm:w-56 md:w-64 lg:w-72 rounded-full relative z-10 glass-card hover-lift"
                />
            </motion.div>

            <motion.div 
                className="absolute bottom-10 left-1/2 transform -translate-x-1/2"
                animate={{ y: [0, 10, 0] }}
                transition={{ duration: 2, repeat: Infinity }}
            >
                <a href="#About"
                    className="text-white cursor-pointer hover:scale-110 transition-transform">
                    <IoIosArrowDown size={24} />
                </a>
            </motion.div>
        </div>
    );
}

export default Hero;
