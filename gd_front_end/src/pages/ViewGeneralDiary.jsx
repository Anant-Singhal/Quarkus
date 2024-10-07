import React from 'react';
import Home from './Home';
import { useSelector } from 'react-redux';
function ViewGeneralDiary() {
    const gdEntries = useSelector(state => state.home.gd);
  return (
    <div>
        <Home />
      <h1>Search and View GD Details</h1>
      <hr style={{height: "5px", background: "black"}}/>
      <div>
      <h1>General Diary Entries</h1>
      <table border="1" cellPadding="10" cellSpacing="0" style={{ width: "100%" }}>
        <thead>
          <tr>
            <th>ID</th>
            <th>Date / Time</th>
            <th>Officer</th>
            <th>GD Type</th>
            <th>Subject</th>
            <th>Description</th>
          </tr>
        </thead>
        <tbody>
          {gdEntries.map((entry, index) => (
            <tr key={index}>
              <td>{entry.id}</td>
              <td>{entry.dateTime}</td>
              <td>{entry.officer}</td>
              <td>{entry.selectedGdType }</td> {/* Handle null case */}
              <td>{entry.subject}</td>
              <td>{entry.description}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
    </div>
  );
}

export default ViewGeneralDiary;
