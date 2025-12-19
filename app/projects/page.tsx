import React from 'react'
import ProjectCard from '@/components/ProjectCard'

const Projects = () => {
  return (
    <div className='section-default'>
      <h2 className="section-title text-white">Projetos</h2>
      
      <div className="section-3col">
        <ProjectCard
          image="/StartupHub.png"
          title="Site Hub de Startups"
          description="🔨 Projeto atual de estudo. Desenvolvido para estudar as aplicações de Next.js com TypeScript com site de apresentação de projetos startups."
          deployUrl="https://github.com/Gugangelo/startup-hub"
          previewUrl="https://github.com/Gugangelo/startup-hub"
          tags={["Next", "TypeScript", "TailwindCSS", "HTML", "CSS", "Git"]}
        />
        <ProjectCard
            image="/Promptopia.png"
            title="Promptopia"
            description="Site onde usuários criam suas contas e compartilham prompts de IA."
            deployUrl="https://promptopia-two-pearl.vercel.app/"
            previewUrl="https://github.com/Gugangelo/promptopia"
            tags={["React", "JavaScript", "MongoDB", "HTML", "CSS", "Git"]}
          />
        <ProjectCard
          image="/47d4627b-839e-4ede-9851-a49983f44b0b.jpg"
          title="App de Saúde Oncológia"
          description="Aplicativo mobile desenvolvido para uso de mulheres a fim de evitar recidiva do câncer."
          deployUrl="https://github.com/Gugangelo/"
          previewUrl="https://github.com/Gugangelo/"
          tags={["React Native", "JavaScript", "Expo", "Python", "Flask", "Bitbucket"]}
        />
        {/* <ProjectCard
          image="/Foto_Gustavo_Padrao.png"
          title="Dashboard Financeiro"
          description="Dashboard financeiro interativo que permite aos usuários monitorar suas finanças pessoais de forma eficiente."
          deployUrl="https://github.com/Gugangelo/"
          previewUrl="https://github.com/Gugangelo/"
          tags={["React", "JavaScript", "HTML", "CSS", "TailwindCSS", "Github", "Node.js"]}
        /> */}
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