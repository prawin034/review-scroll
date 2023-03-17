import { reviews } from './data';
import { FaChevronLeft, FaChevronRight, FaQuoteRight } from 'react-icons/fa';
import { useState } from 'react';
const Review = () => {
  //SPECIFIYING INDEX AND DISPLAYING
  const [index, setindex] = useState(0);

  const { name, job, image, text } = reviews[index];

  //CHECK NUMBER

  const CheckNumber = (number) => {
    if (number > reviews.length - 1) {
      return 0;
    }
    if (number < 0) {
      return reviews.length - 1;
    }
    return number;
  };

  //SCROLL FUNCTIONALITY

  //NEXT PERSON

  const NextPerson = () => {
    setindex((index) => {
      let newIndex = index + 1;
      return CheckNumber(newIndex);
    });
  };
  //PREVIOUS PERSON
  const PrevPerson = () => {
    setindex((index) => {
      let newIndex = index - 1;
      return CheckNumber(newIndex);
    });
  };
  //RANDOM FUNCTIONALITY

  const RandomNumber = () => {
    //RANDOM NUMBER SCROLL
    let randomNumber = Math.floor(Math.random() * reviews.length);
    console.log(randomNumber);

    //TO AVOID REPETITION
    if (randomNumber === index) {
      randomNumber = index + 1;
    }
    //SETTING  THE NUMBER
    setindex(CheckNumber(randomNumber));
  };

  return (
    <article className="review_description">
      <div className="review_box">
        <img src={image} alt={name} className="review_box_img" />
        <span className="review_box_span">
          <FaQuoteRight size={15} color="#fff" />
        </span>
        <h4 className="review_box_author">{name}</h4>
        <p className="review_box_job">{job}</p>
        <p className="review_box_info">{text}</p>

        <div className="review_box_btn">
          <button onClick={PrevPerson} className="review_box_btn_btn">
            <FaChevronLeft />
          </button>
          <button onClick={NextPerson} className="review_box_btn_btn">
            <FaChevronRight />
          </button>
        </div>
        <button onClick={RandomNumber} className="review_box_random">
          surprise me
        </button>
      </div>
    </article>
  );
};

export default Review;
