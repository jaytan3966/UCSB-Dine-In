interface CompReview {
  stars: number;
  source: string;
  name: string;
}

export default function CompReview({ stars, source, name }: CompReview) {
  return (
    <div className="flex justify-center items-center">
      <div className="flex space-x-2 grid grid-cols-2 justify-center items-center">
        <img src={source} className="rounded"></img>
        <div className="grid grid-cols-5">
          {[...Array(5)].map((_, index) => (
            <img
              key={index}
              src={index < stars ? "/star-fill.svg" : "/star.svg"} // Use filled or empty star based on state
              alt="star"
              className="cursor-pointer w-6 h-6" // Resize the stars to 1.5rem (24px)
            />
          ))}
        </div>
      </div>
    </div>
  );
}
