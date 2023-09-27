import classes from "./NewMeetupForm.module.css";
import Card from "../ui/Card";
import { ChangeEvent, FC, FormEvent, useState } from "react";
import { NewMeetupFormData } from "../../../types/data";

interface NewMeetupFormProps {
  onFormSubmit: (formData: NewMeetupFormData) => void;
}

const NewMeetupForm: FC<NewMeetupFormProps> = ({ onFormSubmit }) => {
  const [formData, setFormData] = useState<NewMeetupFormData>({
    title: "",
    image: "",
    address: "",
    description: "",
  });

  const inputChangeHandler = (
    event: ChangeEvent<HTMLInputElement> | ChangeEvent<HTMLTextAreaElement>,
  ) => {
    setFormData((prevFormData: NewMeetupFormData) => {
      return {
        ...prevFormData,
        [event.target.name]: event.target.value,
      };
    });
  };

  const submitFormHandler = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    // validation

    onFormSubmit(formData);
  };

  return (
    <Card>
      <form className={classes.form} onSubmit={submitFormHandler}>
        <div className={classes.control}>
          <label htmlFor="title">Meetup Title</label>
          <input
            type="text"
            id="title"
            name="title"
            placeholder="Enter a title..."
            required
            onChange={inputChangeHandler}
          />
        </div>
        <div className={classes.control}>
          <label htmlFor="image">Meetup Image</label>
          <input
            type="url"
            id="image"
            name="image"
            placeholder="Enter Image URL..."
            required
            onChange={inputChangeHandler}
          />
        </div>
        <div className={classes.control}>
          <label htmlFor="address">Address</label>
          <input
            type="text"
            id="address"
            name="address"
            placeholder="Enter meetup address..."
            required
            onChange={inputChangeHandler}
          />
        </div>
        <div className={classes.control}>
          <label htmlFor="description">Description</label>
          <textarea
            name="description"
            id="description"
            cols={30}
            rows={5}
            onChange={inputChangeHandler}
          ></textarea>
        </div>
        <div className={classes.actions}>
          <button type="submit">Add Meetup</button>
        </div>
      </form>
    </Card>
  );
};

export default NewMeetupForm;
