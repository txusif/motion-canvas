import { makeScene2D, Circle, Img, Txt, Layout } from "@motion-canvas/2d";
import {
  Direction,
  all,
  createRef,
  slideTransition,
  waitFor,
} from "@motion-canvas/core";

import wind from "../../images/wind.png";

export default makeScene2D(function* (view) {
  const imageRef = createRef<Img>();
  const txt1Ref = createRef<Txt>();
  const txt2Ref = createRef<Txt>();
  const speedTxtRef = createRef<Txt>();
  const txtContainerRef = createRef<Layout>();

  view.add(
    <Layout>
      <Img ref={imageRef} src={wind} width={800} x={-12470} />

      {/* <Layout
        layout
        ref={txtContainerRef}
        gap={50}
        direction={"column"}
        justifyContent={"center"}
        alignItems={"center"}
        fontFamily={"outfit"}
        x={1370}
      > */}
      <Txt
        ref={txt1Ref}
        fontFamily={"outfit"}
        fontSize={80}
        fontWeight={600}
        x={1370}
        y={-50}
      >
        Wind speed <Txt ref={speedTxtRef}>0.91 to 1.31</Txt>
      </Txt>
      <Txt
        ref={txt2Ref}
        fontFamily={"outfit"}
        fontSize={160}
        fontWeight={600}
        x={1370}
        y={120}
      >
        Mild wind
      </Txt>
    </Layout>
    // </Layout>
  );

  // yield* slideTransition(Direction.Right);
  yield* imageRef().position.x(-12470, 0.2).to(-450, 0.5);
  yield* txt1Ref().position.x(1370, 0.5).to(390, 0.5);
  yield* speedTxtRef().fontWeight(600, 0.4).to(800, 0.5);
  yield* waitFor(1);
  yield* txt2Ref().position.x(1370, 0.5).to(390, 0.5);
  yield* waitFor(1);

  // yield* all(
  //   myCircle().position.x(300, 2.8).to(-300, 2.8),
  //   myCircle().fill("#e3a700", 2.8).to("#e13238", 2.8)
  // );
});
