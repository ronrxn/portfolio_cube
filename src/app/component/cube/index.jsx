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
                <Canvas linear>
                    <OrbitControls enableZoom={false} enablePan={false} />
                    <ambientLight intensity={2.5} />
                    <directionalLight position={[1, 1, 1]} />
                    <Cube progress={smoothProgress}>
                    </Cube>
                </Canvas>
                {/* <a className='cv-moi' href='./CV.pdf' download>Télécharger mon CV</a> */}
            </div>

            <div className='div'>
                <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Voluptatem atque quae animi praesentium neque necessitatibus natus quibusdam nulla dolores maxime earum, minima asperiores obcaecati quisquam maiores odit itaque deserunt tempora.</p>
                <button id='close'>CLOSE</button>
            </div>
        </div>
    )
}

function Cube({ progress }) {

    const mesh = useRef(null)


    const texture_1 = useLoader(TextureLoader, "/assets/romain-e.jpg")
    const texture_2 = useLoader(TextureLoader, "/assets/IMG_6071.png")
    const texture_3 = useLoader(TextureLoader, "/assets/IMG_6071.png")
    const texture_4 = useLoader(TextureLoader, "/assets/IMG_6071.png")
    const texture_5 = useLoader(TextureLoader, "/assets/IMG_6071.png")
    const texture_6 = useLoader(TextureLoader, "/assets/IMG_6071.png")

    return (
        <motion.mesh ref={mesh} rotation-y={progress}
            onClick={(e) => {
                if (e.faceIndex == 8 || e.faceIndex == 9) {
                    var div = document.getElementsByClassName('div')[0]
                    var close = document.getElementById('close')
                    div.style.display = 'block'
                    close.addEventListener('click', () => {
                        div.style.display = 'none'
                    })
                } else {
                    console.log('autre')
                }
            }}>
            <boxGeometry args={[2.5, 2.5, 2.5]} />
            <meshStandardMaterial map={texture_1} attach="material-4" toneMapped={false} />
            <meshStandardMaterial map={texture_2} attach="material-1" toneMapped={false} />
            <meshStandardMaterial map={texture_3} attach="material-2" toneMapped={false} />
            <meshStandardMaterial map={texture_4} attach="material-3" toneMapped={false} />
            <meshStandardMaterial map={texture_5} attach="material-0" toneMapped={false} />
            <meshStandardMaterial map={texture_6} attach="material-5" toneMapped={false} />
        </motion.mesh>
    )
}