import React, { useState, useEffect } from "react";
import "./productCard.css";

const productCard = () => {
  const [userData, setUserData] = useState([]);

  useEffect(() => {
    // API'den verileri çek
    fetch("http://localhost:3000/products")
      .then((response) => response.json())
      .then((data) => setUserData(data))
      .catch((error) => console.error("Error fetching users:", error));
  }, []);

  return (
    <>
      <div className="product-container">
        {userData.map((products) => (
          <div key={products.id}>
            {/* <img src={user.image_picture} alt={user.name} /> */}
            {/* <p>{user.yazi1}</p>
            <p>{user.yazi2}</p> */}
            {/* <p>
              {user.yazi3}
              {user.yazi4}
            </p> */}
          </div>
        ))}

        <div>
          <img src={userData[0].image_picture} alt={userData[0].name} />
        </div>
      </div >
    </>
  )
}
export default productCard;