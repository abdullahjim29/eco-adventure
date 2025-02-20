import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
const AdventureDetail = () => {
    const {id} = useParams()
    const [adventureData, setAdventureData] = useState([]);

    useEffect(() => {
        fetch('/public/adventure.json')
        .then(res => res.json())
        .then(data => setAdventureData(data))
    }, [])

    const exactData = [...adventureData].find(data => data.id === parseInt(id));
    return (
        <div>
            <h2 className="text-5xl">{exactData?.title}</h2>
        </div>
    );
};

export default AdventureDetail;