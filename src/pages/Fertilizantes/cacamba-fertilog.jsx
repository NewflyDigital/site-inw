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
          <h2>CAÇAMBA FERTILOG</h2>
        </div>
      </section>

      {/* IMAGEM PRINCIPAL */}
      <section className={styles.background}>
        <div className={styles.interno2}>
          <img
            className={styles.produto}
            src="/static/images/produtos/LinhaDeFertilizantes/Cacamba-Fertilog-00.jpg"
          />
        </div>
      </section>

      {/* DESCRIÇÃO */}
      <section className={styles.background}>
        <div className={styles.interno}>
          <div className={styles.box3}>
            <h2 className={styles.titulo}>A CAÇAMBA FERTILOG</h2>

            <p className={styles.paragrafo}>
            A Caçamba Fertilog foi desenvolvida para transformar caminhões Roll On Roll Off em eficientes unidades de transporte e abastecimento de fertilizantes a granel, proporcionando agilidade, segurança e alta produtividade nas operações agrícolas.
            </p>

            <p className={styles.paragrafo}>
              Construída em inox e equipada com sistema de descarga lateral, a Caçamba Fertilog permite o abastecimento rápido de plantadeiras, adubadeiras e silos bolsa, eliminando o uso de sacarias e Big Bags e reduzindo significativamente os custos operacionais da lavoura.
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
            src="/static/images/produtos/LinhaDeFertilizantes/Cacamba-Fertilog-01.jpg"
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
            src="/static/images/produtos/LinhaDeFertilizantes/Cacamba-Fertilog-02.jpg"
            />
          </div>

          <div className={`${styles.box} text-center`}>
            <h2 className={styles.titulo}>Principais Características</h2>

            <p className={styles.paragrafo}>
              • Capacidade de carga de <strong>10,5 ou 16 toneladas</strong>
            </p>

            <p className={styles.paragrafo}>
              • Vazão de descarga de até <strong>750 kg/min</strong>
            </p>

            <p className={styles.paragrafo}>
              • Estrutura em <strong>inox de alta durabilidade</strong>
            </p>

            <p className={styles.paragrafo}>
              • Tubo de descarga lateral <strong>dentro da bitola do caminhão</strong>
            </p>

            <p className={styles.paragrafo}>
              • Tubo direcionador telescópico triplo
            </p>

            <p className={styles.paragrafo}>
             • Acionamento pela tomada de força do caminhão (TDF)
            </p>

             <p className={styles.paragrafo}>
             • Compatível com sistema Roll On Roll Off
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
                ? "A Caçamba Fertilog é uma solução prática e eficiente para operações agrícolas que utilizam fertilizantes a granel. Com estrutura robusta em inox e sistema de descarga lateral com tubo telescópico, o equipamento permite abastecimento rápido e preciso diretamente nas máquinas agrícolas."
                : "A utilização da Caçamba Fertilog reduz o tempo de abastecimento no campo, melhora a logística de transporte e elimina o manuseio de sacarias e Big Bags. O resultado é mais segurança na operação, menor custo logístico e maior produtividade nas operações agrícolas."}
            </p>
          </div>

          <div className={styles.box2}>
            <img
              className={styles.descricao}
              src={
                activeTab === "descricao"
                  ? "/static/images/produtos/LinhaDeFertilizantes/Cacamba-Fertilog-03.jpg"
                  : "/static/images/produtos/LinhaDeFertilizantes/Cacamba-Fertilog.jpg"
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
