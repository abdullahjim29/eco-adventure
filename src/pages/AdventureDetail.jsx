import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import AdventureDetailsCard from "../components/AdventureDetailsCard";
const AdventureDetail = () => {
    document.title = 'Adventure Details'
    const {id} = useParams()
    const [adventureData, setAdventureData] = useState([]);

    useEffect(() => {
        fetch('/adventure.json')
        .then(res => res.json())
        .then(data => setAdventureData(data))
    }, [])

    const exactData = adventureData.find(data => data.id === parseInt(id));

    return (
        <>
            <AdventureDetailsCard exactData={exactData}/>
        </>
    );
};

export default AdventureDetail;