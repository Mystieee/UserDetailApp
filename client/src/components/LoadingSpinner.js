import React from "react";
import Loader from "react-loader-spinner";
import "react-loader-spinner/dist/loader/css/react-spinner-loader.css";

const LoadingSpinner = () => (
  <Loader type="TailSpin" color="#00BFFF" height={60} width={60} />
);

export default LoadingSpinner;
