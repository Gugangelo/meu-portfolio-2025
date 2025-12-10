import React from 'react'
import ProjectCard from '@/components/ProjectCard'

const Projects = () => {
  return (
    <div className='section-default'>
      <h2 className="section-title text-white">Projetos</h2>
      
      <div className="section-3col">
        <ProjectCard   
          image="/Foto_Gustavo_Padrao.png"
          title="Site Hub de Startups"
          description="Um projeto de estudo, desenvolvido para estudar as aplicações de Next.js com TypeScript em sites de apresentação de projetos."
          deployUrl="https://deploy.com"
          previewUrl="https://preview.com"
          tags={["Next", "TypeScript", "TailwindCSS", "HTML", "CSS", "Git"]}
        />
        <ProjectCard
          image="/Foto_Gustavo_Padrao.png"
          title="Dashboard Financeiro"
          description="Dashboard financeiro interativo que permite aos usuários monitorar suas finanças pessoais de forma eficiente."
          deployUrl="https://deploy.com"
          previewUrl="https://preview.com"
          tags={["React", "JavaScript", "HTML", "CSS", "TailwindCSS", "Github", "Node.js"]}
        />
        <ProjectCard
          image="/Foto_Gustavo_Padrao.png"
          title="App de Saúde Oncológia"
          description="Aplicativo mobile desenvolvido para uso de mulheres a fim de evitar recidiva do câncer."
          deployUrl="https://deploy.com"
          previewUrl="https://preview.com"
          tags={["React Native", "JavaScript", "Expo", "Python", "Flask", "Bitbucket"]}
        />
        <ProjectCard
          image="/Foto_Gustavo_Padrao.png"
          title="Promptopia"
          description="Site onde usuários criam suas contas e compartilham prompts de IA."
          deployUrl="https://deploy.com"
          previewUrl="https://preview.com"
          tags={["React", "JavaScript", "MongoDB", "HTML", "CSS", "Git"]}
        />
        {/* <ProjectCard
          image="/Foto_Gustavo_Padrao.png"
          title="A"
          description="Aplicativo mobile desenvolvido em React Native..."
          deployUrl="https://deploy.com"
          previewUrl="https://preview.com"
          tags={["React Native", "TypeScript", "Expo"]}
        />
        <ProjectCard
          image="/Foto_Gustavo_Padrao.png"
          title="MamaTech"
          description="Aplicativo mobile desenvolvido em React Native..."
          deployUrl="https://deploy.com"
          previewUrl="https://preview.com"
          tags={["React Native", "TypeScript", "Expo", "Bitbucket"]}
        /> */}
      </div>
    </div>
  )
}

export default Projects