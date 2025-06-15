import { storage } from "../firebaseConfig";
import { ref, uploadBytes } from "firebase/storage";

document.getElementById("uploadBtn").addEventListener("click", async () => {
  const file = document.getElementById("fileInput").files[0];
  if (!file) {
    alert("Please select a file first.");
    return;
  }

  try {
    const fileRef = ref(storage, `uploads/${file.name}`);
    await uploadBytes(fileRef, file);
    alert("File uploaded successfully!");
  } catch (error) {
    console.error("Upload failed:", error);
    alert("Error uploading file!");
  }
});