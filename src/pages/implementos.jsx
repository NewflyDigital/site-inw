import * as React from "react";
import { useState } from "react";
import { useEffect } from "react";
import { useRouter } from "next/router";

import Banner from "../components/banner";
import Menu from "../components/menu";
import styles from "../styles/Produtos.module.css";
import Link from "next/link";

import Rodape from "../components/rodape";
import Whats from "../components/whats";
import RodapeNewFly from "../components/rodape-newfly";

export default function Produtos() {
  const [hovered, setHovered] = useState(null);

  const router = useRouter();

  useEffect(() => {
    if (router.query.categoria) {
      setSelectedCategory(router.query.categoria);
    }
  }, [router.query.categoria]);

  const [selectedCategory, setSelectedCategory] = useState(null);

  const produtos = [
    {
      id: 1,
      nome: "Canudo 1300",
      imagem: "/static/images/Produtos/canudo-1300.png",
      categoria: "Linha de Fertilização",
      url: "/canudo-1300",
    },
    {
      id: 1,
      nome: "Canudo 1300",
      imagem: "/static/images/produtos/categorias-bigtanque.png",
      categoria: "Manejo de Fertilizantes",
      url: "/big-tanque",
    },
  ];

  const categorias = [
    {
      nome: "Linha de Fertilização",
      categoria: "Linha de Fertilização",
      cor: "cardCinza",
      imagem: "/static/images/produtos/categoria-canudo.png",
    },
    {
      nome: "Manejo de Fertilizantes",
      categoria: "Manejo de Fertilizantes",
      cor: "cardAzul",
      imagem: "/static/images/produtos/categorias-bigtanque.png",
    },
    {
      nome: "Controlador de Operações",
      categoria: "Controlador de Operações",
      cor: "cardVermelho",
      imagem: "/static/images/produtos/categorias-bigtanque.png",
    },
  ];

  const handleFilter = (categoria) => {
    setSelectedCategory(categoria === selectedCategory ? null : categoria);
  };

  return (
    <>
      <Menu />
      <a id="banner"></a>
      <section className={styles.backgroundimg}>
        <div className={styles.box}>
          <span>PRODUTOS</span>
          <br />
          <h2>IMPLEMENTOS AGRÍCOLAS</h2>
        </div>
      </section>

      <section className={styles.background}>
        <img
          className={styles.banquemsomos}
          src="/static/images/banner-interno.jpg"
        />
      </section>

      <section className={styles.background3}>
        <div className={styles.sessoes}>
          {categorias.map((filtro) => {
            const isSelected = selectedCategory === filtro.categoria;

            return (
              <div key={filtro.categoria}>
                <a
                  onClick={() => handleFilter(filtro.categoria)}
                  onMouseEnter={() => setHovered(filtro.categoria)}
                  onMouseLeave={() => setHovered(null)}
                  className={`${styles.card} ${styles[filtro.cor]} ${isSelected ? styles.selected : ""}`}
                >
                  {/* Imagem com animação e condição */}
                  <div className={styles.cardHoverImage}>
                    {(isSelected || hovered === filtro.categoria) && (
                      <img src={filtro.imagem} alt={filtro.nome} />
                    )}
                  </div>
                  <span>{filtro.nome}</span>
                </a>
              </div>
            );
          })}
        </div>
      </section>

      <section className={styles.background3}>
        <div className={styles.interno}>
          <div className={styles.produtos}>
            {produtos
              .filter(
                (produto) =>
                  !selectedCategory || produto.categoria === selectedCategory,
              )
              .map((produto) => {
                const Card = (
                  <div className={styles.cardProduto}>
                    <img src={produto.imagem} alt={produto.nome} />
                    <span>
                      <p>{produto.categoria}</p>
                      <h3>{produto.nome}</h3>
                    </span>
                  </div>
                );

                return produto.url ? (
                  <a
                    key={produto.id}
                    href={produto.url}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    {Card}
                  </a>
                ) : (
                  <div key={produto.id} className={styles.disabled}>
                    {Card}
                  </div>
                );
              })}
          </div>
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

      <Rodape />
      <RodapeNewFly />
      <Whats />
    </>
  );
}
