import { useLoaderData } from "react-router-dom";
import AdventureExperienceCard from "./AdventureExperienceCard";

const AdventureExperience = () => {
    const adventureData = useLoaderData();

  return (
    <div className="w-11/12 mx-auto grid md:grid-cols-2 lg:grid-cols-3 gap-x-5 gap-y-14">
        {
           adventureData?.map(singleData => <AdventureExperienceCard singleData={singleData} key={singleData.id}/>)
        }
    </div>
  );
};

export default AdventureExperience;
