import styles from "../../styles/Produto.module.css";
import { useState } from "react";
import Menu from "../../components/menu";
import Rodape from "../../components/rodape";
import RodapeNewFly from "../../components/rodape-newfly";
import Whats from "../../components/whats";
import Link from "next/link";

export default function BigTanque4000() {
  const [activeTab, setActiveTab] = useState("descricao");

  return (
    <>
      <Menu />

      {/* HERO */}
      <section className={styles.backgroundimg}>
        <div className={styles.box}>
          <span>Excelência em Armazenamento</span>
          <h2 className="uppercase">Big Tanque Rebocado 28500-600</h2>
        </div>
      </section>

      {/* IMAGEM */}
      <section className={styles.background}>
        <div className={styles.interno2}>
          <img
            className={styles.produto}
            src="/static/images/produtos/AguaECalda/Bigtanque-Rebocado-28500-600-00.png"
            alt="Big Tanque Rebocado 28500-600"
          />
        </div>
      </section>

      {/* DESCRIÇÃO */}
      <section className={styles.background}>
        <div className={styles.interno}>
          <div className={styles.box3}>
            <h2 className={styles.titulo}>BIG TANQUE REBOCADO 28500-600</h2>

            <p className={styles.paragrafo}>
              O Big Tanque Rebocado 28.500 litros com pré-carregador de 600
              litros foi desenvolvido para operações agrícolas que demandam
              máxima capacidade e autonomia no transporte de água ou calda
              pronta. Sua estrutura modular em polietileno rotomoldado garante
              alta resistência e longa vida útil.
            </p>

            <p className={styles.paragrafo}>
              Com três módulos de 9.500 litros e sistema de pré-preparo de
              calda, o equipamento permite maior eficiência nas operações de
              pulverização e abastecimento. O rodado tridem com pneus de alta
              flutuação proporciona melhor estabilidade e reduz o impacto no
              solo.
            </p>

            <Link legacyBehavior href="/contato">
              <a className={styles.Botao}>
                Faça seu pedido!
                <img src="/static/images/seta-vertical.png" alt="" />
              </a>
            </Link>
          </div>

          <div className={styles.box}>
            <img
              className={styles.produtosleft}
              src="/static/images/produtos/AguaECalda/Bigtanque-Rebocado-28500-600-01.jpg"
              alt=""
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
              src="/static/images/produtos/AguaECalda/Bigtanque-Rebocado-28500-600-02.jpg"
              alt=""
            />
          </div>

          <div className={`${styles.box} text-center`}>
            <h2 className={styles.titulo}>Principais Características</h2>

            <p className={styles.paragrafo}>
              • Capacidade total de <strong>28.500 litros</strong>
            </p>

            <p className={styles.paragrafo}>
              • Três módulos de <strong>9.500 litros</strong>
            </p>

            <p className={styles.paragrafo}>
              • Pré-carregador de <strong>600 litros</strong>
            </p>

            <p className={styles.paragrafo}>
              • Motor diesel com partida elétrica
            </p>

            <p className={styles.paragrafo}>
              • Bomba de polipropileno de 3&quot;
            </p>

            <p className={styles.paragrafo}>• Rodado tridem com suspensão</p>
            <p className={styles.paragrafo}>• Pneus de alta flutuação</p>
            <p className={styles.paragrafo}>• Estrutura reforçada</p>
          </div>
        </div>
      </section>

      {/* DOWNLOAD */}
      <section className={styles.background}>
        <div className={styles.barra}>
          <div>Tecnologia e eficiência no transporte de líquidos agrícolas</div>

          <div>
            <p>Baixar catálogo</p>

            <Link
              legacyBehavior
              href="https://INWSOLUCOES.short.gy/AGUAECALDAINW"
            >
              <a target="_blank">
                <img src="/static/images/download.png" alt="Baixar catálogo" />
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
                ? "O Big Tanque Rebocado 28.500 litros é uma solução de grande capacidade para operações agrícolas intensivas. Seu sistema robusto e modular garante eficiência no transporte e preparo de líquidos utilizados nas atividades do campo."
                : "A grande capacidade do equipamento proporciona maior autonomia operacional, permitindo atender grandes áreas agrícolas com menos interrupções. Isso contribui para otimizar a logística de abastecimento e melhorar o desempenho das operações no campo."}
            </p>
          </div>

          <div className={styles.box2}>
            <img
              className={styles.descricao}
              src={
                activeTab === "descricao"
                  ? "/static/images/produtos/AguaECalda/Bigtanque-Rebocado-28500-600-03.jpg"
                  : "/static/images/produtos/AguaECalda/Bigtanque-Rebocado-28500-600-02.jpg"
              }
              alt=""
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
