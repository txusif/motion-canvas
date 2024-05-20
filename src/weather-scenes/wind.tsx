import { makeScene2D, Txt, Layout, Video } from "@motion-canvas/2d";
import { createRef, waitFor } from "@motion-canvas/core";

import windTurbine from "../../videos/windTurbine.mp4";

export default makeScene2D(function* (view) {
  const txt1Ref = createRef<Txt>();
  const txt2Ref = createRef<Txt>();
  const windVideoRef = createRef<Video>();
  const speedTxtRef = createRef<Txt>();

  view.add(
    <Layout>
      <Video
        ref={windVideoRef}
        src={windTurbine}
        loop
        width={1600}
        x={-500}
        y={-20}
      />

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
  );

  windVideoRef().play();
  yield* txt1Ref().position.x(1370, 0.5).to(390, 0.5);
  yield* speedTxtRef().fontWeight(600, 0.4).to(800, 0.5);
  yield* waitFor(1);
  yield* txt2Ref().position.x(1370, 0.5).to(390, 0.5);
  yield* waitFor(2);
});
