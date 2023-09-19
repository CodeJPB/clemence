import React from 'react';
import './ProfileCard.css'; // Assurez-vous de créer un fichier CSS pour le style

const ProfileCard = () => {
  return (
    <div className="profile-card">
      <h1>Clémence RANCE</h1>
      <h2>Alternance BTS communication – 2 ans</h2>
      <p>Étudiante en BTS Communication, je suis à la recherche d’une entreprise pour réaliser ma formation en alternance. Le poste que vous proposez a retenu toute mon attention par sa polyvalence et son adéquation avec ma formation et mon projet professionnel. Passionnée par les nouvelles technologies de création de contenus digitaux intégrant l’Intelligence Artificielle, je saurai mettre à profit mes compétences pour le développement de votre entreprise.</p>
      
      <h3>Expériences professionnelles</h3>
      <ul>
        <li>Assistance à la création de chaines YouTube :
          <ul>
            <li>Août / Sept. 2023 – Chaine de divertissements « Mr Patapouf »</li>
            <li>Fév. / Mars 2022 – Chaine musicale « Noah’s Arkana »</li>
          </ul>
        </li>
        <li>Missions confiées :
          <ul>
            <li>Shooting vidéo / short</li>
            <li>Montage vidéo (notion de Premier Pro)</li>
            <li>Création de contenus (Chat GPT / Midjourney)</li>
          </ul>
        </li>
        <li>Représentante Publicitaire (RP) :
          <ul>
            <li>Fév. / Mars 2023 – Evénement « Nuit de grâce » – Paris</li>
            <li>Avr. / Mai 2022 – Evénement « Venus Club » – Paris</li>
          </ul>
        </li>
        <li>Promotion des événements sur les Réseaux Sociaux :
          <ul>
            <li>Réalisation de contenu (Posts / Stories)</li>
            <li>Suivis et réponses aux commentaires</li>
            <li>Instagram / Facebook / TikTok</li>
          </ul>
        </li>
        <li>Bénévole événements culturels :
          <ul>
            <li>Fév. 2022 – Evénement “Cent lendemains” – Paris</li>
            <li>Mai 2022 – Evénement “Venus Club” – Paris</li>
            <li>Juin 2022 – Festival “We love green” – Paris</li>
          </ul>
        </li>
        <li>Emplois saisonniers – Employée polyvalente :
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
}

export default ProfileCard;
