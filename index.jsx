import React from "react";
import { Rectangle } from "./Rectangle";
import "./style.css";

export const Frame = () => {
  return (
    <div className="frame">
      <div className="overlap">
        <div className="div" />
        <div className="rectangle-2" />
        <div className="rectangle-3" />
        <div className="rectangle-4" />
        <div className="text-wrapper">ChatFormat</div>
      </div>
      <div className="overlap-group">
        <div className="overlap-2">
          <div className="overlap-group-2">
            <div className="rectangle-5" />
            <div className="rectangle-6" />
            <div className="rectangle-7" />
            <div className="rectangle-8" />
            <div className="rectangle-9" />
            <div className="rectangle-10" />
            <div className="rectangle-11" />
            <div className="rectangle-12" />
          </div>
          <div className="rectangle-13" />
          <div className="rectangle-14" />
        </div>
        <div className="rectangle-15" />
      </div>
      <Rectangle className="rectangle-instance" />
      <div className="rectangle-16" />
    </div>
  );
};
