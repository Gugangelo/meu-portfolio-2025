"use client";

import SocialMediaLink from '@/components/SocialMediaLink'
import Image from 'next/image'
import React from 'react'
import Link from 'next/link'
import { ReactTyped } from 'react-typed'
import { DownloadIcon, FileSpreadsheet } from 'lucide-react'

const Home = () => {
  return (
    <div className="section-default section-2col">

      {/* FOTO */}
      <div className="flex justify-center">
        <Image
          src="/Foto_Gustavo_Padrao.png"
          alt="Foto de Gustavo Angelo"
          width={360}
          height={360}
          className="avatar-responsive"
        />
      </div>

      {/* TEXTOS */}
      <div className="text-center sm:text-left">

        <h1 className="title-lg mb-4">
          Oi, eu sou &lt;Gustavo Angelo/&gt;
        </h1>

        <h2 className="title-md mb-4">
          Sou um{" "}
          <ReactTyped
            strings={[
              "Desenvolvedor Web",
              "Desenvolvedor Mobile",
              "Front-end",
              "Back-end",
              "Full-stack",
            ]}
            typeSpeed={60}
            backSpeed={40}
            loop
          />
        </h2>

        <p className="text-body mb-8 italic">
          Construindo sistemas e resolvendo problemas reais.
        </p>

        <div className="flex justify-center sm:justify-start">
          <SocialMediaLink />
        </div>

        {/* BOTÕES */}
        <div className="flex flex-col sm:flex-row gap-4 mt-8">
          <a href="/CV_GustavoAngelo_R2.pdf" 
            target='_blank'
            rel="noopener noreferrer"
            className="btn btn-responsive">
            <FileSpreadsheet size={20} />
            Ler CV
          </a>

          <a href="/CV_GustavoAngelo_R2.pdf"
            download 
            className="btn btn-responsive">
            <DownloadIcon size={20} />
            Download CV
          </a>
        </div>
      </div>
    </div>
  );
};

export default Home;
