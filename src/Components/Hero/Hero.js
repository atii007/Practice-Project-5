// import banner1 from "../../assets/img/banners/banner1.jpg";

const Hero = () => {
  return (
    <div
      style={{
        backgroundImage: `url(${require("../../assets/img/banners/banner1.jpg")})`,
        opacity: "1",
        width: "100%",
        height: "70%",
        backgroundSize: "cover",
        zIndex: "20",
        marginBottom: "35px",
        marginTop: "0px",
      }}
    ></div>
  );
};

export default Hero;
