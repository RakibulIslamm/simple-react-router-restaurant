import React, { useEffect, useState } from 'react';
import { useHistory, useParams } from 'react-router';
import './MealDetail.css'

const MealDetail = () => {
    const history = useHistory();
    const { id } = useParams();
    // console.log(id);
    const [meal, setMeal] = useState({});

    useEffect(() => {
        const url = `https://themealdb.com/api/json/v1/1/lookup.php?i=${id}`;
        fetch(url)
            .then(res => res.json())
            .then(data => setMeal(data?.meals[0]));
    }, [])

    const handleBackClick = () => {
        history.goBack();
    }

    const { strMeal, strCategory, strArea, strInstructions, strMealThumb, strIngredient1, strIngredient2, strIngredient3, strYoutube, strTags } = meal;
    console.log(meal.strMeal);


    return (
        <div>
            <div className="img-bg relative">
                <img className="w-full h-80 object-cover" src={strMealThumb} alt="" />
                <h1 className="text-3xl font-bold absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-white tracking-widest">{strMeal}</h1>
            </div>
            <div className="w-full flex justify-center items-center mt-5">
                <div className=" w-2/4 p-5">
                    <h1 className="text-1xl font-bold">Category: {strCategory}</h1>
                    <h1 className="text-1xl font-bold">Area: {strArea}</h1>
                    <h1 className="text-1xl font-bold">Tags: {strTags}</h1>
                    <p className="text-1xl font-norlam"><b>strInstructions:</b> {strInstructions}</p>
                    <button className="text-red-600 font-semibold" onClick={handleBackClick}>&#8592;Back</button>
                </div>
            </div>
        </div>
    );
};

export default MealDetail;