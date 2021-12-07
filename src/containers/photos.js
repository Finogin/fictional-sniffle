import React, { useEffect, useState } from "react";
import { connect } from "react-redux";
import { useParams, useNavigate } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";

import { getPhotoByAPI } from "../api/index";
import { deleteLiked, setLiked } from "../api/index";
import { getPhotoID, deleteLike, setLike } from "../actions/index";

let Photos = (props) => {
  const navigate = useNavigate();
  const { id } = useParams();
  const photo = useSelector((state) => state.photos.photo);
  const dispatch = useDispatch();

  console.log(id);
  // const [photos, setPhoto] = useState(null);
  const [loading, setLoading] = useState(true);

  async function toggleLike() {
    try {
      if (photo.liked_by_user === false) {
        await setLiked(id);
        dispatch(setLike(id));
      } else {
        await deleteLiked(id);
        dispatch(deleteLike(id));
        //  setPhoto({...photo, liked_by_user : !photo.liked_by_user, likes: photo.likes - 1 })
      }
    } catch (err) {
      alert(err);
    }
    // setPhoto({...photo, liked_by_user : !photo.liked_by_user})
  }

  useEffect(() => {
    async function getPhoto() {
      try {
        const data = await getPhotoByAPI(id);
        // setPhoto(data)
        dispatch(getPhotoID(data));
        console.log("set photo", data);
      } catch (err) {
      } finally {
        setLoading(false);
      }
    }
    if (id) getPhoto();
    else navigate("/main");
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
