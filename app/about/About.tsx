import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js";
import styles from "./About.module.css";
import Image from "next/image";

export default function About() {
  return (
    <div
      className="flex-container"
      style={{ display: "flex", flexDirection: "row" }}
    >
      <div className="flex-item">
        <div
          id="carouselExampleIndicators"
          className="carousel slide"
          data-bs-ride="carousel"
        >
          {/* Carousel Indicators */}
          <ol className="carousel-indicators">
            <li
              data-bs-target="#carouselExampleIndicators"
              data-bs-slide-to="0"
              className="active"
            ></li>
            <li
              data-bs-target="#carouselExampleIndicators"
              data-bs-slide-to="1"
            ></li>
            <li
              data-bs-target="#carouselExampleIndicators"
              data-bs-slide-to="2"
            ></li>
            <li
              data-bs-target="#carouselExampleIndicators"
              data-bs-slide-to="3"
            ></li>
          </ol>

          {/* Carousel Inner */}
          <div className="carousel-inner">
            <div className="carousel-item active flex justify-center items-center">
              <Image
                className="d-block rounded"
                src="/jayden.jpeg"
                alt="First slide"
                width={400}
                height={400}
              />
            </div>
            <div className="carousel-item">
              <Image
                className="d-block rounded"
                src="/jord.jpeg"
                alt="Second slide"
                width={400}
                height={400}
              />
            </div>
            <div className="carousel-item">
              <Image
                className="d-block rounded"
                src="/phong.jpeg"
                alt="Third slide"
                width={400}
                height={400}
              />
            </div>
            <div className="carousel-item">
              <Image
                className="d-block rounded"
                src="/clint.jpeg"
                alt="Fourth slide"
                width={400}
                height={400}
              />
            </div>
          </div>

          {/* Carousel Controls */}
          <a
            className="carousel-control-prev"
            href="#carouselExampleIndicators"
            role="button"
            data-bs-slide="prev"
          >
            <span
              className="carousel-control-prev-icon"
              aria-hidden="true"
            ></span>
            <span className="sr-only">Previous</span>
          </a>
          <a
            className="carousel-control-next"
            href="#carouselExampleIndicators"
            role="button"
            data-bs-slide="next"
          >
            <span
              className="carousel-control-next-icon"
              aria-hidden="true"
            ></span>
            <span className="sr-only">Next</span>
          </a>
        </div>
      </div>
      <div className="flex-item">
        <div className={styles.card}>
          <h1>Jayden Tan</h1>
          <h1>Jordan Junaidi</h1>
          <h1>Phong Nguyen</h1>
          <h1>Clinton Nguyen</h1>
          <p className="text-1xl font-bold">
            We haven't had the best experience with dining hall food (besides at UCLA). We decided to take matters into our own hands. Hope you enjoy UCSB Dine-In!
          </p>
        </div>
      </div>
    </div>
  );
}
