import data from "../../helper/data.json"
import "./modal.css"

const ImageModal = ({ imageNumber }) => {
  return (
    <div className="ImgeModal">
        <img className="image" src={data[0].images.large} alt="" />
    </div>
  )
}

export default ImageModal