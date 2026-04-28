import { useEffect, useRef, useState } from "react";
import { createTimeline } from "animejs";

const Preloader = ({ onComplete }) => {
  const progressRef = useRef(null);
  const contentRef = useRef(null);
  const counterObj = useRef({ value: 0 });
  const [counter, setCounter] = useState(0);

  useEffect(() => {
    const tl = createTimeline({
      defaults: { easing: "inOutQuart" },
      onComplete,
    });

    tl.add(
      counterObj.current,
      {
        value: 100,
        duration: 2000,
        easing: "inOutExpo",
        onUpdate: () => {
          const val = Math.round(counterObj.current.value);
          setCounter(val);
        },
      },
      0,
    );

    tl.add(
      progressRef.current,
      {
        width: "100%",
        duration: 2000,
        easing: "inOutExpo",
      },
      0,
    );

    tl.add(
      contentRef.current,
      {
        opacity: 0,
        translateY: -30,
        duration: 500,
      },
      "+=200",
    );

    tl.add(".preloader-top", {
      translateY: "-100%",
      duration: 800,
      easing: "inOutCubic",
    });

    tl.add(
      ".preloader-bottom",
      {
        translateY: "100%",
        duration: 800,
        easing: "inOutCubic",
      },
      "-=800",
    );
  }, [onComplete]);

  return (
    <div className="fixed inset-0 z-100">
      <div className="preloader-top absolute top-0 left-0 w-full h-1/2 bg-[#0a0a0a]" />
      <div className="preloader-bottom absolute bottom-0 left-0 w-full h-1/2 bg-[#0a0a0a]" />

      <div
        ref={contentRef}
        className="absolute inset-0 flex flex-col items-center justify-center z-10 pointer-events-none"
      >
        <span className="text-font-light text-sm tracking-[0.3em] uppercase mb-8">
          Inicializando...
        </span>

        <div className="w-48 h-0.5 bg-border rounded-full overflow-hidden">
          <div
            ref={progressRef}
            className="h-full w-0 bg-primary rounded-full"
          />
        </div>

        <span className="text-primary font-bold text-4xl mt-6 tabular-nums">
          {counter}%
        </span>
      </div>
    </div>
  );
};

export default Preloader;
