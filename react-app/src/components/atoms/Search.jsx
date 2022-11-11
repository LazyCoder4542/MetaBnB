import React from 'react';
import styles from './Search.module.css'
function Search() {
    return (
        <div className={styles.search}>
            <div className={styles.search_box}>
                <input type="text" placeholder='Search for location' />
                <div className="btn btn-primary">Search</div>
            </div>
        </div>
    );
}

export default Search;