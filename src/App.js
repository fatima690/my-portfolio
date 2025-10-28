import React from "react";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import AnimatedBackground from "./components/AnimatedBackground";
import FatimaImage from "./titi.jpeg";

function App() {
  const cardStyle = {
    backgroundColor: "#E3D3B6",
    borderRadius: "10px",
    padding: "20px",
    transition: "transform 0.3s, box-shadow 0.3s",
    cursor: "pointer",
  };

  const handleCardHover = (e, enter = true) => {
    e.currentTarget.style.transform = enter ? "translateY(-10px)" : "translateY(0)";
    e.currentTarget.style.boxShadow = enter ? "0 10px 20px rgba(0,0,0,0.2)" : "none";
  };

  const sectionStyle = {
    backgroundColor: "#FAF3E0",
    fontFamily: "Arial, sans-serif",
    color: "#4B3832",
    padding: "80px 50px",
  };

  return (
    <>
      <AnimatedBackground />
      <Navbar />

      {/* === ACCUEIL === */}
      <section id="accueil" style={{ height: "100vh", display: "flex", flexDirection: "column", justifyContent: "center", alignItems: "center", textAlign: "center" }}>
        <h1 style={{ fontSize: "48px", fontWeight: "bold", marginBottom: "10px" }}>MOUJAHID Fatima</h1>
        <p style={{ fontSize: "22px", fontStyle: "italic" }}>Data Science & Machine Learning | MIAGE Engineering</p>
      </section>

 {/* === À PROPOS === */}
<section id="apropos" style={sectionStyle}>
  <h2
    style={{
      fontSize: "32px",
      fontWeight: "bold",
      marginBottom: "30px",
      textAlign: "center",
      color: "#3E2C26",
    }}
  >
    À propos
  </h2>

  <div
    style={{
      display: "flex",
      justifyContent: "space-between",
      gap: "50px",
      flexWrap: "wrap",
      alignItems: "center",
    }}
  >
    {/* === TEXTE === */}
    <div
      style={{
        flex: "1 1 400px",
        textAlign: "left",
        lineHeight: "1.8",
        minWidth: "300px",
      }}
    >
      <p>Je m'appelle <strong>Fatima Moujahid</strong>, future ingénieure en MIAGE avec un fort intérêt pour la Data et l'IA. Passionnée par la transformation des données en solutions intelligentes, je maîtrise le cycle complet des projets data - de l'analyse prédictive au déploiement d'applications data-driven.</p>

      <p>Mon objectif : mettre mes compétences en machine learning, visualisation de données et développement au service de projets innovants qui créent de la valeur grâce à l'intelligence artificielle.</p>
    </div>

    {/* === IMAGE === */}
    <div
      style={{
        flex: "1 1 300px",
        width: "100%",
        maxWidth: "400px",
        borderRadius: "10px",
        overflow: "hidden",
        boxShadow: "0 4px 15px rgba(0,0,0,0.1)",
        alignSelf: "center",
        margin: "0 auto",
      }}
    >
      <img
        src={FatimaImage}
        alt="Fatima Moujahid"
        style={{
          width: "100%",
          height: "auto",
          display: "block",
          objectFit: "cover",
          transition: "transform 0.3s ease",
        }}
        onMouseEnter={(e) => (e.currentTarget.style.transform = "scale(1.03)")}
        onMouseLeave={(e) => (e.currentTarget.style.transform = "scale(1)")}
      />
    </div>
  </div>
</section>
      {/* === COMPÉTENCES === */}
      <section id="competences" style={sectionStyle}>
    <h2 style={{ fontSize: "32px", fontWeight: "bold", marginBottom: "50px", textAlign: "center", color: "#3E2C26" }}>Compétences</h2>
    <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(250px, 1fr))", gap: "30px" }}>
      {[
        { title: "Langages & Data Science", content: "Python (Pandas, NumPy, Scikit-learn), SQL, Java, Flask" },
        { title: "Bases de données", content: "MySQL, PostgreSQL, MongoDB, SQL Server, SharePoint" },
        { title: "Machine Learning & IA", content: "Scikit-learn, Classification, Régression, Clustering, Algorithmes" },
        { title: "Data Visualization & BI", content: "Power BI, Matplotlib, React Charts, Reporting, Dashboarding" },
        { title: "Développement & Cloud", content: "React, Node.js, Flutter, Power Apps, Power Automate" },
        { title: "Outils & Méthodologies", content: "Git, Jupyter, UML, Scrum, Agile, Docker" },
      ].map((skill, index) => (
            <div
              key={index}
              style={cardStyle}
              onMouseEnter={(e) => handleCardHover(e, true)}
              onMouseLeave={(e) => handleCardHover(e, false)}
            >
              <h3 style={{ fontSize: "22px", marginBottom: "15px" }}>{skill.title}</h3>
              <p>{skill.content}</p>
            </div>
          ))}
        </div>
      </section>

      {/* === PROJETS === */}
<section id="projets" style={sectionStyle}>
  <h2 style={{ fontSize: "32px", fontWeight: "bold", marginBottom: "50px", textAlign: "center", color: "#3E2C26" }}>Projets</h2>
  <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))", gap: "30px" }}>
    {[
      { 
        title: "Plateforme de Prédiction de Rendement Agricole par l'IA", 
        content: "Développement d'une application IA avec modèles de machine learning (Scikit-learn), API Flask et dashboard React pour l'analyse prédictive des cultures." 
      },
      { 
        title: "Plateforme de Réservation avec Système de Recommandation", 
        content: "Solution complète de machine learning pour l'agriculture, intégrant un modèle prédictif, une API REST et une interface de visualisation des données (Python, Flask, scikit-learn, MongoDB, React.js)." 
      },
      { 
         title: "Plateforme E-commerce Data-Driven", 
        content: "Développement d'une solution e-commerce avec analyse des données clients et reporting performance utilisant ASP.NET, SQL Server et Pandas."
        },
      { 
        title: "Site E-commerce & Analyse Commerciale", 
        content: "Création d'une plateforme de vente en ligne avec traitement des données produits et optimisation du catalogue via Django, MySQL et Pandas."
      },
    ].map((project, index) => (
      <div
        key={index}
        style={cardStyle}
        onMouseEnter={(e) => handleCardHover(e, true)}
        onMouseLeave={(e) => handleCardHover(e, false)}
      >
        <h3 style={{ fontSize: "22px", marginBottom: "15px" }}>{project.title}</h3>
        <p>{project.content}</p>
      </div>
    ))}
  </div>
