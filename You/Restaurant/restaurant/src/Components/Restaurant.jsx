import React from 'react'
import { useState } from "react";
import data from "../db.json";
import RestaurantCard from './RestaurantCard';
import styles from "./RestaurantChild.module.css";

function Restaurant() {
    
    const [todolist, setTodolist] = useState(data);
    const parentData = data;
    console.log(todolist);
    const [formData, setFormData] = useState({});

    const handleChange = (e) => {
        const { name, value } = e.target;
        // setText(...text, [name]: value);
        setFormData({ ...formData, [name]: value })
        console.log(formData);
    }

    const handleSubmit = (e) => {
            e.preventDefault();
            //const data = formData;

            setTodolist([...todolist, formData]);
    }

    // function sorting()
    // {
    //     let temp = JSON.parse(JSON.stringify(todolist))
    //     let results = todolist.sort((a, b) =>
    //         (b.rating - a.rating)).map(el => el)
    //     setSort(results);
    // }

    function sortingStar(i)
    {
        let result = [...parentData].filter((e) => e.rating >= i).sort((a, b) => a.rating - b.rating)
        setTodolist(result);
    }

    // function lh()
    // {
    //     let results = todolist.sort((a,b) => ((2*a.oneprice)-(2*b.oneprice))).map(el => el)
    //     setTodolist(results);
    //       console.log("sorted", results);
    // }

    // function hl()
    // {
    //     let results = todolist.sort((a,b) => ((2*b.oneprice)-(2*a.oneprice))).map(el => el)
    //     setTodolist(results);
    //       console.log("sorted", results);
    // }

    function sortPrice(way){
        let results = [] 
        if(way=='low'){
             results = [...parentData].sort((a,b) => (a.oneprice-b.oneprice))
        }else{
             results = [...parentData].sort((a,b) => (b.oneprice-a.oneprice))

        }
        setTodolist(results);
    }


    return (
        <>
        <form onSubmit={handleSubmit}>
            <label>Name:</label>
            <input type="text" name="name" placeholder="Add name" onChange={handleChange}/>
            <label>Image:</label>
            <input type="text" name="image" placeholder="Add Image" onChange={handleChange}/>
             <label>Specials:</label>
            <input type="text" name="specials"  placeholder="Add Specials" onChange={handleChange} />
             <label>Price per Person:</label>
            <input type="text" name="oneprice" placeholder="Add Price" onChange={handleChange}/>
             <label>Minimum Price:</label>
            <input type="text" name="mprice" placeholder="Add Minimum Price" onChange={handleChange}/>
             <label>Delivery Time:</label>
            <input type="text" name="time" placeholder="Add Delivery Time" onChange={handleChange}/>
             <label>Ratings:</label>
            <input type="text" name="rating" placeholder="Add Ratings" onChange={handleChange}/>
             <label>Votes:</label>
            <input type="text" name="votes" placeholder="Add Votes" onChange={handleChange}/>
             <label>Reviews:</label>
            <input type="text" name="treviews"placeholder="Add Reviews" onChange={handleChange}/>
            <input type="submit" value="submit"/>
            </form>

            <h2>Sort By Ratings</h2>
             {/* <button onClick={sorting}>Sort by Ratings</button> */}
            <button onClick={()=>sortingStar(1)}>1 star</button>
            <button onClick={()=>sortingStar(2)}>2 star</button>
            <button onClick={()=>sortingStar(3)}>3 star</button>
            <button onClick={()=>sortingStar(4)}>4 star</button>
            <br />
            
            <h2>Sort By Pricing per two Heads</h2>
             <button onClick={()=>sortPrice('low')}>low to high</button>
            <button onClick={()=>sortPrice('high')}>high to low</button>
            <br />
            
            <h2>Restaurant Payments</h2>
            <button>Cash</button>
            <button>Card</button>
            <button>All</button>
            <br />

            <div className={styles.main}>
                {todolist.map(e => <RestaurantCard e={e} />)}
                </div>
            </>
    )
}

export default Restaurant
