import React from 'react'
import { useState } from "react";
import data from "../db.json";
import RestaurantCard from './RestaurantCard';
import styles from "./RestaurantChild.module.css";

function Restaurant() {
    const [text, setText] = useState("");
    const [todolist, setTodolist] = useState(data);
    const [sort, setSort] = useState([]);
    const [initial, setChangedInitial] = useState(true);
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

    function sorting()
    {
        let temp = JSON.parse(JSON.stringify(todolist))
        let results = todolist.sort((a, b) =>
            (b.rating - a.rating)).map(el => el)
        setSort(results);
    }

    function oneStar()
    {
        let temp = JSON.parse(JSON.stringify(todolist))
        let results = todolist.filter((e) => e.rating > 1)
        //let resultSort = results.sort((a, b) => (a.rating - b.rating)).map(el => el);
      // setChangedInitial(false);
        setSort(results);

    }

    function twoStar()
    {
      let temp = JSON.parse(JSON.stringify(todolist))
        let results = temp.filter((e) => e.rating > 2)
        let resultSort = results.sort((a, b) => (a.rating - b.rating)).map(el => el);
        setChangedInitial(false);
        setSort(resultSort);
    }

    function threeStar()
    {
        let temp = JSON.parse(JSON.stringify(todolist))
        let results = temp.filter((e) => e.rating > 3)
        let resultSort = results.sort((a, b) => (a.rating - b.rating)).map(el => el);
        setChangedInitial(false);
        setTodolist(resultSort);
    }

    function fourStar()
    {
        let temp = JSON.parse(JSON.stringify(todolist))
        let results = temp.filter((e) => e.rating > 4)
        let resultSort = results.sort((a, b) => (a.rating - b.rating)).map(el => el);
        setChangedInitial(false);
        setSort(resultSort);
    }

    function lh()
    {
        let results = todolist.sort((a,b) => ((2*a.oneprice)-(2*b.oneprice))).map(el => el)
        setTodolist(results);
          console.log("sorted", results);
    }

    function hl()
    {
        let results = todolist.sort((a,b) => ((2*b.oneprice)-(2*a.oneprice))).map(el => el)
        setTodolist(results);
          console.log("sorted", results);
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
             <button onClick={sorting}>Sort by Ratings</button>
            <button onClick={oneStar}>1 star</button>
            <button onClick={twoStar}>2 star</button>
            <button onClick={threeStar}>3 star</button>
            <button onClick={fourStar}>4 star</button>
            <br />
            
            <h2>Sort By Pricing per two Heads</h2>
             <button onClick={lh}>low to high</button>
            <button onClick={hl}>high to low</button>
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
