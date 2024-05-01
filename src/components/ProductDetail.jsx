import React from 'react';
import Navbar from './components2/Navbar'
// import { useParams } from 'react-router-dom';

function ProductDetail() {
//   const { id } = useParams();

  // Burada URL'den alınan "id" parametresini kullanabilirsiniz
  // Örneğin, bu ID'ye göre ilgili ürün detaylarını çekebilirsiniz

  return (
    <div>
        <Navbar />
      <h1>Ürün Detayları</h1>
      <p>Ürün ID:</p>
      {/* Diğer ürün detayları burada gösterilebilir */}
    </div>
  );
}

export default ProductDetail;







