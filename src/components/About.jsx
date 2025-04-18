import { motion, AnimatePresence } from "framer-motion";
import { useRef,useState } from "react";


function About() {
  const formRef = useRef(null);
  const [showToast, setShowToast] = useState(false);
  const handleSuccess = () => {
    setShowToast(true);
    setTimeout(() => setShowToast(false), 3000);
  };
  
  return (
    <section className="min-h-screen px-3 py-12 flex items-center relative overflow-hidden bg-black">
      <div className="absolute inset-0 bg-gradient-to-br from-[#0B2447] via-[#19376D] to-[#205295] opacity-40" />
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mx-auto relative z-10 max-w-6xl">
        <motion.div 
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          className="p-6 rounded-xl bg-black/40 backdrop-blur-md border border-[#205295]/30"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-6 bg-gradient-to-r from-[#205295] to-[#2C74B3] text-transparent bg-clip-text">About Me</h2>
          <p className="text-base md:text-lg leading-relaxed text-white/90 mb-4">
            Hi, I&apos;m <span className="text-[#2C74B3] font-bold">Raghav Katta</span>, a passionate MERN Stack Developer who loves 
            building dynamic, high-performance web applications. With expertise in 
            <span className="text-[#2C74B3] font-bold"> MongoDB</span>, <span className="text-[#2C74B3] font-bold"> Express.js</span>, 
            <span className="text-[#2C74B3] font-bold"> React</span>, and <span className="text-[#2C74B3] font-bold"> Node.js</span>, I enjoy crafting seamless user experiences 
            and scalable backend solutions.
          </p>
          <p className="text-base md:text-lg text-white/90 mb-6">
            Beyond coding, I thrive on solving complex problems and staying up-to-date with the latest web technologies. 
            Whether it&apos;s developing real-time applications, optimizing performance, or experimenting with new frameworks, 
            I&apos;m always eager to push boundaries.
          </p>
          <motion.p 
            className="text-lg font-bold text-[#2C74B3]"
            animate={{ opacity: [0.7, 1, 0.7] }}
            transition={{ duration: 2, repeat: Infinity }}
          >
            Let&apos;s connect and build something amazing!
          </motion.p>
        </motion.div>

        <motion.div 
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          id="Contact"
          className="p-6 rounded-xl bg-black/40 backdrop-blur-md border border-[#205295]/30"
        >
          <h2 className="text-2xl md:text-3xl font-bold mb-6 bg-gradient-to-r from-[#205295] to-[#2C74B3] text-transparent bg-clip-text">Contact Me</h2>

          <AnimatePresence>
  {showToast && (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: 20 }}
      className="bg-green-600 text-white px-4 py-2 rounded-md shadow-md text-sm mb-4 w-full text-center"
    >
      ✅ Message sent successfully!
    </motion.div>
  )}
</AnimatePresence>
          <form className="flex flex-col gap-4"
          ref={formRef}
          action="https://formspree.io/f/mgvageav"
          target="dummyFrame"
          method="POST"
          onSubmit={()=> {handleSuccess()
          setTimeout(() => formRef.current.reset(), 100);
          }}
          >
            <motion.input 
              whileFocus={{ scale: 1.02 }}
              type="text" 
              name="name"
              placeholder="Your Name" 
              className="bg-black/50 py-2 px-4 rounded-lg text-white placeholder:text-white/50 border border-[#205295]/50 focus:border-[#2C74B3] outline-none"
            />
            <motion.input 
              whileFocus={{ scale: 1.02 }}
              type="email"
              name="email" 
              placeholder="Your Email"  
              className="bg-black/50 py-2 px-4 rounded-lg text-white placeholder:text-white/50 border border-[#205295]/50 focus:border-[#2C74B3] outline-none"
            />
            <motion.textarea 
              whileFocus={{ scale: 1.02 }}
              placeholder="Your Message" 
              name="message"
              className="bg-black/50 py-2 px-4 rounded-lg text-white placeholder:text-white/50 border border-[#205295]/50 focus:border-[#2C74B3] outline-none h-28 resize-none"
            />
            <motion.button 
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="bg-gradient-to-r from-[#205295] to-[#2C74B3] text-white font-bold px-6 py-2 cursor-pointer rounded-lg shadow-lg hover:shadow-[#2C74B3]/50 transition-all"
            >
              Send Message
            </motion.button>
              {/* This invisible iframe prevents redirection */}
  <iframe name="dummyFrame" style={{ display: "none" }}></iframe>
          </form>
        </motion.div>
      </div>
    </section>
  );
}

export default About;
