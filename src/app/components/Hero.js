"use client"

import "./Hero.css"
import Container from "./Container"
import Image from 'next/image'
import SocialIcon from "./SocialIcon"
import { faInstagram, faTiktok } from "@fortawesome/free-brands-svg-icons"

export default function Hero() {
    return (
        <section className="hero">
            <Container>                
                <div className="logo">
                    <Image src="logo.svg" alt="Arbólica" width="209" height="265" />
                </div>                
                <div className="social">
                    <SocialIcon type={faTiktok} href="https://www.tiktok.com/@arbolica.mx" />
                    <SocialIcon type={faInstagram} href="https://www.instagram.com/arbolicamx" />
                </div>
            </Container>
        </section>
    )
}