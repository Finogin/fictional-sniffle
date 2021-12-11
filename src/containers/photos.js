import React, { useEffect, useState } from "react";
import { connect } from "react-redux";
import { useParams, useNavigate } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";

import { getPhotoByAPI } from "../api/index";
import { deleteLiked, setLiked } from "../api/index";
import { setPhotoID, deleteLike, setLike } from "../actions/index";
import { combineReducers } from "redux";

let Photos = (props) => {
  const navigate = useNavigate();
  const { id } = useParams();
  const photo = useSelector((state) => state.photos.photo);
  const photos = useSelector((state) => state.photos.data);
  const dispatch = useDispatch();

  console.log(id);
  // const [photos, setPhoto] = useState(null);
  const [loading, setLoading] = useState(true);

  function toggleLike() {
    if (photo.liked_by_user === false) {
      try {
        setLiked(id);
        dispatch(setLike());
      } catch (err) {
        dispatch(deleteLike());
      }
    } else {
      try {
        deleteLiked(id);
        dispatch(deleteLike());
      } catch (err) {
        dispatch(setLike());
      }
      //  setPhoto({...photo, liked_by_user : !photo.liked_by_user, likes: photo.likes - 1 })

      // setPhoto({...photo, liked_by_user : !photo.liked_by_user})
    }
  }

  useEffect(() => {
    async function getPhoto() {
      const findPhoto = photos.find((photo) => photo.id === id);

      if (findPhoto) {
        console.log("непустое значение");
        dispatch(setPhotoID(findPhoto));
        console.log("Вывод данных из стора", findPhoto);
      } else {
        try {
          const data = await getPhotoByAPI(id);
          // setPhoto(data)
          dispatch(setPhotoID(data.data));
          console.log("set photo", data.data);
        } catch (err) {}
      }
      setLoading(false);
    }
    getPhoto();
  }, []);

  if (loading) return <h2>Загрузка....</h2>;

  return (
    <div className="col-xl-3 col-lg-4 col-md-6 mb-4 ">
      <button
        className="btn btn-dark px-5 py-3 text-uppercase"
        onClick={(ev) => {
          navigate("/main");
        }}
      >
        Назад
      </button>
      <div className="bg-white rounded shadow-sm">
        <div className="py-5 text-center">
          <img src={photo.urls.regular} alt="" className="rounded" />
        </div>
        <div>
          <a href={photo.user.links.html}>{photo.user.username}</a>
        </div>
        <div>{photo.created_at}</div>
        <div>{photo.likes}</div>
      </div>
      <div className="py-5 text-center">
        <button
          className="btn btn-dark px-5 py-3 text-uppercase"
          onClick={(ev) => {
            toggleLike();
          }}
        >
          <i className="fa fa-heart-o mr-2"></i>
        </button>
      </div>
    </div>
  );
};

export default Photos;
