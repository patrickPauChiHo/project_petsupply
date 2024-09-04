import CustomTab from "../components/CustomTab";
import { useState } from "react";

import CatFood from "../components/CatFood";
import DogFood from "../components/DogFood";
import CatTower from "../components/CatTower";

const Products = () => {
  const [activeTab, setActiveTab] = useState("cat tower");

  return (
    <section className="min-h-screen">
      <div className="flex items-center justify-center mx-auto pb-5">
        <span className=" bg-slate-600 text-white rounded-xl items-center justify-between text-center p-3">
          Here are our Products
        </span>
      </div>
      <div className="flex items-center justify-around gap-3 mb-2">
        <CustomTab
          title="cat tower"
          customStyle={
            activeTab === "cat tower" ? "bg-slate-600 text-white" : ""
          }
          handleTabChange={() => setActiveTab("cat tower")}
        />
        <CustomTab
          title="cat food"
          customStyle={
            activeTab === "cat food" ? "bg-slate-600 text-white" : ""
          }
          handleTabChange={() => setActiveTab("cat food")}
        />
        <CustomTab
          title="dog food"
          customStyle={
            activeTab === "dog food" ? "bg-slate-600 text-white" : ""
          }
          handleTabChange={() => setActiveTab("dog food")}
        />
      </div>
      {activeTab === "cat tower" && <CatTower />}
      {activeTab === "cat food" && <CatFood />}
      {activeTab === "dog food" && <DogFood />}
    </section>
  );
};

export default Products;
