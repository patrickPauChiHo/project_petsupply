import React from "react";

const Contact = () => {
  return (
    <div className="mt-10 w-full bg-gradient-to-tr from-slate-400 text-slate-500">
      <div className="p-2 flex flex-row justify-evenly">
        <div className="text-xs">
          <h1 className="mb-3">Contact Us</h1>
          <p className="mb-1">
            <span className="font-semibold">Mobile Number:</span> 0412356252
          </p>
          <p>
            <span className="font-semibold">Address: </span>7A Kinnanecres
            SunShine VIC 3020
          </p>
        </div>
        <div className="flex flex-col gap-2">
          <textarea
            placeholder="Plesae leave your message here"
            rows={5}
            cols={30}
            className="text-sm rounded-lg"
          />
          <button className="border text-xs rounded-xl p-2">
            Leave your comment
          </button>
        </div>
      </div>
    </div>
  );
};

export default Contact;
