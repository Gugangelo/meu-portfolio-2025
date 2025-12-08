import React from 'react'
import Image from 'next/image'
import TechCarousel from '@/components/TechMarquee'

const AboutMe = () => {
  return (
    <>
      <section className="max-w-screen-xl mx-auto px-5 py-4 section-2col-about">

        {/* TEXTOS */}
        <div className="about-text">
          <h2 className="section-title">Sobre Mim</h2>

          <p className="section-paragraph">
            Formado em Ciência da Computação pela UECE. Trabalho há 2 anos como desenvolvedor web e mobile, criando
            produtos digitais que unem lógica, criatividade e impacto, sempre com foco em soluções simples, 
            escaláveis e úteis. Busco sempre aprimorar processos, me adaptar e evoluir continuamente.
          </p>

          <p className="section-paragraph">
            Trabalho principalmente como desenvolvedor <span className="underline-text">Full-stack</span> utilizando <span className="underline-text">JavaScript</span>,{" "}
            <span className="underline-text">React</span>,{" "}
            <span className="underline-text">React Native</span>,{" "}
            <span className="underline-text">Next.js</span> para criar interfaces intuitivas e sistemas funcionais que resolvem problemas reais.
            Meu dia a dia envolve{" "}
            <span className="underline-text">boas práticas</span>,{" "}
            <span className="underline-text">Git</span>,{" "}
            <span className="underline-text">metodologias ágeis</span> e
            aprender novas tecnologias quando necessário.
          </p>

          <p className="section-paragraph">
            Na Acens, empresa júnior da UECE, desenvolvi três projetos completos — incluindo
            um <span className="underline-text">portal de saúde mental</span>,{" "}
            um <span className="underline-text">sistema de gerenciamento de imóveis</span> e{" "}
            um <span className="underline-text">aplicativo mobile para mulheres com câncer</span>,
            onde atuei sozinho no front-end em <span className="underline-text">React Native</span>.
            Trabalhei diretamente com clientes para definir escopos, ajustar requisitos e garantir entregas consistentes dentro dos prazos.
            Atualmente sigo expandindo meus conhecimentos em <span className="underline-text">AWS</span>,{" "}
            <span className="underline-text">automação</span> e conteinerização com{" "}
            <span className="underline-text">Docker</span>.
          </p>
        </div>

        {/* IMAGENS */}
        <div className="flex flex-col items-center gap-8">
          <Image
            src="/Foto_Gustavo_Padrao.png"
            alt="Foto de Gustavo Angelo"
            width={300}
            height={300}
            className="about-image"
          />
          <Image
            src="/Foto_Gustavo_Padrao.png"
            alt="FEJECE 2024"
            width={300}
            height={300}
            className="about-image"
          />
        </div>

      </section>

      <TechCarousel />
    </>
  )
}

export default AboutMe
