import React from 'react';
import { Link, useHistory } from 'react-router-dom';

const Meal = (props) => {
    const { strMeal, strMealThumb, idMeal } = props.meal;
    const history = useHistory()
    const url = `/meal-detail/${idMeal}`
    const handleMealDetails = () => {
        history.push(url)
    }
    return (
        <div className="shadow-md border">
            <Link to={`/meal-detail/${idMeal}`}>
                <img src={strMealThumb} className=" w-full h-40 object-cover" alt="" />
            </Link>
            <div className="p-5 flex justify-between items-center">
                <Link to={`/meal-detail/${idMeal}`}>
                    <h1 className=" text-2xl font-bold">{strMeal}</h1>
                </Link>
                <button onClick={handleMealDetails} className="px-6 py-1 bg-red-500 text-white cursor-pointer">Details</button>
            </div>
        </div>

    );
};

export default Meal;