//components import
import { Box, styled } from "@mui/material";
import Banner from "./Banner";
import NavBar from "./NavBar";
import Slide from "./Slide"
import MidSlide from "./MidSlide";
import MidSection from "./MidSection";
import { useEffect } from "react";
import { getProducts } from "../../redux/actions/productsActions";
import { useDispatch,useSelector } from "react-redux";

const Component = styled(Box)`
  padding: 10px 10px;
  background: #f2f2f2;
`;

const Home = () => {
  const { products } = useSelector((state) => state.getProducts);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getProducts());
  }, [dispatch]);

  return (
    <>
      <NavBar />
      <Component>
        <Banner />
        <MidSlide products={products} title="Deal of the day" timer={true}/>
        <MidSection/>
        <Slide products={products} title="Discounts for you" timer={false}/>
        <Slide products={products} title="Suggested Items" timer={false}/>
        {/* <Slide products={products} title="Top Selection" timer={false}/>
        <Slide products={products} title="Recommended Items" timer={false}/>
        <Slide products={products} title="Trending offers" timer={false}/>
        <Slide products={products} title="Season Top Picks" timer={false}/>
        <Slide products={products} title="Top Deals on Accessories" timer={false}/> */}
      </Component>
    </>
  );
};

export default Home;
