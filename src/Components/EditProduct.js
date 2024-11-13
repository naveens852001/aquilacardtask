import React, { useState, useEffect } from 'react';
import { Box, Button, Typography, Modal, TextField } from '@mui/material';
import { RxCross2 } from "react-icons/rx";
// import { UseStyles } from './MaterialCss';


function EditProduct({ open, onClose, product,updateProduct,selectedProduct }) {
  const [formData, setFormData] = useState({
    productName: '',
    productPrice: '',
    productDescription: '',
  });
  
  useEffect(() => {
    if (product) {
      setFormData({
        productName: product.productName,
        productPrice: product.productPrice,
        productDescription: product.productDescription,
      });
    }
  }, [product]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const updatedData = {
      productName: formData.productName,
      productPrice: formData.productPrice,
      productDescription: formData.productDescription,
    };
    await updateProduct(product.id, updatedData); // Use product.id here
    onClose(); 
  };
  

  return (
    <Modal
      open={open}
      onClose={onClose}
      aria-labelledby="modal-modal-title"
      aria-describedby="modal-modal-description"
      BackdropProps={{ onClick: (e) => e.stopPropagation() }}
    >
      <Box
        component="form"
        onSubmit={handleSubmit}
        sx={{
          width: 400,
          margin: "auto",
          backgroundColor: 'white',
          padding: 3,
          borderRadius: 2,
        }}
      >
        <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: 20 }}>
          <Typography variant="h6">Edit Product</Typography>
          <span onClick={onClose} style={{ cursor: 'pointer' }}>
            <RxCross2 />
          </span>
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
          Update Product
        </Button>
      </Box>
    </Modal>
  );
}

export default EditProduct;
