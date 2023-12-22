import { FaTag } from "react-icons/fa6";

const SpecialOffers = ({ offer }) => {
  console.log(offer.offersTitle);
  const { name, image, offersTitle } = offer;
  return (
    <>
      <div>
        <img className="rounded" src={image} alt="" />
        <h1 className="text-xl font-secondary lg:pt-5 lg:pb-2 py-2">{name}</h1>
        <div className="flex items-center border-t-2 border-t-border">
          <FaTag className="text-[#b99470]" />
          <p className="ms-2 font-secondary text-[#656a70] py-2">
            {offersTitle}
          </p>
        </div>
      </div>
    </>
  );
};

export default SpecialOffers;
