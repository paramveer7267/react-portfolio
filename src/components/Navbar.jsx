import { Link } from "react-scroll";

const Navbar = () => {
  return (
    <header className="md:flex hidden sticky top-0 z-50 justify-center gap-x-60 p-4 bg-[#FBFBFE] text-black">
      <div>
        <h1 className="text-xl font-bold">PARAMVEER SINGH</h1>
      </div>
      <div className="flex gap-x-8 items-center cursor-pointer">
        {[
          { to: "home", label: "Home" },
          { to: "about", label: "About" },
          { to: "skills", label: "Skills" },
          { to: "qualification", label: "Qualification" },
          { to: "portfolio", label: "Portfolio" },
          { to: "contact", label: "Contact Me" },
        ].map((item) => (
          <Link
            key={item.to}
            to={item.to}
            smooth={true}
            duration={500}
            spy={true}
            className={({ isActive }) =>
              isActive
                ? " cursor-pointer text-[#634ade] "
                : " cursor-pointer text-gray-600"
            }
          >
            {item.label}
          </Link>
        ))}
      </div>
    </header>
  );
};

export default Navbar;
