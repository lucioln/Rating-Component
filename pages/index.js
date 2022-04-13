import { useState } from "react";
import ImageSrc from "../public/images/illustration-thank-you.svg";
import Logo from "../public/images/icon-star.svg";
import Image from "next/image";

export default function rating() {
  const [option, setOption] = useState(0);
  const [avaible, setAvaible] = useState(0);

  if (avaible === 0) {
    return (
      <div className="rating">
        <button className="star dont-select-text">
          <Image src={Logo} />
        </button>
        <h1 className="dont-select-text">How did we do?</h1>
        <p className="dont-select-text">
          Please let us know how we did with your support request. All feedback
          is appreciated to help us improve our offering!
        </p>
        <div className="numbers">
          <button
            className="number-btn dont-select-text"
            onClick={() => setOption(1)}
          >
            1
          </button>
          <button
            className="number-btn dont-select-text"
            onClick={() => setOption(2)}
          >
            2
          </button>
          <button
            className="number-btn dont-select-text"
            onClick={() => setOption(3)}
          >
            3
          </button>
          <button
            className="number-btn dont-select-text"
            onClick={() => setOption(4)}
          >
            4
          </button>
          <button
            className="number-btn dont-select-text"
            onClick={() => setOption(5)}
          >
            5
          </button>
        </div>
        <button
          className="submit dont-select-text"
          type="submit"
          onClick={() => setAvaible(1)}
        >
          SUBMIT
        </button>
      </div>
    );
  } else if (option > 0 && option < 6) {
    return (
      <div className="rating">
        <>
          <Image src={ImageSrc} width="162" height="108" className="img-ty" />
        </>
        <div className="selection">
          <p>You have rated our service with {option} of 5!!</p>
        </div>
        <h1>Thank you for your review!</h1>
        <button
          className="submit dont-select-text"
          type="submit"
          onClick={() => {
            setAvaible(0);
            setOption(0);
          }}
        >
          Return
        </button>
      </div>
    );
  } else {
    return (
      <div className="rating">
        <h2 color="red">error: invalid value</h2>
        <button
          className="submit dont-select-text"
          type="submit"
          onClick={() => {
            setAvaible(0);
            setOption(0);
          }}
        >
          Return
        </button>
      </div>
    );
  }
}
