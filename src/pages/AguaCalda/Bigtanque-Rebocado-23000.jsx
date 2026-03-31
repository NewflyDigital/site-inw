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
          <h2 className="uppercase">Big Tanque Rebocado 23000</h2>
        </div>
      </section>

      {/* IMAGEM */}
      <section className={styles.background}>
        <div className={styles.interno2}>
          <img
            className={styles.produto}
            src="/static/images/produtos/AguaECalda/Bigtanque-Rebocado-23000-00.png"
            alt="Big Tanque Rebocado 23000"
          />
        </div>
      </section>

      {/* DESCRIÇÃO */}
      <section className={styles.background}>
        <div className={styles.interno}>
          <div className={styles.box3}>
            <h2 className={styles.titulo}>BIG TANQUE REBOCADO 23000</h2>

            <p className={styles.paragrafo}>
              O Big Tanque Rebocado 23.000 litros foi desenvolvido para atender
              operações agrícolas de grande porte que exigem alta capacidade de
              transporte e preparo de calda no campo. Com estrutura robusta e
              módulos em polietileno rotomoldado, o equipamento oferece
              excelente durabilidade e resistência química.
            </p>

            <p className={styles.paragrafo}>
              O modelo conta com dois módulos principais de 9.500 litros e um
              módulo adicional para preparo de calda, garantindo maior autonomia
              nas operações agrícolas. Sua estrutura com rodado tridem e pneus
              de alta flutuação proporciona melhor distribuição de peso e menor
              compactação do solo.
            </p>

            <Link legacyBehavior href="/contato">
              <a className={styles.Botao}>
                Faça seu pedido!
                <img src="/static/images/seta-vertical.png" />
              </a>
            </Link>
          </div>

          <div className={styles.box}>
            <img
              className={styles.produtosleft}
              src="/static/images/produtos/AguaECalda/Bigtanque-Rebocado-23000-01.jpg"
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
              src="/static/images/produtos/AguaECalda/Bigtanque-Rebocado-23000-02.jpg"
            />
          </div>

          <div className={`${styles.box} text-center`}>
            <h2 className={styles.titulo}>Principais Características</h2>

            <p className={styles.paragrafo}>
              • Capacidade total de <strong>23.000 litros</strong>
            </p>

            <p className={styles.paragrafo}>
              • Dois módulos de <strong>9.500 litros</strong>
            </p>

            <p className={styles.paragrafo}>
              • Módulo de calda pronta de <strong>4.000 litros</strong>
            </p>

            <p className={styles.paragrafo}>
              • Pré-abastecimento de <strong>600 litros</strong>
            </p>

            <p className={styles.paragrafo}>• Pneus de alta flutuação</p>

            <p className={styles.paragrafo}>
              • Estrutura robusta para operações agrícolas
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
                ? "O Big Tanque Rebocado 23.000 litros é ideal para operações agrícolas que exigem grande autonomia no transporte e preparo de líquidos. Seu design modular e estrutura reforçada permitem realizar operações com alta eficiência e segurança."
                : "A alta capacidade de armazenamento permite reduzir o número de deslocamentos para abastecimento, aumentando a produtividade das operações agrícolas. Além disso, o sistema de preparo de calda integrado facilita o processo de mistura e aplicação, tornando as operações mais rápidas e eficientes."}
            </p>
          </div>

          <div className={styles.box2}>
            <img
              className={styles.descricao}
              src={
                activeTab === "descricao"
                  ? "/static/images/produtos/AguaECalda/Bigtanque-Rebocado-23000-03.jpg"
                  : "/static/images/produtos/AguaECalda/Bigtanque-Rebocado-23000-02.jpg"
              }
              alt={
                activeTab === "descricao"
                  ? "Descrição do Big Tanque Rebocado 23000"
                  : "Benefícios do Big Tanque Rebocado 23000"
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
