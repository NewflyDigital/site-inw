import styles from "../../styles/Produto.module.css";
import { useState } from "react";
import Menu from "../../components/menu";
import Rodape from "../../components/rodape";
import RodapeNewFly from "../../components/rodape-newfly";
import Whats from "../../components/whats";
import Link from "next/link";

export default function Canudo1300() {
  const [showVideo, setShowVideo] = useState(false);
  const [activeTab, setActiveTab] = useState("descricao");

  return (
    <>
      <Menu />

      {/* HERO */}
      <section className={styles.backgroundimg}>
        <div className={styles.box}>
          <span>Excelência em Abastecimento</span>
          <h2>CANUDO 1.300</h2>
        </div>
      </section>

      {/* IMAGEM PRINCIPAL */}
      <section className={styles.background}>
        <div className={styles.interno2}>
          <img
            className={styles.produto}
            src="/static/images/produtos/canudo-1300.png"
          />
        </div>
      </section>

      {/* DESCRIÇÃO */}
      <section className={styles.background}>
        <div className={styles.interno}>
          <div className={styles.box3}>
            <h2 className={styles.titulo}>O CANUDO 1.300</h2>

            <p className={styles.paragrafo}>
              O Canudo 1.300 representa uma solução tecnológica superior para o
              abastecimento de fertilizantes, desenvolvido para otimizar as
              operações agrícolas com precisão, rapidez e máxima eficiência no
              campo.
            </p>

            <p className={styles.paragrafo}>
              Com capacidade de descarga de até{" "}
              <strong>1.300 kg por minuto</strong>, o equipamento garante
              agilidade no abastecimento de plantadeiras e adubadeiras,
              reduzindo significativamente o tempo de parada das operações.
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
              src="/static/images/Produtos/Canudo-1300/Canudo-01.jpeg"
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
              src="/static/images/Produtos/Canudo-1300/Canudo-02.jpeg"
            />
          </div>

          <div className={`${styles.box} text-center`}>
            <h2 className={styles.titulo}>Principais Características</h2>

            <p className={styles.paragrafo}>
              • Capacidade de descarga de até <strong>1.300 kg/min</strong>
            </p>

            <p className={styles.paragrafo}>
              • Tubo horizontal extensível de <strong>4,6 metros</strong>
            </p>

            <p className={styles.paragrafo}>
              • Movimento angular de <strong>90º</strong>
            </p>

            <p className={styles.paragrafo}>
              • Sistema telescópico para direcionamento preciso
            </p>

            <p className={styles.paragrafo}>
              • Acionamento por <strong>controle remoto</strong>
            </p>

            <p className={styles.paragrafo}>
              • Compatível com caminhões Toco, Truck, Semi-reboque e Roll-on
              Roll-off
            </p>
          </div>
        </div>
      </section>

      {/* BARRA DOWNLOAD */}
      <section className={styles.background}>
        <div className={styles.barra}>
          <div>Tecnologia e eficiência para sua operação agrícola</div>

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
                ? "O Canudo 1.300 foi projetado para aumentar a produtividade no campo, oferecendo alta capacidade de descarga e facilidade de operação. Seu sistema hidráulico completo aliado ao controle remoto garante praticidade, precisão e eficiência no abastecimento de fertilizantes."
                : "O equipamento reduz significativamente o tempo de abastecimento, melhora o fluxo de trabalho nas operações agrícolas e oferece versatilidade para diferentes aplicações. Sua estrutura robusta garante durabilidade e confiabilidade mesmo em operações intensas."}
            </p>
          </div>

          <div className={styles.box2}>
            <img
              className={styles.descricao}
              src={
                activeTab === "descricao"
                  ? "/static/images/Produtos/Canudo-1300/Canudo-01.jpeg"
                  : "/static/images/Produtos/Canudo-1300/Canudo-02.jpeg"
              }
            />
          </div>
        </div>
      </section>

      {/* VIDEO 
      <section className={styles.background}>
        <div className={styles.interno3}>
          <div className={styles.box3}></div>

          <div className={styles.box2}>
            {showVideo ? (
              <video width="1300" height="516" controls autoPlay>
                <source
                  src="/static/video/canudo1300.mp4"
                  type="video/mp4"
                />
              </video>
            ) : (
              <img
                src="/static/images/play.png"
                alt="Play"
                onClick={() => setShowVideo(true)}
                style={{ cursor: "pointer" }}
              />
            )}
          </div>
        </div>
      </section> */}

      {/* CTA FINAL */}
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
