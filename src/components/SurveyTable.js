import React, { useState, useEffect } from "react";

const RatingTable = ({ onData }) => {
  const [ratings, setRatings] = useState({
    movies: "",
    radio: "",
    eatOut: "",
    watchTv: "",
  });

  useEffect(() => {
    onData("surveytable", ratings);
  }, [ratings.watchTv, ratings.eatOut, ratings.radio, ratings.movies]);

  const handleChange = (category, value) => {
    setRatings({
      ...ratings,
      [category]: value,
    });
  };

  return (
    <div className=" mt-20 ">
      <h4 className="text-light">
        Please rate your level of agreement on a scale of 1 to 5, with 1 being
        strongly agree and 5 strongly disagree
      </h4>
      <table className="table table-striped">
        <thead>
          <tr>
            <th>Category</th>
            <th>Strongly Agree</th>
            <th>Agree</th>
            <th>Neutral</th>
            <th>Disagree</th>
            <th>Strongly Disagree</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>I like to watch movies</td>
            <td>
              <input
                type="radio"
                name="movies"
                value="stronglyAgree"
                checked={ratings.movies === "stronglyAgree"}
                onChange={() => handleChange("movies", "stronglyAgree")}
              />
            </td>
            <td>
              <input
                type="radio"
                name="movies"
                value="agree"
                checked={ratings.movies === "agree"}
                onChange={() => handleChange("movies", "agree")}
              />
            </td>
            <td>
              <input
                type="radio"
                name="movies"
                value="neutral"
                checked={ratings.movies === "neutral"}
                onChange={() => handleChange("movies", "neutral")}
              />
            </td>
            <td>
              <input
                type="radio"
                name="movies"
                value="disagree"
                checked={ratings.movies === "disagree"}
                onChange={() => handleChange("movies", "disagree")}
              />
            </td>
            <td>
              <input
                type="radio"
                name="movies"
                value="stronglyDisagree"
                checked={ratings.movies === "stronglyDisagree"}
                onChange={() => handleChange("movies", "stronglyDisagree")}
              />
            </td>
          </tr>
          <tr>
            <td>I like to listen to radio</td>
            <td>
              <input
                type="radio"
                name="radio"
                value="stronglyAgree"
                checked={ratings.radio === "stronglyAgree"}
                onChange={() => handleChange("radio", "stronglyAgree")}
              />
            </td>
            <td>
              <input
                type="radio"
                name="radio"
                value="agree"
                checked={ratings.radio === "agree"}
                onChange={() => handleChange("radio", "agree")}
              />
            </td>
            <td>
              <input
                type="radio"
                name="radio"
                value="neutral"
                checked={ratings.radio === "neutral"}
                onChange={() => handleChange("radio", "neutral")}
              />
            </td>
            <td>
              <input
                type="radio"
                name="radio"
                value="disagree"
                checked={ratings.radio === "disagree"}
                onChange={() => handleChange("radio", "disagree")}
              />
            </td>
            <td>
              <input
                type="radio"
                name="radio"
                value="stronglyDisagree"
                checked={ratings.radio === "stronglyDisagree"}
                onChange={() => handleChange("radio", "stronglyDisagree")}
              />
            </td>
          </tr>
          <tr>
            <td>I like to eat out</td>
            <td>
              <input
                type="radio"
                name="eatOut"
                value="stronglyAgree"
                checked={ratings.eatOut === "stronglyAgree"}
                onChange={() => handleChange("eatOut", "stronglyAgree")}
              />
            </td>
            <td>
              <input
                type="radio"
                name="eatOut"
                value="agree"
                checked={ratings.eatOut === "agree"}
                onChange={() => handleChange("eatOut", "agree")}
              />
            </td>
            <td>
              <input
                type="radio"
                name="eatOut"
                value="neutral"
                checked={ratings.eatOut === "neutral"}
                onChange={() => handleChange("eatOut", "neutral")}
              />
            </td>
            <td>
              <input
                type="radio"
                name="eatOut"
                value="disagree"
                checked={ratings.eatOut === "disagree"}
                onChange={() => handleChange("eatOut", "disagree")}
              />
            </td>
            <td>
              <input
                type="radio"
                name="eatOut"
                value="stronglyDisagree"
                checked={ratings.eatOut === "stronglyDisagree"}
                onChange={() => handleChange("eatOut", "stronglyDisagree")}
              />
            </td>
          </tr>

          <tr>
            <td>I like to watch TV</td>
            <td>
              <input
                type="radio"
                name="watchTv"
                value="stronglyAgree"
                checked={ratings.watchTv === "stronglyAgree"}
                onChange={() => handleChange("watchTv", "stronglyAgree")}
              />
            </td>
            <td>
              <input
                type="radio"
                name="watchTv"
                value="agree"
                checked={ratings.watchTv === "agree"}
                onChange={() => handleChange("watchTv", "agree")}
              />
            </td>
            <td>
              <input
                type="radio"
                name="watchTv"
                value="neutral"
                checked={ratings.watchTv === "neutral"}
                onChange={() => handleChange("watchTv", "neutral")}
              />
            </td>
            <td>
              <input
                type="radio"
                name="watchTv"
                value="disagree"
                checked={ratings.watchTv === "disagree"}
                onChange={() => handleChange("watchTv", "disagree")}
              />
            </td>
            <td>
              <input
                type="radio"
                name="watchTv"
                value="stronglyDisagree"
                checked={ratings.watchTv === "stronglyDisagree"}
                onChange={() => handleChange("watchTv", "stronglyDisagree")}
              />
            </td>
          </tr>
          {/* Repeat the above row structure for other categories */}
        </tbody>
      </table>
      {/* <pre>{JSON.stringify(ratings, null, 2)}</pre> */}
    </div>
  );
};

export default RatingTable;
