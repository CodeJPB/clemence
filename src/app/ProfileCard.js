"use client";

import React from "react";
import TextTransition, { presets } from "react-text-transition";

import "./ProfileCard.css";

const TEXTS = ["Communication", "Réseaux sociaux", "Intéllligence artificielle"];

const ProfileCard = () => {
  const [index, setIndex] = React.useState(0);

  React.useEffect(() => {
    const intervalId = setInterval(
      () => setIndex((index) => index + 1),
      3000 // every 3 seconds
    );
    return () => clearTimeout(intervalId);
  }, []);
  return (
    <div className="profile-card">
      <header>
      <img src="/images/clemence.jpg" className="img-profile" />
      <div>
      <h1 className="main-title">Clémence RANCE</h1>

      <h2>Alternance BTS communication – 2 ans</h2>
      <p>
        Étudiante en BTS Communication, je suis à la recherche d’une entreprise
        pour réaliser ma formation en alternance. Le poste que vous proposez a
        retenu toute mon attention par sa polyvalence et son adéquation avec ma
        formation et mon projet professionnel. Passionnée par les nouvelles
        technologies de création de contenus digitaux intégrant l’Intelligence
        Artificielle, je saurai mettre à profit mes compétences pour le
        développement de votre entreprise.
      </p>
      </div>
      </header>
      <saction>
      <h1 className="animated-text">
        <TextTransition springConfig={presets.wobbly}>
          {TEXTS[index % TEXTS.length]}
        </TextTransition>
      </h1>
      </saction>
     
      <section>
        <div>
          <img src="" />
        </div>
        <div>
          <h3>Réseau sociaux</h3>
          <p>
            Avec une maîtrise approfondie des dynamiques du numérique, je me
            suis imposée comme une spécialiste incontestée des réseaux sociaux.
            Que ce soit sur YouTube, où je décrypte les algorithmes pour
            optimiser la visibilité des vidéos, sur TikTok, où je maîtrise l'art
            de capter l'attention en quelques secondes, ou sur LinkedIn, où je
            façonne des stratégies de networking professionnel, mon expertise
            couvre un large spectre. Ma compréhension des tendances actuelles,
            combinée à une veille constante, me permet d'accompagner
            efficacement toute marque ou individu souhaitant renforcer sa
            présence en ligne.
          </p>
        </div>
      </section>
      <section>
        <div>
          <img src="" />
        </div>
        <div>
          <h3>Intelligence artificielle</h3>
          <p>
            Avec une solide expertise en intelligence artificielle, je me suis
            spécialisé dans la création de contenu innovant et pertinent. Ma
            maîtrise de Chat GPT me permet de générer des dialogues et des
            textes d'une fluidité humaine, tandis qu'avec Midjourney, je conçois
            des visuels captivants basés sur des prompts textuels. De plus,
            grâce à Stable Diffusion, je peux optimiser et diffuser ce contenu
            de manière stratégique pour atteindre des audiences ciblées. Ces
            outils, combinés à ma compréhension approfondie de l'IA, font de moi
            un acteur clé dans la transformation numérique du paysage médiatique
            actuel.
          </p>
        </div>
      </section>
      <h3>Expériences professionnelles</h3>
      <ul>
        <li>
          <h4>Assistance à la création de chaines YouTube :</h4>
          <ul>
            <li>
              Août / Sept. 2023 – Chaine de divertissements « Mr Patapouf »
            </li>
            <li>Fév. / Mars 2022 – Chaine musicale « Noah’s Arkana »</li>
          </ul>
        </li>
        <li>
          
          Missions confiées :
          <ul>
            <li>Shooting vidéo / short</li>
            <li>Montage vidéo (notion de Premier Pro)</li>
            <li>Création de contenus (Chat GPT / Midjourney)</li>
          </ul>
        </li>
        <li>
          Représentante Publicitaire (RP) :
          <ul>
            <li>Fév. / Mars 2023 – Evénement « Nuit de grâce » – Paris</li>
            <li>Avr. / Mai 2022 – Evénement « Venus Club » – Paris</li>
          </ul>
        </li>
        <li>
        <h4>Promotion des événements sur les Réseaux Sociaux :</h4>
        
          <ul>
            <li>Réalisation de contenu (Posts / Stories)</li>
            <li>Suivis et réponses aux commentaires</li>
            <li>Instagram / Facebook / TikTok</li>
          </ul>
        </li>
        <li>
          
          <h4>Bénévole événements culturels :</h4>
          <ul>
            <li>Fév. 2022 – Evénement “Cent lendemains” – Paris</li>
            <li>Mai 2022 – Evénement “Venus Club” – Paris</li>
            <li>Juin 2022 – Festival “We love green” – Paris</li>
          </ul>
        </li>
        <li>
          <h4>Emplois saisonniers – Employée polyvalente :</h4>
          <ul>
            <li>Etés 2020 / 2022 / 2023 – McDonald's – Paris Champs-Elysées</li>
          </ul>
        </li>
      </ul>

      <h3>Centres d'intérêt</h3>
      <ul>
        <li>Arts contemporains</li>
        <li>Musique / Danse</li>
        <li>Athlétisme</li>
      </ul>
    </div>
  );
};

export default ProfileCard;
