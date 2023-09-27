import { FC, useEffect, useState } from "react";
import MeetupList from "../components/meetups/MeetupList";
import { Meetup } from "../../types/data";
import { Api } from "../utils/api";

const AllMetups: FC = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [loadedMeetups, setLoadedMeetups] = useState<Meetup[]>([]);

  useEffect(() => {
    setIsLoading(true);
    fetch(Api.MEETUPS)
      .then((response) => {
        // check if no errors

        return response.json();
      })
      .then((data) => {
        const meetups = [];

        for (const key in data) {
          const meetup = {
            id: key,
            ...data[key],
          };

          meetups.push(meetup);
        }

        setIsLoading(false);
        setLoadedMeetups(meetups);
      });
  }, []);

  console.log(loadedMeetups);

  return (
    <section>
      <h1>All Meetups</h1>
      {isLoading ? <p>Loading...</p> : <MeetupList meetups={loadedMeetups} />}
    </section>
  );
};

export default AllMetups;
