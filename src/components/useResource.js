import {useState, useEffect} from 'react';
import axios from 'axios';

const useResource = (resource) =>{
    const [resources,setResources] = useState([]);  
    /** we cannot use promise and other async operation inside useEffect, only pure cleanup function or 
     * nothing will bw returned in useEffect
     */
    useEffect(()=>{
        (async (resource) => {
            const response = await axios.get(`https://jsonplaceholder.typicode.com/${resource}`)
            setResources(response.data)
        })(resource);
    },[resource]
    );

    return resources;
};

export default useResource;