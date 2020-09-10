import React, {useState, useEffect} from 'react';
import {Link} from 'react-router-dom';
import './App.css';

function Item({match}) {

    useEffect(() => {
        fetchItem();
    }, [])

    const [item, setItem] = useState({
        images: {}
    });

    const fetchItem = async () => {
        var myHeaders = new Headers();
        myHeaders.append("Authorization", "922e8067-3f73dcf9-66a73584-09af3c45");
        
        var requestOptions = {
            method: 'GET',
            headers: myHeaders,
            redirect: 'follow'
        }
        const fetchItem = await fetch(` https://fortniteapi.io/v1/items/get?id=${match.params.id}&lang=en`, requestOptions);
        const item = await fetchItem.json();

        console.log(item);
    }
    
    return (
        <div>
           <h1>{item.name}</h1>
           <img src={item.images.background} alt={item.name} />
        </div>
    )
}

export default Item
