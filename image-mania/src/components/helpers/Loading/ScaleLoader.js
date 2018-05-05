import React from "react";
import { ScaleLoader } from "react-spinners";
import "./Loading.css";

const CustomScaleLoader = () => {
  return (
    <div className="Loading__div--centered">
      <ScaleLoader
        color="#4A90E2"
        height={150}
        width={15}
        radius={50}
        margin="2px"
        loading={true}
      />
    </div>
  );
};

export default CustomScaleLoader;
