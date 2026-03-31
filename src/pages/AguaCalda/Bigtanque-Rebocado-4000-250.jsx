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
          <h2 className="uppercase">Big tanque Rebocado 4000-250</h2>
        </div>
      </section>

      {/* IMAGEM */}
      <section className={styles.background}>
        <div className={styles.interno2}>
          <img
            className={styles.produto}
            src="/static/images/produtos/AguaECalda/Bigtanque-Rebocado-4000-250-00.png"
          />
        </div>
      </section>

      {/* DESCRIÇÃO */}
      <section className={styles.background}>
        <div className={styles.interno}>
          <div className={styles.box3}>
            <h2 className={styles.titulo}>BIG TANQUE REBOCADO 4000-250</h2>

            <p className={styles.paragrafo}>
              O Big Tanque Rebocado 4000/250 foi desenvolvido para operações que
              exigem preparo e transporte de calda pronta com eficiência no
              campo. Com tanque principal em polietileno de 4.000 litros e
              pré-misturador integrado, o equipamento facilita o processo de
              mistura e abastecimento de pulverizadores agrícolas.
            </p>

            <p className={styles.paragrafo}>
              Sua estrutura robusta com chassi em aço e pneus de alta flutuação
              garante estabilidade durante o transporte e menor compactação do
              solo. O sistema de bombeamento com motor diesel proporciona
              autonomia e alto desempenho nas operações.
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
              src="/static/images/produtos/AguaECalda/Bigtanque-Rebocado-4000-250-01.jpg"
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
              src="/static/images/produtos/AguaECalda/Bigtanque-Rebocado-4000-250-02.jpg"
            />
          </div>

          <div className={`${styles.box} text-center`}>
            <h2 className={styles.titulo}>Principais Características</h2>

            <p className={styles.paragrafo}>
              • Tanque de <strong>4.000 litros</strong> em polietileno
            </p>

            <p className={styles.paragrafo}>
              • Pré-misturador de <strong>250 litros</strong>
            </p>

            <p className={styles.paragrafo}>
              • Motor diesel com partida elétrica
            </p>

            <p className={styles.paragrafo}>
              • Bomba de 2" em polipropileno
            </p>

            <p className={styles.paragrafo}>
              • Pneus de alta flutuação
            </p>

            <p className={styles.paragrafo}>
              • Escada e régua de nível
            </p>
            <p className={styles.paragrafo}>
              • Pé de apoio 
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
                ? "O Big Tanque Rebocado 4000/250 é ideal para operações agrícolas que demandam rapidez e eficiência no preparo de calda pronta. Seu sistema integrado permite realizar a mistura e o transporte de forma prática, garantindo maior produtividade no campo."
                : "O equipamento permite agilizar o preparo e o abastecimento de pulverizadores, reduzindo o tempo de parada das operações agrícolas. Sua estrutura resistente e o sistema de bombeamento garantem confiabilidade e eficiência, contribuindo para melhorar o desempenho das atividades no campo."}
            </p>
          </div>

          <div className={styles.box2}>
            <img
              className={styles.descricao}
              src={
                activeTab === "descricao"
                  ? "/static/images/produtos/AguaECalda/Bigtanque-Rebocado-4000-250-03.jpg"
                  : "/static/images/produtos/AguaECalda/Bigtanque-Rebocado-4000-250-02.jpg"
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
