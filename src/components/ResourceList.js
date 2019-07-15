import React from 'react';
import useResource from './useResource';


const ResourceList = ({ resource })=> {
    const resources = useResource(resource);
    return(
        <ul>{resources.map(record=>(
            <li key={record.index}>{record.title}</li>
        ))}</ul>
    );
    
}
export default ResourceList;