import React from 'react';
import './SearchBar.css';

const SearchBar = () => {
    return (
        <div className="p-5 searchbar d-flex justify-content-center align-items-center">
            <div className="input-group" style={{ width: '40%' }}>
                <input type="search" className="form-control rounded" placeholder="Search" aria-label="Search"
                    aria-describedby="search-addon" />
                <button type="button" className="btn btn-outline-primary">search</button>
            </div>
        </div>
    );
};

export default SearchBar;