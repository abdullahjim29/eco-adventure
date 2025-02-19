import { FaLocationDot } from "react-icons/fa6";
const AdventureExperienceCard = ({ singleData }) => {
  const { title, image, ecoFriendlyFeatures, location } = singleData;
  return (
    <div className="card bg-base-100 border border-gray-300">
      <figure>
        <img src={image} alt={title} />
      </figure>
      <div className="card-body flex flex-col space-y-5">
        <h2 className="card-title text-2xl">{title}</h2>
        <div className="flex-1">
          <h3 className="font-bold text-md">Eco Friendly Features</h3>
          <ul className="ml-8 list-disc">
            {ecoFriendlyFeatures.map((feature) => (
              <li>{feature}</li>
            ))}
          </ul>
        </div>
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-2 border border-[#583CEA] btn bg-white">
            <FaLocationDot className="text-lg" />
            <span className="font-semibold text-lg">{location}</span>
          </div>
          <div className="card-actions">
            {/* <button className="btn btn-primary bg-[#583CEA] text-white hover:bg-white hover:border border-[#583CEA] hover:text-[#583CEA]">
              Explore Now
            </button> */}
            <button
              className=" rounded px-5 py-2.5 overflow-hidden group bg-[#583CEA] relative hover:bg-gradient-to-r hover:from-[#583CEA] hover:to-[#5230ff] text-white hover:ring-2 hover:ring-offset-2 hover:ring-[#583CEA] transition-all ease-out duration-300"
            >
              <span className="absolute right-0 w-8 h-32 -mt-12 transition-all duration-1000 transform translate-x-12 bg-white opacity-10 rotate-12 group-hover:-translate-x-40 ease"></span>
              <span className="relative">Button Text</span>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AdventureExperienceCard;
