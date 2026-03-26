import styles from "../../styles/Produto.module.css";
import { useState } from "react";
import Menu from "../../components/menu";
import Rodape from "../../components/rodape";
import RodapeNewFly from "../../components/rodape-newfly";
import Whats from "../../components/whats";
import Link from "next/link";

export default function FastSeed() {
  const [activeTab, setActiveTab] = useState("descricao");

  return (
    <>
      <Menu />

      {/* HERO */}
      <section className={styles.backgroundimg}>
        <div className={styles.box}>
          <span>Eficiência no Plantio</span>
          <h2>FAST SEED</h2>
        </div>
      </section>

      {/* IMAGEM PRINCIPAL */}
      <section className={styles.background}>
        <div className={styles.interno2}>
          <img
            className={styles.produto}
            src="/static/images/produtos/fastseed.png"
          />
        </div>
      </section>

      {/* DESCRIÇÃO */}
      <section className={styles.background}>
        <div className={styles.interno}>
          <div className={styles.box3}>
            <h2 className={styles.titulo}>O FAST SEED</h2>

            <p className={styles.paragrafo}>
              O Fast Seed é uma solução avançada para abastecimento de
              plantadeiras, projetada para otimizar as operações no campo
              com rapidez, precisão e máxima eficiência.
            </p>

            <p className={styles.paragrafo}>
              Com tecnologia inovadora e design robusto, o sistema garante
              abastecimento ágil de sementes e bioinsumos, reduzindo o tempo
              de parada das plantadeiras e aumentando a produtividade.
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
              src="/static/images/produtos/fastseed/fastseed-01.png"
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
              src="/static/images/produtos/fastseed/fastseed-02.png"
            />
          </div>

          <div className={`${styles.box} text-center`}>
            <h2 className={styles.titulo}>Principais Características</h2>

            <p className={styles.paragrafo}>
              • Tanque isotérmico em polietileno de alta resistência
            </p>

            <p className={styles.paragrafo}>
              • Capacidade volumétrica de <strong>2.500 litros</strong>
            </p>

            <p className={styles.paragrafo}>
              • Suporte para até <strong>8 big bags</strong>
            </p>

            <p className={styles.paragrafo}>
              • Vazão de até <strong>600 kg/min</strong>
            </p>

            <p className={styles.paragrafo}>
              • Tubo extensível de <strong>6 metros</strong>
            </p>

            <p className={styles.paragrafo}>
              • Operação via <strong>controle remoto</strong>
            </p>
          </div>
        </div>
      </section>

      {/* BARRA DOWNLOAD */}
      <section className={styles.background}>
        <div className={styles.barra}>
          <div>Alta eficiência no abastecimento de sementes</div>

          <div>
            <p>Baixar catálogo</p>

            <Link legacyBehavior href="https://INWSOLUCOES.short.gy/SEMENTES_INW">
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
                ? "O Fast Seed foi desenvolvido para tornar o abastecimento de plantadeiras mais rápido e eficiente, oferecendo um sistema robusto de armazenamento e transferência de sementes."
                : "Com alta vazão e operação simplificada, o equipamento reduz o tempo de parada das máquinas e melhora significativamente o desempenho das operações agrícolas."}
            </p>
          </div>

          <div className={styles.box2}>
            <img
              className={styles.descricao}
              src={
                activeTab === "descricao"
                  ? "/static/images/produtos/fastseed/fastseed-03.png"
                  : "/static/images/produtos/fastseed/fastseed-02.png"
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