import { motion as Motion } from "framer-motion";
import { Github, Mail, Linkedin, Eye  } from "lucide-react";

const container = {
    hidden: { opacity: 0, y: 8 },
    show: {
        opacity: 1,
        y: 0,
        transition: { staggerChildren: 0.08, when: "beforeChildren" },
    },
};

const itemFade = {
    hidden: { opacity: 0, y: 10 },
    show: { opacity: 1, y: 0, transition: { duration: 0.6, ease: [0.2, 0.9, 0.2, 1] } },
};

const HeroSection = ({ imageSrc = "/1756622509553.jpg" }) => {
    return (
        <section className="HeroSection relative w-full min-h-screen flex items-center bg-gradient-to-b from-white/60 via-white/50 to-amber-50">
        <div className="max-w-6xl mx-auto px-6 py-16 lg:py-24 w-full">
            <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-center">
            {/* LEFT: Text */}
            <Motion.div
                variants={container}
                initial="hidden"
                animate="show"
                className="md:col-span-7"
            >
                <Motion.h5 variants={itemFade} className="text-amber-600 font-semibold text-sm md:text-base mb-3">
                Hi, saya Wisnu Arif — Frontend Developer
                </Motion.h5>

                <Motion.h1 variants={itemFade} className="text-4xl sm:text-3xl md:text-4xl font-extrabold leading-tight text-gray-900 mb-4">
                Membangun UI modern & interaktif dengan <span className="text-amber-500">React</span> + <span className="text-amber-500">Tailwind</span>
                </Motion.h1>

                <Motion.p variants={itemFade} className="text-gray-700 max-w-2xl mb-6 text-sm md:text-base">
                    Praktisi web modern: fokus pada Frontend Developer, performa, dan integrasi backend; komunikatif serta cepat beradaptasi dengan teknologi baru.
                </Motion.p>

                <Motion.div variants={itemFade} className="flex flex-wrap gap-4 items-center">
                <a
                    href="#contact"
                    className="inline-flex items-center gap-3 px-5 py-3 rounded-full bg-gradient-to-r from-amber-400 to-yellow-300 text-gray-900 font-semibold shadow-lg hover:scale-[1.02] transform transition"
                    aria-label="Hubungi saya"
                >
                    <Mail size={16} /> Hubungi Saya
                </a>

                <a
                    href="/resume.pdf"
                    className="inline-flex items-center gap-3 px-4 py-3 rounded-full border border-gray-200 text-gray-800 font-semibold hover:bg-gray-50 transition"
                    aria-label="Download resume"
                >
                    <Eye  size={16} /> Lihat CV
                </a>
                </Motion.div>

                <Motion.div variants={itemFade} className="mt-6 flex items-center gap-4">
                <a href="https://github.com" aria-label="github" className="p-2 rounded-md bg-white shadow-sm hover:shadow-md transition">
                    <Github size={18} className="text-gray-800" />
                </a>
                <a href="https://linkedin.com" aria-label="linkedin" className="p-2 rounded-md bg-white shadow-sm hover:shadow-md transition">
                    <Linkedin size={18} className="text-gray-800" />
                </a>
                <a href="mailto:you@example.com" aria-label="email" className="p-2 rounded-md bg-white shadow-sm hover:shadow-md transition">
                    <Mail size={18} className="text-gray-800" />
                </a>
                </Motion.div>
            </Motion.div>

            {/* RIGHT: Profile card */}
            <div className="md:col-span-5 flex justify-center md:justify-end">
                <Motion.div
                initial={{ opacity: 0, scale: 0.96 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.6, ease: [0.2, 0.9, 0.2, 1] }}
                className="relative w-64 h-80 md:w-80 md:h-96"
                >
                {/* glowing ring */}
                <Motion.div
                    className="absolute -inset-1 rounded-3xl bg-gradient-to-r from-amber-100 to-yellow-100 filter blur-3xl opacity-60"
                    animate={{ rotate: [0, 8, -6, 0] }}
                    transition={{ duration: 10, repeat: Infinity, ease: "linear" }}
                />

                {/* floating card */}
                <Motion.div
                    className="relative bg-white rounded-3xl p-4 md:p-6 shadow-2xl border border-gray-100"
                    initial={{ y: 12 }}
                    animate={{ y: [12, -8, 12] }}
                    transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
                >
                    <div className="w-full h-40 md:h-56 rounded-2xl overflow-hidden bg-gray-100 flex items-center justify-center">
                    <img src={imageSrc} alt="Foto profil" className="w-full h-full object-cover" />
                    </div>

                    <div className="mt-4 text-center">
                    <div className="text-lg font-bold text-gray-900">Wisnu Arif</div>
                    <div className="text-sm text-gray-600 mt-1">Full Stack Developer • React / Vite</div>
                    </div>

                    {/* floating skill badges */}
                    <div className="absolute -top-4 left-4 flex gap-2">
                        <Motion.span animate={{ y: [0, -6, 0] }} transition={{ duration: 3, repeat: Infinity }} className="bg-white px-2 py-1 rounded-full text-xs font-semibold shadow">React</Motion.span>
                        <Motion.span animate={{ y: [0, -8, 0] }} transition={{ duration: 3.4, repeat: Infinity }} className="bg-white px-2 py-1 rounded-full text-xs font-semibold shadow">Tailwind</Motion.span>
                        <Motion.span animate={{ y: [0, -8, 0] }} transition={{ duration: 3.4, repeat: Infinity }} className="bg-white px-2 py-1 rounded-full text-xs font-semibold shadow">Laravel</Motion.span>
                        <Motion.span animate={{ y: [0, -8, 0] }} transition={{ duration: 3.4, repeat: Infinity }} className="bg-white px-2 py-1 rounded-full text-xs font-semibold shadow">FastAPI</Motion.span>
                    </div>

                    <div className="absolute -bottom-4 right-4 flex gap-2">
                        <Motion.span animate={{ x: [0, 6, 0] }} transition={{ duration: 3.2, repeat: Infinity }} className="bg-white px-2 py-1 rounded-full text-xs font-semibold shadow">Java Scripts</Motion.span>
                        <Motion.span animate={{ x: [0, -6, 0] }} transition={{ duration: 3.6, repeat: Infinity }} className="bg-white px-2 py-1 rounded-full text-xs font-semibold shadow">PHP</Motion.span>
                        <Motion.span animate={{ x: [0, -6, 0] }} transition={{ duration: 3.6, repeat: Infinity }} className="bg-white px-2 py-1 rounded-full text-xs font-semibold shadow">Python</Motion.span>
                    </div>
                </Motion.div>
                </Motion.div>
            </div>
            </div>
        </div>
        </section>
    );
};

export default HeroSection;
