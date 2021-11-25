import React from "react";

const Title = (props) => {
  return (
    <div className="flex justify-center items-center py-20">
      <div>
        <h2 className="text-purple-600 text-4xl text-center font-bold rubik">
          {props.title}
        </h2>
      </div>
    </div>
  );
};

export default Title;
