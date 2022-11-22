import React from 'react'
import styles from './Header.module.css'
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

const Header = () => {
  return (
    <Row>
      <Col>
        <div className={styles.root}>Todo list</div>
      </Col>
    </Row>
  )
}

export default Header