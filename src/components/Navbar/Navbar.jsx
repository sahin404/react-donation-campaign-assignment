import { NavLink } from "react-router-dom";
import img from "../../assets/Logo.png";
const Navbar = () => {
  const list = [
    <>
      <NavLink className={ ({isActive})=> `mr-12 hover:underline ${ isActive? "text-red-500 underline":""}`} to="/">Home</NavLink>
      <NavLink className={ ({isActive})=> `mr-12   hover:underline ${ isActive? "text-red-500 underline":""}`} to="/donation">Donation</NavLink>
      <NavLink className={ ({isActive})=> `hover:underline ${ isActive? "text-red-500 underline":""}`} to="/statistics">Statistics</NavLink>
    </>,
  ];

  return (
    <div className="flex items-center justify-between py-8">
      <div >
      <img className="h-16 cursor-pointer" src={img} alt="" />
      </div>
      <div className="text-lg">
        {
          list
        }
      </div>
      
    </div>
  );
};

export default Navbar;
