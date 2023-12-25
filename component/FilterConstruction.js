import React, { useState } from "react";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import Select from "@mui/material/Select";
import MenuItem from "@mui/material/MenuItem";
import InputLabel from "@mui/material/InputLabel";

const FilterConstruction = ({
  filterData,
  searchFyear,
  searchFmonth,
  initialQuery,
}) => {
  const [formData, setFormData] = useState({
    year: initialQuery?.year || searchFyear,
    month: initialQuery?.month || searchFmonth,
  });

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
    // If the year changes, trigger form submission
    if (name === "year") {
      // handleSubmit(event);
      const url = `${window.location.pathname}?year=${value}&month=`;
      window.location.href = url;
    }
    // If the month changes, trigger form submission
    if (name === "month") {
      // handleSubmit(event);
      const yearVal = formData.year;
      const url = `${window.location.pathname}?year=${yearVal}&month=${value}`;
      window.location.href = url;
    }
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    // Update the URL with the selected dropdown values
    const { year, month } = formData;
    const url = `${window.location.pathname}?year=${year}&month=${month}`;
    window.location.href = url;
  };

  const handleReset = () => {
    setFormData({
      year: "",
      month: "",
    });
    const url = window.location.pathname;
    window.location.href = url;
  };

  return (
    <>
      <div className="col-lg-8 m-auto col-12 flex-center">
      <form onSubmit={handleSubmit} className="col-12 float-start">
      <div className="row">
     <div className="col-lg-2"></div>
        <div className="col-lg-4 col-12">
          <Select
            id="year"
            name="year"
            value={formData.year}
            onChange={handleChange}
            displayEmpty
            fullWidth
          >
            <MenuItem value="" disabled className="text-center">
              Years
            </MenuItem>
            {filterData.projects.map((project, index) =>
              // Map over the "category" array
              project.construction.category.map((category, catIndex) => (
                <MenuItem key={category.year} value={category.year}>
                  {category.year}
                </MenuItem>
              ))
            )}
          </Select>
        </div>
        <div className="col-lg-4 col-12">
          <Select
            id="month"
            name="month"
            value={formData.month}
            onChange={handleChange}
            displayEmpty
            fullWidth
          >
            <MenuItem value="" disabled className="text-center">
              Months
            </MenuItem>
            {filterData.projects.map((project, index) =>
              project.construction.months.map((category, catIndex) => (
                <MenuItem key={category.month} value={category.month}>
                  {category.month}
                </MenuItem>
              ))
            )}
          </Select>
        </div>
        <div className="col-lg-2"></div>
        {/* <div className="col-lg-2 col-12 overflow-hidden mediabutton p-0 flex-center">
              <Button
                type="submit"
                variant="contained"
                color="primary"
                className="col-12 realstatebtn"
              >
                <span className="text-white"> Submit</span>
              </Button>
            </div> */}
          </div>
    </form>
      </div>
    </>
  );
};

export async function getServerSideProps(context) {
  const { query } = context;

  const initialQuery = {
    year: query?.year || "",
    month: query?.month || "",
  };

  return {
    props: {
      filterData,
      initialQuery,
    },
  };
}

export default FilterConstruction;
