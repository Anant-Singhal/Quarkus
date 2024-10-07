import React, { useEffect, useState } from "react";
import axios from "axios"; // Import Axios
import toast from "react-hot-toast";
import Home from "./Home";
import { useDispatch, useSelector } from "react-redux";
import { getRefreshState } from "../store/homeSlice";
function AddGeneralDiary() {
  const [dateTime, setDateTime] = useState(
    new Date().toLocaleString([], {
      hour: "2-digit",
      minute: "2-digit",
      year: "numeric",
      month: "2-digit",
      day: "2-digit",
    })
  );
  const dispatch = useDispatch();
  const refresh = useSelector(state => state.home.refresh);
  // State for the first dropdown (GD Type)
  const [selectedGdType, setSelectedGdType] = useState("");
  const handleGdTypeChange = (event) => {
    setSelectedGdType(event.target.value);
  };

  // State for the second dropdown (Entry for Officer)
  const [selectedOfficer, setSelectedOfficer] = useState("");
  const handleOfficerChange = (event) => {
    setSelectedOfficer(event.target.value);
  };

  // State for the subject input
  const [subject, setSubject] = useState("");
  const handleSubjectChange = (event) => {
    setSubject(event.target.value);
  };

  // State for the description textarea
  const [description, setDescription] = useState("");
  const handleDescriptionChange = (event) => {
    setDescription(event.target.value);
  };

  // Update the dateTime every minute
  useEffect(() => {
    const intervalId = setInterval(() => {
      setDateTime(
        new Date().toLocaleString([], {
          hour: "2-digit",
          minute: "2-digit",
          year: "numeric",
          month: "2-digit",
          day: "2-digit",
        })
      );
    }, 60000); // 60000 milliseconds = 1 minute

    // Cleanup the interval on component unmount
    return () => clearInterval(intervalId);
  }, []);

  // Handle form submission
  const handleSubmit = async (event) => {
    event.preventDefault(); // Prevent the default form submission behavior

    const diaryEntry = {
      dateTime,
     selectedGdType,
      officer: selectedOfficer,
      subject,
      description,
    };
    console.log(diaryEntry);
    try {
      const response = await axios.post(
        "http://localhost:8080/save",
        diaryEntry,
        {
          withCredentials: false, // This will include cookies in the request
        }
      );

      dispatch(getRefreshState(!refresh));
      toast.success("GD Created Successfully");
      // Optionally reset the form or show a success message here
    } catch (error) {
      toast.error("Internal server error ");
    }
  };

  return (
    <div>
      <Home />
      <h1>Add General Diary</h1>
      <form onSubmit={handleSubmit}>
        <div
          style={{
            display: "flex",
            flexDirection: "row",
            justifyContent: "space-between",
          }}
        >
          <div>
            <div style={{ display: "flex" }}>
              <div
                style={{
                  background: "lightBlue",
                  width: "200px",
                  margin: "1px",
                }}
              >
                Date / Time
              </div>
              <div style={{ marginLeft: "10px" }}>{dateTime}</div>
            </div>
            <div style={{ display: "flex" }}>
              <div
                style={{
                  background: "lightBlue",
                  width: "200px",
                  margin: "1px",
                }}
              >
                GD Type
              </div>
              <select
                required
                id="gd-type"
                style={{ marginLeft: "10px" }}
                value={selectedGdType}
                onChange={handleGdTypeChange}
              >
                <option value="">--Please choose an option--</option>
                <option value="ACCIDENT">Accident</option>
                <option value="DEATH">Death</option>
                <option value="MURDER">Murder</option>
                <option value="THEFT">Theft</option>
              </select>
            </div>
            <div style={{ display: "flex" }}>
              <div
                style={{
                  background: "lightBlue",
                  width: "200px",
                  margin: "1px",
                }}
              >
                Entry for Officer
              </div>
              <select
                required
                id="officer"
                style={{ marginLeft: "10px" }}
                value={selectedOfficer}
                onChange={handleOfficerChange}
              >
                <option value="">--Please choose an option--</option>
                <option value="SHO">SHO</option>
                <option value="ACP">ACP</option>
                <option value="DSP">DSP</option>
              </select>
            </div>
            <div style={{ display: "flex" }}>
              <div
                style={{
                  background: "lightBlue",
                  width: "200px",
                  margin: "1px",
                }}
              >
                Subject
              </div>
              <input
                required
                type="text"
                id="location"
                style={{ marginLeft: "10px", width: "180px" }}
                value={subject}
                onChange={handleSubjectChange}
              />
            </div>
          </div>
          <div style={{ display: "flex" }}>
            <div
              style={{ background: "lightBlue", width: "200px", margin: "1px" }}
            >
              Description
            </div>
            <textarea
              required
              id="description"
              style={{ marginLeft: "10px", height: "100px", width: "100px" }}
              value={description}
              onChange={handleDescriptionChange}
            ></textarea>
          </div>
        </div>
        <button type="submit" style={{ marginTop: "10px" }}>
          Submit
        </button>
      </form>
    </div>
  );
}

export default AddGeneralDiary;
