import * as React from "react";
import styles from "../styles/Menu.module.css";
import Link from "next/link";

function Menu() {
  React.useEffect(() => {
    const btnMobile = document.getElementById(`${styles.btn_mobile}`);
    btnMobile.addEventListener("click", toggleMenu);
  }, []);

  React.useEffect(() => {
    const btnMobile = document.getElementById(`${styles.btn_mobile}`);
    btnMobile.addEventListener("click", toggleMenu);

    window.addEventListener("scroll", () => {
      const winScroll =
        document.body.scrollTop || document.documentElement.scrollTop;

      const menu = document.getElementById(styles.menuheader);

      if (winScroll > 0) {
        menu.classList.add(styles["menu-alternative"]);
      } else {
        menu.classList.remove(styles["menu-alternative"]);
      }
    });
  }, []);

  const [showSubMenu, setShowSubMenu] = React.useState(false);

  const [menuOpen, setMenuOpen] = React.useState(false);

  function handleMouseEnter() {
    setShowSubMenu(true);
  }

  function handleMouseLeave() {
    setShowSubMenu(false);
  }

  function toggleMenu() {
    const nav = document.getElementById(`${styles.nav}`);
    nav.classList.toggle(styles.active);
  }

  return (
    <div id={styles.menuheader} className={styles.header}>
      <div className={`${styles.interno}`}>
        <Link legacyBehavior href="/">
          <a className={styles.logo}>
            <img src="/static/images/logo.png" alt="Logo" />
          </a>
        </Link>

        <button id={`${styles.btn_mobile}`}>
          <span id={`${styles.hamburguer}`}></span>
        </button>

        <ul
          id={`${styles.nav}`}
          className={`${styles.menu} ${styles.navbar}  `}
        >
          <li className={styles.li}>
            <Link legacyBehavior href="/">
              <a>Home</a>
            </Link>
          </li>
          <li className={styles.li}>
            <Link legacyBehavior href="/encontre-um-vendedor">
              <a>Encontre um vendedor</a>
            </Link>
          </li>

          <li className={styles.li}>
            <Link legacyBehavior href="/implementos">
              <a>Nossos Implementos</a>
            </Link>
          </li>

          <li className={styles.li}>
            <Link legacyBehavior href="/contato">
              <a>Contato</a>
            </Link>
          </li>
        </ul>
        <button
          className={`${styles.hamburger} ${menuOpen ? styles.active : ""}`}
          onClick={() => setMenuOpen(!menuOpen)}
        >
          <span></span>
          <span></span>
          <span></span>
        </button>
      </div>

      <div className={`${styles.overlayMenu} ${menuOpen ? styles.show : ""}`}>
        <div className={styles.overlayContent}>
          {/* COLUNA ESQUERDA */}
          <div className={styles.left}>
            <h2>
              implementos agrícolas de <i> alta performance</i>
            </h2>
            <p>Implementos agrícolas de alta performance</p>

            <div className={styles.divider}></div>

            <div className={styles.buttons}>
              <Link className={styles.orcamento} href="/contato">
                Orçamento <img src="/static/images/seta-vertical-branca.png" />
              </Link>
              <Link className={styles.contato} href="/contato">
                Contato <img src="/static/images/seta-vertical-branca.png" />
              </Link>
            </div>

            <div className={styles.social}>
              <Link
                legacyBehavior
                href="https://www.instagram.com/inwsolucoes_/"
              >
                <a target="_blank">
                  <img src="/instagram.png" alt="Instagram" />
                </a>
              </Link>
              <Link
                legacyBehavior
                href="https://www.facebook.com/inwsolucoesind"
              >
                <a target="_blank">
                  <img src="/facebook.png" alt="Facebook" />
                </a>
              </Link>
              <Link
                legacyBehavior
                href="https://www.linkedin.com/company/inwsolucoes/"
              >
                <a target="_blank">
                  <img src="/linkedin.png" alt="LinkedIn" />
                </a>
              </Link>
            </div>
          </div>

          {/* LINHA VERTICAL */}
          <div className={styles.verticalDivider}></div>

          {/* COLUNA DIREITA */}
          <div className={styles.right}>
            <Link href="/implementos" className={styles.menuItem}>
              <div className={`${styles.card} ${styles.img1}`}>
                <h4>Nossos Implementos</h4>
                <p>Conheça a linha completa de soluções</p>
                <img src="/static/images/seta-vertical.png" />
              </div>
            </Link>

            <Link href="/a-inw" className={styles.menuItem}>
              <div className={`${styles.card} ${styles.img2}`}>
                <h4>Empresa</h4>
                <p>Conheça nossa história</p>
                <img src="/static/images/seta-vertical.png" />
              </div>
            </Link>

              <Link href="/contato" className={styles.menuItem}>
              <div className={`${styles.card} ${styles.img3}`}>
                <h4>Fale Conosco</h4>
                <p>Entre em contato que vamos te atender e tirar suas dúvidas.</p>
                <img src="/static/images/seta-vertical.png" />
              </div>
            </Link>

          </div>
        </div>
      </div>
    </div>
  );
}

export default Menu;
