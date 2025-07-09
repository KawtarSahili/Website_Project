import { useState, useEffect } from "react";
import { ChevronDown, Search, ShoppingBag, User, Menu, X } from "lucide-react";
import { Link } from 'react-router-dom';

const Header = ({ onLoginClick }) => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [hoveredMenu, setHoveredMenu] = useState(null);
  const [closingTimeout, setClosingTimeout] = useState(null);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 768) {
        setMobileMenuOpen(false);
      }
    };
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const handleMenuEnter = (index) => {
    if (closingTimeout) {
      clearTimeout(closingTimeout);
      setClosingTimeout(null);
    }
    setHoveredMenu(index);
  };

  const handleMenuLeave = () => {
    const timeout = setTimeout(() => {
      setHoveredMenu(null);
    }, 300);
    setClosingTimeout(timeout);
  };

  const navItems = [
    {
      label: "Mobile",
      submenu: [
        { name: "Forfaits", path: "/mobile-plans" }, // Updated this line
        { name: "Appareils", path: "/devices" },
        { name: "Recharger", path: "/top-up" }],
    },
    {
      label: "Internet",
      submenu: [
        { name: "Fibre", path: "/fiber" },
        { name: "ADSL", path: "/adsl" },
        { name: "Routeurs", path: "/routers" }
      ]
    },
    {
      label: "Offres",
      submenu: ["Nouveaux clients", "Étudiants", "Packs combinés"],
    },
    {
      label: "Support",
      submenu: ["FAQ", "Suivi commande", "Assistance technique"],
    },
  ];

  return (
    <>
      <header
        className={`fixed top-4 left-1/2 -translate-x-1/2 w-[95%] z-50 px-6 py-3 rounded-full border border-white/10 transition-all duration-300 ${
          scrolled
            ? "bg-teal-700/70 backdrop-blur shadow-lg"
            : "bg-teal-700/70 backdrop-blur-sm"
        }`}
      >
        <div className="flex items-center justify-between max-w-7xl mx-auto gap-6">
          <div className="text-white font-bold text-xl">TelCom</div>

          <nav className="hidden md:flex gap-6 text-white text-sm font-medium">
            {navItems.map((item, index) => (
              <div 
                key={index} 
                className="relative group"
                onMouseEnter={() => handleMenuEnter(index)}
                onMouseLeave={handleMenuLeave}
              >
                <button className="flex items-center gap-1 hover:text-teal-300 transition">
                  {item.label}
                  <ChevronDown size={14} className="mt-[2px]" />
                </button>
                <div 
                  className={`absolute top-full left-0 mt-2 flex flex-col bg-teal-900 text-white text-sm rounded-md shadow-lg py-2 min-w-[160px] z-10 transition-opacity duration-300 ${
                    hoveredMenu === index ? 'opacity-100' : 'opacity-0 pointer-events-none'
                  }`}
                  onMouseEnter={() => handleMenuEnter(index)}
                  onMouseLeave={handleMenuLeave}
                >
                  {item.submenu.map((subItem, subIndex) => (
                    <Link
                      key={subIndex}
                      to={subItem.path}
                      className="px-4 py-2 hover:bg-teal-700 transition"
                    >
                      {subItem.name}
                    </Link>
                  ))}
                </div>
              </div>
            ))}
          </nav>

          <div className="hidden lg:flex items-center bg-white/10 border border-white/20 rounded-full px-3 py-1">
            <Search size={16} className="text-white/80" />
            <input
              type="text"
              placeholder="Search On TelCom..."
              className="bg-transparent outline-none text-sm text-white placeholder-white/70 px-2 py-1 w-40"
            />
          </div>

          <div className="flex items-center gap-4 text-white relative">
            <a
              href="/panier"
              className="hidden md:inline hover:text-teal-300 transition"
            >
              <ShoppingBag size={20} />
            </a>

            <button
              onClick={(e) => {
                e.preventDefault();
                onLoginClick();
              }}
              className="flex items-center gap-2 bg-white text-teal-900 px-3 py-1.5 rounded-full text-sm font-semibold hover:bg-teal-200 transition"
            >
              <User size={16} /> Login
            </button>

            <button
              onClick={() => setMobileMenuOpen(true)}
              className="md:hidden"
            >
              <Menu size={24} />
            </button>
          </div>
        </div>
      </header>

      <div
        className={`fixed top-0 right-0 h-full w-64 bg-teal-900 text-white z-50 transform transition-transform duration-300 ${
          mobileMenuOpen ? "translate-x-0" : "translate-x-full"
        }`}
      >
        <div className="flex justify-between items-center px-4 py-4 border-b border-white/10">
          <span className="font-bold text-lg">Menu</span>
          <button onClick={() => setMobileMenuOpen(false)}>
            <X size={24} />
          </button>
        </div>

        <div className="p-4 border-b border-white/10">
          <div className="flex items-center bg-white/10 border border-white/20 rounded-full px-3 py-2">
            <Search size={16} className="text-white/80" />
            <input
              type="text"
              placeholder="Rechercher..."
              className="bg-transparent outline-none text-sm text-white placeholder-white/70 px-2 py-1 w-full"
            />
          </div>
        </div>

        <div className="p-4 space-y-4">
          {navItems.map((item, index) => (
            <div key={index}>
              <p className="text-sm font-semibold mb-2">{item.label}</p>
              <div className="space-y-1 pl-2">
                {item.submenu.map((subItem, subIndex) => (
                  <Link
                    key={subIndex}
                    to={subItem.path}
                    className="block text-sm hover:text-teal-300"
                    onClick={() => setMobileMenuOpen(false)}
                  >
                    {subItem.name}
                  </Link>
                ))}
              </div>
            </div>
          ))}
        </div>

        <div className="px-4 mt-4">
          <a
            href="/panier"
            className="flex items-center gap-2 text-white hover:text-teal-300"
          >
            <ShoppingBag size={20} /> Mon Panier
          </a>
        </div>

        <div className="px-4 mt-4">
          <button
            onClick={(e) => {
              e.preventDefault();
              setMobileMenuOpen(false);
              onLoginClick();
            }}
            className="flex items-center gap-2 bg-white text-teal-900 px-3 py-1.5 rounded-full text-sm font-semibold hover:bg-teal-200 transition w-full justify-center"
          >
            <User size={16} /> Login
          </button>
        </div>

        <div className="px-4 mt-6">
          <p className="text-sm font-semibold mb-2">Langue</p>
          <div className="space-y-1 pl-2">
            {["FR", "EN"].map((lang) => (
              <button
                key={lang}
                onClick={() => console.log(`Lang switched to ${lang}`)}
                className="block text-sm hover:text-teal-300"
              >
                {lang}
              </button>
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default Header;