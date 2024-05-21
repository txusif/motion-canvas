import { Img, Layout, Txt, Video, makeScene2D } from "@motion-canvas/2d";
import { createRef } from "@motion-canvas/core";

import boy from "../../images/boy.png";
import humidityImage from "../../images/humidityPercentage.png";
import humidityVideo from "../../videos/humidity-video.mp4";

export default makeScene2D(function* (view) {
  const boyImgRef = createRef<Img>();
  const humidityImageRef = createRef<Img>();
  const humidityVideoRef = createRef<Video>();
  const txt1Ref = createRef<Txt>();
  const txt2Ref = createRef<Txt>();
  const txtContainerRef = createRef<Layout>();

  view.add(
    <Layout>
      {/* <Img ref={humidityImageRef} src={humidityImage} x={-500} /> */}
      <Video ref={humidityVideoRef} src={humidityVideo} width={700} x={-500} />
      <Img ref={boyImgRef} src={boy} x={350} />

      <Layout
        layout
        ref={txtContainerRef}
        gap={40}
        direction={"column"}
        justifyContent={"center"}
        alignItems={"center"}
        fontFamily={"outfit"}
        x={-50}
      >
        <Txt ref={txt1Ref} fontSize={100} fontWeight={700} fill={"red"}>
          67%
        </Txt>
        {/* <Txt ref={txt2Ref} fontSize={90} fontWeight={600}>
          More sweating
        </Txt> */}
      </Layout>
    </Layout>
  );

  humidityVideoRef().play();
  yield* boyImgRef().scale(1, 1).to(1.1, 4);
});
