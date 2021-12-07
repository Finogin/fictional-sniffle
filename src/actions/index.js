export const addPhotos = (photos) => {
  return {
    type: "ADD_PHOTOS",
    payload: photos,
  };
};



export const getPhotoID = (photo) => {
  return {
    type: "GET_PHOTO",
    payload: photo
}
}

export const setLike = (id) => {
  return {
    type: "SET_LIKE" , 
    payload:  id

}
}
export const deleteLike = (id) => {
  return {
    type: "DELETE_LIKE"  ,
    payload:  id

}
}