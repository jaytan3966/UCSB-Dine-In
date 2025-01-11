"use client";
import React, { useEffect, useState } from 'react';
import axios from 'axios';

interface MenuItem {
    name: string;
}

const MenuPage = () => {
    const [menu, setMenu] = useState<MenuItem[] | null>(null);
    const [error, setError] = useState<string | null>(null);
    const [loading, setLoading] = useState<boolean>(true);

    // Example date, dining common, and meal code
    const date = '2025-01-11'; 
    const diningCommonCode = 'carrillo'; // For example, change as per your needs
    const mealCode = 'dinner'; // Adjust this value accordingly

    useEffect(() => {
        const fetchMenu = async () => {
            try {
                const response = await axios.get('/api/menu', {
                    params: {
                        date,
                        'dining-common-code': diningCommonCode,
                        'meal-code': mealCode,
                    },
                });
                setMenu(response.data);
            } catch (err) {
                setError((err as Error).message);
            } finally {
                setLoading(false);
            }
        };

        fetchMenu();
    }, [date, diningCommonCode, mealCode]);

    if (loading) return <p>Loading...</p>;
    if (error) return <p>Error: {error}</p>;

    return (
        <div>
            <h1>Dining Menu</h1>
            {menu ? (
                <ul>
                    {menu.map((item, index) => (
                        <li key={index}>
                            <strong>{item.name}</strong>
                        </li>
                    ))}
                </ul>
            ) : (
                <p>No menu data available.</p>
            )}
        </div>
    );
};

export default MenuPage;
