import HallCard from "./hallcard/HallCard";

export default function Halls() {
  return (
    <div className="flex space-x-4">
      <div className="text-white p-4 rounded">
        <HallCard name="Carrillo" picture="/carrillo-pizza-oven.jpeg" text="..." />
      </div>
      <div className="text-white p-4 rounded">
        <HallCard name="De La Guerra" picture="/DLG.jpeg" text="..." />
      </div>
      <div className="text-white p-4 rounded">
        <HallCard name="Ortega" picture="/ortega.jpeg" text="..." />
      </div>
      <div className="text-white p-4 rounded">
        <HallCard name="Portola" picture="/portola.jpeg" text="..." />
      </div>
    </div>
  );
}
