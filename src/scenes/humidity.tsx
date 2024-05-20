import { Img, Layout, Txt, makeScene2D } from "@motion-canvas/2d";
import {
  Direction,
  all,
  createRef,
  slideTransition,
  waitFor,
} from "@motion-canvas/core";

import sun from "../../images/sun1.png";
import boy from "../../images/boy.png";

export default makeScene2D(function* (view) {
  const boyImgRef = createRef<Img>();
  const sunImgRef = createRef<Img>();
  const txt1Ref = createRef<Txt>();
  const txt2Ref = createRef<Txt>();
  const txtContainerRef = createRef<Layout>();

  view.add(
    <Layout>
      <Img
        ref={sunImgRef}
        src={sun}
        width={350}
        x={-1120}
        y={-680}
        zIndex={1}
      />

      <Img ref={boyImgRef} src={boy} width={1000} x={-1200} />

      <Layout
        layout
        ref={txtContainerRef}
        gap={60}
        direction={"column"}
        justifyContent={"center"}
        alignItems={"center"}
        fontFamily={"outfit"}
        x={1260}
      >
        <Txt ref={txt1Ref} fontSize={100} fontWeight={600}>
          Humidity 67%
        </Txt>
        <Txt ref={txt2Ref} fontSize={90} fontWeight={600}>
          More sweating
        </Txt>
      </Layout>
    </Layout>
  );

  // yield* slideTransition(Direction.Left);
  yield* all(
    sunImgRef().position.x(-1120, 0.5).to(-720, 0.5),
    sunImgRef().position.y(-680, 0.5).to(-310, 0.5),
    sunImgRef().absoluteRotation(0, 1).to(90, 0.5),
    boyImgRef().position.x(-1200, 1).to(-352, 0.5)
  );

  yield* txtContainerRef().position.x(1260, 0.5).to(352, 0.5);

  yield* waitFor(1.7);
});
