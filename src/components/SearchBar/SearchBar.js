import React from 'react';
import './SearchBar.css';

const SearchBar = () => {
    return (
        <div className="p-5 searchbar d-flex justify-content-center align-items-center">
            <div class="input-group" style={{ width: '40%' }}>
                <input type="search" class="form-control rounded" placeholder="Search" aria-label="Search"
                    aria-describedby="search-addon" />
                <button type="button" class="btn btn-outline-primary">search</button>
            </div>
        </div>
    );
};

export default SearchBar;