import { Link } from "react-router-dom";
import { informationsFooter, informationsFooter2 } from "../Datas";

export function CardFooter({ informationsFooter }) {
  return (
    <ul>
      <li>
        <Link to={informationsFooter.link}>{informationsFooter.title}</Link>
      </li>
    </ul>
  );
}

export function CardFooter2({ informationsFooter2 }) {
  return (
    <ul>
      <li>
        <Link to={informationsFooter2.link}>{informationsFooter2.title}</Link>
      </li>
    </ul>
  );
}
