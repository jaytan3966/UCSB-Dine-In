import HallCard from "./hallcard/hallcard";

export default function Halls() {
  return (
    <div className="flex space-x-4">
      <div className="text-white rounded w-[23vw]">
        <HallCard name="Carrillo" picture="/carrillo-pizza-oven.jpeg" text="..." />
      </div>
      <div className="text-white rounded w-[23vw]">
        <HallCard name="De La Guerra" picture="/DLG.jpeg" text="..." />
      </div>
      <div className="text-white rounded w-[23vw]">
        <HallCard name="Ortega" picture="/ortega.jpeg" text="..." />
      </div>
      <div className="text-white rounded w-[23vw]">
        <HallCard name="Portola" picture="/portola.jpeg" text="..." />
      </div>
    </div>
  );
}
