import styled, { keyframes } from "styled-components";

export const Title = styled.h1`
  color: black;
  position: absolute;
  top: 550px;
  font-size: 60px;
  left: 190px;
  font-family: cursive;
`;

const powerAnimation = keyframes`
 0% {  background-color: black;
      box-shadow: none }
 100% {  background-color: white;
      box-shadow: -11px 0px 7px 0px lightblue;}
`;

export const Container = styled.section`
  width: 600px;
  height: 600px;
  margin: 0 auto;
  position: relative;
  padding: 20px;

  &:hover {
    .powerOn {
      background-color: white;
      box-shadow: -11px 0px 7px 0px lightblue;
      animation-name: ${powerAnimation};
      animation-duration: 1s;
    }
  }
`;

export const HeadCircleTop = styled.div`
  background-color: red;
  width: 400px;
  height: 400px;
  border-radius: 50%;
  margin: 10px auto;
`;

export const HeadCircleBottom = styled.div`
  background-color: red;
  width: 300px;
  height: 300px;
  border-radius: 50%;
  position: absolute;
  top: 250px;
  left: 170px;
`;

export const EarLeft = styled.div`
  background-color: red;
  width: 20px;
  position: absolute;
  height: 110px;
  border-radius: 15px;
  top: 181px;
  left: 120px;
  transform: rotate(-3deg);
`;

export const EarRight = styled.div`
  background-color: red;
  width: 20px;
  position: absolute;
  height: 110px;
  border-radius: 15px;
  top: 181px;
  right: 120px;
  transform: rotate(3deg);
`;

export const CheekLeftTop = styled.div`
  background-color: red;
  width: 50px;
  height: 200px;
  position: absolute;
  left: 136px;
  top: 210px;
`;

export const CheekLeftBottom = styled.div`
  background-color: red;
  width: 50px;
  height: 195px;
  -webkit-transform: rotate(3deg);
  -ms-transform: rotate(3deg);
  position: absolute;
  transform: rotate(-36deg);
  left: 179px;
  top: 369px;
  border-radius: 30px;
`;

export const CheekRightTop = styled.div`
  background-color: red;
  width: 50px;
  height: 200px;
  position: absolute;
  right: 136px;
  top: 210px;
`;

export const CheekRightBottom = styled.div`
  background-color: red;
  width: 50px;
  height: 195px;
  -webkit-transform: rotate(3deg);
  -ms-transform: rotate(3deg);
  position: absolute;
  transform: rotate(36deg);
  right: 179px;
  top: 369px;
  border-radius: 30px;
`;

export const ChinRed = styled.div`
  background-color: red;
  width: 50px;
  height: 184px;
  -webkit-transform: rotate(90deg);
  -ms-transform: rotate(90deg);
  transform: rotate(90deg);
  position: absolute;
  left: 295px;
  top: 441px;
  border-radius: 22px;
`;

export const ChinGoldCenter = styled.div`
  width: 142px;
  border-left: 10px solid transparent;
  border-right: 10px solid transparent;
  border-top: 35px solid gold;
  height: 0;
  position: absolute;
  left: 238px;
  top: 500px;
  z-index: 999;
`;

export const ChinGoldCenterLeft = styled.div`
  width: 43px;
  border-left: 10px solid transparent;
  border-right: 45px solid transparent;
  border-top: 35px solid gold;
  height: 0;
  position: absolute;
  left: 240px;
  top: 506px;
  z-index: 999;
`;

export const ChinGoldCenterRight = styled.div`
  width: 43px;
  border-left: 45px solid transparent;
  border-right: 10px solid transparent;
  border-top: 35px solid gold;
  height: 0;
  position: absolute;
  left: 301px;
  top: 506px;
  z-index: 999;
`;

export const ChinGoldLeftBottom = styled.div`
  width: 21px;
  border-left: 15px solid transparent;
  border-right: 0px solid transparent;
  border-top: 43px solid gold;
  height: 0;
  position: absolute;
  left: 210px;
  top: 504px;
  z-index: 999;
  transform: rotate(-16deg);
`;

export const ChinGoldLeftTop = styled.div`
  width: 18px;
  -webkit-transform: rotate(-36deg);
  -ms-transform: rotate(-36deg);
  transform: rotate(-36deg);
  height: 71px;
  background-color: gold;
  position: absolute;
  left: 193px;
  top: 456px;
  z-index: 1005;
`;

export const ChinGoldRightBottom = styled.div`
  width: 22px;
  border-left: 0px solid transparent;
  border-right: 15px solid transparent;
  border-top: 43px solid gold;
  height: 0;
  position: absolute;
  right: 210px;
  top: 504px;
  z-index: 999;
  transform: rotate(16deg);
`;

export const ChinGoldRightTop = styled.div`
  width: 18px;
  -webkit-transform: skew(-36deg);
  -ms-transform: skew(-36deg);
  transform: rotate(36deg);
  height: 71px;
  background-color: gold;
  position: absolute;
  right: 194px;
  top: 456px;
  z-index: 1006;
`;

export const MouthCenter = styled.div`
  width: 160px;
  position: absolute;
  height: 0;
  border-left: 5px solid transparent;
  border-right: 5px solid transparent;
  border-top: 12px solid black;
  z-index: 1010;
  left: 235px;
  top: 488px;
`;

export const MouthLeftBottom = styled.div`
  width: 27px;
  position: absolute;
  height: 0;
  transform: rotate(-19deg);
  border-left: 5px solid transparent;
  border-right: 0px solid transparent;
  border-top: 12px solid black;
  z-index: 1004;
  left: 207px;
  top: 493px;
`;