</section>

      {/* === EXPERIENCES === */}
<section id="experiences" style={sectionStyle}>
  <h2 style={{ fontSize: "32px", fontWeight: "bold", marginBottom: "50px", textAlign: "center", color: "#3E2C26" }}>Expériences</h2>
  <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))", gap: "30px" }}>
    {[
      { 
        title: "Stage Data & Digitalisation - Renault • Juillet – Août 2024", 
        content: [
          "Plateforme data-driven pour gestion centralisée des données formations",
          "Automatisation intelligente des flux données avec Power Automate", 
          "Interfaces Power Apps pour visualisation indicateurs en temps réel"
        ] 
      },
      { 
        title: "Stage Data Géospatial & Algorithmes - Inwi • Juillet 2024", 
        content: [
          "Plugin Python QGIS pour extraction données géospatiales",
          "Algorithmes d'optimisation pour analyse prédictive réseaux",
          "Traitement big data géospatial pour qualité service mobile"
        ] 
      },
      { 
        title: "Stage Data & Business Intelligence - Sothema • Septembre 2023", 
        content: [
          "Dashboards Power BI pour visualisation data-driven",
          "Analyse données métier et reporting analytics",
          "Automatisation reporting avec sources données multiples"
        ] 
      },
      { 
        title: "Stage Data & Optimisation Industrielle - Leoni • Septembre 2022", 
        content: [
          "Observation des processus data de production et contrôle qualité",
          "Analyse des flux de fabrication et optimisation industrielle"
        ] 
      }
    ].map((exp, index) => (
      <div
        key={index}
        style={cardStyle}
        onMouseEnter={(e) => handleCardHover(e, true)}
        onMouseLeave={(e) => handleCardHover(e, false)}
      >
        <h3 style={{ fontSize: "22px", marginBottom: "10px" }}>{exp.title}</h3>
        <ul style={{ marginLeft: "20px" }}>
          {exp.content.map((item, i) => <li key={i}>{item}</li>)}
        </ul>
      </div>
    ))}
  </div>
</section>
      {/* === FOOTER === */}
      <Footer />
    </>
  );
}

export default App;
