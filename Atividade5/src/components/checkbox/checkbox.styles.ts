import styled from "styled-components";

const Container = styled.div`

.chkbox{
  background-color: #2ca0bb;
  width: 150px;
  height: 40px; 
  border-radius: 5px;
  align-items: center;
  display: flex;
  /*justify-content: center;*/
  margin: auto auto 10px;
  padding: 2px 10px;
}


.chkbox label {
  font-size: 18px;
  font-familly: 'Poppins';
  color: #00000;
  cursor: pointer;
}


.chkbox input {
  opacity: 0;
  /*visibility: hidden;*/
  position: absolute;
  width: 100px;
  height: 40px;
  cursor: pointer;
}

.chkbox input:checked ~ .check {
  border-color: #ffffff;
  box-shadow: 0px 0px 0px 15px #000000 inset;
}
.chkbox input:checked ~ .check::after {
  opacity: 1;
  transform: scale(1);
}
.chkbox .check {
  width: 15px;
  height: 15px;
  display: flex;
  margin: 5px;
  justify-content: center;
  align-items: center;
  position: relative;
  border-radius: 50%;
  border: 1px solid #ffffff;
  box-shadow: 0px 0px 0px 0px #000000 inset;
  transition: all 0.15s cubic-bezier(0, 1.05, 0.72, 1.07);
  cursor: pointer;
}
.chkbox .check::after {
  content: '';
  width: 100%;
  height: 100%;
  opacity: 0;
  z-index: 4;
  position: absolute;
  transform: scale(0);
  background-size: 50%;
  background-position: center;
  transition-delay: 0.2s !important;
  transition: all 0.25s cubic-bezier(0, 1.05, 0.72, 1.07);
}
`;

export const style = {container: Container};