import { FC } from "react";
import { DUMMY_DATA } from "../mocks/dummyData";
import MeetupList from "../components/meetups/MeetupList";

const AllMetups: FC = () => {
  return (
    <section>
      <h1>All Meetups</h1>
      <MeetupList meetups={DUMMY_DATA} />
    </section>
  );
};

export default AllMetups;
