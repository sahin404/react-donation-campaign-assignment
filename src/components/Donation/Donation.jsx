import { useEffect, useState } from "react";
import { getExistList } from "../../utility/localStorage";
import DonationCardShow from "../DonationCardShow/DonationCardShow";

const Donation = () => {
  const [donations, setDonations] = useState([]);
  const [showMore, setShowMore] = useState(2);
  const [bol, setBol] = useState(true);
  useEffect(() => {
    fetch("data.json")
      .then((res) => res.json())
      .then((data) => setDonations(data));
  }, []);

  const [cards, setCards] = useState([]);
  useEffect(() => {
    const donateList = getExistList();
    const list = [];
    for (let i of donateList) {
      const desiredDonation = donations.find(
        (donation) => parseInt(donation.id) === i
      );
      if (desiredDonation) {
        list.push(desiredDonation);
      }
    }
    setCards(list);
  }, [donations]);
  // console.log(cards);

  const handleShowMore = () =>{
    if(bol){
      setShowMore(cards.length);
      setBol(false);
    }
    else{
      setShowMore(2);
      setBol(true);
    }
  }

  return (
    <div>
      <div className="text-xl font-semibold mt-16 text-center">
        {
        cards.length === 0 ? "Donation List is Empty!" : ""
         
        }
      </div>

      <div className="grid grid-cols-2 gap-10">
        {cards.slice(0, showMore).map((card, idx) => (
          <DonationCardShow key={idx} card={card}></DonationCardShow>
        ))}
      </div>
      <div className="text-center">
        <button onClick={()=>handleShowMore()} className={`btn btn-primary mt-5  ${ cards.length === 0? 'hidden':''} ${ cards.length <= 2? 'hidden':''}  `}>{cards.length===showMore?"Show Less":"Show More"}</button>
      </div>
    </div>
  );
};

export default Donation;
