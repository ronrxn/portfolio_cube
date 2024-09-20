'use client'
import 'bootstrap/dist/css/bootstrap.min.css';
import Card from 'react-bootstrap/Card';
import Carousel from 'react-bootstrap/Carousel';
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
                <a id='cv-moi' href='./CV-Romain-Equoy-WEB.pdf' download>Télécharger mon CV</a>
            </div>

            <div className='div-1 div-1-hidden'>
                <Card className='card'>
                    <Carousel>
                        <Carousel.Item>
                            <Image className="image" src="/assets/puissance-4.png" alt='' />
                        </Carousel.Item>
                        <Carousel.Item>
                            <Image className="image" src="/assets/apilol.png" alt='' />
                        </Carousel.Item>
                        <Carousel.Item>
                            <Image className="image" src="/assets/cube-portfolio.png" alt='' />
                        </Carousel.Item>
                    </Carousel>
                    <Card.Body>
                        <Card.Title>Javascript</Card.Title>
                        <Card.Text>
                            Quelques projets en JS, un puissance 4 en vanilla, un site utilisant une API de League of legends en React et enfin mon portfolio cube en Nextjs.
                        </Card.Text>
                    </Card.Body>
                </Card>
            </div>

            <div className='div-2 div-2-hidden'>
                <Card className='card'>
                    <Carousel>
                        <Carousel.Item>
                            <Image className="image" src="/assets/cinema.png" alt='' />
                        </Carousel.Item>
                        <Carousel.Item>
                            <Image className="image" src="/assets/quizv2.png" alt='' />
                        </Carousel.Item>
                    </Carousel>
                    <Card.Body>
                        <Card.Title>PHP</Card.Title>
                        <Card.Text>
                            Une partie de mon projet cinema et le projet my_quiz fait en Symfony (ici le choix de la catégorie du quiz, la partie incription ainsi que le début du profil).
                        </Card.Text>
                    </Card.Body>
                </Card>
            </div>

            <div className='div-3 div-3-hidden'>
                <Card className='card'>
                    <Carousel>
                        <Carousel.Item>
                            <Image className="image" src="/assets/cinemav2.png" alt='' />
                        </Carousel.Item>
                        <Carousel.Item>
                            <Image className="image" src="/assets/quiz.png" alt='' />
                        </Carousel.Item>
                    </Carousel>
                    <Card.Body>
                        <Card.Title>SQL</Card.Title>
                        <Card.Text>
                            La partie CRUD (Create, Read, Update and Delete) de mon projet cinéma et un des affichages des quiz du projet my_quiz, le tout récupéré de différentes bases de données sql.
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
    const texture_2 = useLoader(TextureLoader, "/assets/Javascript.png")
    const texture_3 = useLoader(TextureLoader, "/assets/dl-cv.png")
    const texture_4 = useLoader(TextureLoader, "/assets/logoronronzer.png")
    const texture_5 = useLoader(TextureLoader, "/assets/SQL.png")
    const texture_6 = useLoader(TextureLoader, "/assets/PHP.png")

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
                } else if (e.faceIndex == 4 || e.faceIndex == 5){
                    var cv = document.getElementById('cv-moi')
                    cv.click()
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