import { FC, useState } from "react";
import NewMeetupForm from "../components/meetups/NewMeetupForm";
import { NewMeetupFormData } from "../../types/data";
import { Api } from "../utils/api";
import { useNavigate } from "react-router-dom";

const NewMetup: FC = () => {
  const [submitError, setSubmitError] = useState(false);

  const navigate = useNavigate();

  const submitFormHandler = (formData: NewMeetupFormData) => {
    setSubmitError(false);

    fetch(Api.MEETUPS, { method: "POST", body: JSON.stringify(formData) }).then(
      (response) => {
        if (!response.ok) {
          setSubmitError(true);
          return;
        }

        navigate("/", { replace: true });
      },
    );
  };

  return (
    <section>
      <h1>Add New Meetup</h1>
      {submitError && <p>Could not add new meetup. Please, try again later.</p>}
      <NewMeetupForm onFormSubmit={submitFormHandler} />
    </section>
  );
};

export default NewMetup;
