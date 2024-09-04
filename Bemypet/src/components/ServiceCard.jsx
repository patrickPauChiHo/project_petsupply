import React from "react";
import { IoIosArrowDown } from "react-icons/io";
import { IoIosArrowUp } from "react-icons/io";

const ServiceCard = ({ service, handleClick, active }) => {
  return (
    <section>
      <div
        onClick={handleClick}
        className={`${
          active === `${service.name}`
            ? "border-blue-500 text-slate-900"
            : "text-slate-500"
        } border mb-2 p-2 rounded-xl flex flex-row items-center justify-between`}
      >
        {service.name}
        {active === service.name ? <IoIosArrowUp /> : <IoIosArrowDown />}
      </div>
      {active === service.name && (
        <div>
          {service.services.map((s, i) => (
            <div
              key={i}
              className="transform transition-transform translate-x-1 duration-75 flex flex-roll items-center justify-between p-2 text-xs text-slate-400"
            >
              <p>{s.service}</p>
              <p>{s.price}</p>
            </div>
          ))}
        </div>
      )}
    </section>
  );
};

export default ServiceCard;
