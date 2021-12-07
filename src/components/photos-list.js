import React from "react";
import { useNavigate } from "react-router-dom";

const PhotosList = (props) => {
  const navigate = useNavigate();
  const { photos } = props;
  return photos.map((photo) => {
    return (
      <div className="container mt-5 d-flex justify-content-center ">
        <div className="bg-white rounded shadow-sm" >
          <img
            alt=""
            className="img-fluid card-img-top"
            src={photo.urls.small}
            onClick={(ev) => {
              navigate(`/photos/${photo.id}`);
            }}
          />
        </div>
        <div className="p-4">
          <a href={photo.user.links.html} className="text-dark">
            {photo.user.username}
          </a>
          <div> {photo.created_at}</div>
          <p className="small mb-0">
            <i className="fa fa-heart-o mr-2"></i>
            <span className="font-weight-bold">{photo.likes}</span>
          </p>
        </div>
      </div>
    );
  });
};

export default PhotosList;
