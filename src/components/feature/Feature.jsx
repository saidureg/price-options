import PropTypes from "prop-types";
import { BsPatchCheckFill } from "react-icons/bs";

const Feature = ({ feature }) => {
  return (
    <div>
      <p className="flex items-center gap-2 ml-16">
        <BsPatchCheckFill className="text-green-400"></BsPatchCheckFill>{" "}
        {feature}{" "}
      </p>
    </div>
  );
};

Feature.propTypes = {
  feature: PropTypes.string,
};

export default Feature;
