import Link from "next/link";
import styles from "./Review.module.css";
import Stars from "./Stars/Stars";
import { useState } from "react";
import { createClient } from "@/utils/supabase/client";
import "bootstrap/dist/css/bootstrap.min.css";

interface ReviewCardProps {
  food: string | undefined;
  diningHall: string | undefined;
}

const supabase = createClient();

export default function ReviewCard({ food, diningHall }: ReviewCardProps) {
  const [descriptionSubmitted, setDescription] = useState("");
  const [selectedFile, setSelectedFile] = useState<File | null>(null);
  const [uploading, setUploading] = useState(false);

  const handleDescriptionChange = (
    e: React.ChangeEvent<HTMLTextAreaElement>
  ) => {
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

    setUploading(true);

    try {
      const fileName = `${Date.now()}_${selectedFile.name}`;

      const { data, error } = await supabase
        .storage
        .from('images') // Replace with your Supabase bucket name
        .upload(fileName, selectedFile);

      if (error) {
        throw error;
      }

      const fileUrl = await supabase
        .storage
        .from('images')
        .getPublicUrl(fileName).data.publicUrl;

      const { data: dbData, error: dbError } = await supabase
        .from('reviews') 
        .insert([
          {
            description: descriptionSubmitted,
            foodName: food,
            diningHall: diningHall,
            imageUrl: fileUrl,  // Save the image URL in your database
          }
        ]);

      if (dbError) {
        throw dbError;
      }

      console.log("Review submitted successfully:", dbData);

      // Reset form state after successful submission
      setDescription("");
      setSelectedFile(null);
    } catch (error) {
      console.error("Error uploading file:", error);
    } finally {
      setUploading(false);
    }
  };

  return (
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
          onChange={handleFileChange} // Handle file selection
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
      <button
        type="button"
        className="btn btn-dark"
        onClick={handleSubmit}
        disabled={uploading}
      >
        {uploading ? "Uploading..." : "Submit"}
      </button>
    </div>
  );
}
