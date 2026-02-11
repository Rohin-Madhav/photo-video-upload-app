import React from "react";
import { useRef } from "react";
import api from "../services/Api";
import { toast } from "react-toastify";

const UploaderBtn = ({ label = "Upload Media", className = "",onUploadSuccess  }) => {
  const fileInputRef = useRef(null);

  const handleUpload = async (event) => {
    const file = event.target.files[0];
    if (!file) return;

    const formData = new FormData();
    formData.append("file", file);

    try {
      const res = await api.post("/upload", formData);
       toast.success("Upload successful!");
       console.log(res.data);
       if(onUploadSuccess ){
        onUploadSuccess(res.data)
       }
    } catch (error) {
        console.error("UPLOAD ERROR:", error.response?.data || error.message);
      toast.error(
        error.response?.data?.message || "Upload failed"
      );
    }
  };
  return (
    <>
      <button
        onClick={() => fileInputRef.current.click()}
        className={className}
      >
        {label}
      </button>
      <input
        type="file"
        ref={fileInputRef}
        onChange={handleUpload}
        style={{ display: "none" }}
        accept="image/*,video/*"
      />
    </>
  );
};

export default UploaderBtn;
