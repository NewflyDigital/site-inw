import styles from "../../styles/Produto.module.css";
import { useState } from "react";
import Menu from "../../components/menu";
import Rodape from "../../components/rodape";
import RodapeNewFly from "../../components/rodape-newfly";
import Whats from "../../components/whats";
import Link from "next/link";

export default function BigTanqueEspeciais() {
  const [activeTab, setActiveTab] = useState("descricao");

  return (
    <>
      <Menu />

      {/* HERO */}
      <section className={styles.backgroundimg}>
        <div className={styles.box}>
          <span>Excelência em Armazenamento</span>
          <h2 className="uppercase">Big tanque Rebocado 4000 Isométrico</h2>
        </div>
      </section>

      {/* IMAGEM */}
      <section className={styles.background}>
        <div className={styles.interno2}>
          <img
            className={styles.produto}
            src="/static/images/produtos/AguaECalda/Bigtanque-Rebocado-4000-isometrico-00.png"
          />
        </div>
      </section>

      {/* DESCRIÇÃO */}
      <section className={styles.background}>
        <div className={styles.interno}>
          <div className={styles.box3}>
            <h2 className={styles.titulo}>BIG TANQUE REBOCADO 4000 ISOMÉTRICO</h2>

            <p className={styles.paragrafo}>
             O Big Tanque Rebocado 4000 Isotérmico foi desenvolvido especialmente para o transporte de insumos biológicos e líquidos que exigem controle de temperatura durante as operações agrícolas. Seu tanque em polietileno rotomoldado possui camada térmica adicional que ajuda a manter a estabilidade térmica por até 72 horas.
            </p>

            <p className={styles.paragrafo}>
             Além da proteção térmica, o equipamento conta com tanque auxiliar de água limpa, motor diesel e sistema de bombeamento de alta eficiência, garantindo autonomia e desempenho durante as operações no campo. 
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
              src="/static/images/produtos/AguaECalda/Bigtanque-Rebocado-4000-isometrico-01.jpg"
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
              src="/static/images/produtos/AguaECalda/Bigtanque-Rebocado-4000-isometrico-02.jpg"
            />
          </div>

          <div className={`${styles.box} text-center`}>
            <h2 className={styles.titulo}>Principais Características</h2>

            <p className={styles.paragrafo}>
              • Tanque isotérmico de <strong>4.000 litros</strong>
            </p>

            <p className={styles.paragrafo}>
              • Tanque auxiliar de água limpa de <strong>1.000 litros</strong>
            </p>

            <p className={styles.paragrafo}>
              • Motor diesel 
            </p>

            <p className={styles.paragrafo}>
              • Bomba de polipropileno de 3"
            </p>

            <p className={styles.paragrafo}>
              • Pneus de alta flutuação
            </p>

            <p className={styles.paragrafo}>
              • Escada e visor de nível
            </p>
            <p className={styles.paragrafo}>
              • Estrutura sem emendas ou soldas
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
                ? "O Big Tanque Rebocado 4000 Isotérmico oferece uma solução eficiente para o transporte seguro de insumos sensíveis à temperatura, como produtos biológicos. Seu sistema térmico e estrutura robusta garantem maior proteção dos produtos transportados."
                : "A tecnologia isotérmica permite preservar a qualidade e a eficiência dos insumos transportados por longos períodos, reduzindo perdas e garantindo maior segurança no manejo de produtos biológicos. Isso contribui para melhorar o desempenho das aplicações e a eficiência das operações agrícolas."}
            </p>
          </div>

          <div className={styles.box2}>
            <img
              className={styles.descricao}
              src={
                activeTab === "descricao"
                  ? "/static/images/produtos/AguaECalda/Bigtanque-Rebocado-4000-isometrico-03.jpg"
                  : "/static/images/produtos/AguaECalda/Bigtanque-Rebocado-4000-isometrico-02.jpg"
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
