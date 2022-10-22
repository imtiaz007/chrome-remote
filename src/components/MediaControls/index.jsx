import React from "react";
import {
  play,
  forward,
  rewind,
  fullscreen,
  smallscreen,
  mute,
} from "./constants";

function MediaControls() {
  return (
    <div className="card w-full bg-base-100 shadow-xl image-full">
      <figure>
        <img src="https://placeimg.com/400/225/arch" alt="Shoes" />
      </figure>
      <div className="card-body space-y-5 flex flex-col">
        <div className="flex">
          <p className="text-xl text-gray-50">How to make a website</p>
          <button className="btn glass btn-circle">{mute}</button>
        </div>
        <br />
        <progress
          className="progress progress-accent"
          value="40"
          max="100"
        ></progress>

        <div className="flex justify-between">
          <div className="space-x-5">
            <button className="btn glass btn-circle">{rewind}</button>
            <button className="btn glass btn-circle ">{play}</button>
            <button className="btn glass btn-circle">{forward}</button>
          </div>
          <button className="btn glass btn-circle">{fullscreen}</button>
        </div>
      </div>
    </div>
  );
}

export default MediaControls;
