import React from 'react';
import { Spin } from 'antd';
import { Wrapper } from './Loader.style';

const Loader = () => {
  return (
    <Wrapper>
      <Spin size='large'/>
    </Wrapper>
  );
}

export default Loader;