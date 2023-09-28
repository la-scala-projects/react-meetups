import {FC, useContext} from "react";
import classes from "./MeetupItem.module.css";
import { Meetup } from "../../../types/data";
import Card from "../ui/Card";
import FavoritesContext from "../../store/favorites-context";

interface MeetupItemProps {
  meetup: Meetup;
}

const MeetupItem: FC<MeetupItemProps> = ({ meetup }) => {
  const context = useContext(FavoritesContext);
  const itemIsFavorite = context.itemIsFavorite(meetup.id);

  const toggleItemStatusHandler = () => {
    if (!itemIsFavorite) context.addFavorite(meetup);
    else context.removeFavorite(meetup.id);
  }

  return (
    <li className={classes.item}>
      <Card>
        <div className={classes.image}>
          <img src={meetup.image} alt={meetup.title} />
        </div>
        <div className={classes.content}>
          <h3>{meetup.title}</h3>
          <address>{meetup.address}</address>
          <p>{meetup.description}</p>
        </div>
        <div className={classes.actions}>
          <button onClick={toggleItemStatusHandler}>{itemIsFavorite ? "Remove From Favorites" : "Add To Favorites"}</button>
        </div>
      </Card>
    </li>
  );
};

export default MeetupItem;
