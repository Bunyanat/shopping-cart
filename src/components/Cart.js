import React, { useState } from 'react';
import { Button, Form } from 'react-bootstrap';

const Cart = ({ cart, removeFromCart, updateQuantity, applyCoupon, totalCost, finalPrice }) => {
  const [couponCode, setCouponCode] = useState('');

  const handleApplyCoupon = () => {
    applyCoupon(couponCode);
  };

  return (
    <div>
      <h2>ตะกร้าสินค้า</h2>
      {cart.length === 0 ? (
        <p>ไม่มีสินค้าในตะกร้า</p>
      ) : (
        <ul className="list-group">
          {cart.map((item) => (
            <li key={item.id} className="list-group-item d-flex justify-content-between align-items-center">
              {item.name} - {item.price} ฿
              <div>
                <Button variant="outline-dark" onClick={() => updateQuantity(item.id, -1)}>-</Button>
                <span className="mx-2">{item.quantity}</span>
                <Button variant="outline-dark" onClick={() => updateQuantity(item.id, 1)}>+</Button>
                <Button variant="danger" className="ml-4" onClick={() => removeFromCart(item.id)}>ลบ</Button>
              </div>
            </li>
          ))}
        </ul>
      )}

      <div className="mt-4">
        <h4>ราคารวม: {totalCost} ฿</h4>
        <h4>ยอดชำระเงินทั้งหมด (รวมส่วนลดและค่าขนส่ง): {finalPrice} ฿</h4>
        <Form>
          <Form.Group controlId="couponCode">
            <Form.Label>รหัสคูปอง</Form.Label>
            <Form.Control 
              type="text" 
              placeholder="ใส่รหัสคูปอง" 
              value={couponCode} 
              onChange={(e) => setCouponCode(e.target.value)} 
            />
          </Form.Group>
          <Button variant="dark" onClick={handleApplyCoupon}>ใช้คูปอง</Button>
        </Form>
      </div>
    </div>
  );
};

export default Cart;
