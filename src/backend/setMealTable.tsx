// UploadMeal.tsx
import React from "react";
import { collection, doc, setDoc } from "firebase/firestore";
import { db } from "@/store/firebase";
import { MealPlanData } from "@/components/mealplans/mealdata";

export default function UploadMeal() {
  const handleBulkUpload = async () => {
    try {
      const uploadPromises = MealPlanData.meals.map((meal: any) => {
        const mealRef = doc(collection(db, "meals"), meal.id.toString());
        return setDoc(mealRef, meal);
      });

      await Promise.all(uploadPromises);
      alert("All meals uploaded successfully!");
    } catch (error) {
      console.error("Bulk upload failed:", error);
      alert("Upload failed. Check console.");
    }
  };

  return (
    <button
      onClick={handleBulkUpload}
      className="bg-green-600 text-white px-4 py-2 rounded hover:bg-green-700"
    >
      Upload Meal to Firestore
    </button>
  );
}
