import { UseStyles } from "./MaterialCss";
import { MdEdit, MdDelete } from "react-icons/md";
import { FaCartPlus } from "react-icons/fa6";
import EditProduct from "./EditProduct";
import { useState } from "react";

function Cards({ products, deleteProduct,updateProduct }) {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedProduct, setSelectedProduct] = useState(null);

  const handleEditClick = (product) => {
    setSelectedProduct(product); // 
    setIsModalOpen(true); // 
  };
   
  const classes = UseStyles();

  return (
    <div className={classes.cardContainer}>
      {products.map((item) => (
        <div key={item.id} className={classes.card}>
          <h2 className={classes.productName}>{item.productName}</h2>
          {/* <img
            src={`../${item.productImage}`}  
            className={classes.img}
            alt={item.productName}
          /> */}
          <p className={classes.productDescription}>{item.productDescription}</p>
          <div className={classes.productPrice}>Price: {item.productPrice} Rs</div>
          <div className={classes.cardActions}>
            <p className={classes.cartButton}>
              <FaCartPlus />
            </p>
            <div style={{ display: 'flex', alignItems: 'center' }}>
              <p className={classes.icons}>

              <MdEdit onClick={() => handleEditClick(item)} />
              </p>
              <span 
                className={classes.icons} 
                onClick={() => deleteProduct(item.id)} 
              >
                <MdDelete />
              </span>
            </div>
          </div>
        </div>
      ))}
      {/* Pass data to the modal */}
      <EditProduct 
        open={isModalOpen} 
        onClose={() => setIsModalOpen(false)} 
        product={selectedProduct}
        updateProduct={updateProduct}
        />
        
    </div>
  );
}

export default Cards;
