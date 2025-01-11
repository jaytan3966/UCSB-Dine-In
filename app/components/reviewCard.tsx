import Image from "next/image"
import { ReviewProps } from "./reviewsGrid"

export const Card = (reviews : ReviewProps) => {
    return (
        <div className="grid grid-col-6">

            <div className="box text-white bg-black flex flex-col hover:scale-110 delay-150 duration-300 rounded-lg shadow-lg items-center justify-center border border-[#2C3E50] outline outline-double outline-[#3B4C5C] sm:w-[60vw] md:w-[34vw] lg:w-[25vw] xl:w-[20vw] 2xl:w-[17vw] cursor-pointer">
                <Image src="https://www.foodiesfeed.com/wp-content/uploads/2023/06/burger-with-melted-cheese.jpg" alt="food" width={100} height={100} />
                <h1>{reviews.foodName}</h1>
                <p>by {reviews.username}</p>
                <p>{reviews.rating} Stars</p>

            </div>
        </div>
    )
}