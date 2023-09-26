import { FC } from "react";
import { Meetup } from "../../../types/data";
import MeetupItem from "./MeetupItem";
import classes from "./MeetupList.module.css";

interface MeetupListProps {
  meetups: Meetup[];
}

const MeetupList: FC<MeetupListProps> = ({ meetups }) => {
  return (
    <ul className={classes.list}>
      {meetups.map((meetup) => (
        <MeetupItem key={meetup.id} meetup={meetup} />
      ))}
    </ul>
  );
};

export default MeetupList;
