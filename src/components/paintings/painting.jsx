// components/paintings/Painting.jsx
const Painting = ({ title, image, caption, comment }) => {
  const handleImageClick = () => {
    window.open(`${process.env.PUBLIC_URL}/paintings/${image}`, '_blank');
  };

  return (
    <div className="painting-card">
      <div className="painting-image-container">
        <img 
          src={`${process.env.PUBLIC_URL}/paintings/${image}`}
          alt={title} 
          className="painting-image"
          onClick={handleImageClick}
          role="button"
          tabIndex={0}
          onKeyDown={(e) => {
            if (e.key === 'Enter') handleImageClick();
          }}
        />
      </div>
      <div className="painting-info">
        <h3 className="painting-title">{title}</h3>
        {caption && <p className="painting-caption">{caption}</p>}
        {comment && <p className="painting-comment">{comment}</p>}
      </div>
    </div>
  );
};

export default Painting;