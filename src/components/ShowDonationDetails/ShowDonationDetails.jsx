import { useLoaderData, useParams } from "react-router-dom";

const ShowDonationDetails = () => {
  const id = useParams();
  const stringId = id.id;
  const intId = parseInt(stringId);
  const data = useLoaderData();
  const DesiredCard = data.find((card) => parseInt(card.id) === intId);
  const { title, description, price, picture } = DesiredCard;
  return (
    <div className="text-left space-y-10">
      <div className="relative">
        <img className="w-full" src={picture} alt="" />
        <div className="w-full h-28 bg-gray-800 opacity-50  absolute -my-28">
        </div>
        <div className="absolute -mt-20 ml-16 hover:scale-110 duration-300">
          <button className="font-bold bg-orange-500 py-3 px-5 text-lg rounded-lg">Donate {price}</button>
        </div>
      </div>
      <div className="space-y-8">
            <h1 className="font-bold text-4xl">{title}</h1>
            <p className="text-justify">{description}</p>
      </div>
    </div>
  );
};

export default ShowDonationDetails;
