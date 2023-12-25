// Import necessary libraries and components
import React, { useState } from 'react';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import Select from '@mui/material/Select';
import MenuItem from '@mui/material/MenuItem';
import InputLabel from '@mui/material/InputLabel';

// Define the FilterProject component
const FilterProject = ({ filterData, searchFloc, searchFtype, searchFstatus, initialQuery }) => {
  // State to manage form data
  const [formData, setFormData] = useState({
    location: initialQuery?.location || searchFloc, 
    type: initialQuery?.type || searchFtype,
    statusval: initialQuery?.statusval || searchFstatus,
  });

  // Handle form input changes
  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));

    if (name === "location") {
      const typeVal = formData.type;
      const statusVal = formData.statusval;
      const url = `${window.location.pathname}?location=${value}&type=${typeVal}&statusval=${statusVal}`;
      window.location.href = url;
      }
    if (name === "type") {
        const locationVal = formData.location;
        const statusVal = formData.statusval;
        const url = `${window.location.pathname}?location=${locationVal}&type=${value}&statusval=${statusVal}`;
        window.location.href = url;
        }
    if (name === "statusval") {
          const locationVal = formData.location;
          const typeVal = formData.type;
          const url = `${window.location.pathname}?location=${locationVal}&type=${typeVal}&statusval=${value}`;
          window.location.href = url;
          }

  };

  // Handle form submission
  const handleSubmit = (event) => {
    event.preventDefault();
    // Update the URL with the selected dropdown values
    const { location, type, statusval } = formData;
    const url = `${window.location.pathname}?location=${location}&type=${type}&statusval=${statusval}`;
    window.location.href = url;
  };

  // Handle form reset
  const handleReset = () => {
    setFormData({
      location: '',
      type: '',
      statusval: '',
    });
    const url = window.location.pathname; 
    window.location.href = url;
  };

  // Render the form
  return (
    <form onSubmit={handleSubmit}>
      <div className='row justify-content-center'>
        <div className='col-lg-3 col-12'>
          <Select id="location" name="location" value={formData.location} onChange={handleChange} displayEmpty fullWidth>
            <MenuItem value="" disabled>Location</MenuItem>
            {filterData && filterData.locations.map(locData => (
              <MenuItem key={locData} value={locData}>{locData}</MenuItem>
            ))}
          </Select>
        </div>
        <div className='col-lg-3 col-12'>
          <Select id="type" name="type" value={formData.type} onChange={handleChange} displayEmpty fullWidth>
            <MenuItem value="" disabled className='text-center'>Type</MenuItem>
            {filterData && filterData.types.map(typeData => (
              <MenuItem key={typeData} value={typeData}>{typeData}</MenuItem>
            ))}
          </Select>
        </div>
        <div className='col-lg-3 col-12'>
          <Select id="statusval" name="statusval" value={formData.statusval} onChange={handleChange} displayEmpty fullWidth>
            <MenuItem value="" disabled>Status</MenuItem>
            {filterData && filterData.status.map(statusData => (
              <MenuItem key={statusData} value={statusData}>{statusData}</MenuItem>
            ))}
          </Select>
        </div>
        {/* <div className='col-lg-3 col-12 m-auto ssgroupbtn d-flex'>
          <div className="row">
            <div className="col-lg-8">
              <Button type="submit" variant="contained" color="primary" className='col-12 realstatebtn'>
                <span className='text-white'> Submit</span>
              </Button>
            </div>
            <div className="col-lg-4 p-0">            
                <span onClick={handleReset}><strong className='text-uppercase cursor-pointer'>Reset</strong></span>
            </div>
          </div>
        </div> */}
      </div>
    </form>
  );
};

// Define server-side props
export async function getServerSideProps(context) {
  const { query } = context;

  const initialQuery = {  
    location: query?.location || '',
    type: query?.type || '',
    statusval: query?.statusval || '',
  };

  // Assume filterData is imported or defined somewhere
  const filterData = {
    locations: ['Location1', 'Location2'],
    types: ['Type1', 'Type2'],
    status: ['Status1', 'Status2'],
    // Add more data as needed
  };

  return {
    props: {
      filterData,
      initialQuery,
    },
  };
}

// Export the component as the default export
export default FilterProject;
