import "../../index.css";
const Banner = () => {
  return (
    <div className="bg-image">
      <div className="overlay flex items-center justify-center">
        <div>
          <h1 className="font-bold text-4xl">
            I Grow By Helping People In Need
          </h1>
          <div className="text-center mt-5 flex justify-center">
            <input
              className="w-3/5 bg-transparent border border-black px-3 py-2 rounded-l-lg"
              placeholder="Search here.."
              type="text"
            />
            <div className="w-1/5 px-3 py-2 rounded-r-lg bg-orange-600">
              Search
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Banner;
