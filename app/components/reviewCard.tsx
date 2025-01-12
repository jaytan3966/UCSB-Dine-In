import Image from "next/image"
import { ReviewProps } from "./reviewsGrid"

export const Card =(review : ReviewProps) => {
    return (
        <div className="m-4">

            <div className="box text-black bg-white flex flex-col rounded-lg shadow-lg items-center justify-center border border-[#2C3E50] outline outline-double outline-[#3B4C5C] sm:w-[60vw] md:w-[34vw] lg:w-[25vw] xl:w-[20vw] 2xl:w-[17vw]">
                <Image src="https://www.foodiesfeed.com/wp-content/uploads/2023/06/burger-with-melted-cheese.jpg" alt="food" width={100} height={100} />
                <h1>{review.foodName}</h1>
                <p>by {review.username}</p>
                <p>{review.rating} Stars</p>
            </div>
        </div>
    )
}