import {FC, useContext} from "react";
import FavoritesContext from "../store/favorites-context";
import MeetupList from "../components/meetups/MeetupList";

const Favorites: FC = () => {
  const context = useContext(FavoritesContext);

  return (
      <section>
        <h1>Favorites</h1>
        {context.favorites.length !== 0 ? <MeetupList meetups={context.favorites}/> : <p>There are no favorite events yet.</p>}
      </section>
  )
};

export default Favorites;
