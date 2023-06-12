import Carousel from "react-bootstrap/Carousel";

const Carousels = (prop) => {
  return (
    <>
      <Carousel variant="dark">
        <Carousel.Item>
          <img
            className="d-block w-100"
            src={prop.imageUrl.bedroom}
            alt="First slide"
            style={{ height: "16rem" }}
          />
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src={prop.imageUrl.bathroom}
            alt="Second slide"
            style={{ height: "16rem" }}
          />
        </Carousel.Item>
      </Carousel>
    </>
  );
};

export default Carousels;
