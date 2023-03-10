import { SHIMMER_CARD_UNITS } from "../config"




const CardShimmer = () => {
  return (
    <div className="h-80 w-80 p-6">
                        <div className="bg-gray-300 h-52 w-80 flex flex-col rounded-lg ">
            
                        </div>
                        <div className="h-8 w-80 rounded-lg bg-gray-300 my-2"></div>
                        <div className="h-4 w-80 rounded-lg bg-gray-300 my-2"></div>
                        <div className="h-4 w-40 rounded-lg bg-gray-300 my-2"></div>
                    </div>
  );
};

const Shimmer = () => {
  return (
    <div className="flex  flex-wrap gap-10 animate-pulse">
      {new Array(SHIMMER_CARD_UNITS).fill(0).map((element, index) => {
        return <CardShimmer key={index} />;
      })}
    </div>
  );
};
export default Shimmer