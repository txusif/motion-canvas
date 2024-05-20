import { Img, Layout, Line, Txt, makeScene2D } from "@motion-canvas/2d";
import { all, any, createRef } from "@motion-canvas/core";

import sun from "../../images/sun2.png";
import thermometer from "../../images/thermometer.png";
import editThermometer from "../../images/editThermometer.png";
import boySweating from "../../images/boy-sweating.png";

export default makeScene2D(function* (view) {
  const thermometerImgRef = createRef<Img>();
  const boySweatingImgRef = createRef<Img>();
  const lineRef = createRef<Line>();
  const sunImgRef = createRef<Img>();
  const tempTxtRef = createRef<Txt>();

  view.add(
    <Layout>
      <Line
        ref={lineRef}
        zIndex={1}
        points={[
          [-640, 295],
          [-640, 300],
        ]}
        stroke={"red"}
        lineWidth={15}
        // radius={40}
      />
      ,
      <Img ref={sunImgRef} src={sun} width={500} x={700} y={-250} />
      {/* <Img ref={thermometerImgRef} src={thermometer} x={-600} /> */}
      <Img ref={thermometerImgRef} src={editThermometer} x={-600} />
      <Img ref={boySweatingImgRef} src={boySweating} x={300} />
      <Txt
        ref={tempTxtRef}
        fontWeight={900}
        x={-200}
        opacity={0}
        fontSize={150}
        fill={"red"}
      >
        40°C
      </Txt>
    </Layout>
  );

  yield* any(
    tempTxtRef().opacity(1, 4),
    lineRef().points(
      [
        [-640, 295],
        [-640, -135],
      ],
      4
    ),
    sunImgRef().absoluteRotation(0, 0).to(360, 6),
    boySweatingImgRef().scale(1, 1).to(1.2, 5)
  );

  // yield* lineRef().points(
  //   [
  //     [-640, 295],
  //     [-640, -135],
  //   ],
  //   4
  // );

  yield* all(
    tempTxtRef().text("42°C", 2.5),
    lineRef().points(
      [
        [-640, 295],
        [-640, -160],
      ],
      2.5
    )
  );
});
