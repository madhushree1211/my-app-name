import { useState } from 'react';
import { ref, uploadBytes } from 'firebase/storage';
import { storage } from "../firebaseConfig";

export default function UploadFile() {
  const [file, setFile] = useState(null);

  const handleUpload = async () => {
    if (!file) return;
    const timestamp = new Date().getTime();
    const fileRef = ref(storage, `user_uploads/${timestamp}_${file.name}`);
    await uploadBytes(fileRef, file);
    alert("File uploaded to Firebase Storage!");
  };

  return (
    <div>
      <input type="file" onChange={e => setFile(e.target.files[0])} />
      <button onClick={handleUpload}>Upload</button>
    </div>
  );
}