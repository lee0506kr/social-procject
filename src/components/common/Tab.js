import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import styled from 'styled-components';
import { changeTabContent } from '../../features/profile/profileSlice';

const TabUnit = styled.div`
  span {
    padding-bottom: 10px;
    font-size: 18px;
  }
  .active {
    border-bottom: 2px solid blue;
    color: blue;
  }
`;
//tabIndex 받아서 조건문으로 컴포넌트 렌더링
const Tab = ({ tab, tabname, onClick }) => {
  return (
    <TabUnit>
      <span className={tab === tabname ? 'active' : ''} onClick={onClick}>
        {tab}
      </span>
    </TabUnit>
  );
};
export default Tab;