export const MouthRightBottom = styled.div`
  width: 27px;
  position: absolute;
  height: 0;
  -webkit-transform: rotate(10deg);
  -ms-transform: rotate(-19deg);
  transform: rotate(19deg);
  border-left: 0px solid transparent;
  border-right: 0px solid transparent;
  border-top: 12px solid black;
  z-index: 1004;
  right: 212px;
  top: 492px;
`;

export const MouthRightTop = styled.div`
  width: 8px;
  transform: rotate(37deg);
  height: 52px;
  background-color: black;
  position: absolute;
  right: 203px;
  top: 450px;
  z-index: 1006;
`;

export const MouthLeftTop = styled.div`
  width: 8px;
  transform: rotate(-37deg);
  height: 52px;
  background-color: black;
  position: absolute;
  left: 203px;
  top: 450px;
  z-index: 1006;
`;

export const MaskCenter = styled.div`
  width: 170px;
  border-left: 70px solid transparent;
  border-right: 70px solid transparent;
  border-top: 170px solid gold;
  height: 0;
  position: absolute;
  left: 165px;
  top: 318px;
  z-index: 999;
`;

export const MaskLeft = styled.div`
  width: 26px;
  height: 70px;
  background-color: gold;
  position: absolute;
  transform: rotate(-36deg);
  left: 212px;
  top: 438px;
`;

export const MaskLeftMoon = styled.div`
  position: absolute;
  top: 293px;
  left: 76px;
  width: 101px;
  height: 238px;
  background-color: transparent;
  border-radius: 50%;
  box-shadow: 85px 9px 0 0 gold;
  transform: rotate(-29deg);
  z-index: 999999;
`;

export const MaskRight = styled.div`
  width: 26px;
  height: 70px;
  background-color: gold;
  position: absolute;
  transform: rotate(36deg);
  right: 212px;
  top: 438px;
`;

export const MaskRightMoon = styled.div`
  position: absolute;
  top: 293px;
  right: 76px;
  width: 101px;
  height: 238px;
  background-color: transparent;
  border-radius: 50%;
  box-shadow: -85px 9px 0 0 gold;
  -webkit-transform: rotate(-29deg);
  -ms-transform: rotate(-29deg);
  transform: rotate(29deg);
  z-index: 999999;
`;

export const MaskCenterTop = styled.div`
  width: 340px;
  height: 170px;
  background-color: gold;
  border-top-left-radius: 200px;
  border-top-right-radius: 200px;
  -webkit-transform: rotate(180deg);
  -ms-transform: rotate(180deg);
  transform: rotate(180deg);
  border-bottom: 0;
  left: 150px;
  top: 214px;
  position: absolute;
`;

export const TopMask = styled.div`
  width: 84px;
  border-left: 10px solid transparent;
  border-right: 10px solid transparent;
  border-top: 35px solid red;
  height: 0;
  position: absolute;
  left: 268px;
  top: 196px;
  border-radius: 15px;
  z-index: 999;
`;

export const LeftTopMask = styled.div`
  width: 118px;
  height: 234px;
  background-color: gold;
  border-radius: 15px;
  position: absolute;
  left: 151px;
  transform: skew(2deg, -8deg);
  top: 130px;
`;

export const RightTopMask = styled.div`
  width: 118px;
  height: 234px;
  background-color: gold;
  border-radius: 15px;
  position: absolute;
  right: 151px;
  -webkit-transform: skew(2deg, -8deg);
  transform: skew(-2deg, 8deg);
  top: 130px;
`;

export const LeftEyeOut = styled.div`
  position: absolute;
  top: 241px;
  left: 203px;
  width: 35px;
  height: 109px;
  background-color: transparent;
  border-radius: 31%;
  box-shadow: -21px 0px 0px 0px #84762d;
  transform: rotate(-74deg);
  z-index: 999999;
`;

export const RightEyeOut = styled.div`
  position: absolute;
  top: 241px;
  right: 203px;
  width: 35px;
  height: 109px;
  background-color: transparent;
  border-radius: 31%;
  box-shadow: -21px 0px 0px 0px #84762d;
  transform: rotate(-104deg);
  z-index: 999999;
`;

export const LeftEyeIn = styled.div`
  position: absolute;
  top: 244px;
  left: 200px;
  width: 40px;
  height: 102px;
  background-color: gold;
  border-radius: 31%;
  /* box-shadow: -11px 0px 7px 0px lightblue; */
  -webkit-transform: rotate(-74deg);
  -ms-transform: rotate(-74deg);
  -webkit-transform: rotate(-74deg);
  -ms-transform: rotate(-74deg);
  transform: rotate(-74deg);
  z-index: 9999999;
`;

export const LeftEyeIn2 = styled.div`
  position: absolute;
  top: 262px;
  left: 203px;
  width: 25px;
  height: 99px;
  background-color: black;
  border-radius: 31%;
  transform: rotate(-74deg);
  z-index: 999999;
`;

export const RightEyeIn = styled.div`
  position: absolute;
  top: 244px;
  right: 200px;
  width: 40px;
  height: 102px;
  background-color: gold;
  border-radius: 31%;
  -webkit-transform: rotate(-74deg);
  -ms-transform: rotate(-74deg);
  -webkit-transform: rotate(-74deg);
  -ms-transform: rotate(-74deg);
  transform: rotate(-104deg);
  z-index: 9999999;
`;

export const RightEyeIn2 = styled.div`
  position: absolute;
  top: 262px;
  right: 203px;
  width: 25px;
  height: 99px;
  background-color: black;
  border-radius: 31%;
  transform: rotate(-104deg);
  z-index: 999999;
`;
