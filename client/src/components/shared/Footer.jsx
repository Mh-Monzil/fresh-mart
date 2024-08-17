import { FaShoppingBag } from "react-icons/fa";

const Footer = () => {
  const footerInfo = [
    {
      title: "company",
      link1: "about us",
      link2: "contact us",
      link3: "careers",
      link4: "latest news",
    },
    {
      title: "latest news",
      link1: "fresh vegetables",
      link2: "fresh fruits",
      link3: "ice cream",
      link4: "cake",
    },
    {
      title: "my account",
      link1: "dashboard",
      link2: "my orders",
      link3: "recent orders",
      link4: "update profile",
    },
  ];

  return (
    <div className="p-12 border mt-12">
      <div className="max-w-[1400px] mx-auto flex justify-between items-start gap-6 flex-wrap">
        {/* logo */}
        <div>
          <h1 className="flex items-center gap-1">
            <FaShoppingBag className="text-4xl text-primaryGreen" />
            <span className="text-3xl font-semibold ">FreshMart</span>
          </h1>
          <p className="text-sm font-normal mt-2 leading-7">1234 Elm Street, Suite 567 <br /> Springfield, IL 62704 <br /> United States</p>
        </div>

        {footerInfo.map((info, idx) => (
          <div key={idx} className="capitalize">
            <p className="font-medium">{info.title}</p>
            <div className="flex flex-col gap-2 text-sm font-normal mt-4">
              <span>{info.link1}</span>
              <span>{info.link2}</span>
              <span>{info.link3}</span>
              <span>{info.link4}</span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Footer;
