import { SHIMMER_CARD_UNITS } from "../config"




const CardShimmer = () => {
  return (
    <div className="shimmerItem">
                        <div className="shimmerImage">
            
                        </div>
                        <span className="shimmerTitle"></span>
                        <span className="shimmerTitle"></span>
                        <span className="shimmerTitle"></span>
                    </div>
  );
};

const Shimmer = () => {
  return (
    <div className="shimmerContainer">
      {new Array(SHIMMER_CARD_UNITS).fill(0).map((element, index) => {
        return <CardShimmer key={index} />;
      })}
    </div>
  );
};
export default Shimmer