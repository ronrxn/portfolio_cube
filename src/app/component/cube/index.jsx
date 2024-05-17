'use client'
import 'bootstrap/dist/css/bootstrap.min.css';
import Card from 'react-bootstrap/Card';
import Carousel from 'react-bootstrap/Carousel';
// import ExampleCarouselImage from 'components/ExampleCarouselImage';
import React, { useRef, useState } from 'react'
import { Canvas, useFrame, useLoader } from '@react-three/fiber'
import { TextureLoader } from 'three/src/loaders/TextureLoader'
import styles from "./style.module.scss";
import { OrbitControls } from '@react-three/drei';
import { useScroll, useSpring, useMotionValue, useTransform } from 'framer-motion';
import { motion } from 'framer-motion-3d';
import { Image } from 'react-bootstrap';


export default function Index() {

    const container = useRef(null)
    const { scrollYProgress } = useScroll({
        target: container,
        offset: ['start start', 'end end']
    })
    const progress = useTransform(scrollYProgress, [0, 1], [0, 6.3])
    const smoothProgress = useSpring(progress, { damping: 20 });

    const [index, setIndex] = useState(0);

    const handleSelect = (selectedIndex) => {
        setIndex(selectedIndex);
    }

    return (
        <div ref={container} className={styles.main}>
            <div className={styles.cube} id='canva'>
                <Canvas linear>
                    <OrbitControls enableZoom={false} enablePan={false} />
                    <ambientLight intensity={2.5} />
                    <directionalLight position={[1, 1, 1]} />
                    <Cube progress={smoothProgress}>
                    </Cube>
                </Canvas>
                {/* <a className='cv-moi' href='./CV.pdf' download>Télécharger mon CV</a> */}
            </div>

            <div className='div-1 div-1-hidden'>
                <Card className='card'>
                    <Carousel activeIndex={index} onSelect={handleSelect}>
                        <Carousel.Item>
                            <Image className="image" src="/assets/IMG_6071.png" alt='' />
                        </Carousel.Item>
                        <Carousel.Item>
                            <Image className="image" src="/assets/IMG_6071.png" alt='' />
                        </Carousel.Item>
                        <Carousel.Item>
                            <Image className="image" src="/assets/IMG_6071.png" alt='' />
                        </Carousel.Item>
                    </Carousel>
                    <Card.Body>
                        <Card.Title>1</Card.Title>
                        <Card.Text>
                            Some quick example text to build on the card title and make up the
                            bulk of the card's content.
                        </Card.Text>
                    </Card.Body>
                </Card>
            </div>

            <div className='div-2 div-2-hidden'>
                <Card className='card'>
                    <Carousel activeIndex={index} onSelect={handleSelect}>
                        <Carousel.Item>
                            <Image className="image" src="/assets/IMG_6071.png" alt='' />
                        </Carousel.Item>
                        <Carousel.Item>
                            <Image className="image" src="/assets/IMG_6071.png" alt='' />
                        </Carousel.Item>
                        <Carousel.Item>
                            <Image className="image" src="/assets/IMG_6071.png" alt='' />
                        </Carousel.Item>
                    </Carousel>
                    <Card.Body>
                        <Card.Title>2</Card.Title>
                        <Card.Text>
                            Some quick example text to build on the card title and make up the
                            bulk of the card's content.
                        </Card.Text>
                    </Card.Body>
                </Card>
            </div>

            <div className='div-3 div-3-hidden'>
                <Card className='card'>
                    <Carousel activeIndex={index} onSelect={handleSelect}>
                        <Carousel.Item>
                            <Image className="image" src="/assets/IMG_6071.png" alt='' />
                        </Carousel.Item>
                        <Carousel.Item>
                            <Image className="image" src="/assets/IMG_6071.png" alt='' />
                        </Carousel.Item>
                        <Carousel.Item>
                            <Image className="image" src="/assets/IMG_6071.png" alt='' />
                        </Carousel.Item>
                    </Carousel>
                    <Card.Body>
                        <Card.Title>3</Card.Title>
                        <Card.Text>
                            Some quick example text to build on the card title and make up the
                            bulk of the card's content.
                        </Card.Text>
                    </Card.Body>
                </Card>
            </div>
        </div>
    )
}

function Cube({ progress }) {

    const mesh = useRef(null)


    const texture_1 = useLoader(TextureLoader, "/assets/romain-e.jpg")
    const texture_2 = useLoader(TextureLoader, "/assets/IMG_6071.png")
    const texture_3 = useLoader(TextureLoader, "/assets/IMG_6071.png")
    const texture_4 = useLoader(TextureLoader, "/assets/ok-cat.png")
    const texture_5 = useLoader(TextureLoader, "/assets/IMG_6071.png")
    const texture_6 = useLoader(TextureLoader, "/assets/IMG_6071.png")

    return (
        <motion.mesh ref={mesh} rotation-y={progress}

            onDoubleClick={(e) => {
                var canva = document.getElementById('canva')

                if (e.faceIndex == 2 || e.faceIndex == 3) {
                    var div = document.getElementsByClassName('div-1')[0]
                    div.classList.add('div-1-display')
                    div.classList.remove('div-1-hidden')
                    canva.addEventListener('click', () => {
                        div.classList.add('div-1-hidden')
                        div.classList.remove('div-1-display')
                    })
                } else if (e.faceIndex == 10 || e.faceIndex == 11) {
                    var div = document.getElementsByClassName('div-2')[0]
                    div.classList.add('div-2-display')
                    div.classList.remove('div-2-hidden')
                    canva.addEventListener('click', () => {
                        div.classList.add('div-2-hidden')
                        div.classList.remove('div-2-display')
                    })
                } else if (e.faceIndex == 0 || e.faceIndex == 1) {
                    var div = document.getElementsByClassName('div-3')[0]
                    div.classList.add('div-3-display')
                    div.classList.remove('div-3-hidden')
                    canva.addEventListener('click', () => {
                        div.classList.add('div-3-hidden')
                        div.classList.remove('div-3-display')
                    })
                }
                else {
                    console.log(e.faceIndex);
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