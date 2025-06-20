import { createContext, useContext , useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { dummyProducts } from "../assets/assets";
import toast from "react-hot-toast";
export const AppContext = createContext();

export const AppContextProvider = ({ children }) => {

    const currency = "₹";

    const navigate = useNavigate();
    const [user , setUser] = useState(null);
    const [isSeller , setIsSeller] = useState(false);
    const [showUserLogin , setShowUserLogin] = useState(false);
    const [products , setProducts] = useState([]);
    const [cartItems , setCartItems] = useState({});

    //Fetch All Products :
    const fetchProducts = async () => {
      setProducts(dummyProducts);
    };

    //Add Product to cart : 
    const addToCart = (itemId) => {
      let cartData = structuredClone(cartItems);
      if(cartData[itemId]){
        cartData[itemId] += 1;
      }else{
        cartData[itemId] = 1;
      }
      setCartItems(cartData);
      toast.success("Added to Cart");
    }

    //Update Cart Items :
    const updateCartItems = (itemId, quantity) => {
      let cartData = structuredClone(cartItems);
      cartData[itemId] = quantity;
      setCartItems(cartData)
      toast.success("Cart Updated")
    }

    //Remove Product from cart : 
    const removeFromCart = (itemId) => {
      let cartData = structuredClone(cartItems);
      if(cartData[itemId]){
        cartData[itemId] -= 1;
        if(cartData[itemId] === 0){
          delete cartData[itemId];
        }
      }
      toast.success("Remove from cart")
      setCartItems(cartData);
    }
    

    useEffect(() => {
      fetchProducts();
    }
    , []);
    const value = {navigate, user, setUser, isSeller, setIsSeller , showUserLogin , setShowUserLogin , products , currency , addToCart , updateCartItems , removeFromCart , cartItems};

  return (
    <AppContext.Provider value={value}>
      {children}
    </AppContext.Provider>
  );
}

export const useAppContext = () => {
  const context = useContext(AppContext);
  if (!context) {
    throw new Error("useAppContext must be used within an AppContextProvider");
  }
  return context;
}