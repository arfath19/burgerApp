import React from 'react';
import './Burger.css';
import BurgerIngredient from './BurgerIngredient/BurgerIngredient';

const burger = (props) => {
    console.log(props)
    let transformedIngredients = Object.keys(props.ingredients)
        .map(igKey => {
            // console.log("key original",igKey);
            return [...Array(props.ingredients[igKey])].map((_, i) => {
                // console.log("key ind:",_,i);
                return <BurgerIngredient key={igKey + i} type={igKey} />;

            });
        }).reduce((arr, el) => {
            return arr.concat(el); //we need to reduce as there are arrays with no length specified to check for the length of the ingredients getting added
            // so we reduce it in such a way that we can check for the length and make it into array with individual objects . if not clear remove reduce and consolelog transformedingredients.
        }, []);
    if (transformedIngredients.length === 0) {
        transformedIngredients= <p>Please start adding ingredients!!</p>;
    }

    return (
        <div className="Burger">
            <BurgerIngredient type="bread-top" />
            {transformedIngredients}
            <BurgerIngredient type="bread-bottom" />
        </div>
    );
}

export default burger;