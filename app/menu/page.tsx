"use client";
import React, { useEffect, useState } from "react";
import axios from "axios";
import Link from "next/link";

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

  let mealCode = "brunch";

  const now = new Date();
  const date = now.toLocaleDateString("en-CA");

  const time = now.getHours();
  const day = now.getDay();

  if (day == 0 || day == 6) {
    if (time < 14) {
      mealCode = "brunch";
    } else if (time < 21) {
      mealCode = "dinner";
    }
  } else {
    if (time < 10) {
      mealCode = "breakfast";
    } else if (time < 15) {
      mealCode = "lunch";
    } else if (time < 21) {
      mealCode = "dinner";
    }
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
  if (error) return (
    <div>
      <div className="bg-[#1d2f54] p-3 flex justify-between items-center max-w-screen">
          <Link href="/">
            <button className="font-bold text-3xl text-[#ffce34]">
              UCSB Dine-In
            </button>
          </Link>
          
        </div>
        <div className="text-center">
          <h1 className="text-9xl">CLOSED</h1>
        </div>
      </div>
      
  );

  return (
    <div>
      <div className="bg-[#1d2f54] p-3 flex justify-between items-center max-w-screen">
        <Link href="/">
          <button className="font-bold text-3xl text-[#ffce34]">
            UCSB Dine-In
          </button>
        </Link>

        <h1 className="text-white text-2xl font-semibold">
          {diningCommonCode} {mealCode}
        </h1>
      </div>
      {menu ? (
        <div className="grid grid-cols-4">
          {menu.map((item, index) => (
            <Link
              key={index}
              href={`/specificfood/${item.name}`}
              className="box rounded h-[12vh] m-2 flex justify-center items-center no-underline bg-[#c1dce9] text-black shadow hover:scale-105 duration-300 delay-150 animate-left"
            >
              <div key={index}>
                <strong>{item.name}</strong>
              </div>
            </Link>
          ))}
        </div>
      ) : (
        <p>No menu data available.</p>
      )}
    </div>
  );
};

export default MenuPage;
