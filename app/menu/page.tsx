"use client";
import React, { useEffect, useState } from "react";
import axios from "axios";

interface MenuItem {
  name: string;
}

interface MenuPageProps {
  diningCommonCode: string;
}

const MenuPage = ({ diningCommonCode }: MenuPageProps) => {
  const [menu, setMenu] = useState<MenuItem[] | null>(null);
  const [error, setError] = useState<string | null>(null);
  const [loading, setLoading] = useState<boolean>(true);
  const [currentTime, setCurrentTime] = useState<string | null>(null);

  let mealCode = "";

  const now = new Date();
  const date = now.toLocaleDateString("en-CA");

  const time = now.getHours();
  const day = now.getDay();

  if (day == 0 || day == 6) {
    if (time < 14) { mealCode = "brunch"; } 
    else if ( time < 21) { mealCode = "dinner" }
  } 
  else {
    if (time < 10) { mealCode = "breakfast" } 
    else if (time < 15) { mealCode = "lunch" } 
    else if (time < 21) { mealCode = "dinner" }
  }

  useEffect(() => {
    const fetchMenu = async () => {
      try {
        const response = await axios.get("/api/menu", {
          params: {
            date,
            "dining-common-code": diningCommonCode,
            "meal-code": mealCode,
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
  if (error) return <p>Closed</p>;

  return (
    <div>
      <h1>Dining Menu </h1>
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
