import React, { useState, useEffect } from "react";

const TableWithQuestionsAndAnswers = () => {
  const data = [
    { question: "Total number of of surveys:", answer: "" },
    { question: "Average age:", answer: "" },
    { question: "Oldest person who participated in survey:", answer: "" },
    { question: "Youngest person who participated in survey:", answer: "" },
    { question: "Percentage of people who like Pizza:", answer: "" },
    { question: "Percentage of people who like Pasta:", answer: "" },
    { question: "Percentage of people who like Pap and wors:", answer: "" },
    { question: "People who like to watch movies:", answer: "" },
    { question: "People who like to listen to radio:", answer: "" },
    { question: "People who like to eat out:", answer: "" },
    { question: "People who like to watch tv:", answer: "" },
    // Add more question-answer pairs as needed
  ];
  const [nodata, setNodata] = useState(false);
  const [data2, setData] = useState(null);
  const [youngestData, setyoungestData] = useState(null);
  const [oldestData, setoldestData] = useState(null);
  const [totalData, settotalData] = useState(null);
  const [averageageData, setaverageageData] = useState(null);
  const [percentagePizzaData, setpercentagePizzaData] = useState(null);
  const [percentagePastaData, setpercentagePastaData] = useState(null);
  const [percentagePapData, setpercentagePapData] = useState(null);
  const [watchmoviesData, setwatchmoviesData] = useState(null);
  const [listenradioData, setlistenradioData] = useState(null);
  const [eatoutData, seteatoutData] = useState(null);
  const [watchtvData, setwatchtvData] = useState(null);

  useEffect(() => {
    // Function to fetch data from an API
    const fetchData = async () => {
      try {
        const response = await fetch("http://localhost:3000/api/totalsurveys");
        if (!response.ok) {
          throw new Error("Failed to fetch data");
        }
        const jsonData = await response.json();
        settotalData(jsonData.rows[0].total_rows);

        if (jsonData.rows[0].total_rows == "0") {
          setNodata(true);
          return;
        }
      } catch (error) {
        console.error("Error fetching data:", error);
      }

      try {
        const response = await fetch("http://localhost:3000/api/oldestperson");
        if (!response.ok) {
          throw new Error("Failed to fetch data");
        }
        const jsonData = await response.json();
        setoldestData(new Date(jsonData.rows[0].oldest_date).toString());
      } catch (error) {
        console.error("Error fetching data:", error);
      }

      try {
        const response = await fetch(
          "http://localhost:3000/api/youngestperson"
        );
        if (!response.ok) {
          throw new Error("Failed to fetch data");
        }
        const jsonData = await response.json();
        setyoungestData(new Date(jsonData.rows[0].youngest_date).toString());
      } catch (error) {
        console.error("Error fetching data:", error);
      }

      try {
        const response = await fetch("http://localhost:3000/api/totalsurveys");
        if (!response.ok) {
          throw new Error("Failed to fetch data");
        }
        const jsonData = await response.json();
        settotalData(jsonData.rows[0].total_rows);
      } catch (error) {
        console.error("Error fetching data:", error);
      }

      try {
        const response = await fetch("http://localhost:3000/api/averageage");
        if (!response.ok) {
          throw new Error("Failed to fetch data");
        }
        const jsonData = await response.json();
        setaverageageData(jsonData.rows[0].average_age);
      } catch (error) {
        console.error("Error fetching data:", error);
      }

      try {
        const response = await fetch(
          "http://localhost:3000/api/percentagepizza"
        );
        if (!response.ok) {
          throw new Error("Failed to fetch data");
        }
        const jsonData = await response.json();
        setpercentagePizzaData(jsonData.rows[0].percentage);
      } catch (error) {
        console.error("Error fetching data:", error);
      }

      try {
        const response = await fetch(
          "http://localhost:3000/api/percentagepasta"
        );
        if (!response.ok) {
          throw new Error("Failed to fetch data");
        }
        const jsonData = await response.json();
        setpercentagePastaData(jsonData.rows[0].percentage);
      } catch (error) {
        console.error("Error fetching data:", error);
      }

      try {
        const response = await fetch(
          "http://localhost:3000/api/percentagepapandwors"
        );
        if (!response.ok) {
          throw new Error("Failed to fetch data");
        }
        const jsonData = await response.json();
        setpercentagePapData(jsonData.rows[0].percentage);
      } catch (error) {
        console.error("Error fetching data:", error);
      }

      try {
        const response = await fetch(
          "http://localhost:3000/api/averagewatchmovies"
        );
        if (!response.ok) {
          throw new Error("Failed to fetch data");
        }
        const jsonData = await response.json();
        setwatchmoviesData(jsonData.rows[0].average);
      } catch (error) {
        console.error("Error fetching data:", error);
      }

      try {
        const response = await fetch(
          "http://localhost:3000/api/averagelistenradio"
        );
        if (!response.ok) {
          throw new Error("Failed to fetch data");
        }
        const jsonData = await response.json();
        setlistenradioData(jsonData.rows[0].average);
      } catch (error) {
        console.error("Error fetching data:", error);
      }

      try {
        const response = await fetch("http://localhost:3000/api/averageeatout");
        if (!response.ok) {
          throw new Error("Failed to fetch data");
        }
        const jsonData = await response.json();
        seteatoutData(jsonData.rows[0].average);
      } catch (error) {
        console.error("Error fetching data:", error);
      }

      try {
        const response = await fetch(
          "http://localhost:3000/api/averagewatchtv"
        );
        if (!response.ok) {
          throw new Error("Failed to fetch data");
        }
        const jsonData = await response.json();
        setwatchtvData(jsonData.rows[0].average);
      } catch (error) {
        console.error("Error fetching data:", error);
      }

      setData("*");
    };

    // Call the fetchData function when the component mounts
    fetchData();

    // Clean-up function (optional)
    return () => {
      // Any clean-up code here (if needed)
    };
  }, []);

  return (
    <div className="container mt-5">
      {data2 ? (
        <table className="table table-striped">
          <thead>
            <tr>
              <th scope="col">Question</th>
              <th scope="col">Answer</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>{data[0].question}</td>
              <td>{totalData}</td>
            </tr>
            <tr>
              <td>{data[1].question}</td>
              <td>{averageageData}</td>
            </tr>
            <tr>
              <td>{data[2].question}</td>
              <td>{oldestData}</td>
            </tr>
            <tr>
              <td>{data[3].question}</td>
              <td>{youngestData}</td>
            </tr>
            <tr>
              <td>{data[4].question}</td>
              <td>{percentagePizzaData}</td>
            </tr>
            <tr>
              <td>{data[5].question}</td>
              <td>{percentagePastaData}</td>
            </tr>
            <tr>
              <td>{data[6].question}</td>
              <td>{percentagePapData}</td>
            </tr>
            <tr>
              <td>{data[7].question}</td>
              <td>{watchmoviesData}</td>
            </tr>
            <tr>
              <td>{data[8].question}</td>
              <td>{listenradioData}</td>
            </tr>
            <tr>
              <td>{data[9].question}</td>
              <td>{eatoutData}</td>
            </tr>
            <tr>
              <td>{data[10].question}</td>
              <td>{watchtvData}</td>
            </tr>
          </tbody>
        </table>
      ) : (
        <div className="progress">
          <div
            className="progress-bar progress-bar-striped bg-success progress-bar-animated"
            role="progressbar"
            style={{ width: "100%" }}
            aria-valuemin="0"
            aria-valuemax="100"
          ></div>
        </div>
      )}

      {nodata && <h6 className="display-1">No DATA</h6>}
    </div>
  );
};

export default TableWithQuestionsAndAnswers;
