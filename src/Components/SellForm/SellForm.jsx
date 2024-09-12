import React, { useContext, useState } from "react";
import "./SellForm.css";
import Header from "../Header/Header";
import { db, storage } from "../../config/firebase";
import { UserContext } from "../../Contexts/UserContext";
import { getDownloadURL, ref, uploadBytes } from "firebase/storage";
import { addDoc, collection } from "firebase/firestore";
import { useNavigate } from "react-router-dom";

const SellForm = () => {
  const { user } = useContext(UserContext);
  const navigate = useNavigate()
  const productCollectionRef = collection(db,'products')
  const [loading,setLoading] = useState(false)
  const [name, setName] = useState("");
  const [category, setCategory] = useState("");
  const [price, setPrice] = useState(0);
  const [mobile,setMobile] = useState(0)
  const [img, setImg] = useState(null);

  const date = new Date()

  const handleUpload = async () => {
    setLoading(true)
    const storageRef = ref(storage, `uploads/${img.name}`);
    try {
     const data = await uploadBytes(storageRef, img);
     const downloadURL = await getDownloadURL(data.ref)
     await addDoc(productCollectionRef, {
      name,
      category,
      price,
      mobile,
      imageURL: downloadURL,
      userId: user.uid,
      createdAt:date.toDateString()
    });
    navigate('/')
    } catch (error) {
      console.log(error);
    }
    finally{
      setLoading(false)
    }
  };
  return (
    <>
      <div className="container">
        <div className="centerDiv">
          <label htmlFor="fname">Name</label>
          <input
            className="input"
            onChange={(e) => setName(e.target.value)}
            type="text"
            id="fname"
            name="Name"
          />
          <label htmlFor="fname">Category</label>
          <input
            className="input"
            onChange={(e) => setCategory(e.target.value)}
            type="text"
            id="fname"
            name="category"
          />
          <label htmlFor="fname">Price</label>
          <input
            className="input"
            onChange={(e) => setPrice(e.target.value)}
            type="number"
            id="fname"
            name="Price"
          />
          <label htmlFor="fname">Mobile</label>
          <input
            className="input"
            onChange={(e) => setMobile(e.target.value)}
            type="number"
            id="fname"
            name="Mobile"
          />
          <br />
          <br />
          <img
            width="200px"
            height="200px"
            src={img ? URL.createObjectURL(img) : ""}
          ></img>

          <br />
          <label for="file-upload" class="custom-file-upload">
            <i class="fa-solid fa-camera"></i> Custom Upload
          </label>
          <input
            onChange={(e) => setImg(e.target.files[0])}
            id="file-upload"
            type="file"
          />
          <br />
          <button onClick={handleUpload} className="uploadBtn">
           {loading?<div class="loader"></div>:"upload"}
          </button>
        </div>
      </div>
    </>
  );
};

export default SellForm;
