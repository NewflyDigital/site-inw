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
          <h2>Plain INW 3650 / 4260</h2>
        </div>
      </section>

      {/* IMAGEM PRINCIPAL */}
      <section className={styles.background}>
        <div className={styles.interno2}>
          <img
            className={styles.produto}
            src="/static/images/produtos/MovimentacaoDeSolo/PlainINW.png"
          />
        </div>
      </section>

      {/* DESCRIÇÃO */}
      <section className={styles.background}>
        <div className={styles.interno}>
          <div className={styles.box3}>
            <h2 className={styles.titulo}>Plain INW 3650 / 4260</h2>

            <p className={styles.paragrafo}>
              A Plain INW 3650 e 4260 é uma plaina traseira de arrasto
              desenvolvida para operações de movimentação e nivelamento de solo
              com alta precisão e robustez. Projetada para atender as exigências
              do campo, o equipamento oferece grande capacidade de trabalho e
              controle total da operação.
            </p>

            <p className={styles.paragrafo}>
              Com chassi longo e reforçado, sistema de movimentação triplo
              hidráulico e lâmina com design côncavo, a Plain INW permite
              regulagens precisas de giro, inclinação e altura da lâmina,
              garantindo eficiência em serviços de terraplanagem, nivelamento de
              estradas rurais e manutenção de áreas agrícolas.
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
              src="/static/images/produtos/MovimentacaoDeSolo/Plain-INW.jpg"
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
              src="/static/images/produtos/MovimentacaoDeSolo/Plain-INW.jpg"
            />
          </div>

          <div className={`${styles.box} text-center`}>
            <h2 className={styles.titulo}>Principais Características</h2>

            <p className={styles.paragrafo}>
              • Lâmina com <strong>design côncavo de alta eficiência</strong>
            </p>
            <p className={styles.paragrafo}>
              • Largura da lâmina de <strong>3650 mm ou 4260 mm</strong>
            </p>
            <p className={styles.paragrafo}>
              • <strong>94° de giro da lâmina</strong>
            </p>
            <p className={styles.paragrafo}>
              • Até <strong>40° de inclinação lateral</strong>
            </p>
            <p className={styles.paragrafo}>
              • Sistema de movimento triplo hidráulico
            </p>
            <p className={styles.paragrafo}>
              • Navalhas tipo patrola para maior desempenho
            </p>
            <p className={styles.paragrafo}>
              • Rodado com pneus 12.4/24
            </p>
            <p className={styles.paragrafo}>
              • Chassi longo e robusto para maior estabilidade 
            </p>
            <p className={styles.paragrafo}>
              • Engate tipo rótula com regulagem de altura 
            </p>
            <p className={styles.paragrafo}>
              • Sistema de acionamento hidráulico duplo 
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

            <Link legacyBehavior href="https://INWSOLUCOES.short.gy/SOLO_INW">
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
                ? "A Plain INW foi projetada para oferecer alto desempenho em trabalhos de movimentação e nivelamento de solo. Seu sistema hidráulico permite ajustes precisos de giro e inclinação da lâmina, proporcionando maior controle e eficiência nas operações. A estrutura robusta e o chassi reforçado garantem durabilidade e estabilidade durante o trabalho, mesmo em condições exigentes do campo."
                : "A Plain INW proporciona maior produtividade nas operações de nivelamento e manutenção de estradas rurais, permitindo ajustes rápidos e precisos diretamente da cabine do operador. Com seu sistema hidráulico completo e estrutura reforçada, o equipamento oferece mais segurança, eficiência e durabilidade, tornando-se uma solução confiável para movimentação de solo em propriedades agrícolas e obras rurais."}
            </p>
          </div>

          <div className={styles.box2}>
            <img
              className={styles.descricao}
              src={
                activeTab === "descricao"
                  ? "/static/images/produtos/MovimentacaoDeSolo/plain-inw.jpg"
                  : "/static/images/produtos/MovimentacaoDeSolo/plain-inw-01.jpg"
              }
            />
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className={styles.footer}>
        <div className={styles.interno}>
          <div className={styles.box3}>
            <h2 className={styles.titulo3}>
              Somos o pit stop do Agro
            </h2>
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
