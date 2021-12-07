const initialState = {
  data: [],
  page: 0,
  photo: {},
};

function photos(state = initialState, action) {
  console.log("action", action);
  switch (action.type) {
    case "ADD_PHOTOS":
      return {
        ...state,
        data: state.data.concat(action.payload),
        page: state.page + 1,
      };

    case "GET_PHOTO":
      return {
        ...state,
        photo: action.payload,
      };
    case "SET_LIKE":
      return {
        ...state,
        data: state.data.map(data => {
          if (data.id === state.photo.id) return {
          ...data,
          liked_by_user: true,
          likes: data.likes + 1,
        }
      else return data
    }),
        photo: {
          ...state.photo,
          liked_by_user: true,
          likes: state.photo.likes + 1,
        }
      };

    case "DELETE_LIKE":
      return {
            ...state,
            data: state.data.map(data => {
              if (data.id === state.photo.id) return {
              ...data,
              liked_by_user: false,
              likes: data.likes - 1,
            }
          else return data
        }),
            photo: {
              ...state.photo,
              liked_by_user: false,
              likes: state.photo.likes - 1,
            }
          };


    default:
      return state;
  }
}
export default photos;
