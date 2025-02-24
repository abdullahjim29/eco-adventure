import { FaLocationDot } from "react-icons/fa6";
import { CiCircleCheck } from "react-icons/ci";
import { Link } from "react-router-dom";
const AdventureExperienceCard = ({ singleData }) => {
  const { title, image, ecoFriendlyFeatures, location, id } = singleData;
  return (
    <div data-aos="zoom-in" data-aos-duration="2000" className="card bg-base-100 border border-gray-300 group">
      <figure className="relative overflow-hidden">
        <img className="transition-transform duration-300 ease-in-out group-hover:scale-110" src={image} alt={title} />
      </figure>
      <div className="card-body flex flex-col space-y-3">
        <h2 className="card-title text-2xl">{title}</h2>
        <div className="flex-1">
          <h3 className="font-bold text-[16px]">Eco Friendly Features</h3>
          <ul className="ml-3">
            {ecoFriendlyFeatures.map((feature, idx) => (
              <div key={idx} feature={feature} className="flex items-center gap-1 text-[14px]">
              <CiCircleCheck  className="text-[#583CEA] font-bold" />
              <li>{feature}</li>
              </div>
            ))}
          </ul>
        </div>
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-2 border-none btn bg-white">
            <FaLocationDot className="text-lg text-[#583CEA]" />
            <span className="font-semibold text-lg">{location}</span>
          </div>
          <div className="card-actions">
            <Link to={`/adventure-details/${id}`}>
            <button
              className=" rounded px-5 py-2.5 overflow-hidden group bg-[#583CEA] relative hover:bg-gradient-to-r hover:from-[#583CEA] hover:to-[#5230ff] text-white hover:ring-2 hover:ring-offset-2 hover:ring-[#583CEA] transition-all ease-out duration-300"
            >
              <span className="absolute right-0 w-8 h-32 -mt-12 transition-all duration-1000 transform translate-x-12 bg-white opacity-10 rotate-12 group-hover:-translate-x-40 ease"></span>
              <span className="relative">Explore Now</span>
            </button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AdventureExperienceCard;
