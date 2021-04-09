import React, { useState } from 'react';
import 'antd/dist/antd.css';
//import './index.css';
import { Drawer, Button } from 'antd';
import Formcomponent from './form-component';

const Drawercomponent = () => {
  const [visible, setVisible] = useState(false);

  const showDrawer = () => {
    setVisible(true);
  };

  const onClose = () => {
    setVisible(false);
  };

  return (
    <>
      <button type="primary" onClick={showDrawer}>
        Open
      </button>
      <Drawer
        title="Basic Drawer"
        placement="right"
        closable={false}
        onClose={onClose}
        visible={visible}
        width= {'40%'} 
      >
        <Formcomponent />
      </Drawer>
    </>
  );
};

export default Drawercomponent;