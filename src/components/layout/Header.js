import styled from 'styled-components';
import {
  RiMenu2Line,
  RiBatteryFill,
  RiWifiFill,
  RiNotification2Line,
  RiArrowDropDownFill,
  RiSearchLine,
} from 'react-icons/ri';
import PALETTE from '../../constants/palette';

const TopWrapper = styled.div`
  position: fixed;
  width: 100%;
  height: 180px;
  left: 0px;
  top: 0px;
  background: #4a43ec;
  border-radius: 0px 0px 33px 33px;
  padding: 0 24px;
  overflow: hidden;
`;

const hamburgerIconStyle = {
  color: 'white',
  position: 'absolute',
  zIndex: 999,
  fontSize: '1.8rem',
  top: '3px',
  left: 0,
};

const UtilesWrapper = styled.div`
  width: 100%;
  position: relative;
  margin-top: 44px;
  z-index: 999;
  height: auto;`;

const AlarmIconWrap = styled.span`
  color: #fff;
  position: absolute;
  font-size: 1.6rem;
  top: 6px;
  right: 0;
  &:after {
    display: block;
    content: '';
    width: 2.8rem;
    height: 2.8rem;
    background: #ffffff;
    opacity: 0.1;
    border: 1px solid #ffffff;
    position: absolute;
    top: -0.6rem;
    left: -0.7rem;
    border-radius: 50%;
  }
  &.active:before {
    display: block;
    content: '';
    position: absolute;
    border-radius: 50%;
    width: 6px;
    height: 6px;
    right: 0;
    top: 0;
    background: #02e9fe;
    border: 3px solid #524ce0;
  }`;

const Location = styled.div`
  color: white;
  font-size: 1rem;
  font-weight: lighter;
  z-index: 999;
  text-align: center;
  padding-left: 22px;
  .arrowIcon {
    position: absolute;
    top: -3px;
    font-size: 1.4rem;
  }
  b {
    font-weight: 500;
    margin-top: 3px;
    display: inline-block;
    position: relative;
    left: -12px;
  }`;

const SearchArea = styled.div`
  display: flex;
  width: 100%;
  height: auto;
  padding: 4px 0;
  margin-top: 20px;
  position: relative;
  &:after {
    display: block;
    content: '';
    position: absolute;
    width: 20px;
    height: 1px;
    left: 28px;
    top: 18px;
    background: #7974e7;
    transform: rotate(90deg);
  }
  svg {
    font-size: 1.6rem;
    color: ${PALETTE.WHITE[0]};
    margin-right: 30px;
  }`;

const SearchInput = styled.input`
  flex: 1 1 auto;
  background: transparent;
  border: none !important;
  font-size: 1.3rem;
  border-color: transparent;
  color: ${PALETTE.WHITE[1]};
  &:focus {
    border: none !important;
    border-color: transparent;
    outline: none;
  }
  ::placeholder {
    color: rgba(255.255, 255, 0.3);
    opacity: 0.3;
  }`;


const Header = () => {
    return (
        <TopWrapper>
          {/* 모바일 상단바 표현(임시) */}
          <div
            style={{
              width: '100%',
              color: 'white',
              position: 'relative',
              top: '15px',
              zIndex: 9999,
            }}
          >
          </div>
          <UtilesWrapper>
            <RiMenu2Line style={hamburgerIconStyle} onClick={(e)=>{ alert('안녕')  }}/>
              <br />
            <AlarmIconWrap className="active">
              <RiNotification2Line />
            </AlarmIconWrap>
          </UtilesWrapper>
          <SearchArea>
            <RiSearchLine />
            <SearchInput placeholder="Search..." />
          </SearchArea>
        </TopWrapper>
      );
};

export default Header;