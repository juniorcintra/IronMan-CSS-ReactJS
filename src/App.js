import {
  Container,
  HeadCircleTop,
  HeadCircleBottom,
  EarLeft,
  EarRight,
  CheekLeftTop,
  CheekLeftBottom,
  CheekRightTop,
  CheekRightBottom,
  ChinRed,
  ChinGoldLeftTop,
  ChinGoldLeftBottom,
  ChinGoldRightTop,
  ChinGoldRightBottom,
  ChinGoldCenter,
  ChinGoldCenterLeft,
  ChinGoldCenterRight,
  MouthLeftTop,
  MouthLeftBottom,
  MouthCenter,
  MouthRightBottom,
  MouthRightTop,
  MaskLeftMoon,
  MaskLeft,
  MaskCenter,
  MaskRight,
  MaskRightMoon,
  LeftTopMask,
  MaskCenterTop,
  TopMask,
  RightTopMask,
  LeftEyeOut,
  LeftEyeIn,
  LeftEyeIn2,
  RightEyeOut,
  RightEyeIn,
  RightEyeIn2,
  Title,
} from "./styles";

function App() {
  return (
    <Container>
      <HeadCircleTop />
      <HeadCircleBottom />
      <EarLeft />
      <EarRight />
      <CheekLeftTop />
      <CheekLeftBottom />
      <CheekRightTop />
      <CheekRightBottom />
      <ChinGoldLeftTop />
      <ChinGoldLeftBottom />
      <ChinGoldCenter />
      <ChinGoldCenterLeft />
      <ChinGoldCenterRight />
      <ChinGoldRightTop />
      <ChinGoldRightBottom />
      <ChinRed />
      <MouthLeftTop />
      <MouthLeftBottom />
      <MouthCenter />
      <MouthRightBottom />
      <MouthRightTop />
      <MaskLeftMoon />
      <MaskLeft />
      <MaskCenter />
      <MaskRight />
      <MaskRightMoon />
      <LeftTopMask />
      <MaskCenterTop />
      <TopMask />
      <RightTopMask />
      <LeftEyeOut />
      <LeftEyeIn />
      <LeftEyeIn2 className="powerOn" />
      <RightEyeOut />
      <RightEyeIn />
      <RightEyeIn2 className="powerOn" />

      <Title>Iron Man</Title>
    </Container>
  );
}

export default App;
