import { Img, Layout, Txt, makeScene2D } from "@motion-canvas/2d";
import { all, createRef } from "@motion-canvas/core";

import kormanagala_map from "../../images/mapLocation.png";

export default makeScene2D(function* (view) {
  const mapImgRef = createRef<Img>();
  const txtContainerRef = createRef<Layout>();

  view.add(
    <Layout>
      <Img ref={mapImgRef} src={kormanagala_map} />

      <Layout
        layout
        ref={txtContainerRef}
        gap={10}
        direction={"column"}
        justifyContent={"center"}
        alignItems={"center"}
        fontFamily={"outfit"}
        opacity={0}
        x={500}
        y={100}
      >
        <Txt fontWeight={700} fontSize={100} fill={"blue"}>
          Kormanagala
        </Txt>

        <Txt fontWeight={700} fontSize={60} fill={"blue"}>
          (Bengaluru, Karnataka)
        </Txt>
      </Layout>
    </Layout>
  );

  yield* all(
    mapImgRef().position.y(-600, 1),
    mapImgRef().position.x(300, 1),
    mapImgRef().scale(3, 1),
    txtContainerRef().opacity(1, 2)
  );

  // yield* txtContainerRef().opacity(1, 0.5);

  // yield* waitFor(3);
});
