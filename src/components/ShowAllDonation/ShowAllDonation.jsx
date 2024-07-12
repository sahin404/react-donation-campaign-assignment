import { Link } from "react-router-dom";
import PropTypes from 'prop-types';

const ShowAllDonation = ({ donation }) => {
  const {
    id,
    picture,
    title,
    category,
    category_bg,
    card_bg,
    text_color,
  } = donation;
  
  return (
    <div className="hover:scale-105 duration-300">
      <Link to={`/donationDetail/${id}`}>
      <div className="card shadow-xl cursor-pointer" style={{backgroundColor: card_bg}}>
      <figure className="mb-3">
        <img
          src={picture}
          alt="Donate"
        />
      </figure>
      <div className="p-5 space-y-5">
        <span className="font-semibold py-2 px-4 rounded-lg" style={{backgroundColor:category_bg, color:text_color}}>{category}</span>
        <br />
        <p className="font-semibold text-[18px]" style={{color:text_color}}>{ title}</p>
        
      </div>
    </div>
      </Link>
    </div>
    
  );
};


ShowAllDonation.propTypes={
  donation:PropTypes.object
}

export default ShowAllDonation;
