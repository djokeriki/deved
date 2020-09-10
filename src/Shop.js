import React, {useState, useEffect} from 'react';
import {v1 as uuid} from 'uuid';
import {Link} from 'react-router-dom';
function Shop() {

    useEffect(() => {
        fetchItems();
    }, [])

    const [items, setItems] = useState([]);
    const fetchItems = async () => {
        var myHeaders = new Headers();
        myHeaders.append("Authorization", "922e8067-3f73dcf9-66a73584-09af3c45");
        
        var requestOptions = {
            method: 'GET',
            headers: myHeaders,
            redirect: 'follow'
        }

        const data = await fetch(`https://fortniteapi.io/v1/items/upcoming?lang=en`, requestOptions);
        const items = await data.json();
        console.log(items.items);
        setItems(items.items);
    }
    return (
        <div>
            {items.map(item => (
                <div key={item.id}>
                    <h1>{item.name}</h1>
                    <Link to={`/shop/${item.itemid}`}>{item.name}</Link>
                </div>
                

            ))}
        </div>
    )
}

export default Shop
