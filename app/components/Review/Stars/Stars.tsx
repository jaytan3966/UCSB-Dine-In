import { useStarsState } from "./useStarsState";

export default function Stars() {
  const { filledStars, setFilledStars } = useStarsState();

  const handleStarClick = (index: number) => {
    setFilledStars(index + 1); // Update the number of filled stars based on click
  };

  return (
    <div className="px-10 flex space-x-5">
      {[...Array(5)].map((_, index) => (
        <img
          key={index}
          src={index < filledStars ? "/star-fill.svg" : "/star.svg"} // Use filled or empty star based on state
          alt="star"
          onClick={() => handleStarClick(index)} // Set the filled stars state when clicked
          className="cursor-pointer w-6 h-6" // Resize the stars to 1.5rem (24px)
        />
      ))}
    </div>
  );
}
