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
          <h2 className="uppercase">Big Tanque Roll 10500</h2>
        </div>
      </section>

      {/* IMAGEM */}
      <section className={styles.background}>
        <div className={styles.interno2}>
          <img
            className={styles.produto}
            src="/static/images/produtos/AguaECalda/Bigtanque-Roll-10500-00.jpg"
            alt=""
          />
        </div>
      </section>

      {/* DESCRIÇÃO */}
      <section className={styles.background}>
        <div className={styles.interno}>
          <div className={styles.box3}>
            <h2 className={styles.titulo}>BIG TANQUE ROLL 10500</h2>

            <p className={styles.paragrafo}>
              O Big Tanque Roll On Roll Off 10.500 litros é uma solução
              eficiente para transporte de água potável, calda pronta ou caldas
              técnicas utilizadas nas operações agrícolas. O modelo utiliza três
              módulos de 3.500 litros fabricados em polietileno rotomoldado.
            </p>

            <p className={styles.paragrafo}>
              Seu sistema modular permite maior flexibilidade operacional,
              garantindo segurança no transporte e facilidade na adaptação do
              equipamento para diferentes necessidades logísticas.
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
              src="/static/images/produtos/AguaECalda/Bigtanque-Roll-10500-01.jpg"
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
              src="/static/images/produtos/AguaECalda/Bigtanque-Roll-10500-02.jpg"
              alt=""
            />
          </div>

          <div className={`${styles.box} text-center`}>
            <h2 className={styles.titulo}>Principais Características</h2>

            <p className={styles.paragrafo}>
              • Capacidade de <strong>10.500 litros</strong>
            </p>

            <p className={styles.paragrafo}>
              • Três módulos de <strong>3.500 litros</strong>
            </p>

            <p className={styles.paragrafo}>
              • Sistema <strong>Roll On Roll Off</strong>
            </p>

            <p className={styles.paragrafo}>
              • Opção de motobombas de 2&quot; ou 3&quot;
            </p>

            <p className={styles.paragrafo}>
              • Tanques em polietileno rotomoldado
            </p>
            <p className={styles.paragrafo}>• Estrutura modular</p>
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
                ? "O Big Tanque Roll On Roll Off 10.500 litros foi desenvolvido para oferecer grande capacidade de transporte com praticidade e eficiência nas operações agrícolas."
                : "A configuração modular do equipamento permite maior flexibilidade logística e facilidade no transporte de diferentes tipos de líquidos utilizados na agricultura. Isso contribui para otimizar as operações e garantir maior produtividade no campo."}
            </p>
          </div>

          <div className={styles.box2}>
            <img
              className={styles.descricao}
              src={
                activeTab === "descricao"
                  ? "/static/images/produtos/AguaECalda/Bigtanque-Roll-10500-03.jpg"
                  : "/static/images/produtos/AguaECalda/Bigtanque-Roll-10500-02.jpg"
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
