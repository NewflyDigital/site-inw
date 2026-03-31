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
          <h2 className="uppercase">Big Tanque Roll 19000</h2>
        </div>
      </section>

      {/* IMAGEM */}
      <section className={styles.background}>
        <div className={styles.interno2}>
          <img
            className={styles.produto}
            src="/static/images/produtos/AguaECalda/Bigtanque-Roll-19000-00.jpg"
            alt=""
          />
        </div>
      </section>

      {/* DESCRIÇÃO */}
      <section className={styles.background}>
        <div className={styles.interno}>
          <div className={styles.box3}>
            <h2 className={styles.titulo}>BIG TANQUE ROLL 19000</h2>

            <p className={styles.paragrafo}>
              O Big Tanque Roll On Roll Off 19.000 litros foi desenvolvido para
              operações agrícolas que exigem máxima capacidade de transporte de
              líquidos.
            </p>

            <p className={styles.paragrafo}>
              Com estrutura robusta e tanques em polietileno rotomoldado, o
              equipamento oferece alta resistência e longa vida útil mesmo em
              condições severas de trabalho.
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
              src="/static/images/produtos/AguaECalda/Bigtanque-Roll-19000-01.jpg"
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
              src="/static/images/produtos/AguaECalda/Bigtanque-Roll-19000-02.jpg"
              alt=""
            />
          </div>

          <div className={`${styles.box} text-center`}>
            <h2 className={styles.titulo}>Principais Características</h2>

            <p className={styles.paragrafo}>
              • Capacidade de <strong>19.000 litros</strong>
            </p>

            <p className={styles.paragrafo}>
              • Tanques em polietileno rotomoldado
            </p>

            <p className={styles.paragrafo}>
              • Sistema <strong>Roll On Roll Off</strong>
            </p>

            <p className={styles.paragrafo}>• Estrutura reforçada</p>

            <p className={styles.paragrafo}>
              • Sistema opcional de bombeamento
            </p>
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
                ? "O Big Tanque Roll On Roll Off 19.000 litros é ideal para transporte de grandes volumes de água ou calda em operações agrícolas de grande escala."
                : "A capacidade elevada permite otimizar a logística das operações agrícolas, reduzindo o número de viagens para abastecimento e aumentando a eficiência das atividades no campo."}
            </p>
          </div>

          <div className={styles.box2}>
            <img
              className={styles.descricao}
              src={
                activeTab === "descricao"
                  ? "/static/images/produtos/AguaECalda/Bigtanque-Roll-19000-03.jpg"
                  : "/static/images/produtos/AguaECalda/Bigtanque-Roll-19000-02.jpg"
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
