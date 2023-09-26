import classes from "./Card.module.css";
import { FC, PropsWithChildren } from "react";

const Card: FC<PropsWithChildren> = ({ children }) => {
  return <div className={classes.card}>{children}</div>;
};

export default Card;
