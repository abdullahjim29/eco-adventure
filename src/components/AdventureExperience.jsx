import { useLoaderData } from "react-router-dom";
import AdventureExperienceCard from "./AdventureExperienceCard";

const AdventureExperience = () => {
    const adventureData = useLoaderData();
  return (
    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5">
        {
           adventureData.map(singleData => <AdventureExperienceCard singleData={singleData} key={singleData.id}/>)
        }
    </div>
  );
};

export default AdventureExperience;
