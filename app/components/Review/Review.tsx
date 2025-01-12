// import Link from "next/link";
// import styles from "./Review.module.css";
// import Stars from "./Stars/Stars";
// import { useState } from "react";
// import { POST } from "../../api/routing/route";
// import "bootstrap/dist/css/bootstrap.min.css";
// import { createClient } from "@/utils/supabase/client";

// const supabase = createClient();

// interface ReviewCardProps {
//   food: string | undefined;
//   diningHall: string | undefined;
//   rating: number;
// }
// export default function ReviewCard({
//   food,
//   diningHall,
//   rating,
// }: ReviewCardProps) {
//   const [descriptionSubmitted, setDescription] = useState("");

//   const handleDescriptionChange = (
//     e: React.ChangeEvent<HTMLTextAreaElement>
//   ) => {
//     setDescription(e.target.value);
//   };

//   const handleSubmit = async () => {
//     const response = await fetch("/api/routing", {
//       method: "POST",
//       headers: {
//         "Content-Type": "application/json",
//       },
//       body: JSON.stringify({
//         description: descriptionSubmitted,
//         foodName: food,
//         diningcommon: diningHall,
//         rating: rating,
//       }),
//     });
//   };

//   return (
//     <div className={styles.card}>
//       <div className="flex space-x-2">
//         <h2 className={styles["card-title"]}>test</h2>
//         <Stars />
//       </div>
//       <div className="mb-3">
//         <label htmlFor="formFileSm" className="form-label">
//           Submit picture file
//         </label>
//         <input
//           className="form-control form-control-sm"
//           id="formFileSm"
//           type="file"
//         />
//       </div>
//       <div className="form-group">
//         <label htmlFor="exampleFormControlTextarea1">Comments</label>
//         <textarea
//           className="form-control"
//           id="exampleFormControlTextarea1"
//           rows={10}
//           value={descriptionSubmitted}
//           onChange={handleDescriptionChange}
//         ></textarea>
//       </div>
//       <button type="button" className="btn btn-dark" onClick={handleSubmit}>
//         Submit
//       </button>
//     </div>
//   );
// }
import { useState } from "react";
import { createClient } from "@/utils/supabase/client"; // Adjust this import path based on your structure
import styles from "./Review.module.css";
import Stars from "./Stars/Stars";
import "bootstrap/dist/css/bootstrap.min.css";
import Link from "next/link";

const supabase = createClient();

interface ReviewCardProps {
  food: string | undefined;
  diningHall: string | undefined;
  rating: number;
}

export default function ReviewCard({ food, diningHall, rating }: ReviewCardProps) {
  const [descriptionSubmitted, setDescription] = useState("");
  const [selectedFile, setSelectedFile] = useState<File | null>(null);
  const [uploading, setUploading] = useState(false);
  

  const handleDescriptionChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    setDescription(e.target.value);
  };

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      setSelectedFile(e.target.files[0]);
    }
  };

  const handleSubmit = async () => {
    if (!selectedFile) {
      alert("Please select an image to upload.");
      return;
    }

    const fileName = `${Date.now()}_${selectedFile.name}`;
    setUploading(true);

    try {
      const { data, error: uploadError } = await supabase
        .storage
        .from('images') 
        .upload(fileName, selectedFile);

      if (uploadError) {
        throw uploadError;
      }

      const { data: publicURL, error: urlError } = await supabase
        .storage
        .from('images')
        .getPublicUrl(fileName);

      if (urlError) {
        throw urlError;
      }
      food = food?.replaceAll(/%20/g, " ");
      diningHall = diningHall?.replaceAll(/%20/g, " ");

      const response = await fetch("/api/routing", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          description: descriptionSubmitted,
          foodName: food,
          diningcommon: diningHall,
          rating: rating,
          images: fileName,
        }),
      });

      if (!response.ok) {
        throw new Error("Failed to submit the review.");
      }

      alert("Review submitted successfully");

      // Reset form state
      setDescription("");
      setSelectedFile(null);
      window.location.href = `/hall/${diningHall}`;
    } catch (error) {
      console.error("Error uploading file:", error);
      alert("Error uploading file: " + (error as Error).message);
    } finally {
      setUploading(false);
    }
  };

  return (
    <div>
      <div className="bg-[#1d2f54] p-3 flex justify-between items-center max-w-screen">
        <Link href="/">
          <button className="font-bold text-3xl text-[#ffce34]">
            UCSB Dine-In
          </button>
        </Link>

      </div>
    <div className={styles.card}>
  
      <div className="flex space-x-2">
        <h2 className={styles["card-title"]}>Submit Review</h2>
        <Stars />
      </div>
      <div className="mb-3">
        <label htmlFor="formFileSm" className="form-label">
          Submit picture file
        </label>
        <input
          className="form-control form-control-sm"
          id="formFileSm"
          type="file"
          onChange={handleFileChange}
        />
      </div>
      <div className="form-group">
        <label htmlFor="exampleFormControlTextarea1">Comments</label>
        <textarea
          className="form-control"
          id="exampleFormControlTextarea1"
          rows={10}
          value={descriptionSubmitted}
          onChange={handleDescriptionChange}
        ></textarea>
      </div>
      <button type="button" className="btn btn-dark" onClick={handleSubmit} disabled={uploading}>
        {uploading ? "Uploading..." : "Submit"}
      </button>
    </div>
    </div>
    
  );
}
