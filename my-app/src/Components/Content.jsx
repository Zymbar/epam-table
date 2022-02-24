import React, {useEffect, useState} from "react";
import Table from "./Table";
import Photo from "./Photo";
import Error from "./Error";
import Loader from "./Loader";

const url = `https://zoo-animal-api.herokuapp.com/animals/rand/10`;
const headers = ["Name", "Type", "Habitat", "Lifespan"];
export const Content= () =>{

    const [isLoading, setIsLoading] = useState(true);
    const [data, setData] = useState([]);
    const [activeIndex, setActiveIndex] = useState(undefined);
    const [errorMessage, setErrorMessage] = useState(undefined)

    useEffect (()=>{
    fetch(url).then(response => response.json())
        .then(d=>{
            setData(d);
            setIsLoading(false);
        })
        .catch((er)=> {
            setErrorMessage(er);
            setIsLoading(false)
        });
    },[]);
    const rows = data.map(d=>([d.name, d.animal_type, d.habitat, d.lifespan]));
    const onActiveLink = (index=>setActiveIndex(index))
    return isLoading
        ? <Loader/>
        : errorMessage
            ? <Error message={errorMessage}/>
            :!!data.length &&
        <div>
            <Photo link={data[activeIndex]?.image_link} name={data[activeIndex]?.name}/>
            <Table headings={headers} rows={rows} onActiveLink={onActiveLink}/>
        </div>
}