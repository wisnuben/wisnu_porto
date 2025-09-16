import { useState } from "react";
import { motion as Motion } from "framer-motion";
import { ContactRound , ChevronDown, Home, Phone, Info, X, Menu,FolderGit2  } from "lucide-react";

const Navbar = () => {
    const [open, setOpen] = useState(false);
    const [dropdown, setDropDown] = useState(null);

    const navLinks = [
        {name: "Home",icon: <Home size={18} />,href: "#",},
        {name: "About Me",icon: <Info size={18} />,href: "#",dropdown: ["Me", "Education"],},
        {name: "Project",icon: <FolderGit2  size={18} />,href: "#",},
        {name: "Contact",icon: <Phone size={18} />,href: "#",dropdown: ["Email", "LinkedIn", "Location"],},
    ];

    return (
        <nav className="fixed w-full z-50 bg-gradient-to-r from-amber-50 via-gray-100 to-amber-100 shadow-md backdrop-blur-xl">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-10">
            <div className="flex items-center justify-between h-16">
            {/* Logo */}
            <Motion.a
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                href="#"
                className="text-2xl font-extrabold text-gray-800 flex items-center gap-2 hover:text-amber-600 transition"
            >
                <ContactRound  size={26} />
                Portfolio Wisnu Arif
            </Motion.a>

            {/* Desktop Menu */}
            <div className="hidden md:flex items-center gap-8 text-gray-800 font-semibold">
                {navLinks.map((link, i) => (
                <div key={i} className="relative group">
                    <button
                    onClick={() => setDropDown(dropdown === i ? null : i)}
                    className="flex items-center gap-1 hover:text-amber-600 transition"
                    >
                    {link.icon} {link.name} {link.dropdown && <ChevronDown size={16} />}
                    </button>
                    {dropdown === i && link.dropdown && (
                    <Motion.div
                        initial={{ opacity: 0, y: -15 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0 }}
                        transition={{ duration: 0.4 }}
                        className="absolute left-0 mt-2 w-44 bg-white shadow-xl rounded-xl p-2 space-y-1 border border-gray-200 backdrop-blur-sm"
                    >
                        {link.dropdown.map((item, idx) => (
                        <a
                            key={idx}
                            href="#"
                            className="block px-3 py-2 rounded-md text-sm font-medium text-gray-700 hover:bg-amber-100 hover:text-amber-700 transition"
                        >
                            {item}
                        </a>
                        ))}
                    </Motion.div>
                    )}
                </div>
                ))}
            </div>

            {/* Mobile Button */}
            <div className="md:hidden flex items-center">
                <button
                onClick={() => setOpen(!open)}
                className="text-gray-800 focus:outline-none"
                >
                {open ? <X size={28} /> : <Menu size={28} />}
                </button>
            </div>
            </div>
        </div>

        {/* Mobile Menu Slide */}
        {open && (
            <Motion.div
            initial={{ x: "100%" }}
            animate={{ x: 0 }}
            exit={{ x: "100%" }}
            transition={{ duration: 0.5, type: "spring" }}
            className="md:hidden absolute top-16 right-0 w-64 h-screen bg-white shadow-lg flex flex-col gap-4 p-6 border-l border-gray-200"
            >
            {navLinks.map((link, i) => (
                <div key={i}>
                <button
                    onClick={() => setDropDown(dropdown === i ? null : i)}
                    className="flex items-center justify-between w-full text-gray-800 font-medium hover:text-amber-600 transition"
                >
                    {link.icon} {link.name}
                    {link.dropdown && <ChevronDown size={16} />}
                </button>
                {dropdown === i && link.dropdown && (
                    <div className="pl-4 mt-2 space-y-1">
                    {link.dropdown.map((item, idx) => (
                        <a
                        key={idx}
                        href="#"
                        className="block px-3 py-1 rounded-md text-sm text-gray-700 hover:bg-amber-100 hover:text-amber-700"
                        >
                        {item}
                        </a>
                    ))}
                    </div>
                )}
                </div>
            ))}
            </Motion.div>
        )}
        </nav>
    );
};

export default Navbar;
