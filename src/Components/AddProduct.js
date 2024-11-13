import React, { useState } from 'react';
import { UseStyles } from './MaterialCss';
import { Box, Button, Typography, Modal, TextField } from '@mui/material';
import { RxCross2 } from "react-icons/rx";
// import axios from 'axios';

function AddProduct({ addProduct }) {
  const [open, setOpen] = useState(false);
  const [formData, setFormData] = useState({
    productName: '',
    // productImage: null,
    productDescription: '',
    productPrice: '',
  });

  const classes = UseStyles();

  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  const handleChange = (e) => {
    if (e.target.type === 'file') {
      setFormData({ ...formData, [e.target.name]: e.target.files[0] });
    } else {
      setFormData({ ...formData, [e.target.name]: e.target.value });
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    await addProduct(formData);
      setFormData({
        productName: '',
      // productImage: '',
        productDescription: '',
        productPrice: '',
      });
      handleClose();
  };

  return (
    <div className={classes.parentContainer}>
      <Button className={classes.ProductButton} onClick={handleOpen}>Add Item</Button>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
        BackdropProps={{ onClick: (e) => e.stopPropagation() }}
      >
        <Box className={classes.Model} component="form" onSubmit={handleSubmit}>
          <div className={classes.ModelHeading}>
            <Typography id="modal-modal-title" variant="h6" component="h2" gutterBottom>
              Create Product
            </Typography>
            <span className={classes.crossicon} onClick={handleClose}><RxCross2 /></span>
          </div>

          <TextField
            label="Product Name"
            name="productName"
            variant="outlined"
            fullWidth
            margin="normal"
            value={formData.productName}
            onChange={handleChange}
            required
          />
          {/* <input
            type='file'
            name="productImage"
            onChange={handleChange} 
            required
          /> */}
          <TextField
            label="Product Price"
            type="number"
            name="productPrice"
            variant="outlined"
            fullWidth
            margin="normal"
            value={formData.productPrice}
            onChange={handleChange}
            required
          />
          <TextField
            label="Product Description"
            name="productDescription"
            variant="outlined"
            fullWidth
            margin="normal"
            multiline
            rows={4}
            value={formData.productDescription}
            onChange={handleChange}
            required
          />
          <Button type="submit" variant="contained" color="primary" sx={{ mt: 2 }}>
            Submit
          </Button>
        </Box>
      </Modal>
    </div>
  );
}

export default AddProduct;
