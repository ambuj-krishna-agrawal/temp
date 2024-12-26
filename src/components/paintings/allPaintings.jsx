
import INFO from "../../data/paintings";
import "./styles/allPaintings.css";
import Painting from "./painting.jsx";
  
const AllPaintings = () => {
return (
    <div className="all-paintings-container">
    {INFO.paintings.map((painting, index) => (
        <Painting
        title={painting.title}
        image={painting.image}
        caption={painting.caption}
        comment={painting.comment}
        key={index}
        />
    ))}
    </div>
);
};

export default AllPaintings;
  