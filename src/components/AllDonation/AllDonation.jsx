import { useEffect, useState } from "react";
import ShowAllDonation from "../ShowAllDonation/ShowAllDonation";

const AllDonation = () => {
    const [donations, setDonations] = useState([]);
    useEffect(()=>{
        fetch('data.json')
        .then(res=>res.json())
        .then(data=>setDonations(data))
    },[])
    
    return (
        <div className="grid grid-cols-4 gap-8">
            {
                donations.map((donation,idx)=><ShowAllDonation
                key={idx}
                donation={donation}
                ></ShowAllDonation>)
            }
        </div>
    );
};

export default AllDonation;