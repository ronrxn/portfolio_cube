'use client'
import React, { useRef } from 'react'
import { Canvas, useFrame, useLoader } from '@react-three/fiber'
import { TextureLoader } from 'three/src/loaders/TextureLoader'
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
                    <ambientLight intensity={1} />
                    <directionalLight position={[1, 1, 1]} />
                    <Cube progress={smoothProgress}>
                    </Cube>
                </Canvas>
                <a className='cv-moi' href='./CV.pdf' download>Télécharger mon CV</a>
            </div>
        </div>
    )
}

function Cube({ progress }) {

    const mesh = useRef(null)

    const texture_1 = useLoader(TextureLoader, "/assets/romain-e.png")
    const texture_2 = useLoader(TextureLoader, "/assets/IMG_6071.png")

    return (
        <motion.mesh ref={mesh} rotation-y={progress}>
            <boxGeometry args={[2.5, 2.5, 2.5]} />
            <meshStandardMaterial map={texture_1} attach="material-4" />
            <meshStandardMaterial map={texture_2} attach="material-1" />
            <meshStandardMaterial color={"white"} attach="material-2" />
            <meshStandardMaterial color={"white"} attach="material-3" />
        </motion.mesh>
    )
}