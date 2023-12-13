import classes from "./Navbar.module.css";

const Navbar = () => {
  return (
    <div className={classes["nav-container"]}>
      <ul className={classes["nav-list"]}>
        <li className={classes.list}>
          <a>NEWS</a>
        </li>
        <li className={classes.list}>
          <a>VIDEO</a>
        </li>
        <li className={classes.list}>
          <a>About Me</a>
        </li>
        <li className={classes.list}>
          <a>Contact</a>
        </li>
        <li className={classes.list}>
          <a>Directions</a>
        </li>
      </ul>
    </div>
  );
};

export default Navbar;
