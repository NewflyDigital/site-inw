import * as React from "react";
import { useEffect, useRef } from "react";
import Menu from "../components/menu";
import Rodape from "../components/rodape";
import RodapeNewFly from "../components/rodape-newfly";
import Whats from "../components/whats";
import styles from "../styles/Encontre.module.css";
import Link from "next/link";
import MapaBrasil from "../components/mapa";

export default function EncontreVendedor() {
  const representantes = [
    {
      uf: "RS",
      nome: "João Silva",
      empresa: "Agro Representações",
      telefone: "(51) 99999-9999",
      cidade: "Passo Fundo",
    },
    {
      uf: "RS",
      nome: "Adrinao Lima",
      empresa: "Agro Unidos",
      telefone: "(51) 99999-9999",
      cidade: "Caxias do Sul",
    },
    {
      uf: "SC",
      nome: "Carlos Mendes",
      empresa: "Sul Máquinas",
      telefone: "(48) 98888-7777",
      cidade: "Chapecó",
    },
    {
      uf: "PR",
      nome: "Marcos Souza",
      empresa: "AgroTech",
      telefone: "(41) 97777-6666",
      cidade: "Cascavel",
    },
  ];

  const [uf, setUf] = React.useState("");

  const representantesFiltrados = representantes.filter((r) => r.uf === uf);

  const mapaRef = useRef(null);

  useEffect(() => {
    window.document.body.style.backgroundColor = "#ffffff";
  }, []);

  const scrollMapa = () => {
    mapaRef.current.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <>
      <Menu />

      {/* HERO */}
      <section className={`${styles.background} `}>
        <div className={`${styles.interno} max-w-[80rem] pt-[10rem]`}>
          {/* TEXTO */}
          <div className="w-full max-w-[40rem] z-[1234] flex flex-col lg:text-left lg:items-start items-center justify-center lg:mt-[2rem] mt-[0rem]">
            <h1 className={styles.titulo}>
              Encontre <br /> um vendedor
            </h1>

            <h3 className={styles.subtitulo}>Quer saber onde estamos?</h3>

            <p className={styles.texto}>
              Selecione um estado e confira mais informações.
            </p>

            <button onClick={scrollMapa} className={styles.Botao}>
              selecione um estado
              <img src="/static/images/seta-abaixo.png" />
            </button>
          </div>

          {/* IMAGEM */}
          <div className={styles.heroImagem}>
            <img src="/static/images/banner-grande.png" />
          </div>
        </div>
      </section>

      {/* MAPA */}
      <section className={styles.mapaSection}>
        <div
          ref={mapaRef}
          className={`${styles.interno} max-w-[90rem] pt-[8rem]`}
        >
          <div className="w-full max-w-[30rem] flex flex-col items-start justify-center">
            <h2 className={styles.tituloMapa}>
              Clique no seu estado ou utilize a busca
            </h2>
            <div className={styles.listaRepresentantes}>
              {representantesFiltrados.length === 0 && (
                <p>Selecione um estado no mapa.</p>
              )}

              {representantesFiltrados.map((r, i) => (
                <div key={i} className={styles.cardRepresentante}>
                  <h3>{r.nome}</h3>

                  <p>{r.empresa}</p>

                  <p>{r.cidade}</p>

                  <a href={`tel:${r.telefone}`}>{r.telefone}</a>
                </div>
              ))}
            </div>
          </div>

          <div className="w-full max-w-[60rem] flex flex-col items-start justify-center"></div>
          <MapaBrasil handleOnClick={setUf} />
        </div>
      </section>

      <Rodape />
      <RodapeNewFly />
      <Whats />
    </>
  );
}
