import styles from "../../styles/Produto.module.css";
import { useState } from "react";
import Menu from "../../components/menu";
import Rodape from "../../components/rodape";
import RodapeNewFly from "../../components/rodape-newfly";
import Whats from "../../components/whats";
import Link from "next/link";

export default function Fertilog() {
  const [activeTab, setActiveTab] = useState("descricao");

  return (
    <>
      <Menu />

      {/* HERO */}
      <section className={styles.backgroundimg}>
        <div className={styles.box}>
          <span>Logística Agrícola Avançada</span>
          <h2>Canudão 3000</h2>
        </div>
      </section>

      {/* IMAGEM PRINCIPAL */}
      <section className={styles.background}>
        <div className={styles.interno2}>
          <img
            className={styles.produto}
            src="/static/images/produtos/LinhaDeFertilizantes/Canudao-3000-00.jpg"
          />
        </div>
      </section>

      {/* DESCRIÇÃO */}
      <section className={styles.background}>
        <div className={styles.interno}>
          <div className={styles.box3}>
            <h2 className={styles.titulo}>O Canudão 3000</h2>

            <p className={styles.paragrafo}>
             O Canudão 3000 é uma das soluções mais avançadas da linha de fertilizantes da INW Soluções, desenvolvido para operações agrícolas que exigem alta capacidade de descarga e máxima produtividade no abastecimento.
            </p>

            <p className={styles.paragrafo}>
              Equipado com motor diesel independente e sistema hidráulico robusto, o Canudão 3000 oferece vazão de até 3 toneladas por minuto, permitindo abastecer plantadeiras, adubadeiras e silos bolsa com extrema rapidez e segurança.
            </p>

            <Link legacyBehavior href="/contato">
              <a className={styles.Botao}>
                Faça seu pedido!
                <img
                  className="w-full max-w-[1rem] ml-2"
                  src="/static/images/seta-vertical.png"
                />
              </a>
            </Link>
          </div>

          <div className={styles.box}>
            <img
              className={styles.produtosleft}
              src="/static/images/produtos/LinhaDeFertilizantes/Canudao-3000-01.jpg"
            />
          </div>
        </div>
      </section>

      {/* CARACTERÍSTICAS */}
      <section className={styles.background}>
        <div className={styles.interno}>
          <div className={styles.box}>
            <img
              className={styles.produtosright}
              src="/static/images/produtos/LinhaDeFertilizantes/Canudao-3000-02.jpg"
            />
          </div>

          <div className={`${styles.box} text-center`}>
            <h2 className={styles.titulo}>Principais Características</h2>

            <p className={styles.paragrafo}>
              • Vazão de descarga de até <strong>3.000 kg/min</strong>
            </p>

            <p className={styles.paragrafo}>
              •Capacidade de carga de até <strong>24 toneladas</strong>
            </p>

            <p className={styles.paragrafo}>
              • Motor diesel independente de 220 CV
            </p>

            <p className={styles.paragrafo}>
              •Sistema de operação via <strong>controle remoto</strong>
            </p>

            <p className={styles.paragrafo}>
              • Tubo com abertura lateral
            </p>

            <p className={styles.paragrafo}>
              • Sistema Lona Fácil
            </p>

            <p className={styles.paragrafo}>
              • Instalação em semi-reboque 3 eixos LS
            </p>

            <p className={styles.paragrafo}>
              • Operação com apenas 1 operador
            </p>
          </div>
        </div>
      </section>

      {/* DOWNLOAD */}
      <section className={styles.background}>
        <div className={styles.barra}>
          <div>Tecnologia avançada em abastecimento de fertilizantes</div>

          <div>
            <p>Baixar catálogo</p>

            <Link
              legacyBehavior
              href="https://INWSOLUCOES.short.gy/FERTILIZANTES_INW"
            >
              <a target="_blank">
                <img src="/static/images/download.png" />
              </a>
            </Link>
          </div>
        </div>
      </section>

      {/* ABAS */}
      <section className={styles.background}>
        <div className={styles.mvv}>
          <div
            className={`${styles.mvvBox} ${
              activeTab === "descricao" ? styles.activeTab : ""
            }`}
            onClick={() => setActiveTab("descricao")}
          >
            <h3>DESCRIÇÃO</h3>
          </div>

          <div
            className={`${styles.mvvBox} ${
              activeTab === "beneficios" ? styles.activeTab : ""
            }`}
            onClick={() => setActiveTab("beneficios")}
          >
            <h3>BENEFÍCIOS</h3>
          </div>
        </div>

        <div className={styles.interno4}>
          <div className={styles.box3}>
            <h2 className={styles.titulo}>
              {activeTab === "descricao" ? "Descrição" : "Benefícios"}
            </h2>

            <p className={styles.paragrafo}>
              {activeTab === "descricao"
                ? "O Canudão 3000 foi projetado para operações agrícolas de grande escala, oferecendo altíssima vazão de descarga e operação simplificada. Seu sistema hidráulico e motor independente garantem desempenho constante mesmo em condições de trabalho intensas."
                : "Com o Canudão 3000, as operações de abastecimento tornam-se muito mais rápidas e eficientes. A alta vazão reduz drasticamente o tempo de parada das máquinas agrícolas, aumentando a produtividade e proporcionando mais segurança e praticidade no campo."}
            </p>
          </div>

          <div className={styles.box2}>
            <img
              className={styles.descricao}
              src={
                activeTab === "descricao"
                  ? "/static/images/produtos/LinhaDeFertilizantes/Canudao-3000-03.jpg"
                  : "/static/images/produtos/LinhaDeFertilizantes/Canudao-3000.jpg"
              }
            />
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className={styles.footer}>
        <div className={styles.interno}>
          <div className={styles.box3}>
            <h2> Somos o pit stop do Agro</h2>
          </div>

          <div className={styles.box2}>
            <Link legacyBehavior href="/contato">
              <a className={styles.botaofooter}>Entre em Contato</a>
            </Link>
          </div>
        </div>
      </section>

      <Whats />
      <Rodape />
      <RodapeNewFly />
    </>
  );
}
