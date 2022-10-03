import React, { useRef } from 'react';
import styled from 'styled-components';

const TagUnit = styled.span`
  background-color: red;
  color: white;
  padding: 8px 12px;
  border-radius: 15px;
  margin-right: 5px;
  margin-bottom: 5px;
  position: relative;
`;
const DeleteIcon = styled.span`
  width: 20px;
  height: 20px;
  background-color: blue;
  position: absolute;
  top: -9px;
  right: -3px;
  border-radius: 50%;
`;

const Tag = ({ tag }) => {
  return (
    <>
      <TagUnit>{tag.name}</TagUnit>
    </>
  );
};

export default React.memo(Tag);
