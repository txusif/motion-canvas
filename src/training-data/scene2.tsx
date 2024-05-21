import { Img, Layout, Txt, makeScene2D, Circle } from "@motion-canvas/2d";
import { all, createRef, createSignal, waitFor } from "@motion-canvas/core";
import CountUp from "react-countup";
import boy from "../../images/boy.png";
import humidityImage from "../../images/humidityPercentage.png";
import { arc } from "@motion-canvas/2d/lib/utils";

export default makeScene2D(function* (view) {
  const boyImgRef = createRef<Img>();
  const humidityImageRef = createRef<Img>();
  const txt1Ref = createRef<Txt>();
  const txt2Ref = createRef<Txt>();
  const txt3Ref = createRef<Txt>();
  const txt4Ref = createRef<Txt>();

  const everythingLayoutRef = createRef<Layout>();

  const txtContainerRef = createRef<Layout>();
  const myCircle1 = createRef<Circle>();
  const myCircle2 = createRef<Circle>();
  const arc1Ref = createRef<typeof arc>();
  const arc2Ref = createRef<typeof arc>();

  // Create a signal for the offer letter and salary slips values
  const offerletter = createSignal(0);
  const salaryslips = createSignal(0);

  view.add(
    <Layout>
      <Txt
        ref={txt2Ref}
        fontFamily={"outfit"}
        fontSize={80}
        fontWeight={700}
        y={-800}
        x={-390}
        fill={"blue"}
        letterSpacing={3}
      >
        Offer Letter
      </Txt>
      <Txt
        fill={"blue"}
        letterSpacing={3}
        ref={txt3Ref}
        fontSize={80}
        fontFamily={"outfit"}
        fontWeight={700}
        y={-800}
        x={390}
      >
        Pay slips
      </Txt>
    </Layout>
  );

  view.add(
    <Layout ref={everythingLayoutRef}>
      <Circle
        scale={0}
        ref={myCircle1}
        x={390}
        width={440}
        height={440}
        fill="#6DC5D1"
      >
        <Txt
          fontFamily={"outfit"}
          ref={txt4Ref}
          fontSize={95}
          fontWeight={600}
          fill={"blue"}
          letterSpacing={2}
        >
          {() => `${salaryslips().toFixed(2)}%`}
        </Txt>
      </Circle>

      <Circle
        scale={0}
        ref={myCircle2}
        x={-390}
        width={440}
        height={440}
        fill="#6DC5D1"
      >
        <Txt
          fontFamily={"outfit"}
          ref={txt1Ref}
          fontSize={95}
          fontWeight={600}
          letterSpacing={2}
          fill={"blue"}
        >
          {() => `${offerletter().toFixed(2)}%`}
        </Txt>
      </Circle>

      <Layout
        layout
        ref={txtContainerRef}
        gap={40}
        direction={"column"}
        justifyContent={"center"}
        alignItems={"center"}
        fontFamily={"outfit"}
        x={-50}
      ></Layout>
    </Layout>
  );

  yield* all(
    txt2Ref().position.y(-800, 0).to(-300, 2),

    myCircle2().scale(0, 0).to(1, 2),
    txt1Ref().scale(0, 0).to(1, 2),

    offerletter(0, 0).to(78.54, 3)
  );

  yield* all(
    txt3Ref().position.y(-800, 0).to(-300, 2),
    myCircle1().scale(0, 0).to(1, 2),
    salaryslips(0, 0).to(50.34, 3)
  );

  yield* waitFor(0.6);

  yield* all(
    everythingLayoutRef().opacity(0, 0.7),
    txt2Ref().opacity(0, 0.7),
    txt3Ref().opacity(0, 0.7)
  );
});
