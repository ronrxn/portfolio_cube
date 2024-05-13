'use client'
import React, { useRef } from 'react'
import { Canvas, useFrame, useLoader } from '@react-three/fiber'

import styles from "./style.module.scss";
import { OrbitControls } from '@react-three/drei';
import { useScroll, useSpring, useMotionValue, useTransform } from 'framer-motion';
import { motion } from 'framer-motion-3d';

export default function Index() {

    const container = useRef(null)
    const { scrollYProgress } = useScroll({
        target: container,
        offset: ['start start', 'end end']
    })
    const progress = useTransform(scrollYProgress, [0, 1], [0, 6.3])
    const smoothProgress = useSpring(progress, { damping: 20 });

    return (
        <div ref={container} className={styles.main}>
            <div className={styles.cube}>
                <Canvas>
                    <OrbitControls enableZoom={false} enablePan={false} />
                    <ambientLight intensity={2} />
                    <directionalLight position={[2, 1, 1]} />
                    <Cube progress={smoothProgress}>
                    </Cube>
                    {/* <Cube1 progress={smoothProgress} /> */}
                </Canvas>
            </div>
        </div>
    )
}

function Cube({ progress }) {

    const mesh = useRef(null)

    return (
        <motion.mesh ref={mesh} rotation-y={progress}>
            <boxGeometry args={[2.5, 2.5, 2.5]} />
            <meshStandardMaterial color={"orange"} />
        </motion.mesh>
    )
}

function Cube1({ progress }) {

    const mesh = useRef(null)

    return (
        <motion.mesh ref={mesh} rotation-y={progress}>
            <boxGeometry args={[2.4, 2.51, 2.4]} />
            <meshStandardMaterial color={"white"} />
        </motion.mesh>
    )
}