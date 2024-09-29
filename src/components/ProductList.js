import React from 'react';
import { Card, Button, Row, Col } from 'react-bootstrap';

const ProductList = ({ products, addToCart }) => {
  return (
    <Row>
      {products.map((product) => (
        <Col key={product.id} sm={12} md={6} lg={3} className="mb-4">
          <Card>
            <Card.Img 
            variant="top" 
            src={product.imageSrc} 
            alt={product.name}
            className="img-fluid" 
            style={{ height: '350px', objectFit: 'cover' }}/>
            <Card.Body>
              <Card.Title>{product.name}</Card.Title>
              <Card.Text>{product.price} ฿</Card.Text>
              <Button variant="dark" onClick={() => addToCart(product)}>
                เพิ่มไปยังตะกร้า
              </Button>
            </Card.Body>
          </Card>
        </Col>
      ))}
    </Row>
  );
};

export default ProductList;
