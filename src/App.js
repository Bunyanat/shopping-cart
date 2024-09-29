import React, { useState } from 'react';
import ProductList from './components/ProductList';
import Cart from './components/Cart';
import Header from './components/Header';
import MyModal from './MyModal';

const App = () => {
  const [cart, setCart] = useState([]);
  const [discount, setDiscount] = useState(0);
  const [showModal, setShowModal] = useState(false); 
  const [selectedCoupon, setSelectedCoupon] = useState('');

  const handleClose = () => {
    console.log('โมดอลปิดแล้ว');
    setShowModal(false); 
  }; 
  const handleShow = () => {
    console.log('โมดอลเปิดแล้ว');
    setShowModal(true); 
  };
  const handleConfirm = () => {
    console.log('การสั่งซื้อได้รับการยืนยันแล้ว'); 
    setShowModal(false);
  };

  const products = [
    { id: 1, name: 'Labtop Gaming', price: 79990, imageSrc: 'https://mercular.s3.ap-southeast-1.amazonaws.com/images/products/2024/01/Product/asus-rog-strix-g16-g614jir-n4046w-gaming-notebook-front-view.jpg' },
    { id: 2, name: 'All in one PC', price: 31990, imageSrc: 'https://www.jib.co.th/img_master/product/original/2024062614453768225_1.jpg' },
    { id: 3, name: 'COMPUTERSET', price: 149990, imageSrc: 'https://www.jib.co.th/img_master/product/big/20240916145340_70285_436_1.jpg' },
    { id: 4, name: 'HyperX Gaming Headset Cloud Alpha Wireless', price: 5690, imageSrc: 'https://media-cdn.bnn.in.th/207840/Hyper-X-Gaming-Headset-Cloud-Alpha-Wireless-02.jpg' },
    { id: 5, name: 'Logitech G PRO X SUPERLIGHT 2', price: 5190, imageSrc: 'https://media-cdn.bnn.in.th/330992/Logitech-G-PRO-X-SUPERLIGHT-2-5.jpg' },
    { id: 6, name: 'Wooting 60HE', price: 5749, imageSrc: 'https://wooting-website.ams3.cdn.digitaloceanspaces.com/612ca8920bc3a648125ffac3/615afbe3bda6a3d9f1fb4f83_Wooting-60HE-p-1080.png' },
    { id: 7, name: 'ASUS ROG Swift Pro', price: 33300, imageSrc: 'https://media-cdn.bnn.in.th/356432/asus-rog-swift-pro-pg248qp-tn-540hz-1.jpg' },
    { id: 8, name: 'แผ่นรองเมาส์ Signo MT-304 EXTRON Black', price: 250, imageSrc: 'https://media-cdn.bnn.in.th/361304/Signo-MT-304-EXTRON-Black-1.jpg' },
  ];

  const coupons = [
    { code: 'ส่วนลด10', discount: 0.1 },
    { code: 'ส่วนลด20', discount: 0.2 },
    { code: 'ส่วนลด50', discount: 0.5 },
  ];

  const addToCart = (product) => {
    const updatedCart = [...cart];
    const index = updatedCart.findIndex((item) => item.id === product.id);

    if (index === -1) {
      updatedCart.push({ ...product, quantity: 1 });
    } else {
      updatedCart[index].quantity += 1;
    }
    setCart(updatedCart);
  };

  const removeFromCart = (productId) => {
    const updatedCart = cart.filter((item) => item.id !== productId);
    setCart(updatedCart);
  };

  const updateQuantity = (productId, amount) => {
    const updatedCart = cart.map((item) => {
      if (item.id === productId) {
        return { ...item, quantity: Math.max(item.quantity + amount, 1) };
      }
      return item;
    });
    setCart(updatedCart);
  };

  const applyCoupon = (code) => {
    const coupon = coupons.find((c) => c.code === code);
    if (coupon) {
      setDiscount(coupon.discount);
    } else {
      setDiscount(0);
      alert('คูปองไม่ถูกต้อง');
    }
  };

  const totalCost = cart.reduce((total, item) => total + item.price * item.quantity, 0);
  const discountAmount = totalCost * discount; // คำนวณจำนวนเงินที่ต้องลด
  
  let shippingCost = 100; // ค่าจัดส่งเริ่มต้นเป็น 100 บาท
  const finalPrice = Math.max(totalCost - discountAmount + shippingCost, 0); // คำนวณราคาสุดท้าย

  return (
    <div className="container">
      <h1 className='text-center' style={{ marginTop: '40px', marginBottom: '50px' }}>Gaming Gears Shop!!</h1>
      <Header />
      
      <ProductList products={products} addToCart={addToCart} />
      <Cart 
        cart={cart} 
        removeFromCart={removeFromCart} 
        updateQuantity={updateQuantity} 
        applyCoupon={applyCoupon}
        totalCost={totalCost}
        finalPrice={finalPrice}
      />
      
      <div style={{ marginTop: '20px' }}>
        <label htmlFor="couponSelect">คูปองส่วนลด </label>
        <select
          id="couponSelect"
          value={selectedCoupon}
          onChange={(e) => {
            const coupon = coupons.find(c => c.code === e.target.value);
            setSelectedCoupon(e.target.value);
            if (coupon) {
              applyCoupon(coupon.code);
            } else {
              setDiscount(0); // รีเซ็ตส่วนลดถ้าไม่มีคูปองที่เลือก
            }
          }}
        >
          <option value=""> เลือกคูปองส่วนลด </option>
          {coupons.map(coupon => (
            <option key={coupon.code} value={coupon.code}>
              {coupon.code} - {coupon.discount * 100}%
            </option>
          ))}
        </select>
      </div>

      {/* ปุ่มที่ใช้เปิด Modal */}
      <div style={{ textAlign: 'center', marginTop: '20px' }}>
        <button className="btn btn-success" onClick={handleShow} style={{marginTop:'50px',marginBottom: '70px' }}>
          สั่งซื้อสินค้า
        </button>
      </div>

    <MyModal 
      show={showModal} 
      handleClose={handleClose} 
      handleConfirm={handleConfirm} 
    />
    </div>
  );
};

export default App;
