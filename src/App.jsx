import React, { useState } from "react";
import Filter from "./components/filter";
import DataTable from "./components/student_table";
import "./App.css"; // Import the CSS file

const App = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [minDate, setMinDate] = useState("");
  const [maxDate, setMaxDate] = useState("");

  const studentsData = [
    { lastName: "Dacara", firstName: "Bernie", course: "IT", birthdate: "2003-06-23" },
    { lastName: "Foncardaz", firstName: "Karl", course: "IS", birthdate: "2002-08-20" },
    { lastName: "Binancilan", firstName: "OJ", course: "CS", birthdate: "2004-03-10" },
    { lastName: "Angkanan", firstName: "Abdel", course: "DS", birthdate: "2001-07-25" },
  ];

  return (
    <div>
      <h1>Student Data Table</h1>
      <Filter 
        searchTerm={searchTerm} 
        setSearchTerm={setSearchTerm} 
        minDate={minDate} 
        setMinDate={setMinDate} 
        maxDate={maxDate} 
        setMaxDate={setMaxDate}
      />
      <div className="data-table-container"> 
        <DataTable 
          students={studentsData}
          searchTerm={searchTerm} 
          minDate={minDate} 
          maxDate={maxDate} 
        />
      </div>
    </div>
  );
};

export default App;
