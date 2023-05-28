import React from "react";
import "./NewsContent.css";
import News from "../../../utils/News";

const NewsContent = ({news}) => {
  return (
    <div className="container-news">
      <div className="NewsInfo">
        <h1>{news.judul}</h1>
        <img src={news.gambar} alt={news.judul} />
        <p>{news.isi}</p>
      </div>
      <div className="col-news">
        <News/>
      </div>
    </div>
    
  );
}
  

export default NewsContent;