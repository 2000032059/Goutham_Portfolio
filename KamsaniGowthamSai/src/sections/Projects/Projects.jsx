import styles from './ProjectsStyles.module.css';
import Real_estate from '../../assets/Real_estate.png';
import Job_consultant from '../../assets/Job_consultancy.png';
import Banking_System from '../../assets/Banking_system.png';
import Food_Recipee from '../../assets/Food_Recipee.png';
import wipro_1 from '../../assets/Wipro.png';
import AWS_Cp from '../../assets/AWSCP.png';
import Red_hat from '../../assets/Redhat.png';
import Oracle_c from '../../assets/Oracle.png';
import AWS_SA from '../../assets/AWSSA.png';
import ProjectCard from '../../common/ProjectCard';

function Projects() {
  return (
    <section id="projects" className={styles.container}>
      <h1 className="sectionTitle">Projects & Certifications</h1>
      <div className={styles.projectsContainer}>
        <ProjectCard
          src={Real_estate}
          link="https://github.com/2000032059/RealEstatemanagementSystem"
          h3="Real Estate"
          p="Estates"
        />
        <ProjectCard
          src={Job_consultant}
          link="https://github.com/2000032059/JobConsultancySystem"
          h3="Job Consultancy"
          p="Career's Path"
        />
        <ProjectCard
          src={Banking_System}
          link="https://github.com/2000032059/Banking-System"
          h3="Banking System"
          p="E-Banking"
        />
        <ProjectCard
          src={Food_Recipee}
          link="https://github.com/2000032059/Food_Recipee/tree/main"
          h3="Food_Recipee"
          p="Recipes"
        />
        <ProjectCard
          src={wipro_1}
          link="https://cert.diceid.com/csr/cid/V7ODaX?verify=true"
          h3="Wipro Talentnext certification on Java Fullstack"
          p=""
        />
        <ProjectCard
          src={AWS_Cp}
          link="https://www.credly.com/badges/77ae95ea-0551-49e8-aed4-d0aae3a810a7/public_url"
          h3="AWS Certified Cloud Practitioner"
          p=""
        />
        <ProjectCard
          src={Red_hat}
          link="https://www.credly.com/badges/367d01bf-a54d-49f3-a4f8-453e7dce49f0/print"
          h3="Red Hat Certified Enterprise Application Developer"
          p=""
        />
        <ProjectCard
          src={Oracle_c}
          link="https://catalog-education.oracle.com/pls/certview/sharebadge?id=A949C1A3B05C52F6A8A29AB38D3BA9CD62124074966F4A3DD7B1B81FD39C6558"
          h3="Oracle cloud Certified Foundations Associate"
          p=""
        />
        <ProjectCard
          src={AWS_SA}
          link="https://www.credly.com/badges/df1b114a-185f-4fd9-b6c5-d729a61bb3b5/public_url"
          h3=" AWS Certified Solutions Architect - Associate"
          p=""
        />


      </div>
    </section>
  );
}

export default Projects;
