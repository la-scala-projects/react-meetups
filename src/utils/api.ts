const baseURL: string =
  "https://react-meetups-e9d47-default-rtdb.europe-west1.firebasedatabase.app";

export const Api = {
  MEETUPS: `${baseURL}/meetups.json`,
  FAVORITES: `${baseURL}/favorites`,
  ADD_MEETUP: `${baseURL}/add-meetup`,
  UPDATE_FAVORITES: `${baseURL}/update-favorites`,
};
