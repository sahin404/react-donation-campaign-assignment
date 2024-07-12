import { useParams } from "react-router-dom";
import { SetItemToLocal } from "../../utility/localStorage";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useEffect, useState } from "react";

const ShowDonationDetails = () => {
  const [allData, setAllData] = useState([]);
  useEffect(()=>{
    fetch('/data.json')
    .then(res=>res.json())
    .then(ares=>setAllData(ares));
  },[])
  // console.log(allData);
  

  const id = useParams();
  const stringId = id.id;
  const intId = parseInt(stringId);
  

  const DesiredCard = allData.find((card) => parseInt(card.id) === intId);
  if (!DesiredCard) {
    return <div>Donation not found</div>;
  }
  
  const { title, description, price, picture } = DesiredCard;

  const handleDonationList = () => {
    const returned = SetItemToLocal(intId);
    if (returned === -5) {
      toast("Already Donated!");
    } else {
      toast("Successfully Donated!");
    }
  };

  return (
    <div className="text-left space-y-10">
      <div className="relative">
        <img className="w-full" src={picture} alt="" />
        <div className="w-full h-28 bg-gray-800 opacity-50  absolute -my-28"></div>
        <div className="absolute -mt-20 ml-16 hover:scale-110 duration-300">
          <button
            onClick={handleDonationList}
            className="font-bold bg-orange-500 py-3 px-5 text-lg rounded-lg"
          >
            Donate {price}
          </button>
        </div>
      </div>
      <div className="space-y-8">
        <h1 className="font-bold text-4xl">{title}</h1>
        <p className="text-justify">{description}</p>
      </div>
      <ToastContainer></ToastContainer>
    </div>
  );
};

export default ShowDonationDetails;
