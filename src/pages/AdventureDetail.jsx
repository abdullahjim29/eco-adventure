import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import AdventureDetailsCard from "../components/AdventureDetailsCard";
const AdventureDetail = () => {
    document.title = 'Adventure Details'
    const {id} = useParams()
    const [adventureData, setAdventureData] = useState([]);

    useEffect(() => {
        fetch('/public/adventure.json')
        .then(res => res.json())
        .then(data => setAdventureData(data))
    }, [])

    const exactData = [...adventureData].find(data => data.id === parseInt(id));

    return (
        <>
            <AdventureDetailsCard destination={exactData}/>
        </>
    );
};

export default AdventureDetail;