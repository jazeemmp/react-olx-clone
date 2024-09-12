import React, { useEffect, useState } from "react";
import "./ViewPost.css";
import { useParams } from "react-router-dom";
import { doc, getDoc } from "firebase/firestore";
import { db } from "../../config/firebase";
const ViewPost = () => {
  const { id } = useParams();
  const [product, setProduct] = useState({});
  const [user,setUser] = useState({})
  const [loading, setLoading] = useState(true);

  const fecthDocument = async () => {
    try {
      const docRef = doc(db, "products", id);
      const snapshot = await getDoc(docRef);
      if (snapshot.exists()) {
        const productData = snapshot.data()
        setProduct(productData);
        if (productData.userId) {
          await fetchUser(productData.userId);
        }
      } else {
        console.log("no dodumnets found");
      }
    } catch (error) {
      console.log(error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fecthDocument();
  }, [id]);

  const fetchUser = async(userId)=>{
    try {
      const userRef = doc(db,'users',userId)
      const snapshot = await getDoc(userRef)
      if(snapshot.exists()){
        setUser(snapshot.data())
      }else{
        console.log("no user found for product");
      }
    } catch (error) {
      console.log(error);
    }
  }
  console.log(user);
  if(loading) return <div className="parent-loader"><div class="loader2"></div></div>

  return (
    <div className="viewParentDiv">
      <div className="imageShowDiv">
        <img src={product.imageURL} alt="" />
      </div>
      <div className="rightSection">
        <div className="productDetails">
          <p>&#x20B9;{product.price}</p>
          <span>{product.name}</span>
          <p>{product.category}</p>
          <span>{product.createdAt}</span>
        </div>
        <div className="contactDetails">
          <p>{user.email}</p>
          <p>{user.name}</p>
          <p>{product.mobile}</p>
        </div>
      </div>
    </div>
  );
};

export default ViewPost;
