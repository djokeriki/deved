import React, {useState, createContext} from 'react';

export const MovieContext = createContext();

export const MovieProvider = (props) => {
    const [movies, setMovies] = useState([
        {
            name: 'Harry Potter', 
            price: '10$',
            id: 23124
        },
        {
            name: 'Game of Thrones',
            price: '$10',
            id: 246673
        },
        {
            name: 'Inception',
            price: '$10',
            id: 23524
        }
    ])
    return (
        <div>
            <MovieContext.Provider value={[movies, setMovies]}>
                {props.children}
            </MovieContext.Provider>
        </div>
    );
}