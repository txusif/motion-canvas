import {
  Circle,
  Img,
  Layout,
  Line,
  Rect,
  Txt,
  makeScene2D,
} from "@motion-canvas/2d";
import { all, createRef, createSignal, waitFor } from "@motion-canvas/core";

import sewing from "../../images/training-data-images/sewing.jpg";

export default makeScene2D(function* (view) {
  const mapImgRef = createRef<Img>();
  const sewingImgRef = createRef<Img>();
  const txtContainerRef = createRef<Layout>();
  const sewingTxtRef = createRef<Rect>();

  const payslipTxtRef = createRef<Txt>();
  const B1TxtRef = createRef<Txt>();
  const B2TxtRef = createRef<Txt>();
  const percent1TxtRef = createRef<Txt>();
  const percent2TxtRef = createRef<Txt>();

  const line1Ref = createRef<Line>();
  const line2Ref = createRef<Line>();

  const sewingLayoutRef = createRef<Layout>();
  const dahodLayoutRef = createRef<Layout>();
  const otherLayoutRef = createRef<Layout>();

  const percent1 = createSignal(0);
  const percent2 = createSignal(0);

  view.add(
    <Layout>
      {/* <Layout ref={sewingLayoutRef} opacity={0}>
        <Circle
          ref={sewingImgRef}
          stroke={"blue"}
          x={600}
          lineWidth={10}
          width={500}
          height={500}
          zIndex={1}
        >
          <Img radius={500} src={sewing} width={490} />
        </Circle>

        <Rect
          radius={20}
          ref={sewingTxtRef}
          x={600}
          y={280}
          width={560}
          height={100}
          fill={"blue"}
        >
          <Txt
            fontSize={40}
            letterSpacing={2}
            fontFamily={"outfit"}
            fill={"white"}
          >
            Sewing Machine operator
          </Txt>
        </Rect>
      </Layout> */}

      <Txt
        opacity={0}
        fontSize={80}
        fontFamily={"outfit"}
        fontWeight={500}
        fill={"blue"}
        ref={payslipTxtRef}
        letterSpacing={1}
        // y={-400}
        // x={-200}
      >
        Highest 3rd month payslip
      </Txt>

      <Layout ref={dahodLayoutRef} opacity={0}>
        <Circle
          stroke={"red"}
          x={-650}
          y={-230}
          lineWidth={15}
          width={310}
          height={310}
          zIndex={1}
        >
          <Rect radius={5} fill={"blue"} width={400} height={100}>
            <Txt
              fontSize={50}
              fontWeight={600}
              letterSpacing={4}
              fontFamily={"outfit"}
              fill={"white"}
            >
              Dahod
            </Txt>
          </Rect>
        </Circle>

        <Line
          ref={line1Ref}
          zIndex={1}
          points={[
            [-430, -230], // Start point (x1, y1)
            [-430, -230], // End point (x2, y2)
          ]}
          stroke={"red"}
          lineWidth={50}
        />

        <Txt
          ref={percent1TxtRef}
          opacity={0}
          fontSize={80}
          fontFamily={"outfit"}
          fontWeight={500}
          fill={"blue"}
          y={-300}
          x={100}
          letterSpacing={2}
        >
          {() => `${percent1().toFixed(0)}%`}
        </Txt>
        <Txt
          ref={B1TxtRef}
          opacity={0}
          fontSize={80}
          fontFamily={"outfit"}
          fontWeight={500}
          fill={"blue"}
          y={-230}
          x={400}
        >
          Batch B1
        </Txt>
      </Layout>

      <Layout ref={otherLayoutRef} opacity={0}>
        <Circle
          stroke={"red"}
          x={-650}
          y={230}
          lineWidth={15}
          width={310}
          height={310}
          zIndex={1}
        >
          <Rect radius={5} fill={"blue"} width={400} height={100}>
            <Txt
              fontSize={50}
              fontWeight={600}
              letterSpacing={4}
              fontFamily={"outfit"}
              fill={"white"}
            >
              Gandhinagar
            </Txt>
          </Rect>
        </Circle>

        <Line
          ref={line2Ref}
          zIndex={1}
          points={[
            [-430, 230], // Start point (x1, y1)
            [-430, 230], // End point (x2, y2)
          ]}
          stroke={"red"}
          lineWidth={50}
        />

        <Txt
          ref={percent2TxtRef}
          opacity={0}
          fontSize={80}
          fontFamily={"outfit"}
          fontWeight={500}
          fill={"blue"}
          y={160}
          x={10}
          letterSpacing={2}
        >
          {() => `${percent2().toFixed(2)}%`}
        </Txt>

        <Txt
          ref={B2TxtRef}
          opacity={0}
          fontSize={80}
          fontFamily={"outfit"}
          fontWeight={500}
          fill={"blue"}
          y={230}
          x={400}
        >
          Batch B2
        </Txt>
      </Layout>
    </Layout>
  );

  yield* all(payslipTxtRef().opacity(1, 2), payslipTxtRef().scale(1.6, 2));
  // yield* sewingLayoutRef().opacity(1, 1);
  yield* all(dahodLayoutRef().opacity(1, 1), payslipTxtRef().opacity(0, 0.5));

  yield* all(
    line1Ref().points(
      [
        [-430, -230], // Start point (x1, y1)
        [200, -230], // End point (x2, y2)
      ],
      1
    ),
    percent1TxtRef().opacity(1, 1),
    percent1(0, 0).to(90, 1)
  );

  yield* B1TxtRef().opacity(1, 0.5);

  yield* otherLayoutRef().opacity(1, 1);

  yield* all(
    line2Ref().points(
      [
        [-430, 230], // Start point (x1, y1)
        [150, 230], // End point (x2, y2)
      ],
      1
    ),
    percent2TxtRef().opacity(1, 1),
    percent2(0, 0).to(85.19, 1)
  );

  yield* B2TxtRef().opacity(1, 1);

  //   yield* all(
  //     mapImgRef().position.y(-600, 1),
  //     mapImgRef().position.x(300, 1),
  //     mapImgRef().scale(3, 1),
  //     txtContainerRef().opacity(1, 2)
  //   );

  // yield* txtContainerRef().opacity(1, 0.5);

  yield* waitFor(1.6);
});
