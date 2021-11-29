import React from 'react';
import { NavLink } from 'react-router-dom';
import { Button, Space } from 'antd';
const Navigation = () => (
  <>
    <Space>
      <Button>
        <NavLink to="/" exact="true">
          Main
        </NavLink>
      </Button>
      <Button>
        <NavLink to="/contacts" exact="true">
          Contacts
        </NavLink>
      </Button>
    </Space>
  </>
);

export default Navigation;
