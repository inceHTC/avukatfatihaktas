import React from "react";
import { useNavigate } from "react-router-dom";
import { Button } from "react-bootstrap";
import { motion } from "framer-motion";
import Particles from "react-tsparticles";
import { loadFull } from "tsparticles";
import Card from "../components/Card";

import homepageBg from "../images/banner.jpg";
import hakkimizdaImage from "../images/heykel2.jpg";
import sloganBackground from "../images/tokmak.jpg";

import {
  FaHome,
  FaGavel,
  FaHandshake,
  FaBuilding,
  FaBalanceScale,
  FaLightbulb,
  FaMoneyCheckAlt,
  FaFileInvoiceDollar,
  FaUserShield,
} from "react-icons/fa";

export default function Home() {
  const navigate = useNavigate();

  const particlesInit = async (main) => {
    await loadFull(main);
  };

  const hizmetler = [
    { icon: <FaHome />, title: "Aile Hukuku", desc: "Boşanma, velayet, nafaka konularında destek.", link: "/hizmetler" },
    { icon: <FaGavel />, title: "Ceza Hukuku", desc: "Savunma ve ceza davalarında profesyonel temsil.", link: "/hizmetler" },
    { icon: <FaHandshake />, title: "İş Hukuku", desc: "İşçi ve işveren haklarının korunması.", link: "/hizmetler" },
    { icon: <FaBuilding />, title: "Ticaret Hukuku", desc: "Şirketler ve ticari işlemler hukuku.", link: "/hizmetler" },
    { icon: <FaBalanceScale />, title: "Gayrimenkul Hukuku", desc: "Tapu, kira, ipotek işlemlerinde danışmanlık.", link: "/hizmetler" },
    { icon: <FaFileInvoiceDollar />, title: "Miras Hukuku", desc: "Miras paylaşımı ve veraset işlemleri.", link: "/hizmetler" },
    { icon: <FaLightbulb />, title: "Fikri Mülkiyet", desc: "Patent, marka ve telif hakları koruması.", link: "/hizmetler" },
    { icon: <FaMoneyCheckAlt />, title: "İcra ve İflas Hukuku", desc: "Alacak tahsilatı ve iflas süreçleri.", link: "/hizmetler" },
    { icon: <FaUserShield />, title: "Hukuk Danışmanlığı", desc: "Bireysel ve kurumsal hukuk danışmanlığı hizmetleri.", link: "/hizmetler" },
  ];

  return (
    <>
      {/* Hero Section */}
      <div className="hero-section">
        <motion.div
          initial={{ scale: 1 }}
          animate={{ scale: 1.05 }}
          transition={{ duration: 10, repeat: Infinity, repeatType: "reverse" }}
          className="hero-bg"
          style={{ backgroundImage: `url(${homepageBg})` }}
        />
        <Particles
          id="tsparticles"
          init={particlesInit}
          options={{
            background: { color: { value: "transparent" } },
            fpsLimit: 60,
            interactivity: {
              events: {
                onHover: { enable: true, mode: "repulse" },
                resize: true,
              },
            },
            particles: {
              color: { value: "#f5c518" },
              links: {
                color: "#f5c518",
                distance: 150,
                enable: true,
                opacity: 0.3,
                width: 1,
              },
              move: {
                enable: true,
                speed: 1,
                direction: "none",
                outModes: { default: "bounce" },
              },
              number: { value: 50, density: { enable: true, area: 800 } },
              opacity: { value: 0.5 },
              shape: { type: "circle" },
              size: { value: { min: 1, max: 3 } },
            },
            detectRetina: true,
          }}
          className="particles"
        />
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="hero-content"
        >
          <h1>Avukat Fatih Aktaş</h1>
          <h2>Hukuk & Danışmanlık</h2>
          <Button variant="warning" size="lg" onClick={() => navigate("/iletisim")}>
            Randevu Al
          </Button>
        </motion.div>
      </div>

      {/* Main Content */}
      <main className="main-container">
        <aside className="sidebar">
          <img src={hakkimizdaImage} alt="Hakkımızda" className="sidebar-image" />
          <div className="sidebar-cards">
            {[
              { title: "Hukuk Bürosu", desc: "Profesyonel danışmanlık ve hukuki destek hizmetleri.", link: "/hukuk-burosu" },
              { title: "Müvekkil İşlemleri", desc: "Dava süreçleri, belgeler ve takip sistemleri.", link: "/muvekkil-islemleri" },
              { title: "İletişim", desc: "Bize ulaşın, sorularınızı iletin veya randevu alın.", link: "/iletisim" },
            ].map(({ title, desc, link }) => (
              <div key={title} className="sidebar-card" onClick={() => navigate(link)}>
                <h4>{title}</h4>
                <p>{desc}</p>
              </div>
            ))}
          </div>
        </aside>

        <section className="services-section">
          <h2>
            <div className="slogan-section">
              <h3>"Profesyonel Hukuki Destek, Etkili Çözümler"</h3>
            </div>
            <hr />
            Hizmetlerimiz
          </h2>
          <div className="services-grid">
            {hizmetler.map(({ icon, title, desc, link }) => (
              <Card key={title} icon={icon} title={title} desc={desc} link={link} />
            ))}
          </div>
        </section>
      </main>
    </>
  );
}
