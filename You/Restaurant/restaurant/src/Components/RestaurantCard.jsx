import React from 'react'
import styles from "./RestaurantChild.module.css";

function RestaurantCard({ e }) {
    return (
        <div className={styles.parent}>
            <img className={styles.image} src={e.image} alt="/" />
            
            <div className={styles.fchild}>
            <div className={styles.name}>{e.name}</div>
            <div className={styles.specials}>{e.specials}</div>
            <div className={styles.oneprice}>Cost ₹{e.oneprice} for one</div>
                <div className={styles.mprice}>Min ₹{e.mprice} Upto {e.time}mins</div>
                </div>
            
            <div className={styles.schild}>
            <div className={styles.rating}>{e.rating}</div>
            <div className={styles.votes}>{e.votes}votes</div>
                <div className={styles.treviews}>{e.treviews} reviews</div>
            </div>

            <div className={styles.border1}>
                <button className={styles.bton}>Order Online {'>'} </button>
            </div>
        </div>
    )
}

export default RestaurantCard
