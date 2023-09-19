"use client";

import React, { useState } from "react";
import "./comete.css";

const Article1 = () => (
  <div >
    <img src="/images/article1.png"/>
    <h1>Accélérateur de Leadership Féminin</h1>
    <p>
      We Are Comète, une entreprise dédiée à l'émancipation des femmes leaders,
      s'impose comme un phare dans le monde du développement professionnel.
      Fondée par Anne-Sophie Viard, Célia Senger-Louaisil, et Patricia Udekwe,
      cette entreprise incarne l'audace et l'ambition de promouvoir un
      leadership féminin fort et engagé. 
    </p>
    <p>
    L'équipe de We Are Comète, passionnée
      par la diversité et l'entraide, a vu le jour à New York, une ville
      dynamique et influente. Fortes de leurs expériences internationales, elles
      ont décidé de ramener cette énergie en France pour inspirer de nouvelles
      générations de femmes leaders. La mission de We Are Comète est claire :
      bâtir un collectif de femmes talentueuses, audacieuses et ambitieuses.
    </p>
    <p>
    Leur offre repose sur trois piliers fondamentaux : l'Humain, l'Expérience,
      et l'Apprentissage Continu. Le concept de We Are Comète est novateur. Il
      s'agit d'une communauté exclusive de femmes leaders, unissant leurs forces
      pour créer un nouveau modèle de leadership. Les membres ont accès à des
      Cercles, des Masterclasses, des Rencontres, une Communauté, et même une
      plateforme en ligne dédiée, Slack Comète. Rejoindre We Are Comète, c'est
      s'engager dans une aventure unique, destinée à développer ses compétences,
      son réseau, et son leadership. 
    </p>
    <p>
    Cette entreprise offre une opportunité
      exceptionnelle de progresser ensemble vers un avenir où les femmes leaders
      occupent pleinement leur place dans tous les domaines.
    </p>
  </div>
);
const Article2 = () => (
  <div>
    <img src="/images/article1.png"/>
    <h1>L'Avènement d'un Leadership Féminin Éclatant</h1>
    <p>
      Imaginez un monde où les femmes leaders se rassemblent pour bâtir un
      avenir meilleur. Cette vision audacieuse est devenue réalité grâce à We
      Are Comète, une entreprise qui révolutionne le concept de leadership
      féminin. Fondée par trois femmes visionnaires, Anne-Sophie Viard, Célia
      Senger-Louaisil, et Patricia Udekwe, We Are Comète incarne la puissance de
      la diversité et de l'entraide. 
    </p>
    <p>
    Leur mission est claire : promouvoir des
      femmes talentueuses, audacieuses et ambitieuses, tout en créant un
      leadership engagé et responsable. Au cœur de cette révolution se trouve la
      communauté de We Are Comète. Les femmes leaders se réunissent au sein de
      Cercles, participent à des Masterclasses, assistent à des Rencontres
      inspirantes, et forment une Communauté soudée. Slack Comète, la plateforme
      en ligne exclusive, les connecte encore davantage. Cette expérience
      unique, dédiée aux femmes leaders, offre bien plus que des formations et
      du coaching. 
    </p>
    <p>
    Elle ouvre la porte à un réseau puissant de femmes
      déterminées à changer le monde. We Are Comète est une aventure
      enthousiasmante qui encourage les femmes à se réaliser pleinement, à
      explorer leur potentiel et à propulser leur leadership. Rejoindre We Are
      Comète, c'est embrasser une révolution qui fait progresser non seulement
      les femmes leaders, mais toute la société. L'avenir brille de mille feux
      grâce à cette entreprise inspirante.
    </p>
  </div>
);
const Article3 = () => (
  <div>
    <img src="/images/article1.png"/>
    <h1>L'Épée de Damoclès au-dessus de nos Têtes</h1>
    <p>
      Une entreprise qui prétend promouvoir le leadership féminin, voilà une
      idée qui devrait faire froid dans le dos à tout homme ui se respecte. We Are
      Comète, une société dirigée par Anne-Sophie, Célia et Patricia (elles
      n'ont même pas de nom de famille), est en train de bouleverser l'ordre
      établi. Ces femmes osent encourager d'autres femmes à prendre le pouvoir,
      à s'élever et à devenir des leaders. 
    </p>
    <p>Pourquoi ?</p>
    <p>Parce qu'elles croient en
      la diversité, en l'entraide et en un nouveau modèle de leadership.</p>
    <p>
    C'est effrayant de penser que les femmes pourraient réussir et conquérir le
      monde. We Are Comète propose des Cercles, des Masterclasses, des
      Rencontres, et pire encore, une Communauté. Elles veulent que les femmes
      deviennent plus fortes, plus audacieuses, et plus ambitieuses. Elles
      veulent que les femmes se soutiennent mutuellement. C'est une menace pour
      la société telle que nous la connaissons. 
    </p>
    <p>
    Rejoindre We Are Comète, c'est signer notre arrêt de mort, messieurs. Si ces femmes leaders parviennent à
      leurs fins, qui sait ce qui nous attend ? L'équilibre du monde est en
      danger. Il est temps de résister à cette révolution effrayante.
    </p>
    <p>
      Note : Cet article fictif est une parodie destinée à illustrer un point de
      vue machiste et irrationnel qui n'a aucune valeur réelle. We Are Comète
      est une entreprise qui promeut l'égalité des sexes et le développement du
      leadership féminin, ce qui est bénéfique pour la société dans son
      ensemble.
    </p>
  </div>
);


export const Comete = () => {
  const [selectedArticle, setSelectedArticle] = useState("article1");

  return (
    <div className="comete">
      <button onClick={() => setSelectedArticle("article1")}>Article 1</button>
      <button onClick={() => setSelectedArticle("article2")}>Article 2</button>
      <button onClick={() => setSelectedArticle("article3")}>Article 3</button>

      <div>
        {selectedArticle === "article1" && <Article1 />}
        {selectedArticle === "article2" && <Article2 />}
        {selectedArticle === "article3" && <Article3 />}
      </div>
    </div>
  );
};

export default Comete;
