import React from 'react';
import { Modal, Button } from 'react-bootstrap';

const MyModal = ({ show, handleClose, handleConfirm }) => {
  return (
    <Modal show={show} onHide={handleClose}>
      <Modal.Header closeButton>
        <Modal.Title>ยืนยันการสั่งซื้อ</Modal.Title>
      </Modal.Header>
      <Modal.Body>คุณต้องการยืนยันการสั่งซื้อใช่ไหม?</Modal.Body>
      <Modal.Footer>
        <Button variant="danger" onClick={handleClose}>
          ยกเลิก
        </Button>
        <Button variant="success" onClick={() => {
          console.log('ปุ่มยืนยันถูกกด');
          handleConfirm();
        }}>
          ยืนยัน
        </Button>
      </Modal.Footer>
    </Modal>
  );
};


export default MyModal;
