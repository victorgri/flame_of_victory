export const About = () => {
  const viewWidth = window.innerWidth;
  return (
    <section className="about" id="about">
      <div className="container">
        <div className="about__inner">
          <h3 className="section__title">About &gt;</h3>

          <div
            className="about__bottom"
          >
            <img
              className="about__img"
              src="./img/fond-about.jpg"
              alt="photo"
              style={viewWidth > 768 ? { width: "600px" } : { width: "100%" }}
            />
            <div className="about__info">
              <h1 className="about__title">Про нас</h1>
              <p className="about__text">
                Вогонь перемоги — український благодійний фонд. Наша діяльність
                спрямована на реалізацію дій, що призводять до соціального,
                економічного та духовного покращення стану обʼєднаних
                територіальних громад правобережної частини Херсонської області.
                <br/>
                Наша місія — допомога громадянам на пошкоджених територіях
                Херсонської області. Залучення ресурсів і організація зборів для
                медиків та цивільного населення. Відбудова зруйнованих будівель.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
