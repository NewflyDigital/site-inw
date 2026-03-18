import * as React from "react";
import { useEffect } from "react";
import Menu from "../components/menu";
import Rodape from "../components/rodape";
import RodapeNewFly from "../components/rodape-newfly";
import Whats from "../components/whats";
import styles from "../styles/Index.module.css";
import Link from "next/link";

export default function QuemSomos() {
  useEffect(() => {
    window.document.body.style.backgroundColor = "#01030e";
  }, []);

  return (
    <>
      <Menu />

      {/* BREADCRUMB */}
      <section className={styles.background}>
        <div className={styles.interno}>
          <p className={styles.breadcrumb}>
            <Link legacyBehavior href="/">
              <a className={styles.Link}>Home</a>
            </Link>{" "}
            / Sobre Nós
          </p>
        </div>
      </section>

      {/* SOBRE */}
      <section className={styles.background}>
        <div className={styles.interno}>
          <div className="w-full max-w-[45rem] flex flex-col gap-6">
            <span className="text-bold flex items-center">
              <img
                className="w-full max-w-[2rem] mr-2"
                src="/static/images/Retangulo-310.png"
              />
              Sobre Nós
            </span>

            <h1 className="font-[800] lg:text-[56px] text-[32px] lg:leading-[60px] leading-[40px] uppercase">
              Há mais de <span className="text-[#18bd36]">14 anos</span>,
              transformamos a agricultura brasileira
            </h1>

            <p className="text-[16px]">
              Com soluções tecnológicas que revolucionam a eficiência
              operacional no campo.
            </p>

            <p>
              Nossa trajetória, iniciada em outubro de 2010, é marcada pela
              busca incansável pela excelência e inovação no desenvolvimento de
              equipamentos agrícolas de alta performance.
            </p>

            <p>
              Com um compromisso firme em elevar a eficácia e a eficiência nas
              operações do campo, nossa empresa se torna referência através de
              um histórico rico em qualidade e confiabilidade.
            </p>
          </div>

          <div className="w-full max-w-[45rem] flex items-center justify-center">
            <img src="/static/images/quem-somos2.png" />
          </div>
        </div>
      </section>

      {/* MÉTRICAS */}
      <section className={styles.background}>
        <div className={`${styles.interno} gap-20`}>
          <div className="flex flex-col items-center text-center">
            <h2 className="text-[64px] font-[800] text-[#18bd36]">+14</h2>
            <p className="uppercase font-[700]">Anos de experiência</p>
          </div>
          <div className="flex flex-col items-center text-center">
            <h2 className="text-[64px] font-[800] text-[#18bd36]">+5 mil</h2>
            <p className="uppercase font-[700]">Máquinas vendidas</p>
          </div>
          <div className="flex flex-col items-center text-center">
            <img
              className="max-w-[18rem]"
              src="/static/images/brasil.png"
            />
            <p className="mt-3 text-[14px]">
              Presente nas principais regiões agrícolas do Brasil
            </p>
          </div>
        </div>
      </section>

      {/* COMPROMISSO */}
      <section className={styles.background}>
        <div className={`${styles.interno} flex-col items-start gap-10`}>
          <h2 className="lg:text-[56px] text-[32px] font-[800] uppercase">
            Compromisso com a <span className="text-[#18bd36]">qualidade</span>
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 w-full">
            <div className={styles.categorias}>
              <h4>Linha completa de soluções</h4>
            </div>

            <div className={styles.categorias}>
              <h4>Tecnologia avançada</h4>
            </div>

            <div className={styles.categorias}>
              <h4>Suporte técnico nacional</h4>
            </div>

            <div className={styles.categorias}>
              <h4>Sustentabilidade e produtividade</h4>
            </div>
          </div>
        </div>
      </section>

      {/* PORTFÓLIO */}
      <section className={styles.background}>
        <div className={styles.interno}>
          <div className="w-full max-w-[40rem] flex flex-col gap-5">
            <h2 className="lg:text-[56px] text-[32px] font-[800] uppercase">
              Portfólio de <span className="text-[#18bd36]">Soluções</span>
            </h2>

            <p>
              Oferecemos um conjunto completo de equipamentos projetados para
              maximizar sua produtividade.
            </p>

            <ul className="flex flex-col gap-3 text-[15px]">
              <li>• Linha completa de fertilização</li>
              <li>• Tecnologia de precisão agrícola</li>
              <li>• Equipamentos robustos</li>
              <li>• Soluções eficientes para manejo agrícola</li>
            </ul>
          </div>

          <div className={styles.box}>
            <img
              className="rounded-xl"
              src="/static/images/Vertical-bigtanque.png"
              alt="Big Tanque"
            />
          </div>
        </div>
      </section>

      {/* MISSÃO */}
      <section className={styles.background}>
        <div className={`${styles.interno} flex-col items-start gap-8`}>
          <h2 className="text-[56px] font-[800] uppercase">
            Nossa <span className="text-[#18bd36]">Missão</span>
          </h2>

          <p className="max-w-[60rem]">
            Nossa missão é impulsionar o desenvolvimento do agronegócio
            brasileiro através de soluções tecnológicas que proporcionem maior
            eficiência operacional e produtividade para nossos clientes.
          </p>

          <p className="max-w-[60rem]">
            Continuamos investindo em pesquisa e desenvolvimento para manter
            nossa posição de liderança em inovação e qualidade no setor
            agrícola.
          </p>

          <p className="max-w-[60rem]">
            Conte com a INW para transformar seus desafios em oportunidades de
            crescimento e desenvolvimento no campo.
          </p>

          <Link legacyBehavior href="/contato">
            <a className={styles.Botao}>
              Entrar em contato
              <img src="/static/images/seta-vertical.png" />
            </a>
          </Link>
        </div>
      </section>

      <Rodape />
      <RodapeNewFly />
      <Whats />
    </>
  );
}
