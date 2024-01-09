import { Box, Button, styled } from "@mui/material";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import FlashOnIcon from "@mui/icons-material/FlashOn";
import React, { useState } from "react";
import { Navigate, useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { addToCart } from "../../redux/actions/cartActions";
// import { payWithPaytm } from "../../service/api";
// import { post } from "../../utils/paytm";

const LeftContainer = styled(Box)(({ theme }) => ({
  minWidth: "40%",
  padding: "40px 0 0 80px",
  [theme.breakpoints.down("lg")]: {
    padding: "20px 40px",
  },
}));

const StyledButton = styled(Button)(({ theme }) => ({
  width: "48%",
  height: "50px",
  borderRadius: "2px",
  [theme.breakpoints.down("lg")]: {
    width: "46%",
  },
  [theme.breakpoints.down("lg")]: {
    width: "48%",
  },
}));

const Image = styled("img")({
  width: "95%",
  padding: "15px",
});

const ActionItem = ({ product }) => {

  const [quantity,setQuantity]=useState(1)

  const navigate=useNavigate()
  const dispatch=useDispatch()
  const {id}=product;


  const addItemToCart=()=>{
    dispatch(addToCart(id,quantity))
    navigate('/cart')
  }

  const buyNow=async ()=>{
    // let response=await payWithPaytm({
    //   amount:500,
    //   email:'kshitija024@gmail.com'
    // })

    // let information={
    //   action: 'https://securegw-stage.paytm.in/order/process',
    //   params:response
    // }

    // post(information)

    alert('Bought Successfully')
    navigate('/')
  }

  return (
    <LeftContainer>
      <Box
        style={{
          padding: "15px 20px",
          border: "1px solid #f0f0f0",
          marginBottom: 10,
        }}
      >
        <Image src={product.detailUrl} alt="product-image" />
      </Box>

      <StyledButton
        variant="contained"
        style={{ marginRight: 10, background: "#ff9f00" }}
        onClick={()=>addItemToCart()}
      >
        <ShoppingCartIcon />
        Add to Cart
      </StyledButton>
      <StyledButton
        variant="contained"
        style={{ background: "#fb541b" }}
        onClick={()=>buyNow()}
      >
        <FlashOnIcon />
        Buy Now
      </StyledButton>
    </LeftContainer>
  );
};

export default ActionItem;
