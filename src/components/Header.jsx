import faqsIcon from "../assets/images/icon-star.svg";

const Header = () => {
  return (
    <div className="flex gap-6">
      <img src={faqsIcon} alt="Star icon" width={40} height={40} />
      <h1 className="text-[4rem] font-bold text-darkPurple">FAQs</h1>
    </div>
  );
};

export default Header;