import React, { useContext } from "react";
import { store } from "../../Context/context";

function Home() {
  const {
    state: { lang },
  } = useContext(store);
  return (
    <>
      <section>
        <div className="container">
          <h2>Home</h2>
          <p className="rumiy">
            {lang === "uz"
              ? "Ilm — narsalarni inson aqli yordami bilan o'rganishlikdir. Haqiqatni ochinglar, to'g'ri yo'ldan yuringlar. Bir-biringizdan ilm o'rganib, kamol topishingiz uchun dil pardasini ochib tashlanglar. Quyosh ko'rlarga ko'rinmay berkinganidek, johillarga ham dunyoda to'g'ri yo'l belgilari ko'rinmay qoladi."
              : lang === "ru"
              ? "Наука - это изучение вещей c помощью человеческого разума. Открой правду, иди по правильному пути. Откройте завесу сердца, чтобы вы могли учиться друг y друга и обрести совершенство. Как солнце скрывается от слепых, так и знаки правильного пути в мире остаются невидимыми для невежд."
              : lang === "eng"
              ? "Science is the study of things with the help of the human mind. Open the truth, follow the right path. Open the veil of the heart so that you can learn from each other and find perfection. Just as the sun hides itself from the blind, so the signs of the right path in the world remain invisible to the ignorant."
              : ""}
          </p>
        </div>
      </section>
    </>
  );
}

export default Home;
