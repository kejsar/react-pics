import "./ImageList.css";
import React from "react";
import ImageCard from "./ImageCard";

const ImageList = (props) => {
  // return props.images.map(({ id, urls, alt_description }) => {
  //   return <img key={id} src={urls.regular} alt={alt_description} />;
  // });

  const images = props.images.map((image) => {
    return <ImageCard key={image.id} image={image} />;
  });
  return <div className="image-list">{images}</div>;
};

export default ImageList;
