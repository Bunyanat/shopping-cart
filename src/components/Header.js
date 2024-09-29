import React from 'react';
import { Dropdown } from 'react-bootstrap';

const Header = () => {
  return (
    <div className="d-flex justify-content-center" style={{marginBottom: '40px' }} >
      {/* Dropdown 1 */}
      <Dropdown className="mx-2">
        <Dropdown.Toggle variant="dark" id="dropdown-basic">
          โน็ตบุ๊ค
        </Dropdown.Toggle>
        <Dropdown.Menu>
          <Dropdown.Item href="#">Labtop Gaming</Dropdown.Item>
        </Dropdown.Menu>
      </Dropdown>

      {/* Dropdown 2 */}
      <Dropdown className="mx-2">
        <Dropdown.Toggle variant="dark" id="dropdown-basic-2">
          คอมเซ็ต
        </Dropdown.Toggle>
        <Dropdown.Menu>
          <Dropdown.Item href="#">COMPUTERSET</Dropdown.Item>
        </Dropdown.Menu>
      </Dropdown>

      {/* Dropdown 3 */}
      <Dropdown className="mx-2">
        <Dropdown.Toggle variant="dark" id="dropdown-basic-3">
          AIO
        </Dropdown.Toggle>
        <Dropdown.Menu>
          <Dropdown.Item href="#">All in one PC</Dropdown.Item>

        </Dropdown.Menu>
      </Dropdown>


      {/* Dropdown 4 */}
      <Dropdown className="mx-2">
        <Dropdown.Toggle variant="dark" id="dropdown-basic-2">
          จอคอมพิวเตอร์
        </Dropdown.Toggle>
        <Dropdown.Menu>
          <Dropdown.Item href="#">ASUS ROG Swift Pro</Dropdown.Item>

        </Dropdown.Menu>
      </Dropdown>

     {/* Dropdown 5 */}
      <Dropdown className="mx-2">
        <Dropdown.Toggle variant="dark" id="dropdown-basic-2">
          Gaming gears
        </Dropdown.Toggle>
        <Dropdown.Menu>
          <Dropdown.Item href="#">HyperX Gaming Headset Cloud Alpha Wireless</Dropdown.Item>
          <Dropdown.Item href="#">Logitech G PRO X SUPERLIGHT 2</Dropdown.Item>
          <Dropdown.Item href="#">Wooting 60HE</Dropdown.Item>
          <Dropdown.Item href="#">แผ่นรองเมาส์ Signo MT-304 EXTRON Black</Dropdown.Item>
        </Dropdown.Menu>
      </Dropdown>
    </div>
  );
};

export default Header;
