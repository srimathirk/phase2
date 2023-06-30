import React from "react";
const Modal = ({ images, onClose, selectedImage, onPrev, onNext }) => {
  // console.log({image})
  const currentIndex = images.findIndex(image => image.id === selectedImage.id);
  const prevImage = images[currentIndex - 1];
  const nextImage = images[currentIndex + 1];

  return (
    <div className="modal">
      <div className="modal-content">
        <img src={selectedImage.images} alt={""} />
        <button className="close-button" onClick={onClose}>
          ✖
        </button>
        <div className="sliding-images">
          {prevImage && (
            <button
              className="prev-button"
              onClick={() => onPrev(prevImage)}
            >
              ⏪
            </button>
          )}
          {nextImage && (
            <button className="next-button" onClick={() => onNext(nextImage)}>
              ⏩
            </button>
          )}
        </div>
      </div>
    </div>
  );
};
export default Modal;
