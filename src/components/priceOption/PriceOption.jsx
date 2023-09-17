import PropTypes from "prop-types";
import Feature from "../feature/Feature";

const PriceOption = ({ option }) => {
  const { name, description, price, duration, features } = option;
  return (
    <div className="bg-blue-500 flex flex-col text-white p-6 text-center rounded-lg space-y-3">
      <h3>
        <span className="text-7xl">${price}</span>
        <span className="text-xl">/{duration}</span>
      </h3>
      <h4 className="text-5xl">{name}</h4>
      <p className="text-2xl">{description} </p>
      <div className="flex-grow">
        {features.map((feature, idx) => (
          <Feature key={idx} feature={feature}></Feature>
        ))}
      </div>
      <button className="btn btn-error hover:bg-opacity-80 text-xl w-full">
        Buy Now
      </button>
    </div>
  );
};

PriceOption.propTypes = {
  option: PropTypes.object,
};

export default PriceOption;
