import React, { useState } from "react";
import axios from "axios";

const FileUploadProgress = () => {
  const [uplaodProgress, setUplaodProgress] = useState(0);
  const [uploading, setUploading] = useState(false);
  const [fileName, setFileName] = useState("");

  const handleFileUpload = async (e) => {
    const file = e.target.files[0];
    if (!file) return;

    setFileName(file.name);
    setUploading(true);
    setUplaodProgress(0);

    const formData = new FormData();
    formData.append("file", file);

    try {
      const res = await axios.post("https://httpbin.org/post", formData, {
        headers: {
          "Content-Type": "multipart/form-data",
        },
        onUploadProgress: (ProgressEvent) => {
          const percent = Math.round(
            (ProgressEvent.loaded * 100) / ProgressEvent.total
          );
          setUplaodProgress(percent);
        },
      });
    } catch (error) {
    } finally {
      setUploading(false);
    }
  };
  return (
    <div style={{ margin: "20px 0" }}>
      <input
        type="file"
        onChange={handleFileUpload}
        style={{ display: "block", marginBottom: "10px" }}
      />

      {uplaodProgress > 0 && (
        <div className="outer-container">
          <div
            className="inner-container"
            style={{ width: uplaodProgress * 2 }}
          ></div>
        </div>
      )}
    </div>
  );
};

export default FileUploadProgress;
