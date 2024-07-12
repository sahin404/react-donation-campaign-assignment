import { Link } from "react-router-dom";

const Error = () => {
    return (
        <div className="text-xl font-semibold mt-16 text-center">
         404 Error
         <br />
        <Link className="underline text-blue-700 hover:text-blue-400 duration-300" to="./">Go to the Home Page</Link>
        </div>
    );
};

export default Error;