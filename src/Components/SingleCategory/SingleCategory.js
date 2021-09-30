import React from 'react';

const SingleCategory = (props) => {
    return (
        <div>
            <h1 className="text-center text-2xl">Name: {props.name}</h1>
        </div>
    );
};

export default SingleCategory;