import HallCard from "./hallcard/hallcard";
import axios from 'axios';
import { useState, useEffect } from 'react';

export default function Halls() {

  const weekdays = ['Breakfast: 7:15 AM - 10:00 AM', 'Lunch: 11:00 AM - 3:00 PM', 'Dinner: 5:00 PM - 8:30 PM'];
  const weekends = ['Brunch: 10:00 AM - 2:00 PM', 'Dinner: 5:00 PM - 8:30 PM'];
  const weekdaytimes = [7, 10, 11, 15, 17, 21];
  const weekendtimes = [10, 14, 17, 21];

  interface Hall {
    name: string;
    code: string;
  }

  let text = 'Closed';

  const now = new Date();
  const date = now.toLocaleDateString('en-CA');
  const curr = now.getHours();
  const day = now.getDay();

  if (day === 0 || day === 6) {
    for (let i = 0; i < weekendtimes.length; i += 2) {
      if (curr >= weekendtimes[i] && curr < weekendtimes[i + 1]) {
        text = weekends[i / 2];
        break;
      }
    }
  } else { 
    for (let i = 0; i < weekdaytimes.length; i += 2) {
      if (curr >= weekdaytimes[i] && curr < weekdaytimes[i + 1]) {
        text = weekdays[i / 2];
        break;
      }
    }
  }

  const [carrilloOpen, setCarrilloOpen] = useState<boolean | null>(null);
  const [delaguerraOpen, setDelaguerraOpen] = useState<boolean | null>(null);
  const [ortegaOpen, setOrtegaOpen] = useState<boolean | null>(null);
  const [portolaOpen, setPortolaOpen] = useState<boolean | null>(null);
  const [error, setError] = useState<string | null>(null);
  const [loading, setLoading] = useState<boolean>(true);

  useEffect(() => {
    const fetchOpen = async () => {
      try {
        const response = await axios.get("/api/open", {
          params: {
            date
          },
        });
        let halls = response.data;
        
        if (halls.some((hall: Hall) => hall.name === 'Carrillo')) { setCarrilloOpen(true) }; 
        if (halls.some((hall: Hall) => hall.name === 'De La Guerra')) { setDelaguerraOpen(true) };
        if (halls.some((hall: Hall) => hall.name === 'Ortega')) { setOrtegaOpen(true) };
        if (halls.some((hall: Hall) => hall.name === 'Portola')) { setPortolaOpen(true) };
      } catch (err) {
        setError((err as Error).message);
      } finally {
        setLoading(false);
      }
    };

    fetchOpen();
  }, [date]);

  return (
    <div className="flex space-x-4">
      <div className="text-white rounded w-[23vw]">
        <HallCard name="Carrillo" picture="/carrillo-pizza-oven.jpeg" text={carrilloOpen ? text: 'Closed'} />
      </div>
      <div className="text-white rounded w-[23vw]">
        <HallCard name="De La Guerra" picture="/DLG.jpeg" text={delaguerraOpen? text: 'Closed'} />
      </div>
      <div className="text-white rounded w-[23vw]">
        <HallCard name="Ortega" picture="/ortega.jpeg" text={ortegaOpen? text: 'Closed'} />
      </div>
      <div className="text-white rounded w-[23vw]">
        <HallCard name="Portola" picture="/portola.jpeg" text={portolaOpen? text: 'Closed'} />
      </div>
    </div>
  );
}
