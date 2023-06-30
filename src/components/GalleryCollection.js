import React from "react";
import GalleryCard from "./GalleryCard";

function GalleryCollection({ gallerys, onDelete, onUpdate,onImageSelect }) {
  
  
  return (
    <div className="imageGallery">
      {gallerys.map((image, index) => (
        <GalleryCard
          key={index}
          image={image}
          onImageSelect={onImageSelect}
          onDelete={onDelete}
          onUpdate={onUpdate}
        />
      ))}
    </div>
  );
}

export default GalleryCollection;
