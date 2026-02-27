import Link from "next/link";
import styles from "../styles/Banner.module.css";
import { useState } from "react";

import ModalOrcamento from "./modal";
import ModalVideo from "./video"; // Novo modal

function Banner() {
  const [showModal, setShowModal] = useState(false);
  const [showVideo, setShowVideo] = useState(false); // Novo estado

  const handleSubmit = (e) => {
    e.preventDefault();
    // Lógica do envio
    console.log({ nome, empresa, telefone, email, mensagem });
    // Fechar modal (opcional)
    setShowModal(false);
  };

  return (
    <section className={styles.background}>
      <div className={styles.interno}>
        <div className={styles.box}>
          <h2>
            somos a força do <i>agro</i> brasileiro
          </h2>

          {/* botões de vídeo e orçamento - descomentar quando necessário
          <span>
            <Link legacyBehavior href="/">
              <a>
                <button
                  className={styles.video}
                  onClick={() => setShowVideo(true)}
                >
                  VIDEO
                </button>
              </a>
            </Link>
            <Link legacyBehavior href="/">
              <a>
                <button
                  className={styles.orcamento}
                  onClick={() => setShowModal(true)}
                >
                  Solicitar orçamento
                </button>
              </a>
            </Link>
          </span>
       */}
        </div>
        <div className={styles.box2}>
          <p>
            Somos do mundo, mas nascemos no campo. Com base nos valores dos
            nossos fundadores, nos desenvolvemos e crescemos. Hoje, somos
            gigantes como o agro e queremos tornar todos à nossa volta grandes
            também.
          </p>
        </div>

        <div className={styles.div_seta_baixo}>
          <img
            src="/static/images/seta-baixo.png"
            alt="seta-baixo"
            style={{ width: "1.5rem" }}
          />
        </div>
      </div>

      <div className={styles.overlay}></div>

      <video
        className={styles.bgVideo}
        src="/static/video/video.mp4"
        autoPlay
        muted
        loop
        playsInline
      />
      {/* Modal de vídeo */}
      <ModalVideo open={showVideo} onClose={() => setShowVideo(false)} />
      {/* Modal */}
      <ModalOrcamento open={showModal} onClose={() => setShowModal(false)} />
    </section>
  );
}

export default Banner;
