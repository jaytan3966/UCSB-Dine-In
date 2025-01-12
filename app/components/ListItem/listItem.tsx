import { createClient } from "@/utils/supabase/client";
import CompReview from "../CompReview";
const supabase = createClient();

interface ListItemProps {
  username: string;
  rating: number;
  description: string;
  url: string;
}

export const ListItem = ({
  username,
  rating,
  description,
  url,
}: ListItemProps) => {
  return (
    <div className="box rounded w-[55vw] text-center bg-[#f7f7f7] shadow p-2 m-2 grid grid-cols-2">
      <CompReview stars={rating} source={url} name={username} />
      <div>
        <p>Description:</p>
        <p>{description}</p>
        <p>by {username}</p>
      </div>
    </div>
  );
};
