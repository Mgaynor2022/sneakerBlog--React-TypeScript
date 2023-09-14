import { BrandLink } from "../../Types/Types";
import "../../Css/Card.css";

const SneakerBrandCard = (props: BrandLink) => {
  const { image, header } = props;

  return (
    <div className="wrapper">
      <div className="card ">
        <div className="poster">
          <img loading="lazy" src={image} className="" alt="Location Unknown" />
        </div>
        <div className="details  text-center">
          <h1> {header}</h1>
        </div>
      </div>
    </div>
  );
};

export default SneakerBrandCard;
