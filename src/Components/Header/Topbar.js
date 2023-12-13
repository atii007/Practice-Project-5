import classes from "./Topbar.module.css";

const Topbar = () => {
  return (
    <div className={classes["container-1"]}>
      <div className={classes["container-2"]}>
        <a className={classes["header-links"]}>
          <span>
            <i className={classes.fa} aria-hidden="true"></i>
          </span>
          Telephone: (0123) 456789
        </a>
      </div>
      <div className={classes["container-2"]}>
        <a className={classes["header-links"]}>
          <span>
            <i className={classes.fa} aria-hidden="true"></i>
          </span>
          example@info.com
        </a>
      </div>
    </div>
  );
};

export default Topbar;
