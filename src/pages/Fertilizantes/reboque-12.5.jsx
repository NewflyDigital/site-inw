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
          <h2>REBOQUE 12.5 / 1500 AUTOCARREGÁVEL</h2>
        </div>
      </section>

      {/* IMAGEM PRINCIPAL */}
      <section className={styles.background}>
        <div className={styles.interno2}>
          <img
            className={styles.produto}
            src="/static/images/produtos/LinhaDeFertilizantes/Reboque-12.5-1500-00.jpg"
          />
        </div>
      </section>

      {/* DESCRIÇÃO */}
      <section className={styles.background}>
        <div className={styles.interno}>
          <div className={styles.box3}>
            <h2 className={styles.titulo}>O REBOQUE 12.5 / 1500 AUTOCARREGÁVEL</h2>

            <p className={styles.paragrafo}>
            O Reboque 12.5 / 1500 Autocarregável é uma solução inovadora para transporte e abastecimento de fertilizantes a granel no campo.
            </p>

            <p className={styles.paragrafo}>
              Com capacidade de carga de 12,5 toneladas e vazão de descarga de 1,5 tonelada por minuto, o equipamento oferece alta produtividade nas operações agrícolas.
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
              src="/static/images/produtos/LinhaDeFertilizantes/Reboque-12.5-1500-01.jpg"
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
              src="/static/images/produtos/LinhaDeFertilizantes/Reboque-12.5-1500-02.jpg"
            />
          </div>

          <div className={`${styles.box} text-center`}>
            <h2 className={styles.titulo}>Principais Características</h2>

            <p className={styles.paragrafo}>
              • Capacidade de carga de <strong>12,5 toneladas</strong>
            </p>

            <p className={styles.paragrafo}>
              • Vazão de descarga de <strong>1.500 kg/min</strong>
            </p>

            <p className={styles.paragrafo}>
              • Sistema autocarregável
            </p>

            <p className={styles.paragrafo}>
              • Tubo direcionador telescópico triplo
            </p>

            <p className={styles.paragrafo}>
              • Pneus de alta flutuação
            </p>

            <p className={styles.paragrafo}>
              • Caixa em inox
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
                ? "O Reboque 12.5 Autocarregável permite carregar e abastecer fertilizantes com facilidade, oferecendo eficiência e versatilidade nas operações agrícolas."
                : "A tecnologia autocarregável reduz o tempo de operação e aumenta a produtividade no campo."}
            </p>
          </div>

          <div className={styles.box2}>
            <img
              className={styles.descricao}
              src={
                activeTab === "descricao"
                  ? "/static/images/produtos/LinhaDeFertilizantes/Reboque-12.5-1500-03.jpg"
                  : "/static/images/produtos/LinhaDeFertilizantes/Reboque-12.5-1500.jpg"
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
