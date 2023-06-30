import React, { useState } from "react";

function GalleryForm({ onAdd }) {
  const [formData, setFormData] = useState({
    images: "",
    description: "",
    category: "",
  });
  function handleChange(e) {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  }
  function handleSubmit(e) {
    e.preventDefault();
    const newImageData = {
      images: formData.images,
      description: formData.description,
      category: formData.category,
    };
    fetch(`http://localhost:3041/gallery`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(newImageData),
    })
      .then((r) => r.json())
      .then((newImage) => onAdd(newImage));
  }
  return (
    <div className="container">
      <form className="add-image-form" onSubmit={handleSubmit}>
        <h1>Create a image!</h1>

        <input
          type="text"
          name="images"
          placeholder="Enter image URL..."
          className="input-text"
          value={formData.images}
          onChange={handleChange}
        />
        <br />
        <input
          type="text"
          name="description"
          placeholder="Enter a image description..."
          className="input-text"
          value={formData.description}
          onChange={handleChange}
        />
        <br />
        <input
          type="text"
          name="category"
          placeholder="Enter a image category..."
          className="input-text"
          value={formData.category}
          onChange={handleChange}
        />
        <br />
        <button type="submit" className="submit">
          Create New Image
        </button>
      </form>
    </div>
  );
}

export default GalleryForm;
