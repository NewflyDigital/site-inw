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
      uf: "MS",
      nome: "João / Adriano",
      empresa: "CSR Equipamentos",
      telefone: "(67)99869-0008 / (67)9888-0006",
      cidade: "Maracaju",
      email: "senaimplementos@gmail.com",
      area: "Todo estado",
      cnpj: "",
    },
    {
      uf: "PA",
      nome: "João",
      empresa: "Sena Implementos",
      telefone: "(91)99107-0055",
      cidade: "Marituba",
      email: "senaimplementos@gmail.com",
      area: "Região do Mapa",
      cnpj: "",
    },
    {
      uf: "RS",
      nome: "Eder / Emilene",
      empresa: "Schuhmacher Representações",
      telefone: "(53)98454-5493",
      cidade: "Pelotas - RS",
      email: "ederschuhmacher1976@gmail.com",
      area: "Sul do RS (Mapa)",
      cnpj: "38.974.090/0001-94",
    },
    {
      uf: "RS",
      nome: "Andriel",
      empresa: "SB Representações",
      telefone: "(54) 99979-4746",
      cidade: "Carazinho",
      email: "vendas@strack-rs.com.br",
      area: "Oeste do RS (Mapa)",
      cnpj: "39.967.545/0001-07",
    },
    {
      uf: "PR",
      nome: "Mauro",
      empresa: "Safra Maquinas Agricolas",
      telefone: "(49) 99916-9956",
      cidade: "Cascavel",
      email: "safraadm@outlook.com",
      area: "Oeste e Norte do PR (Mapa)",
      cnpj: "53.244.192/0001-48",
    },
    {
      uf: "GO",
      nome: "Carlos",
      empresa: "Agromape",
      telefone: "(64)99987-5275",
      cidade: "Rio Verde",
      email: "agromape@uol.com.br",
      area: "Sul de Goiás (Mapa)",
      cnpj: "13.146.016/0001-59",
    },
    {
      uf: "PA",
      nome: "Rubenilson / Oswaldo",
      empresa: "Rota Implementos",
      telefone: "(91)98345-8075",
      cidade: "Paragominas",
      email: "rubenislncase@hotmail.com",
      area: "Centro Sul do Pará (Mapa)",
      cnpj: "36.058.412/0001-20",
    },
    {
      uf: "MG",
      nome: "Daniel",
      empresa: "GDD Serviços e Representações",
      telefone: "(35)9109-4149",
      cidade: "Varginha - MG",
      email: "daniel_a_o@icloud.com",
      area: "Região 35 e 37 de Minas",
      cnpj: "46.469.533/0001-18",
    },
    {
      uf: "MT",
      nome: "Vanderlei",
      empresa: "VSG",
      telefone: "(66) 9936-5129",
      cidade: "Sinop - MT",
      email: "vanderlei.vsg75@gmail.com",
      area: "Norte de MT (Mapa)",
      cnpj: "37.700.376/0001-19",
    },
    {
      uf: "SP",
      nome: "Leonardo",
      empresa: "Abrahão Máquinas",
      telefone: "(16)98113-1342",
      cidade: "Ituverava - SP",
      email: "veterinario.abrahao@gmail.com",
      area: "Metade Oeste SP (Mapa)",
      cnpj: "54.494.056/0001-79",
    },
    {
      uf: "RO",
      nome: "Marcos / Fernando",
      empresa: "",
      telefone: "(65)99330-4293",
      cidade: "Porto Velho - RO",
      email: "mf743517@gmail.com",
      area: "Todo estado de Rondônia",
      cnpj: "63.378.783/0001-61",
    },
    {
      uf: "TO",
      nome: "Lauro",
      empresa: "Amagril Máquinas",
      telefone: "(63)99985-4825",
      cidade: "Palmas",
      email: "amagrilgerencia@gmail.com",
      area: "Todo estado Tocantins",
      cnpj: "24.684.595/0001-00",
    },
    {
      uf: "MG",
      nome: "Mineirinho / Virgílio",
      empresa: "Uniparts Máquinas",
      telefone: "(34)99925-5325 / (34)99819-4487",
      cidade: "Uberlândia",
      email: "",
      area: "Triângulo e Vale do Parnaíba",
      cnpj: "",
    },
    {
      uf: "MT",
      nome: "Diego / Valdeci",
      empresa: "Mercadão Agricola",
      telefone: "(66) 9969-9590",
      cidade: "Rondonópolis",
      email: "",
      area: "Rondonópolis, Itiquira, Santo Antônio do Leverger, Jaciara, Juscimeira, Dom Aquino, São Pedro da Cipa, Guiratinga, Tesouro, Pedra Preta, Alto Garças, Alto Araguaia, Poxoréu, Primavera do Leste, Campo Verde, Chapada dos Guimarães",
      cnpj: "03.162.430/0001-06",
    },
  ];

  const contatoINW = {
    nome: "INW Implementos",
    cidade: "Victor Graeff - RS",
    endereco: "RS 142 lote 01, KM 38",
    cep: "CEP: 99350-000",
    telefones: ["(54) 9 9139-1183", "(54) 3338-1010", "(54) 3338-1418"],
  };

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
          className={`${styles.interno} max-w-[95rem] pt-[8rem]`}
        >
          <div className="w-full max-w-[50rem] flex flex-col items-start justify-center">
            <h2 className={styles.tituloMapa}>
              Clique no seu estado ou utilize a busca
            </h2>
            <div className={styles.listaRepresentantes}>
              {!uf && <p>Selecione um estado no mapa.</p>}

              {uf && representantesFiltrados.length === 0 && (
                <div className={styles.cardRepresentante}>
                  <h3>{contatoINW.nome}</h3>

                  <p>{contatoINW.cidade}</p>
                  <p>{contatoINW.endereco}</p>
                  <p>{contatoINW.cep}</p>

                  {contatoINW.telefones.map((tel, i) => (
                    <a key={i} href={`tel:${tel.replace(/\s/g, "")}`}>
                      {tel}
                    </a>
                  ))}
                </div>
              )}

              {representantesFiltrados.map((r, i) => (
                <div key={i} className={styles.cardRepresentante}>
                  <h3>{r.nome}</h3>

                  {r.empresa && <p>{r.empresa}</p>}

                  {r.cidade && <p>{r.cidade}</p>}

                  {r.area && (
                    <p>
                      <strong>Área:</strong> {r.area}
                    </p>
                  )}

                  {r.cnpj && (
                    <p>
                      <strong>CNPJ:</strong> {r.cnpj}
                    </p>
                  )}

                  {r.telefone && (
                    <a href={`tel:${r.telefone.replace(/\s/g, "")}`}>
                      {r.telefone}
                    </a>
                  )}

                  {r.email && <a href={`mailto:${r.email}`}>{r.email}</a>}
                </div>
              ))}
            </div>
          </div>

          <div className="w-full max-w-[40rem] flex flex-col items-start justify-center">
            <MapaBrasil handleOnClick={setUf} />
          </div>
        </div>
      </section>

      <Rodape />
      <RodapeNewFly />
      <Whats />
    </>
  );
}
