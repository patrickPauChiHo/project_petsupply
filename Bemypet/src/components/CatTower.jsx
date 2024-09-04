import React from "react";
import { CatTowerData } from "../utils";

const CatTower = () => {
  return (
    <div>
      {CatTowerData.map((tower, index) => (
        <div
          key={index}
          className="mb-2 flex items-center justify-center gap-7"
        >
          <img
            className=" border rounded-xl items-center justify-between text-center p-3"
            src={tower.img}
            alt={`cat tower ${index + 1}`}
            width={100}
            height={60}
          />
          <p>{tower.description}</p>
        </div>
      ))}
    </div>
  );
};

export default CatTower;
