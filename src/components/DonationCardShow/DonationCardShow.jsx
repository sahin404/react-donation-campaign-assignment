import PropTypes from "prop-types";
const DonationCardShow = ({ card }) => {
  const {
    picture,
    title,
    category,
    category_bg,
    card_bg,
    text_color,
    price
  } = card;
  return (
    <div style={{backgroundColor:card_bg}} className="card card-side shadow-xl hover:scale-105 duration-200">
      <figure>
        <img
          src={picture}
          alt="donation"
        />
      </figure>
      <div className="ml-6 mt-5">
        <span className="px-5 py-2 rounded-lg mb-5" style={{backgroundColor:category_bg, color:text_color}} >{category}</span>
        <h1 className="text-2xl font-semibold mt-3">{title}</h1>
        <h1 className="font-semibold mt-3">{price}.00</h1>
        <button style={{backgroundColor:text_color}} className="text-white px-6 py-2 rounded-lg mt-3">See Details</button>
      </div>
    </div>
  );
};

DonationCardShow.propTypes = {
  card: PropTypes.object,
};

export default DonationCardShow;
