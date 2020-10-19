import React from "react";
import "./Home.css";
import Product from "./Product";

function Home() {
  return (
    <div className="home">
      <div className="home__container">
        <img
          className="home__image"
          src="https://atwork.coronaca.gov/Home/ShowPublishedImage/1615/637202178144930000"
          alt=""
        />

        <div className="home__row">
          <Product
            id="12321341"
            title="Common Sense: Paperback Edition"
            price={0.99}
            rating={5}
            image="https://i1.sndcdn.com/avatars-000597831615-6q438f-t500x500.jpg"
          />
          <Product
            id="49538094"
            title="Bill Gates Anti-Tracker Device (REFURBISHED and in MINT CONDITION)"
            price={1.99}
            rating={2}
            image="https://images.outlookindia.com/public/uploads/articles/2020/3/14/Davos_8_20190123_350_630_571_855.jpg"
          />
        </div>

        <div className="home__row">
          <Product
            id="4903850"
            title="The Lord and Savior Dr. Fauci on a Shirt"
            price={2.99}
            rating={4}
            image="https://images-na.ssl-images-amazon.com/images/I/71xS4KJtQ5L._AC_UL1500_.jpg"
          />
          <Product
            id="23445930"
            title="Batman Shark Repellent...works on maskholes and covidiots"
            price={1.99}
            rating={5}
            image="https://vignette.wikia.nocookie.net/batman60stv/images/4/47/Batsprays.jpg/revision/latest/scale-to-width-down/340?cb=20120818172152"
          />
          <Product
            id="3254354345"
            title="Ultimate Flex on Clippers fans and Anti-Maskers"
            price={3.99}
            rating={4}
            image="https://cdn.vox-cdn.com/thumbor/hjOZTLhLLeb4l67VdVSDjJFTcoE=/1400x1400/filters:format(jpeg)/cdn.vox-cdn.com/uploads/chorus_asset/file/19984460/MANBPRFC3PKLAL_p_2048x.jpg"
          />
        </div>

        <div className="home__row">
          <Product
            id="90829332"
            title="Vaccine for pandemic stress and anxiety"
            price={4.99}
            rating={5}
            image="https://cdn.iphonelife.com/sites/iphonelife.com/files/donotdisturb.jpg"
          />
        </div>
      </div>
    </div>
  );
}

export default Home;