import PropTypes from "prop-types";
import { Link } from "react-router-dom";

const ServiceCard = ({ service }) => {
  const { _id, img, title, price } = service;

  return (
    <div className="card bg-base-100 drop-shadow-lg">
      <figure className="p-5">
        <img
          src={img}
          alt="Shoes"
          className="h-[270px] object-cover rounded-lg w-full"
        />
      </figure>
      <div className="card-body items-center text-center">
        <h2 className="card-title">{title}</h2>
        <p>${price}</p>
        <div className="card-actions">
          <Link to={`/checkOut/${_id}`}>
            <button className="btn">Book Now</button>
          </Link>
        </div>
      </div>
    </div>
  );
};

ServiceCard.propTypes = {
  service: PropTypes.object.isRequired,
};

export default ServiceCard;
