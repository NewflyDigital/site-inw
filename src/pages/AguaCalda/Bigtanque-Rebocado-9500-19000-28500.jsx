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
          <h2 className="uppercase">Big Tanque Rebocado 9500/19000/28500</h2>
        </div>
      </section>

      {/* IMAGEM */}
      <section className={styles.background}>
        <div className={styles.interno2}>
          <img
            className={styles.produto}
            src="/static/images/produtos/AguaECalda/Bigtanque-Rebocado-9500-19000-28500-00.png"
            alt="Big Tanque Rebocado 9500/19000/28500"
          />
        </div>
      </section>

      {/* DESCRIÇÃO */}
      <section className={styles.background}>
        <div className={styles.interno}>
          <div className={styles.box3}>
            <h2 className={styles.titulo}>
              BIG TANQUE REBOCADO 9500/19000/28500
            </h2>

            <p className={styles.paragrafo}>
              A linha Big Tanque Rebocado 9500, 19.000 e 28.500 litros foi
              desenvolvida para operações agrícolas que demandam grande
              capacidade de transporte de líquidos. Os tanques são fabricados em
              polietileno rotomoldado, garantindo resistência química,
              durabilidade e segurança durante o transporte.
            </p>

            <p className={styles.paragrafo}>
              Os modelos maiores utilizam módulos combinados que permitem
              ampliar a capacidade do equipamento sem comprometer a estabilidade
              e mobilidade. Com rodado tridem e pneus de alta flutuação, esses
              equipamentos são ideais para grandes operações agrícolas.
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
              src="/static/images/produtos/AguaECalda/Bigtanque-Rebocado-9500-19000-28500-01.jpg"
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
              src="/static/images/produtos/AguaECalda/Bigtanque-Rebocado-9500-19000-28500-02.jpg"
            />
          </div>

          <div className={`${styles.box} text-center`}>
            <h2 className={styles.titulo}>Principais Características</h2>

            <p className={styles.paragrafo}>
              • Capacidade de <strong>9.500, 19.000 e 28.500 litros</strong>
            </p>

            <p className={styles.paragrafo}>
              • Tanque em polietileno sem emendas
            </p>

            <p className={styles.paragrafo}>• Estrutura modular</p>

            <p className={styles.paragrafo}>• Rodado tridem com suspensão</p>

            <p className={styles.paragrafo}>• Pneus de alta flutuação</p>

            <p className={styles.paragrafo}>• Escada e visor de nível</p>
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
                ? "Os modelos dessa linha oferecem alta capacidade e resistência para transporte de água, calda pronta ou insumos líquidos em grandes propriedades agrícolas. Seu design modular permite ampliar a capacidade conforme a necessidade da operação."
                : "A grande capacidade de armazenamento e transporte proporciona maior autonomia nas operações agrícolas, reduzindo deslocamentos e otimizando a logística no campo. Isso permite maior eficiência no abastecimento de pulverizadores e outros equipamentos, contribuindo para melhorar a produtividade das atividades agrícolas."}
            </p>
          </div>

          <div className={styles.box2}>
            <img
              className={styles.descricao}
              src={
                activeTab === "descricao"
                  ? "/static/images/produtos/AguaECalda/Bigtanque-Rebocado-9500-19000-28500-03.jpg"
                  : "/static/images/produtos/AguaECalda/Bigtanque-Rebocado-9500-19000-28500-02.jpg"
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
