import { useEffect, useState } from "react";
import useHttpRequest from '../../hooks/useHttpRequest';

import Card from "../UI/Card";
import MealItem from "./MealItem/MealItem";

import styles from './AvailableMeals.module.css';

function AvailableMeals() {
    const [meals, setMeals] = useState([]);
    const [isLoading, error, sendRequest] = useHttpRequest();

    useEffect(() => {
        sendRequest(
            {
                url: 'https://reactmeals-5c3fe-default-rtdb.europe-west1.firebasedatabase.app/meals.json'
            },
            (data) => {
                const loadedMeals = [];
                for (const itemKey in data) {
                    loadedMeals.push({
                        id: data[itemKey].id,
                        name: data[itemKey].name,
                        description: data[itemKey].description,
                        price: data[itemKey].price,
                    });
                }
                setMeals(loadedMeals);
            }
        );
    }, [sendRequest]);

    /*const DUMMY_MEALS = [
        {
            id: 'm1',
            name: 'Sushi',
            description: 'Finest fish and veggies',
            price: 22.99,
        },
        {
            id: 'm2',
            name: 'Schnitzel',
            description: 'A german specialty!',
            price: 16.5,
        },
        {
            id: 'm3',
            name: 'Barbecue Burger',
            description: 'American, raw, meaty',
            price: 12.99,
        },
        {
            id: 'm4',
            name: 'Green Bowl',
            description: 'Healthy...and green...',
            price: 18.99,
        },
    ];*/

    return (
        <Card className={styles.meals}>
            {!isLoading && error == null && meals && meals.length > 0 &&
                <ul>
                    {meals.map(item =>
                        <li key={item.id}>
                            <MealItem
                                id={item.id}
                                name={item.name}
                                description={item.description}
                                price={item.price}
                            />
                        </li>
                    )}
                </ul>
            }
            {!isLoading && error == null && (meals == null || meals.length <= 0)
                && <h2>There are no meals to diplay.</h2>
            }
            {!isLoading && error && <h2>An error occured while loading meals!</h2>}
            {isLoading && <h2>Loading...</h2>}
        </Card>
    )
}

export default AvailableMeals;