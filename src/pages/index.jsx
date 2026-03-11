import * as React from "react";
import { useState, useEffect, useRef } from "react";
import Banner from "../components/banner";
import Menu from "../components/menu";
import styles from "../styles/Index.module.css";
import Link from "next/link";
import Rodape from "../components/rodape";
import Whats from "../components/whats";
import RodapeNewFly from "../components/rodape-newfly";

import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination } from "swiper/modules";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { motion, useScroll, useTransform } from "framer-motion";

export default function Home() {
  React.useEffect(() => {
    window.document.body.style.backgroundColor = "#01030e";
  }, []);

  const [showVideo, setShowVideo] = useState(false);

  const produtos = [
    {
      id: 1,
      nome: "TESTE 01",
      imagem: "/static/images/Produtos/trave/tka-8700.png",
      categoria: "Guindaste Linha Trave",
      url: "AAA",
    },
    {
      id: 1,
      nome: "TESTE 02",
      imagem: "/static/images/Produtos/trave/tka-8700.png",
      categoria: "Guindaste Linha Trave",
      url: "AAA",
    },
    {
      id: 1,
      nome: "TESTE 03",
      imagem: "/static/images/Produtos/trave/tka-8700.png",
      categoria: "Guindaste Linha Trave",
      url: "AAA",
    },
    {
      id: 1,
      nome: "TESTE 04",
      imagem: "/static/images/Produtos/trave/tka-8700.png",
      categoria: "Guindaste Linha Trave",
      url: "AAA",
    },
    {
      id: 1,
      nome: "TESTE 05",
      imagem: "/static/images/Produtos/trave/tka-8700.png",
      categoria: "Guindaste Linha Trave",
      url: "AAA",
    },
    {
      id: 1,
      nome: "TESTE 06",
      imagem: "/static/images/Produtos/trave/tka-8700.png",
      categoria: "Guindaste Linha Trave",
      url: "AAA",
    },
    {
      id: 1,
      nome: "TESTE 07",
      imagem: "/static/images/Produtos/trave/tka-8700.png",
      categoria: "Guindaste Linha Trave",
      url: "AAA",
    },
  ];

  const ref = useRef(null);

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });

  const y1 = useTransform(scrollYProgress, [0, 1], [-120, 120]);
  const y2 = useTransform(scrollYProgress, [0, 1], [120, -120]);
  const y3 = useTransform(scrollYProgress, [0, 1], [-80, 80]);

  return (
    <>
      <Menu />
      <a id="banner"></a>
      <Banner />

      <section className={styles.background}>
        <div className={styles.interno}>
          <a className="text-bold">
            {" "}
            <img
              className="w-full max-w-[2rem] mr-2"
              src="/static/images/Retangulo-310.png"
              alt="Implementos em destaque"
            />
            Implementos em destaque
          </a>
          <Link legacyBehavior href="/implementos">
            <a className={styles.Link}>Ver Todos</a>
          </Link>
        </div>
        <div className={styles.interno}>
          <div className={styles.produtos}>
            <Swiper
              modules={[Navigation, Pagination]}
              spaceBetween={30}
              slidesPerView={4}
              navigation
              pagination={{ clickable: true }}
              breakpoints={{
                0: { slidesPerView: 1 },
                640: { slidesPerView: 2 },
                900: { slidesPerView: 3 },
                1200: { slidesPerView: 4 },
              }}
            >
              {produtos.slice(0, 12).map((produto) => (
                <SwiperSlide key={produto.id}>
                  {produto.url ? (
                    <div className={styles.cardProduto}>
                      <div className={styles.imagem}>
                        <img src={produto.imagem} alt={produto.nome} />
                      </div>
                      <span>
                        <h3>{produto.nome}</h3>
                        <Link
                          legacyBehavior
                          href={produto.url}
                          passHref
                          target="_blank"
                        >
                          <a className={styles.BotaoProduto}>
                            Ver Detalhes
                            <img src="/static/images/seta-vertical.png" />
                          </a>
                        </Link>
                      </span>
                    </div>
                  ) : (
                    <div className={styles.disabled}>
                      <div className={styles.cardProduto}>
                        <img src={produto.imagem} alt={produto.nome} />
                        <span>
                          <p>{produto.categoria}</p>
                          <h3>{produto.nome}</h3>
                        </span>
                      </div>
                    </div>
                  )}
                </SwiperSlide>
              ))}
            </Swiper>
          </div>
        </div>
      </section>

      <section className={styles.background}>
        <div className={styles.interno}>
          <div className={styles.boxSessao}>
            <img
              className="w-full max-w-[10rem]"
              src="/static/images/Logo.png"
            />
            <h2 className="w-full font-[800] mt-[1rem] leading-[72px] text-[#18bd36] text-[56px]">
              Conheça o <br />{" "}
              <a className="font-[800] uppercase mt-[1rem] leading-[72px] text-[#18bd36] text-[64px]">
                Canudão 3.000
              </a>
            </h2>
            <p>
              O implemento que realiza o manejo de solo com foco em
              produtividade, economia de insumos e redução da operação de forma
              sustentável e inteligente.
            </p>
            <Link legacyBehavior href="/canudao-3000" passHref target="_blank">
              <a className={styles.Botao}>
                Revolucione Sua Lavoura
                <img src="/static/images/seta-vertical.png" />
              </a>
            </Link>
          </div>
          <div className={styles.box}>
            <img src="/static/images/Canudao.png" />
          </div>
        </div>
      </section>

      <section className={styles.background}>
        <div className="w-full h-full flex flex-row items-start justify-center">
          <div className="w-full max-w-[30rem] mt-3 flex flex-col items-start justify-center">
            <a className="text-bold">
              {" "}
              <img
                className="w-full max-w-[2rem] mr-2"
                src="/static/images/Retangulo-310.png"
                alt="Implementos em destaque"
              />
              TECNOLOGIA PARA O AGRO
            </a>
          </div>
          <div className="w-full max-w-[50rem] flex flex-col items-start justify-center">
            <h2 className="w-full font-[800] uppercase leading-[72px] text-[56px]">
              Somos desenvolvedores de&nbsp;
              <a className="text-[#18bd36]">implementos agrícolas</a>
              &nbsp;fortes como o<a className="text-[#18bd36]"> agro</a>
            </h2>
            <p className="text-[15px]">
              Atendemos as necessidades do produtor rural e o ajudamos a crescer
              em um mercado latente.
            </p>
          </div>
        </div>
      </section>

      <section ref={ref} className={styles.background}>
        <div className={styles.internoImages}>
          <motion.img
            className={styles.MoveImage}
            style={{ y: y1 }}
            src="/static/images/Vertical-bigtanque.png"
          />

          <motion.img
            className={styles.MoveImage}
            style={{ y: y2 }}
            src="/static/images/Vertical-canudao.png"
          />

          <motion.img
            className={styles.MoveImage}
            style={{ y: y3 }}
            src="/static/images/Vertical-fastseed.png"
          />
        </div>
      </section>

      <section className={styles.footer}>
        <div className={styles.boxfooter}>
          <h2>Soluções em Implementos</h2>
          <Link legacyBehavior href="/contato">
            <a className={styles.botaofooter}>Fale Conosco</a>
          </Link>
        </div>
      </section>

      <section ref={ref} className={styles.background}>
        <div className={`${styles.interno} mt-10`}>
          <div className="w-full max-w-[58rem] flex flex-col items-start justify-center">
            <h2 className="w-full font-[800] uppercase leading-[72px] text-[56px]">
              categorias
            </h2>
          </div>
          <div className="w-full max-w-[22rem] flex flex-col items-start justify-center">
            <p className="text-[14px] leading-[22px]">
              Junto ao agro você resiste aos desafios da terra, do tempo e do
              mundo. Nossos implementos resistem com você.
            </p>
            <Link legacyBehavior href="/implementos">
              <a
                className={`${styles.Link} FLEX FLEX-ROW uppercase font-[800] mt-3 items-center justify-center`}
              >
                Todos os produtos{" "}
                <img
                  className="w-full max-w-[1rem] ml-2"
                  src="/static/images/seta-vertical.png"
                />
              </a>
            </Link>
          </div>
        </div>
        <div className={`${styles.interno} mt-20`}>
          <div className="w-full max-w-[35rem] flex flex-col items-start justify-center">
            <img
              className="w-full max-w-[34rem] "
              src="/static/images/Implementos.png"
              alt="Implementos" 
            />
          </div>
          <div className="w-full max-w-[45rem] flex flex-col items-end gap-4 justify-center">
            <div className={styles.categorias}>
              <h4>Combate à incêndio</h4>{" "}
              <Link legacyBehavior href="/contato">
                <a className={styles.Botao2}>
                  leia mais
                  <img
                    className="w-full max-w-[1rem] ml-2"
                    src="/static/images/seta-vertical.png"
                  />
                </a>
              </Link>
            </div>
            <div className={styles.categorias}>
              <h4>Combate à incêndio</h4>{" "}
              <Link legacyBehavior href="/contato">
                <a className={styles.Botao2}>
                  leia mais
                  <img
                    className="w-full max-w-[1rem] ml-2"
                    src="/static/images/seta-vertical.png"
                  />
                </a>
              </Link>
            </div>
            <div className={styles.categorias}>
              <h4>Combate à incêndio</h4>{" "}
              <Link legacyBehavior href="/contato">
                <a className={styles.Botao2}>
                  leia mais
                  <img
                    className="w-full max-w-[1rem] ml-2"
                    src="/static/images/seta-vertical.png"
                  />
                </a>
              </Link>
            </div>
          </div>
        </div>
      </section>

      <Rodape />
      <RodapeNewFly />
      <Whats />
    </>
  );
}
