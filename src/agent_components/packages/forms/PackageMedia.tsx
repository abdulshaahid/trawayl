import React, { useRef, useState } from "react";
import { ImageIcon, X, Film, Plus } from "lucide-react";
import axios from "axios";
import SERVERURL from "../../../URL";

export default function PackageMedia({ handleDataUpdate, formData }) {
  const fileInputRef = useRef(null);
  const [isUploading, setIsUploading] = useState(false);
  const mediaItems = formData?.media?.items || [];

  // Function to upload file to server
  const uploadFile = async (file) => {
    try {
      const formData = new FormData();
      formData.append("file", file);

      const response = await axios.post(`${SERVERURL}/package/api/upload/`, formData, {
        headers: {
          "Content-Type": "multipart/form-data",
        },
      });

      // Handle the specific API response format
      const { message, id, image_url } = response.data;
      
      if (message === "Image uploaded successfully") {
        return {
          id: id,
          url: image_url,
        };
      } else {
        throw new Error("Upload failed");
      }
    } catch (error) {
      console.error("Error uploading file:", error);
      throw error;
    }
  };

  const handleFileChange = async (e) => {
    const files = Array.from(e.target.files);
    
    if (mediaItems.length + files.length > 8) {
      alert("Maximum 8 media items allowed");
      return;
    }

    setIsUploading(true);

    try {
      // Create temporary preview items
      const newItems = files.map(file => ({
        id: Date.now() + Math.random(),
        url: URL.createObjectURL(file),
        type: file.type.startsWith("video/") ? "video" : "image",
        file: file,
        isUploading: true
      }));

      // Add items with temporary URLs to state
      handleDataUpdate({
        ...formData.media,
        items: [...mediaItems, ...newItems]
      }, "media");

      // Upload files and get permanent URLs
      const uploadedItems = await Promise.all(
        files.map(async (file) => {
          const uploadResult = await uploadFile(file);
          return {
            id: uploadResult.id, // Use the ID from the server
            url: uploadResult.url, // Use the image_url from the server
            type: file.type.startsWith("video/") ? "video" : "image",
            isUploading: false
          };
        })
      );

      // Update state with permanent URLs
      handleDataUpdate({
        ...formData.media,
        items: [
          ...mediaItems.filter(item => !item.isUploading),
          ...uploadedItems
        ]
      }, "media");
    } catch (error) {
      alert("Error uploading files. Please try again.");
      // Remove failed uploads from state
      handleDataUpdate({
        ...formData.media,
        items: mediaItems.filter(item => !item.isUploading)
      }, "media");
    } finally {
      setIsUploading(false);
      if (fileInputRef.current) {
        fileInputRef.current.value = "";
      }
    }
  };

  const removeMedia = async (idToRemove) => {
    try {
      // Call API to delete file from server
      await axios.delete(`${SERVERURL}/package/api/upload/${idToRemove}/`);
      
      // Update state after successful deletion
      const updatedItems = mediaItems.filter(item => item.id !== idToRemove);
      handleDataUpdate({
        ...formData.media,
        items: updatedItems
      }, "media");
    } catch (error) {
      console.error("Error deleting file:", error);
      alert("Error deleting file. Please try again.");
    }
  };

  return (
    <div className="space-y-4">
      <h3 className="text-lg font-semibold">Media</h3>
      
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
        {/* File Input */}
        <input
          type="file"
          ref={fileInputRef}
          onChange={handleFileChange}
          accept="image/*,video/*"
          multiple
          className="hidden"
        />
        
        {/* Add Media Button */}
        {mediaItems.length < 8 && (
          <button
            onClick={() => fileInputRef.current?.click()}
            disabled={isUploading}
            className={`aspect-square bg-[#111111] rounded-xl 
              hover:bg-[#1a1a1a] hover:border-[#37e5a5] border-2 
              border-transparent transition-all cursor-pointer 
              flex flex-col items-center justify-center
              ${isUploading ? 'opacity-50 cursor-not-allowed' : ''}`}
          >
            <Plus className="w-8 h-8 mb-2" />
            <span className="text-sm">
              {isUploading ? "Uploading..." : "Add Media"}
            </span>
          </button>
        )}

        {/* Media Previews */}
        {mediaItems.map((item) => (
          <div
            key={item.id}
            className="relative aspect-square rounded-xl overflow-hidden group border-2 border-transparent hover:border-[#37e5a5] transition-all"
          >
            {item.type === "video" ? (
              <video
                src={item.url}
                className="w-full h-full object-cover"
              />
            ) : (
              <img
                src={`${SERVERURL}${item.url}`}
                alt="Media preview"
                className="w-full h-full object-cover"
              />
            )}

            {/* Type Indicator */}
            <div className="absolute top-2 left-2 p-1 bg-black/50 rounded-full">
              {item.type === "video" ? (
                <Film className="w-4 h-4" />
              ) : (
                <ImageIcon className="w-4 h-4" />
              )}
            </div>

            {/* Remove Button */}
            <button
              onClick={() => removeMedia(item.id)}
              disabled={isUploading}
              className="absolute top-2 right-2 p-1 bg-red-500 rounded-full 
                opacity-0 group-hover:opacity-100 transition-opacity
                disabled:opacity-50 disabled:cursor-not-allowed"
            >
              <X className="w-4 h-4" />
            </button>
          </div>
        ))}
      </div>

      {/* Counter */}
      <div className="text-sm text-gray-400">
        {mediaItems.length}/8 media items added
      </div>
    </div>
  );
}