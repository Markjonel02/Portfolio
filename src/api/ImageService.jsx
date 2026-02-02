// ImageService.jsx
import axiosInstance from "../data/axiosInstance";

export const getImages = async () => {
  try {
    const response = await axiosInstance.get("/assets/images.json");
    return response.data;
  } catch (error) {
    console.error("Error fetching images:", error.message);
    throw error;
  }
};
