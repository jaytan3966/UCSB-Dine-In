import { createClient } from "@/utils/supabase/client";

const supabase = createClient();

interface ListItemProps {
  username: string;
  rating: number;
  description: string;
  url: string;
}

export const ListItem = ({ username, rating, description, url }: ListItemProps) => {
  return (
    <div>
      <h1>{username}</h1>
      <h3>{rating}</h3>
      <p>{description}</p>
      <img src={url}></img>
    </div>
  );
};
