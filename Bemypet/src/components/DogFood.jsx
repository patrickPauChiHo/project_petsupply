import { DogFoodData } from "../utils";

const DogFood = () => {
  return (
    <div className="grid mt-4 gap-1 sm:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5">
      {DogFoodData.map((food, index) => (
        <div key={index} className="flex flex-col ">
          <img
            src={food.img}
            alt={`dog food ${index + 1}`}
            width={200}
            height={60}
            className="border rounded-xl items-center justify-between text-center p-3"
          />
          <div className="text-xs text-slate-500">
            <p>
              Type: <span className="font-bold">{food.type}</span>
            </p>
            <p>{food.description}</p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default DogFood;
