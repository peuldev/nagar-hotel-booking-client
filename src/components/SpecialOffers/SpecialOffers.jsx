import { FaTag } from "react-icons/fa6";
import { Link } from "react-router-dom";

const SpecialOffers = ({ offer }) => {
  const { name, image, offersTitle, _id } = offer;
  return (
    <>
      <Link to={`/details/${_id}`}>
        <div>
          <img className="rounded" src={image} alt="" />
          <h1 className="text-xl font-secondary lg:pt-5 lg:pb-2 py-2">
            {name}
          </h1>
          <div className="flex items-center border-t-2 border-t-border">
            <FaTag className="text-[#b99470]" />
            <p className="ms-2 font-secondary text-[#656a70] py-2">
              {offersTitle}
            </p>
          </div>
        </div>
      </Link>
    </>
  );
};

export default SpecialOffers;
