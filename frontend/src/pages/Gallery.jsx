import React from "react";
import { useEffect } from "react";
import { useMedia } from "../components/MediaContext";
import { View, Trash } from "lucide-react";
import { useState } from "react";
import api from "../services/Api";
import { toast } from "react-toastify";

const Gallery = () => {
  const { media, setMedia, fetchMedia } = useMedia();
  const [selectedMedia, setSelectedMedia] = useState(null);

  useEffect(() => {
    fetchMedia();
  }, []);

  const handleRemove = async (id) => {
    try {
      await api.patch(`/remove/${id}`);
      setMedia((prev) => prev.filter((item) => item._id !== id));
      alert("are you sure?");
      toast.success("Removed");
    } catch (error) {
      console.error("Delete failed:", error);
    }
  };

  return (
    <div className="min-h-screen bg-linear-to-br from-slate-50 to-slate-100 p-8">
      <div className="max-w-7xl mx-auto">
        <h1 className="text-5xl font-bold bg-linear-to-r from-red-500 to-pink-600 bg-clip-text text-transparent mb-12 text-center">
          Gallery
        </h1>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {Array.isArray(media) &&
            media.map((item) => (
              <div
                key={item._id}
                className="group relative bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 overflow-hidden"
              >
                <div className="aspect-3/2 overflow-hidden bg-slate-100">
                  {item.category === "image" ? (
                    <img
                      src={item.fileUrl}
                      alt={item.originalName}
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                    />
                  ) : (
                    <video
                      src={item.fileUrl}
                      controls
                      className="w-full h-full object-cover"
                    />
                  )}
                </div>

                <div className="p-4 bg-white">
                  <p className="text-sm font-medium text-slate-700 truncate group-hover:text-red-500 transition-colors">
                    {item.originalName}
                  </p>
                </div>

                <div className="flex justify-between items-center p-4 border-t">
                  <button
                    onClick={() => setSelectedMedia(item)}
                    className="flex items-center gap-1.5 px-3 py-1.5 text-blue-600 hover:bg-blue-50 rounded-lg"
                  >
                    View <View size={16} />
                  </button>

                  <button
                    onClick={() => handleRemove(item._id)}
                    className="text-red-600"
                  >
                    <Trash size={16} />
                  </button>
                </div>

                {/* Optional: Category badge */}
                <div className="absolute top-3 right-3">
                  <span className="px-3 py-1 text-xs font-semibold bg-white/90 backdrop-blur-sm rounded-full text-slate-700 shadow-md">
                    {item.category}
                  </span>
                </div>
              </div>
            ))}
        </div>
        {selectedMedia && (
          <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/70 backdrop-blur-sm">
            <div className="relative bg-white rounded-xl p-6 max-w-3xl w-full mx-4">
              <button
                onClick={() => setSelectedMedia(null)}
                className="absolute top-3 right-3 text-slate-500 hover:text-red-500"
              >
                ✕
              </button>

              {selectedMedia.mimeType?.startsWith("image") ? (
                <img
                  src={selectedMedia.fileUrl}
                  alt="preview"
                  className="max-h-[70vh] mx-auto rounded-lg"
                />
              ) : (
                <video
                  src={selectedMedia.fileUrl}
                  controls
                  className="max-h-[70vh] w-full rounded-lg"
                />
              )}
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Gallery;
