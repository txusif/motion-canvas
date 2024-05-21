import { Circle, Img, Layout, Rect, Txt, makeScene2D } from "@motion-canvas/2d";
import { all, createRef, waitFor } from "@motion-canvas/core";

import sewing from "../../images/training-data-images/sewing.jpg";
import fabrication from "../../images/training-data-images/fabrication.jpg";
import solar from "../../images/training-data-images/solar.jpg";
import trainees from "../../images/training-data-images/trainees.jpg";
import ddugky from "../../images/training-data-images/ddugky.jpg";

export default makeScene2D(function* (view) {
  const sewingImgRef = createRef<Img>();
  const solarImgRef = createRef<Img>();
  const fabricationImgRef = createRef<Img>();
  const traineeImgRef = createRef<Img>();
  const ddugkyImgRef = createRef<Img>();

  const traineeLayoutRef = createRef<Layout>();
  const everythingLayoutRef = createRef<Layout>();

  const fabricationTxtRef = createRef<Rect>();
  const solarTxtRef = createRef<Rect>();
  const sewingTxtRef = createRef<Rect>();
  const traineesTxtRef = createRef<Txt>();

  view.add(
    <Layout ref={everythingLayoutRef}>
      <Img ref={ddugkyImgRef} opacity={0} src={ddugky} width={1400} />

      <Layout
        layout
        ref={traineeLayoutRef}
        scale={0}
        x={500}
        direction={"column"}
        alignItems={"center"}
      >
        <Img ref={traineeImgRef} src={trainees} width={800} />
        <Txt
          ref={traineesTxtRef}
          fontSize={90}
          fontWeight={600}
          fontFamily={"outfit"}
          fill={"blue"}
        >
          252 Trainees
        </Txt>
      </Layout>

      <Layout>
        <Circle
          ref={fabricationImgRef}
          stroke={"blue"}
          x={1120}
          y={-350}
          lineWidth={10}
          width={310}
          height={310}
          zIndex={1}
        >
          <Img radius={150} src={fabrication} width={300} />
        </Circle>

        <Rect
          ref={fabricationTxtRef}
          radius={20}
          x={1160}
          y={-350}
          width={400}
          height={100}
          fill={"blue"}
        >
          <Txt fontSize={40} fontFamily={"outfit"} fill={"white"}>
            Fitter Fabrication
          </Txt>
        </Rect>
      </Layout>

      <Layout>
        <Circle
          ref={sewingImgRef}
          stroke={"blue"}
          x={1120}
          lineWidth={10}
          width={310}
          height={310}
          zIndex={1}
        >
          <Img radius={150} src={sewing} width={300} />
        </Circle>

        <Rect
          radius={20}
          ref={sewingTxtRef}
          x={1225}
          width={530}
          height={100}
          fill={"blue"}
        >
          <Txt fontSize={40} fontFamily={"outfit"} fill={"white"}>
            Sewing Machine operator
          </Txt>
        </Rect>
      </Layout>

      <Layout>
        <Circle
          ref={solarImgRef}
          stroke={"blue"}
          x={1120}
          y={350}
          lineWidth={10}
          width={310}
          height={310}
          zIndex={1}
        >
          <Img radius={150} src={solar} width={300} />
        </Circle>

        <Rect
          radius={20}
          ref={solarTxtRef}
          x={1160}
          y={350}
          width={400}
          height={100}
          fill={"blue"}
        >
          <Txt fontSize={40} fontFamily={"outfit"} fill={"white"}>
            Solar PV installer
          </Txt>
        </Rect>
      </Layout>
    </Layout>
  );

  yield* ddugkyImgRef().opacity(1, 2);

  yield* all(
    ddugkyImgRef().position.x(-450, 0.8),
    ddugkyImgRef().width(900, 0.8),
    traineeLayoutRef().scale(1, 1.2)
  );

  yield* all(
    traineeLayoutRef().position.x(-400, 1.5),
    ddugkyImgRef().opacity(0, 1)
  );

  yield* fabricationImgRef().position.x(750, 0.5);
  yield* fabricationTxtRef().position.x(420, 0.8);

  yield* sewingImgRef().position.x(750, 0.5);
  yield* sewingTxtRef().position.x(350, 0.8);

  yield* solarImgRef().position.x(750, 0.5);
  yield* solarTxtRef().position.x(420, 0.8);

  yield* waitFor(1);

  yield* everythingLayoutRef().opacity(0, 0.7);
});
