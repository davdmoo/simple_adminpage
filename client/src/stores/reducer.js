const initialState = {
  admins: [],
  admin: {},
  loading: false,
  categories: []
};

function reducer(state = initialState, { type, payload }) {
  switch (type) {
      case "admins/fetchAll":
        return {
        ...state,
        admins: payload
        }
      case "admins/fetchDetail":
        return {
        ...state,
        admin: payload
        }
      case "categories/fetchAll":
        return {
        ...state,
        categories: payload
        }
      default:
        return state;
  }
};

export default reducer;
