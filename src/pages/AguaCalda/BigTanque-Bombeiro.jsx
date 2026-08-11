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
          <h2 className="uppercase">Big Tanque Bombeiro </h2>
        </div>
      </section>

      {/* IMAGEM */}
      <section className={styles.background}>
        <div className={styles.interno2}>
          <img
            className={styles.produto}
            src="/static/images/produtos/AguaECalda/bigtanque-bombeiro-00.jpg"
          />
        </div>
      </section>

      {/* DESCRIÇÃO */}
      <section className={styles.background}>
        <div className={styles.interno}>
          <div className={styles.box3}>
            <h2 className={styles.titulo}>BIG TANQUE BOMBEIRO</h2>

            <p className={styles.paragrafo}>
              O Big Tanque Bombeiro foi desenvolvido pela INW Soluções para
              atender operações de combate a incêndio no agronegócio com máxima
              eficiência, autonomia e segurança. Projetado para atuar em
              canaviais, áreas de colheita, silos e grandes ativos agrícolas, o
              equipamento oferece alta capacidade operacional e rápida resposta
              em situações críticas.
            </p>

            <p className={styles.paragrafo}>
              Com estrutura robusta em polietileno rotomoldado e compatibilidade
              com sistemas Roll-On Roll-Off, o Big Tanque Bombeiro transforma
              caminhões compatíveis em poderosas unidades móveis de combate a
              incêndio. Além disso, sua versatilidade permite utilização em
              diferentes operações, como transporte de água, limpeza de áreas e
              umectação de estradas em períodos sem ocorrência de incêndios.
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
              src="/static/images/produtos/AguaECalda/bigtanque-bombeiro-01.jpg"
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
              src="/static/images/produtos/AguaECalda/bigtanque-bombeiro-02.jpg"
            />
          </div>

          <div className={`${styles.box} text-center`}>
            <h2 className={styles.titulo}>Principais Características</h2>

            <p className={styles.paragrafo}>
              • Capacidade de até <strong>19.000 litros</strong> de água
            </p>

            <p className={styles.paragrafo}>
              • Canhão monitor com alcance vertical de até{" "}
              <strong>12 metros</strong>
            </p>

            <p className={styles.paragrafo}>
              • Jato de combate com alcance de até <strong>50 metros</strong>
            </p>

            <p className={styles.paragrafo}>
              • Sistema com braço hidráulico e controle remoto
            </p>

            <p className={styles.paragrafo}>
              • Motor independente para operação contínua
            </p>

            <p className={styles.paragrafo}>
              • Compatível com sistema Roll-On Roll-Off
            </p>

            <p className={styles.paragrafo}>
              • Tanque auxiliar para aplicação de LGE
            </p>

            <p className={styles.paragrafo}>
              • Estrutura em polietileno rotomoldado de alta resistência
            </p>

            <p className={styles.paragrafo}>
              • Uso multifuncional para operações agrícolas
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

            <Link legacyBehavior href="/static/docs/Catalago-INW-2026.pdf">
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
                ? "O Big Tanque Bombeiro da INW Soluções foi desenvolvido para operações de combate a incêndio no agronegócio, oferecendo alta autonomia, eficiência e segurança. Com capacidade de até 19 mil litros de água, estrutura robusta em polietileno rotomoldado e compatibilidade com sistemas Roll-On Roll-Off, o equipamento proporciona atuação rápida e estratégica em canaviais, áreas de colheita, silos e grandes ativos agrícolas."
                : "O Big Tanque Bombeiro oferece maior eficiência no combate a incêndios, permitindo operações mais seguras e com ampla autonomia em áreas remotas. Seu sistema com controle remoto e braço hidráulico reduz riscos operacionais, enquanto o canhão monitor garante maior alcance e precisão no combate às chamas. Além disso, sua versatilidade permite utilização em diferentes aplicações agrícolas, como transporte de água, limpeza de áreas e umectação de estradas, proporcionando excelente custo-benefício e alta produtividade operacional."}
            </p>
          </div>

          <div className={styles.box2}>
            <img
              className={styles.descricao}
              src={
                activeTab === "descricao"
                  ? "/static/images/produtos/AguaECalda/bigtanque-bombeiro-01.jpg"
                  : "/static/images/produtos/AguaECalda/bigtanque-bombeiro-02.jpg"
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

      <div className={styles.whats}>
        <Link
          legacyBehavior
          href="https://api.whatsapp.com/send?phone=5554991391183&text=Ol%C3%A1%2C%20vim%20pelo%20site%20e%20tenho%20interesse%20no%20produto%20Big%20Tanque%20Bombeiro"
        >
          <a target="_blank">
            <img src="/whatsapp.png" alt="Whats App" />
          </a>
        </Link>
      </div>

      <Whats />
      <Rodape />
      <RodapeNewFly />
    </>
  );
}
