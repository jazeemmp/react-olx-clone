import React, { useEffect, useState } from "react";
import Heart from "../../assets/Heart";
import "./Post.css";
import { collection, getDocs } from "firebase/firestore";
import { db } from "../../config/firebase";
import { useNavigate } from "react-router-dom";

const Post = () => {
  const [products,setProducts] = useState([])
  const navigate = useNavigate()
  const fetchProducts = async()=>{
    try {
      const productCollectionRef = collection(db,'products')
      const snapshot = await getDocs(productCollectionRef)
      const productList =  snapshot.docs.map(doc=>({
       id:doc.id, 
       ...doc.data()
      }))
      setProducts(productList)
    } catch (error) {
      console.error("Error fetching documents: ", error);
    }
  }
  useEffect(()=>{
    fetchProducts()
  },[])

  return (
    <>
      <div className="postParentDiv">
        <div className="recommendations">
          <div className="heading">
            <span>Fresh recommendations</span>
          </div>
          <div className="cards">
           {products.map((product,index)=>(
             <div onClick={()=> navigate(`/product/${product.id}`)} className="card" key={index}>
             <div className="favorite">
               <Heart></Heart>
             </div>
             <div className="image">
               <img src={product.imageURL} alt="" />
             </div>
             <div className="content">
               <p className="rate">&#x20B9; {product.price}</p>
               <span className="kilometer">{product.category}</span>
               <p className="name">{product.name}</p>
             </div>
             <div className="date">
               <span>{product.createdAt}</span>
             </div>
           </div>
           ))}
          </div>
        </div>
      </div>
    </>
  );
};
export default Post;
