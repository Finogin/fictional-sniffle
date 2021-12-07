import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";

import PhotosList from "../components/photos-list";

import { addPhotos } from "../actions";
import { getPhotosByAPI } from "../api/index";

let Main = () => {
  const page = useSelector((state) => state.photos.page);
  const photos = useSelector((state) => state.photos.data);
  const dispatch = useDispatch();

  useEffect(() => {
    console.log("USE EFFECT COMPONENT MAIN", photos.length);
    if (photos.length === 0) {
      getPhotosByAPI().then((data) => {
        console.log(data);
        dispatch(addPhotos(data));
      });
    }
  }, []);

  const loadMore = () => {
    const nextPage = page + 1;
    getPhotosByAPI(nextPage).then((data) => {
      console.log(data);
      dispatch(addPhotos(data));
    });
  };

  console.log("Main compnent, photos:", photos);
  return (
    <div>
      <div className="py-5 text-center">
        <div className="col-lg-12 mx-auto">
          <div className="text-black p-5 shadow-sm rounded banner">
            <h1 className="display-4">Unsplash galery from API</h1>
          </div>
        </div>
      </div>
      <div className="py-5 text-center">
        <PhotosList photos={photos} />
        <button
          className="btn btn-dark px-5 py-3 text-uppercase"
          onClick={loadMore}
        >
          Загрузить еще...
        </button>
      </div>
    </div>
  );
};

export default Main;
