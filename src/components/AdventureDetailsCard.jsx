import { FaLocationDot } from "react-icons/fa6";
import { Link } from "react-router-dom";

const AdventureDetailsCard = ({ destination }) => {
  console.log(destination);

  const handleGoogleMeeting = () => {
    const now = new Date();
    const hour = now.getHours();
    if (hour >= 10 && hour <= 9) {
      window.open("https://meet.google.com/", "_blank");
    } else {
      alert(`You can consult between 10 am to 8 pm`)
    }
  };

  const {
    adventureLevel,
    bookingAvailability,
    category,
    cost,
    duration,
    ecoFriendlyFeatures,
    id,
    image,
    img1,
    img2,
    img3,
    img4,
    includedItems,
    location,
    longDescription,
    maxGroupSize,
    specialInstructions,
    title,
  } = destination || {};
  return (
    <div id="des" className="my-14 w-11/12 mx-auto">
      <div className="space-y-2">
        <h2 className="text-3xl font-semibold">{title}</h2>
        <div className="flex items-center gap-1 text-sm ">
          <FaLocationDot />
          <p>{location}</p>
          <p className="ml-5">{category}</p>
        </div>
      </div>

      {/* images */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-2 my-3">
        <div className="col-span-7">
          <img className="h-[410px] w-full" src={image} alt="" />
        </div>

        <div className="md:col-span-7 lg:col-span-5">
          <div className="grid md:grid-cols-2 gap-2">
            <div className="h-full md:h-[200px]">
              <img className="h-full w-full" src={img1} alt="" />
            </div>

            <div className="h-full md:h-[200px]">
              <img className="h-full w-full" src={img2} alt="" />
            </div>

            <div className="h-full md:h-[200px]">
              <img className="h-full w-full" src={img3} alt="" />
            </div>

            <div className="h-full md:h-[200px]">
              <img className="h-full w-full" src={img4} alt="" />
            </div>
          </div>
        </div>
      </div>

      {/* description */}
      <div className="w-8/12 my-10">
        <h3 className="text-xl font-semibold">Description</h3>
        <p>{longDescription}</p>
      </div>

      {/* eco frindly features */}
      <section className="my-10">
        <h2 className="text-xl font-semibold">
          Eco Friendly Features Facilities
        </h2>
        <div className="flex items-center gap-3 my-4">
          {ecoFriendlyFeatures?.map((feature, idx) => (
            <div key={idx} feature={feature} className="">
              <button className="btn hover:bg-[#FAF9FE] border-[#5334F9]">
                {feature}
              </button>
            </div>
          ))}
        </div>
      </section>

      {/* others options */}
      <section className="space-y-4 w-8/12">
        <h2 className="text-xl font-semibold mt-14">Others Information</h2>
        <div>
          <table className="table">
            <tr className="border-gray-200 border">
              <td className="border-collapse p-3 bg-gray-100 text-[16px] font-semibold">
                Adventure Level
              </td>
              <td className=" border-collapse p-3">{adventureLevel}</td>
            </tr>
            <tr className="border-gray-200 border">
              <td className=" border-collapse p-3 bg-gray-100 text-[16px] font-semibold">
                Booking Availability
              </td>
              <td className=" border-collapse p-3">
                {bookingAvailability ? "True" : "False"}
              </td>
            </tr>
            <tr className="border-gray-200 border">
              <td className=" border-collapse p-3 bg-gray-100 text-[16px] font-semibold">
                Cost
              </td>
              <td className=" border-collapse p-3">${cost}</td>
            </tr>
            <tr className="border-gray-200 border">
              <td className=" border-collapse p-3 bg-gray-100 text-[16px] font-semibold">
                Duration
              </td>
              <td className=" border-collapse p-3">{duration}</td>
            </tr>
            <tr className="border-gray-200 border">
              <td className=" border-collapse p-3 bg-gray-100 text-[16px] font-semibold">
                Included Items
              </td>
              <td className=" border-collapse p-3">
                <ul className="list-disc ml-5">
                  {includedItems?.map((item, idx) => (
                    <li key={idx} item={item}>
                      {item}
                    </li>
                  ))}
                </ul>
              </td>
            </tr>
            <tr className="border-gray-200 border">
              <td className=" border-collapse p-3 bg-gray-100 text-[16px] font-semibold">
                Max Group Size
              </td>
              <td className=" border-collapse p-3">{maxGroupSize}</td>
            </tr>
            <tr className="border-gray-200 border">
              <td className=" border-collapse p-3 bg-gray-100 text-[16px] font-semibold">
                Special Instructions
              </td>
              <td className=" border-collapse p-3">
                <ul className="list-disc ml-5">
                  {specialInstructions?.map((item, idx) => (
                    <li key={idx} item={item}>
                      {item}
                    </li>
                  ))}
                </ul>
              </td>
            </tr>
          </table>
        </div>

        <div className="my-5">
          <Link
            onClick={handleGoogleMeeting}
            className=" rounded px-5 py-2.5 overflow-hidden group bg-[#583CEA] relative hover:bg-gradient-to-r hover:from-[#583CEA] hover:to-[#5230ff] text-white hover:ring-2 hover:ring-offset-2 hover:ring-[#583CEA] transition-all ease-out duration-300"
          >
            <span className="absolute right-0 w-8 h-32 -mt-12 transition-all duration-1000 transform translate-x-12 bg-white opacity-10 rotate-12 group-hover:-translate-x-40 ease"></span>
            <span className="relative">Talk With Expert</span>
          </Link>
        </div>

      </section>
    </div>
  );
};

export default AdventureDetailsCard;
