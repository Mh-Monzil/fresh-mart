const NavLinks = () => {
  const navLinks = [
    {
      path: "/",
      title: "Home",
    },
    {
      path: "/shop",
      title: "Shop",
    },
    {
      path: "/about",
      title: "About",
    },
    {
      path: "/contact",
      title: "Contact",
    },
  ];
  return (
    <div className="flex flex-col items-center md:flex-row gap-x-7 gap-y-4 px-8">
      {navLinks.map((navLink) => (
        <span
          key={navLink.path}
          className="font-medium text-lg text-white cursor-pointer w-full text-center pt-1 pb-2 shadow-md md:shadow-none md:p-0 hover:text-gray-200 transition-all duration-300 ease-in-out"
        >
          {navLink.title}
        </span>
      ))}
    </div>
  );
};

export default NavLinks;
