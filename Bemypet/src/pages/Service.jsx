import { useState } from "react";
import ServiceCard from "../components/ServiceCard";
import { ServiceData } from "../utils";
const Service = () => {
  const [active, setActive] = useState("");

  return (
    <>
      <div className="flex items-center justify-center mx-auto pb-5">
        <span className="capitalize bg-slate-600 text-white rounded-xl items-center justify-between text-center p-3">
          Services we have provided
        </span>
      </div>
      <div>
        {ServiceData.map((service, i) => (
          <ServiceCard
            key={i}
            service={service}
            active={active}
            handleClick={() => setActive(service.name)}
          />
        ))}
      </div>
    </>
  );
};

export default Service;
