import classes from "./News.module.css";
import pathArrow from "../../assets/img/arrow/pathArrow.png";
import layer1 from "../../assets/img/layers/layer1.png";
import layer2 from "../../assets/img/layers/layer2.png";
import layer3 from "../../assets/img/layers/Layer3.png";

const News = () => {
  return (
    <div>
      <div align="center" className={classes["main-container"]}>
        <div className={classes["container-upper"]}>
          <div className={classes["main-content"]}>
            <div class={classes["sub-content"]}>
              <a href="#" className={classes.links}>
                <img className={classes.images} src={layer1} alt="layer 1" />
              </a>
            </div>
            <div class={classes["sub-content"]}>
              <img
                className={classes.arrow}
                title="Path arrow"
                src={pathArrow}
                align="left"
              />
              <a href="#" className={classes.links}>
                <h3 title="1ST CHIROPRAKTIK GEFAHRLICH">
                  1ST CHIROPRAKTIK GEFAHRLICH
                </h3>
              </a>
            </div>
            <div>
              <a href="#" className={classes.links}>
                <p title="1st Chiropraktik Gefahrlich">
                  Wenn Chiropraktik gefährlich wäre und wir ständig Angst haben
                  müssten, dass wir unseren Patienten vielleicht Schaden zufügen
                  könnten, d
                </p>
              </a>
            </div>
            <div className={classes["sub-content1"]} title="Weiterlesen">
              <a href="#" className={classes.foot}>
                Weiterlesen
              </a>
            </div>
          </div>
          <div className={classes["main-content"]}>
            <div class={classes["sub-content"]}>
              <a href="#" className={classes.links}>
                <img class="images" src={layer2} title="layer 2" />
              </a>
            </div>
            <div class={classes["sub-content"]}>
              <img
                className={classes.arrow}
                title="Path arrow"
                src={pathArrow}
                align="left"
              />
              <a href="#" className={classes.links}>
                <h3 title="Konnen Gelenke Ausleirn?">
                  KÖNNEN GELENKE AUSLEIERN?
                </h3>
              </a>
            </div>
            <div>
              <a href="#" className={classes.links}>
                <p title="Konnen Gelenke Ausleirn?">
                  Dem deutschen Mythos der besagt, dass “die Gelenke ausleiern”
                  wenn sie zu oft justiert werden, müssen wir uns immer wieder
                  im Alltag un
                </p>
              </a>
            </div>
            <div className={classes["sub-content1"]} title="Weiterlesen">
              <a href="#" className={classes.foot}>
                Weiterlesen
              </a>
            </div>
          </div>
          <div className={classes["main-content"]}>
            <div class="sub-content">
              <a href="#" className={classes.links}>
                <img class="images" src={layer3} title="layer 3 " />
              </a>
            </div>
            <div class={classes["sub-content"]}>
              <img
                className={classes.arrow}
                title="Path arrow"
                src={pathArrow}
                align="left"
              />
              <a href="#" className={classes.links}>
                <h3 title="Chiropraktik ganz ohne Knacken?">
                  CHIROPRAKTIK GANZ OHNE KNACKEN?
                </h3>
              </a>
            </div>
            <div>
              <a href="#" className={classes.links}>
                <p title="Chiropraktik ganz ohne Knacken?">
                  Die CIT (Chiropractic Instrument Technic) ist eine
                  wunderschöne Technik tiefgreifend in das System einzudringen
                  und den Körper nur da z
                </p>
              </a>
            </div>
            <div className={classes["sub-content1"]} title="Weiterlesen">
              <a href="#" className={classes.foot}>
                Weiterlesen
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default News;
