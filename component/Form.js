import React, { useState } from 'react';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';

const Form = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(formData); 
  };

  return (
    <>
   <div className='col-12 d-inline' data-aos="fade-up" data-aos-easing="ease-in" data-aos-offset="50" data-aos-duration="600" data-aos-once='true'>
    <div className='row'>
    <form onSubmit={handleSubmit}>
        <div className='row'>
        <div className='col-lg-4 col-12'>
        <TextField
        name="name"
        label="Name"
        className='modifiedinput'
        value={formData.name}
        onChange={handleChange}
        fullWidth
        required
      />
        </div>
        <div className='col-lg-4 col-12'>
      <TextField
        name="email"
        label="Email"
        className='modifiedinput'
        value={formData.email}
        onChange={handleChange}
        fullWidth
        required
      />
      </div>
      <div className='col-lg-4 col-12'>
      <TextField
  name="phone"
  label="Phone"
  className='modifiedinput'
  value={formData.phone}
  onChange={handleChange}
  fullWidth
  required
/>
      </div>
      <div className='col-12 mt-5 text-center'>
            <div className='col-lg-3 col-12 m-auto ssgroupbtn'>
            <Button type="submit" variant="contained" color="primary" className='col-12 realstatebtn'>
       <span className='text-white'> Submit</span>
      </Button>
            </div>
      </div>
      </div>
    </form>
    </div>
   </div>
    </>
  );
};

export default Form;
