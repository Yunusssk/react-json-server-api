import { useParams } from "react-router-dom";
import "./productCard.css";
import Navbar from './components2/Navbar'

const ProductCard = (props) => {
    // eslint-disable-next-line react/prop-types
    const id = props.id;
    // eslint-disable-next-line react/prop-types
    const name = props.name;
    // eslint-disable-next-line react/prop-types
    const image = props.image;
    // eslint-disable-next-line react/prop-types
    const price = props.price;

    console.log(id, name, image, price)
    return (
        <>
            
                <Navbar />
                <div onClick={useParams} className="productContainer" key={id}>
                    <img className="productImage" src={image}></img>
                    <p className="productName">{name}</p>
                    <p className="productPrice">{price}</p>
                    {/* <p>{id}</p> */}
                    
                </div>
            
            {/*<div className="product-container">*/}
            {/*  {userData.map((products) => (*/}
            {/*    <div key={products.id}>*/}
            {/*      /!* <img src={user.image_picture} alt={user.name} /> *!/*/}
            {/*      /!* <p>{user.yazi1}</p>*/}
            {/*      <p>{user.yazi2}</p> *!/*/}
            {/*      /!* <p>*/}
            {/*        {user.yazi3}*/}
            {/*        {user.yazi4}*/}
            {/*      </p> *!/*/}
            {/*    </div>*/}
            {/*  ))}*/}

            {/*  <div>*/}
            {/*    <img src={userData[0].image_picture} alt={userData[0].name} />*/}
            {/*  </div>*/}
            {/*</div >*/}
        </>
    )
}
export default ProductCard;