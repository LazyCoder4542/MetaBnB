import React, { useState} from 'react';
import data from '../assets/data/places.json';
import {concatNum} from '../custom'
import { ReactComponent as Star } from '../assets/icons/star.svg'
import { ReactComponent as Settings } from '../assets/icons/settings.svg'
import { ReactComponent as Heart } from '../assets/icons/heart.svg'
import './Places.css'
import styles from './Places.module.css'
function Places(props) {
    const places = data
    const [filter] = useState()
    if (props.mini) {
        const minidata = shuffle([...places]).splice(props.limit)
        console.log(minidata);
        return (
            <div className={`container ${styles.place_cards}`} >
                {renderData(minidata, filter) ? 
                renderData(minidata, filter).map((place, idx) => {
                    return renderCards(place, idx);
                })
                : <div className='error'></div>}
            </div>
        )
    }
    return (
        <>
            <section id='location'>
                <div className="wrapper">
                    <div className="filter">
                        <div className="tags">
                            <span>Restaurant</span>
                            <span>Cottage</span>
                            <span>Castle</span>
                            <span>Fantastic</span>
                            <span>Beach</span>
                            <span>Cabins</span>
                            <span>Off-grid</span>
                            <span>Farm</span>
                        </div>
                        <div className="location">
                            <span>Location</span>
                            <span><Settings /></span>
                        </div>
                    </div>
                    <div className={`container ${styles.place_cards}`} >
                        {renderData(places, filter) ? 
                        renderData(places, filter).map((place, idx) => {
                            return renderCards(place, idx);
                        })
                        : <div className='error'></div>}
                    </div>
                </div>
            </section>
        </>
    );
}
function renderCards(place, idx) {
    let { name, price, distance, popularity, availability, id } = place;
    price = concatNum(price);
    popularity = Math.ceil(popularity / 5);
    console.log(price);
    return (
        <div key={idx}>
            <div className={styles.image}>
                <img src={`/assets/images/places/${id}.png`} alt="" />
                <div className={styles.heart}>
                    <Heart />
                </div>
            </div>
            <div className={styles.desc}>
                <div>
                    <div className={styles.name}>{name}</div>
                    <div className={styles.price}>{price}BT per night</div>
                </div>
                <div>
                    <div className={styles.distance}>{distance}km away</div>
                    <div className={styles.availability}>available for {availability}weeks stay</div>
                </div>
                <div className={styles.stars}>
                    {[1, 2, 3, 4, 5].map((idx) => {
                        return (
                            <span className={idx + 1 < popularity ? styles.filled : null} key={idx}>
                                <Star />
                            </span>
                        );
                    })}
                </div>
            </div>
        </div>
    );
}

function renderData(data, filter = ['popularity']) {
    data = sort(data, filter)
    if (data === null || data === []) {
        return null
    }
    return data
}
function sort(arr, filters) {
    filters.forEach(filter => {
        if (filter === "popularity") {
            // arranges according to popularity
            arr.sort((a, b)=>{
                return (b.popularity - a.popularity)
            })
        }
    });
    
    return arr
}
function shuffle(arr) {
    let currentIndex = arr.length,  randomIndex;
    while (currentIndex !== 0) {
      randomIndex = Math.floor(Math.random() * currentIndex);
      currentIndex--;
      [arr[currentIndex], arr[randomIndex]] = [
        arr[randomIndex], arr[currentIndex]];
    }
    return arr;
}

export default Places;