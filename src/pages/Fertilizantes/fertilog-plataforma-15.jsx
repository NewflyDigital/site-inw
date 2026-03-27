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
          <h2>FERTILOG PLATAFORMA / CHASSI 15 TON</h2>
        </div>
      </section>

      {/* IMAGEM PRINCIPAL */}
      <section className={styles.background}>
        <div className={styles.interno2}>
          <img
            className={styles.produto}
            src="/static/images/produtos/LinhaDeFertilizantes/Fertilog-PlataformaOuChassi-15ton-00.jpg"
          />
        </div>
      </section>

      {/* DESCRIÇÃO */}
      <section className={styles.background}>
        <div className={styles.interno}>
          <div className={styles.box3}>
            <h2 className={styles.titulo}>O FERTILOG PLATAFORMA / CHASSI 15 TON</h2>

            <p className={styles.paragrafo}>
            O Fertilog Plataforma ou Chassi 15 toneladas foi projetado para aumentar a autonomia de transporte e abastecimento de fertilizantes.  </p>

            <p className={styles.paragrafo}>
            O equipamento utiliza duas caixas, onde uma realiza a descarga enquanto a outra faz a transferência interna do fertilizante.  </p>

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
              src="/static/images/produtos/LinhaDeFertilizantes/Fertilog-PlataformaOuChassi-15ton-01.jpg"
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
              src="/static/images/produtos/LinhaDeFertilizantes/Fertilog-PlataformaOuChassi-15ton-02.jpg"
            />
          </div>

          <div className={`${styles.box} text-center`}>
            <h2 className={styles.titulo}>Principais Características</h2>

            <p className={styles.paragrafo}>
              • Capacidade de carga de <strong>15 toneladas</strong>
            </p>

            <p className={styles.paragrafo}>
              • Descarga <strong>intermitente</strong>
            </p>

            <p className={styles.paragrafo}>
              • Tubo telescópico direcionador triplo
            </p>

            <p className={styles.paragrafo}>
              • Caixas de polietileno
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
                ? "O sistema de transferência interna garante fluxo contínuo de fertilizante durante o abastecimento."
                : "Aumenta a produtividade e reduz o tempo de parada das máquinas no campo."}
            </p>
          </div>

          <div className={styles.box2}>
            <img
              className={styles.descricao}
              src={
                activeTab === "descricao"
                  ? "/static/images/produtos/LinhaDeFertilizantes/Fertilog-PlataformaOuChassi-15ton-03.jpg"
                  : "/static/images/produtos/LinhaDeFertilizantes/Fertilog-PlataformaOuChassi-15ton.jpg"
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
