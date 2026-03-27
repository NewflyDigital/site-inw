import * as React from "react";
import styles from "../styles/Rodape.module.css";
import { ThemeProvider, createTheme } from "@mui/material/styles";
import MuiAlert from "@mui/material/Alert";
import Link from "next/link";

const Alert = React.forwardRef(function Alert(props, ref) {
  return <MuiAlert elevation={6} ref={ref} variant="filled" {...props} />;
});

const themeOptions = {
  palette: {
    type: "light",
    primary: {
      main: "#c4c4c4",
    },
    secondary: {
      main: "#c4c4c4",
    },
  },
};

const theme = createTheme(themeOptions);

function Rodape() {
  return (
    <footer className={styles.background}>
      <div className={styles.interno}>
        <div className={styles.rodapePrincipal}>
          <div className={styles.colLogo}>
            <img
              src="/static/images/Logo.png"
              alt="Logo Flow"
              className={styles.logo}
            />
            <p>
              <b>Victor GraefF/RS</b>
              <br />
              RS 142 lote 01, KM 38
              <br />
              CEP:99350-000
            </p>
          </div>

          <div className={styles.divisor}></div>

          <div className={styles.links}>
            <div className={styles.coluna}>
              <h4>Menu</h4>
              <Link legacyBehavior href="/">
                <a>Início</a>
              </Link>
              <Link legacyBehavior href="/a-inw">
                <a>Sobre Nós</a>
              </Link>
              <Link legacyBehavior href="/encontre-um-vendedor">
                <a>Encontre um Vendedor</a>
              </Link>
              <Link legacyBehavior href="/implementos">
                <a>Nossos Implementos</a>
              </Link>
              <Link legacyBehavior href="/contato">
                <a>Contato</a>
              </Link>
            </div>
            <div className="w-full max-w-[25rem] flex flex-col items-start justify-center">
              <div className={styles.social}>
                <div className={styles.icones}>
                  <Link
                    legacyBehavior
                    href="https://www.instagram.com/inwsolucoes_/"
                  >
                    <a target="_blank">
                      <img src="/instagram-branco.png" alt="Instagram" />
                    </a>
                  </Link>
                  <Link
                    legacyBehavior
                    href="https://www.facebook.com/inwsolucoesind"
                  >
                    <a target="_blank">
                      <img src="/facebook-branco.png" alt="Facebook" />
                    </a>
                  </Link>
                  <Link
                    legacyBehavior
                    href="https://www.linkedin.com/company/inwsolucoes/"
                  >
                    <a target="_blank">
                      <img src="/linkedin-branco.png" alt="Facebook" />
                    </a>
                  </Link>
                </div>
                <p>
                  <strong>Siga a INW</strong>
                  <br />
                  nas redes Sociais
                </p>
              </div>
              <p className="mt-5 text-[15px] leading-[22px]">
                <b className="text-[18px]">Fale Conosco:</b>
                <br />
                (54) 9 9139-1183 - Comercial
                <br />
                (54) 3338-1010 - Fábrica
                <br />
                (54) 3338-1418 - Fábrica
              </p>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Rodape;
