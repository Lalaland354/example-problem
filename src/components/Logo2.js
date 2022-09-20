import React, { useRef, useMemo } from "react";
import * as THREE from "three";
import { useLoader, useFrame } from "react-three-fiber";
import {a, useSpring} from "react-spring/three";
import {useHover} from "react-use-gesture";

export default function Logo({ children, size = 55, ...props }) {
  const group = useRef()
  const geometry = useRef();
  const material = useRef();
  const logo = useLoader(THREE.TextureLoader, process.env.NODE_ENV === "production" ? "/react-three-fibear/logo.png" : "/logo.png");
  const scaleX = 0.1 * size;
  const scaleY = 0.04 * size;
  const scaleZ = 0.1;
  const state = {  mouse: [0, 0] }

  useFrame(({ clock }) => {
    const t = (1 + Math.sin(clock.getElapsedTime() * 1.5)) / 2
    group.current.position.y = t / 10
    group.current.rotation.x = group.current.rotation.y +=0
    group.current.rotation.z = 0.1
  });

    const [spring, setSpring] = useSpring(() => ({
        scale: [scaleX, scaleY, scaleZ],
        config: { mass: 3, friction: 40, tension: 800 }
    }));

    const bindHover = useHover(
        ({ hovering }) =>
            setSpring({ scale: hovering ? [1.2 * scaleX, 1.2 * scaleY, 1.2 * scaleZ] : [scaleX, scaleY, scaleZ] }),
        {
            pointerEvents: true
        }
    );

  return (
    <a.group className="link" {...props} scale={[0.1 * size, 0.04 * size, 0.1]} {...spring} {...bindHover()} onClick={() => window.location.href = 'https://thedevelobear.com'}>
      <group ref={group}>
      <mesh
        args={[geometry, material]}
        position={[0, 1.2, -20]}
        receiveShadow
        castShadow
      >
        <planeGeometry ref={geometry} attach="geometry" />
        <meshPhongMaterial
          transparent
          ref={material}
          attach="material"
          map={logo}
        />
      </mesh>
      </group>
    </a.group>
  );
};


