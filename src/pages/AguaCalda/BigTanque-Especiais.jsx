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
          <h2 className="uppercase">Big Tanque Especiais </h2>
        </div>
      </section>

      {/* IMAGEM */}
      <section className={styles.background}>
        <div className={styles.interno2}>
          <img
            className={styles.produto}
            src="/static/images/produtos/AguaECalda/BigTanque-Especiais-00.jpg"
          />
        </div>
      </section>

      {/* DESCRIÇÃO */}
      <section className={styles.background}>
        <div className={styles.interno}>
          <div className={styles.box3}>
            <h2 className={styles.titulo}>BIG TANQUE ESPECIAIS</h2>

            <p className={styles.paragrafo}>
              A linha Big Tanque Projetos Especiais foi desenvolvida para
              atender operações agrícolas que demandam soluções personalizadas
              no transporte e preparo de água, caldas químicas e insumos
              biológicos. Utilizando tecnologia avançada em polietileno
              rotomoldado, os tanques oferecem alta resistência, durabilidade e
              segurança para diferentes aplicações no campo.{" "}
            </p>

            <p className={styles.paragrafo}>
              Com design policêntrico exclusivo e estrutura modular, a linha
              permite diversas configurações de capacidade e equipamentos,
              atendendo desde operações simples até processos logísticos mais
              complexos. Essa flexibilidade garante eficiência operacional e
              adaptação às necessidades específicas de cada produtor. 
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
              src="/static/images/produtos/AguaECalda/BigTanque-Especiais-01.jpg"
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
              src="/static/images/produtos/AguaECalda/BigTanque-Especiais-02.jpg"
            />
          </div>

          <div className={`${styles.box} text-center`}>
            <h2 className={styles.titulo}>Principais Características</h2>

            <p className={styles.paragrafo}>
              • Estrutura modular adaptável
            </p>

            <p className={styles.paragrafo}>
              • Tanques em polietileno rotomoldado
            </p>

            <p className={styles.paragrafo}>
              • Alta resistência química
            </p>

            <p className={styles.paragrafo}>
              • Peça única sem emendas ou soldas
            </p>

            <p className={styles.paragrafo}>
              • Motor diesel de <strong>7 cv</strong>
            </p>

            <p className={styles.paragrafo}>
              • Possibilidade de versões isotérmicas
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
                ? "Os modelos da linha Big Tanque Projetos Especiais oferecem soluções completas para transporte, armazenamento e preparo de líquidos utilizados nas operações agrícolas. Desenvolvidos com tecnologia exclusiva INW, os tanques são fabricados em material atóxico, resistente e com excelente durabilidade."
                : "A linha Big Tanque Especiais oferece diversos benefícios para as operações agrícolas, destacando-se pela maior durabilidade do equipamento, segurança no transporte de insumos e versatilidade para diferentes aplicações no campo. Além disso, contribui para a redução de perdas operacionais, garantindo alta confiabilidade nas operações agrícolas e mais eficiência no manejo diário."}
            </p>
          </div>

          <div className={styles.box2}>
            <img
              className={styles.descricao}
              src={
                activeTab === "descricao"
                  ? "/static/images/produtos/AguaECalda/BigTanque-Especiais-03.jpg"
                  : "/static/images/produtos/AguaECalda/BigTanque-Especiais-02.jpg"
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
