import React, { useEffect, useState } from 'react';
import ErrorMsg from '../ErrorMsg/ErrorMsg';
import Meal from '../Meal/Meal';

const Home = () => {

    const [search, setSearch] = useState('');
    // console.log(search);
    const [meals, setMeals] = useState([]);
    // console.log(meals);


    useEffect(() => {
        const url = `https://themealdb.com/api/json/v1/1/search.php?s=${search}`;
        fetch(url)
            .then(res => res.json())
            .then(data => {
                try {
                    setMeals(data.meals)
                }
                catch (error) {
                    setMeals(error);
                }
            })
    }, [search]);
    // console.log(meals);

    const handleSearchField = (e) => {
        const fieldText = e.target.value;
        setSearch(fieldText);
    }
    return (
        <div>
            <h1 className="text-3xl font-bold text-center mt-5">Search your food</h1>
            <input className="border block w-6/12 mx-auto py-2 px-5 mt-5" onChange={handleSearchField} type="text" placeholder="Search..." />
            {
                meals === null ? '' : <h1 className=" text-xl font-bold mt-3 text-center">total meals found: {meals.length}</h1>
            }
            {
                meals === null ? <ErrorMsg></ErrorMsg> : <div className=" w-10/12 mx-auto grid grid-cols-4 gap-5 mt-5">
                    {
                        meals.map(meal => <Meal key={meal.idMeal} meal={meal}></Meal>)
                    }
                </div>
            }
        </div>
    );
};

export default Home;