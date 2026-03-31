import * as React from "react";
import { useState } from "react";
import { useEffect } from "react";
import { useRouter } from "next/router";

import Banner from "../components/banner";
import Menu from "../components/menu";
import styles from "../styles/Implementos.module.css";
import Link from "next/link";

import Rodape from "../components/rodape";
import Whats from "../components/whats";
import RodapeNewFly from "../components/rodape-newfly";

export default function Implementos() {
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
      nome: "Plain INW",
      imagem: "/static/images/produtos/PlainINW.png",
      categoria: "Movimentação de Solo",
      url: "/Movimentacao/plain-inw",
    },
    {
      id: 2,
      nome: "Fastseed",
      imagem: "/static/images/produtos/AbastecimentoDeSementes/Fastseed-00.png",
      categoria: "Abastecimento de Sementes",
      url: "/Abastecimento/fastseed",
    },
    {
      id: 3,
      nome: "Beluga",
      imagem: "/static/images/produtos/AbastecimentoDeSementes/beluga-00.png",
      categoria: "Abastecimento de Sementes",
      url: "/Abastecimento/beluga",
    },

    {
      id: 4,
      nome: "Caçamba Fertilog",
      imagem:
        "/static/images/Produtos/LinhaDeFertilizantes/Cacamba-Fertilog-00.jpg",
      categoria: "Linha de Fertilização",
      url: "/Fertilizantes/cacamba-fertilog",
    },
    {
      id: 5,
      nome: "Canudão 3000",
      imagem:
        "/static/images/Produtos/LinhaDeFertilizantes/Canudao-3000-00.jpg",
      categoria: "Linha de Fertilização",
      url: "/Fertilizantes/canudao-3000",
    },
    {
      id: 6,
      nome: "Canudo 1300",
      imagem: "/static/images/Produtos/LinhaDeFertilizantes/canudo-1300-00.png",
      categoria: "Linha de Fertilização",
      url: "/Fertilizantes/canudo-1300",
    },
    {
      id: 7,
      nome: "Fertilog 15.0 / 1500",
      imagem:
        "/static/images/Produtos/LinhaDeFertilizantes/Fertilog 15.0-1500-00.png",
      categoria: "Linha de Fertilização",
      url: "/Fertilizantes/fertilog-15",
    },
    {
      id: 8,
      nome: "Fertilog 7.5 Rebocado",
      imagem:
        "/static/images/Produtos/LinhaDeFertilizantes/Fertilog-7.5-Rebocado-00.png",
      categoria: "Linha de Fertilização",
      url: "/Fertilizantes/fertilog-7.5",
    },
    {
      id: 9,
      nome: "Fertilog 30.0 / 1500",
      imagem:
        "/static/images/Produtos/LinhaDeFertilizantes/Fertilog-30.0-1500-00.png",
      categoria: "Linha de Fertilização",
      url: "/Fertilizantes/fertilog-30",
    },
    {
      id: 10,
      nome: "Fertilog Express 750",
      imagem:
        "/static/images/Produtos/LinhaDeFertilizantes/Fertilog-Express-750-00.png",
      categoria: "Linha de Fertilização",
      url: "/Fertilizantes/fertilog-express-750",
    },
    {
      id: 11,
      nome: "Fertilog Express 1000",
      imagem:
        "/static/images/Produtos/LinhaDeFertilizantes/Fertilog-Express-1000-00.png",
      categoria: "Linha de Fertilização",
      url: "/Fertilizantes/fertilog-express-1000",
    },
    {
      id: 12,
      nome: "Fertilog Plataforma ou Chassi 7.5 ton",
      imagem:
        "/static/images/Produtos/LinhaDeFertilizantes/Fertilog-PlataformaOuChassi-7.5ton-00.png",
      categoria: "Linha de Fertilização",
      url: "/Fertilizantes/fertilog-plataforma-7.5",
    },
    {
      id: 13,
      nome: "Fertilog Plataforma ou Chassi 15 ton",
      imagem:
        "/static/images/Produtos/LinhaDeFertilizantes/Fertilog-PlataformaOuChassi-15ton-00.png",
      categoria: "Linha de Fertilização",
      url: "/Fertilizantes/fertilog-plataforma-15",
    },
    {
      id: 14,
      nome: "Fertilog Plataforma ou Chassi 22.5 ton",
      imagem:
        "/static/images/Produtos/LinhaDeFertilizantes/Fertilog-PlataformaOuChassi-22.5ton-00.png",
      categoria: "Linha de Fertilização",
      url: "/Fertilizantes/fertilog-plataforma-22",
    },
    {
      id: 15,
      nome: "Fertilog Semi-Reboque",
      imagem:
        "/static/images/Produtos/LinhaDeFertilizantes/Fertilog-SemiReboque-00.png",
      categoria: "Linha de Fertilização",
      url: "/Fertilizantes/fertilog-semireboque",
    },
    {
      id: 16,
      nome: "Reboque 12.5 / 1500",
      imagem:
        "/static/images/Produtos/LinhaDeFertilizantes/Reboque-12.5-1500-00.png",
      categoria: "Linha de Fertilização",
      url: "/Fertilizantes/reboque-12.5",
    },

    {
      id: 17,
      nome: "Big Tanque",
      imagem: "/static/images/produtos/categorias-bigtanque.png",
      categoria: "Água e Calda",
      url: "/AguaCalda/big-tanque",
    },

    {
      id: 18,
      nome: "Big Tanque Especiais",
      imagem: "/static/images/produtos/AguaECalda/BigTanque-Especiais-00.jpg",
      categoria: "Água e Calda",
      url: "/AguaCalda/BigTanque-Especiais",
    },
    {
      id: 19,
      nome: "Bigtanque Plataforma 3500",
      imagem:
        "/static/images/produtos/AguaECalda/Bigtanque-Plataforma-3500-00.png",
      categoria: "Água e Calda",
      url: "/AguaCalda/Bigtanque-Plataforma-3500",
    },
    {
      id: 20,
      nome: "Big Tanque Rebocado 2500",
      imagem:
        "/static/images/produtos/AguaECalda/Bigtanque-Rebocado-2500-00.png",
      categoria: "Água e Calda",
      url: "/AguaCalda/Bigtanque-Rebocado-2500",
    },
    {
      id: 21,
      nome: "Big Tanque Rebocado 3500",
      imagem:
        "/static/images/produtos/AguaECalda/Bigtanque-Rebocado-3500-00.png",
      categoria: "Água e Calda",
      url: "/AguaCalda/Bigtanque-Rebocado-3500",
    },
    {
      id: 22,
      nome: "Big Tanque Rebocado 4000",
      imagem:
        "/static/images/produtos/AguaECalda/Bigtanque-Rebocado-4000-00.png",
      categoria: "Água e Calda",
      url: "/AguaCalda/Bigtanque-Rebocado-4000",
    },
    {
      id: 23,
      nome: "Big Tanque Rebocado 4000 250",
      imagem:
        "/static/images/produtos/AguaECalda/Bigtanque-Rebocado-4000-250-00.png",
      categoria: "Água e Calda",
      url: "/AguaCalda/Bigtanque-Rebocado-4000-250",
    },
    {
      id: 24,
      nome: "Big Tanque Rebocado 4000 Isométrico",
      imagem:
        "/static/images/produtos/AguaECalda/Bigtanque-Rebocado-4000-isometrico-00.png",
      categoria: "Água e Calda",
      url: "/AguaCalda/Bigtanque-Rebocado-4000-isometrico",
    },
    {
      id: 25,
      nome: "Big Tanque Rebocado 5350",
      imagem:
        "/static/images/produtos/AguaECalda/Bigtanque-Rebocado-5350-00.png",
      categoria: "Água e Calda",
      url: "/AguaCalda/Bigtanque-Rebocado-5350",
    },
    {
      id: 26,
      nome: "Big Tanque Rebocado 9500",
      imagem:
        "/static/images/produtos/AguaECalda/Bigtanque-Rebocado-9500-00.png",
      categoria: "Água e Calda",
      url: "/AguaCalda/Bigtanque-Rebocado-9500",
    },
    {
      id: 27,
      nome: "Big Tanque Rebocado 9500 19000 28500",
      imagem:
        "/static/images/produtos/AguaECalda/Bigtanque-Rebocado-9500-19000-28500-00.png",
      categoria: "Água e Calda",
      url: "/AguaCalda/Bigtanque-Rebocado-9500-19000-28500",
    },
    {
      id: 28,
      nome: "Big Tanque Rebocado 23000",
      imagem:
        "/static/images/produtos/AguaECalda/Bigtanque-Rebocado-23000-00.png",
      categoria: "Água e Calda",
      url: "/AguaCalda/Bigtanque-Rebocado-23000",
    },
    {
      id: 29,
      nome: "Big Tanque Rebocado 28500 600",
      imagem:
        "/static/images/produtos/AguaECalda/Bigtanque-Rebocado-28500-600-00.png",
      categoria: "Água e Calda",
      url: "/AguaCalda/Bigtanque-Rebocado-28500-600",
    },
    {
      id: 30,
      nome: "Big Tanque Roll 8000",
      imagem: "/static/images/produtos/AguaECalda/Bigtanque-Roll-8000-00.png",
      categoria: "Água e Calda",
      url: "/AguaCalda/Bigtanque-Roll-8000",
    },
    {
      id: 31,
      nome: "Big Tanque Roll 9500",
      imagem: "/static/images/produtos/AguaECalda/Bigtanque-Roll-9500-00.jpg",
      categoria: "Água e Calda",
      url: "/AguaCalda/Bigtanque-Roll-9500",
    },
    {
      id: 32,
      nome: "Big Tanque Roll 10500",
      imagem: "/static/images/produtos/AguaECalda/Bigtanque-Roll-10500-00.jpg",
      categoria: "Água e Calda",
      url: "/AguaCalda/Bigtanque-Roll-10500",
    },
    {
      id: 33,
      nome: "Big Tanque Roll 10700",
      imagem: "/static/images/produtos/AguaECalda/Bigtanque-Roll-10700-00.jpg",
      categoria: "Água e Calda",
      url: "/AguaCalda/Bigtanque-Roll-10700",
    },
    {
      id: 34,
      nome: "Big Tanque Roll 10700 Caldeiro 1200",
      imagem:
        "/static/images/produtos/AguaECalda/Bigtanque-Roll-10700-caldeiro-1200-00.jpg",
      categoria: "Água e Calda",
      url: "/AguaCalda/Bigtanque-Roll-10700-caldeiro-1200",
    },
    {
      id: 35,
      nome: "Big Tanque Roll 10700 Caldeiro 2000",
      imagem:
        "/static/images/produtos/AguaECalda/Bigtanque-Roll-10700-caldeiro-2000-00.jpg",
      categoria: "Água e Calda",
      url: "/AguaCalda/Bigtanque-Roll-10700-caldeiro-2000",
    },
    {
      id: 36,
      nome: "Big Tanque Roll 12000",
      imagem: "/static/images/produtos/AguaECalda/Bigtanque-Roll-12000-00.jpg",
      categoria: "Água e Calda",
      url: "/AguaCalda/Bigtanque-Roll-12000",
    },
    {
      id: 37,
      nome: "Big Tanque Roll 13000",
      imagem: "/static/images/produtos/AguaECalda/Bigtanque-Roll-13000-00.jpg",
      categoria: "Água e Calda",
      url: "/AguaCalda/Bigtanque-Roll-13000",
    },
    {
      id: 38,
      nome: "Big Tanque Roll 13500",
      imagem: "/static/images/produtos/AguaECalda/Bigtanque-Roll-13500-00.jpg",
      categoria: "Água e Calda",
      url: "/AguaCalda/Bigtanque-Roll-13500",
    },
    {
      id: 39,
      nome: "Big Tanque Roll 16050",
      imagem: "/static/images/produtos/AguaECalda/Bigtanque-Roll-16050-00.jpg",
      categoria: "Água e Calda",
      url: "/AguaCalda/Bigtanque-Roll-16050",
    },
    {
      id: 40,
      nome: "Big Tanque Roll 19000",
      imagem: "/static/images/produtos/AguaECalda/Bigtanque-Roll-19000-00.jpg",
      categoria: "Água e Calda",
      url: "/AguaCalda/Bigtanque-Roll-19000",
    },
    {
      id: 41,
      nome: "Calda Drone",
      imagem: "/static/images/produtos/AguaECalda/Calda-Drone-00.jpg",
      categoria: "Água e Calda",
      url: "/AguaCalda/Calda-Drone",
    },
    {
      id: 42,
      nome: "Tanque BigLit",
      imagem: "/static/images/produtos/AguaECalda/Tanque-BigLit-00.jpg",
      categoria: "Água e Calda",
      url: "/AguaCalda/Tanque-BigLit",
    },
  ];

  const categorias = [
    {
      nome: "Água e Calda",
      categoria: "Água e Calda",
      cor: "cardVermelho",
      imagem: "/static/images/produtos/categorias-bigtanque.png",
    },
    {
      nome: "Linha de Fertilização",
      categoria: "Linha de Fertilização",
      cor: "cardCinza",
      imagem: "/static/images/produtos/fertilog.png",
    },
    {
      nome: "Movimentação de Solo",
      categoria: "Movimentação de Solo",
      cor: "cardVermelho",
      imagem: "/static/images/produtos/PlainINW.png",
    },
    {
      nome: "Abastecimento de Sementes",
      categoria: "Abastecimento de Sementes",
      cor: "cardAzul",
      imagem: "/static/images/produtos/Fastseed.png",
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
              .map((produto) => (
                <div key={produto.id} className={styles.cardProduto}>
                  <div className={styles.imagem}>
                    <img src={produto.imagem} alt={produto.nome} />
                  </div>

                  <span>
                    <h3>{produto.nome}</h3>

                    {produto.url && (
                      <a
                        href={produto.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className={styles.BotaoProduto}
                      >
                        Ver Detalhes
                        <img src="/static/images/seta-vertical.png" />
                      </a>
                    )}
                  </span>
                </div>
              ))}
          </div>
        </div>
      </section>
      <section className={styles.footer}>
        <div className={styles.boxfooter}>
          <h2> Somos o pit stop do Agro</h2>
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
