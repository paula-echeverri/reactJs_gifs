import React from "react";

export const GifItem = ({title,url}) => {
  return <div>

    <img src ={url} alt={title}></img>
    <p>{title}</p>
  </div>;
};

GifItem.prototype={

  tilte: ProtoTypes.string.isRequired,  
  url: ProtoTypes.string.isRequired,
}
