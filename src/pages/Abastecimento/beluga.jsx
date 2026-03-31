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
          <h2>BELUGA 20.0 / 9.500</h2>
        </div>
      </section>

      {/* IMAGEM PRINCIPAL */}
      <section className={styles.background}>
        <div className={styles.interno2}>
          <img
            className={styles.produto}
            src="/static/images/produtos/AbastecimentoDeSementes/Beluga-00.png"
          />
        </div>
      </section>

      {/* DESCRIÇÃO */}
      <section className={styles.background}>
        <div className={styles.interno}>
          <div className={styles.box3}>
            <h2 className={styles.titulo}>O FAST SEED</h2>

            <p className={styles.paragrafo}>
              A Beluga 20.0 / 9.500 é uma abastecedora de sementes e insumos
              biológicos desenvolvida para operações agrícolas de grande escala,
              oferecendo alta capacidade de armazenamento e grande velocidade de
              abastecimento no campo.
            </p>

            <p className={styles.paragrafo}>
              Com capacidade para 20 sacos de sementes, sistema de descarga por
              esteira com vazão de 800 kg por minuto e tanque para insumos
              biológicos de 9.500 litros, o equipamento permite abastecer
              plantadeiras de forma rápida, segura e eficiente.
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
              src="/static/images/produtos/AbastecimentoDeSementes/beluga-02.jpg"
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
              src="/static/images/produtos/AbastecimentoDeSementes/beluga-03.jpg"
            />
          </div>

          <div className={`${styles.box} text-center`}>
            <h2 className={styles.titulo}>Principais Características</h2>

            <p className={styles.paragrafo}>
              • Capacidade para <strong>20 sacos de sementes</strong>
            </p>

            <p className={styles.paragrafo}>
              • Vazão de descarga de <strong>800 kg/min com esteira</strong>
            </p>

            <p className={styles.paragrafo}>
              • Tanque para insumos biológicos de <strong>9.500 litros</strong>
            </p>

            <p className={styles.paragrafo}>
              • Sistema de giro de descarga lateral
            </p>

            <p className={styles.paragrafo}>
              • Tubo telescópico de <strong>3 estágios</strong>
            </p>

            <p className={styles.paragrafo}>
              • Sistema <strong>Lona Fácil</strong>
            </p>
            <p className={styles.paragrafo}>
              • Sistema <strong>Lona Fácil</strong>
            </p>
            <p className={styles.paragrafo}>
              • Sistema <strong>Lona Fácil</strong>
            </p>
            <p className={styles.paragrafo}>
              • <strong>Controle remoto</strong>
            </p>
            <p className={styles.paragrafo}>
              • <strong>Motor independente</strong>
            </p>
            <p className={styles.paragrafo}>
              • Não necessita basculamento do implemento
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

            <Link
              legacyBehavior
              href="https://INWSOLUCOES.short.gy/SEMENTES_INW"
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
                ? "A Beluga 20.0 foi desenvolvida para atender operações agrícolas que exigem alta autonomia no abastecimento de sementes e biológicos. Seu sistema de descarga por esteira garante fluxo contínuo e eficiente, permitindo abastecer rapidamente uma ampla variedade de modelos de plantadeiras.O tanque de grande capacidade para insumos biológicos possibilita realizar o abastecimento completo durante a mesma parada, otimizando o tempo de plantio."
                : "Com grande capacidade de armazenamento e alta velocidade de descarga, a Beluga 20.0 aumenta significativamente a eficiência das operações de plantio. O sistema evita o manuseio de Big Bags e elimina a necessidade de bascular o implemento, garantindo mais segurança e estabilidade durante o abastecimento. O resultado é mais produtividade no campo e melhor aproveitamento da janela de plantio."}
            </p>
          </div>

          <div className={styles.box2}>
            <img
              className={styles.descricao}
              src={
                activeTab === "descricao"
                  ? "/static/images/produtos/AbastecimentoDeSementes/beluga-03.jpg"
                  : "/static/images/produtos/AbastecimentoDeSementes/beluga-02.jpg"
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
