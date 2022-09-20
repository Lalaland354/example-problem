import React, { Suspense, useRef } from "react";
import { Canvas, extend } from "react-three-fiber";
import { EffectComposer } from "three/examples/jsm/postprocessing/EffectComposer";
import { RenderPass } from "three/examples/jsm/postprocessing/RenderPass";
import { ShaderPass } from "three/examples/jsm/postprocessing/ShaderPass";
import { UnrealBloomPass } from "three/examples/jsm/postprocessing/UnrealBloomPass";
import { FilmPass } from "three/examples/jsm/postprocessing/FilmPass";
import { SMAAPass } from "three/examples/jsm/postprocessing/SMAAPass";


import { Lights } from "./components/Lights";
import { Loading } from "./components/Loading";
import Logo from "./components/Logo";
import Logo2 from "./components/Logo2";
import Logo3 from "./components/Logo3";
import Logo4 from "./components/Logo4";
import Logo5 from "./components/Logo5";
import { Grayscale } from "./components/Grayscale";
import { throttle } from "./helpers/throttle";

extend({
  EffectComposer,
  RenderPass,
  ShaderPass,
  UnrealBloomPass,
  FilmPass,
  SMAAPass
});

const DEFAULT_LAYER = 0;
const OCCLUSION_LAYER = 1;

const App = () => {
  const reward = useRef(null);
  return (
    <>
      <Grayscale>
        <Loading />
        <Canvas shadowMap camera={{ position: [0, 0, 4.5] }}>
          <Suspense fallback={null}>
            <Logo />
          </Suspense>
          <Suspense fallback={null}>
            <Logo2 />
          </Suspense>
          <Suspense fallback={null}>
            <Logo3 />
          </Suspense>
          <Suspense fallback={null}>
            <Logo4 />
          </Suspense>
          <Suspense fallback={null}>
            <Logo5 />
          </Suspense>
          <Lights />
        </Canvas>
      </Grayscale>
      <div className="frame">
        <div className="frame__links">
          <a className="frame__link" href="wwww.wikipedia.com">
            Wikipedia
          </a>
          <a className="frame__link" href="www.youtube.com">
            YouTube
          </a>
        </div>
      </div>
    </>
  );
};

export default App;
