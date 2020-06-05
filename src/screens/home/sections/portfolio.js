import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Card from "../../../components/card";

function Portfolio({ localization }) {
  return (
    <section id="works" className="portfolio section">
      <span className="portfolio__title">
        {localization.worksTitle}
        <span className="portfolio__title--tiny">
          {localization.worksDescription}
        </span>
      </span>
      <div className="portfolio__timeline portfolio__timeline--left">
        <div className="portfolio__timeline__year portfolio__timeline__year--orange">
          <span className="text">2016</span>
          <hr />
        </div>
        <div className="portfolio__timeline__content">
          <Card
            description={localization.atanchaDesc}
            link=""
            linkName={localization.seeMore}
            icons={[
              <FontAwesomeIcon icon={["fab", "php"]} />,
              <FontAwesomeIcon icon={["fab", "js"]} />,
              <FontAwesomeIcon icon={["fab", "html5"]} />,
              <FontAwesomeIcon icon={["fab", "css3"]} />,
              <FontAwesomeIcon icon={["fas", "map-marked-alt"]} />,
            ]}
            img="/images/atancha.png"
            imgBackground="/images/inti.png"
            title="1. Atancha-Omakon"
          />
          <Card
            description={localization.agroInfoDesc}
            link="http://agroinfo.inti.gob.ve/"
            linkName={localization.seeMore}
            icons={[
              <FontAwesomeIcon icon={["fab", "php"]} />,
              <FontAwesomeIcon icon={["fab", "js"]} />,
              <FontAwesomeIcon icon={["fab", "html5"]} />,
              <FontAwesomeIcon icon={["fab", "css3"]} />,
            ]}
            img="/images/inti.png"
            imgBackground="/images/inti.png"
            title="2. Agroinfo"
          />
          <Card
            description={localization.intiApiDesc}
            link=""
            linkName={localization.seeMore}
            icons={[
              <FontAwesomeIcon icon={["fab", "php"]} />,
              <FontAwesomeIcon icon={["fab", "js"]} />,
              <FontAwesomeIcon icon={["fab", "html5"]} />,
              <FontAwesomeIcon icon={["fab", "css3"]} />,
            ]}
            img="/images/inti.png"
            imgBackground="/images/inti.png"
            title="3. Inti API"
          />
        </div>
      </div>
      <div className="portfolio__timeline portfolio__timeline--rigth">
        <div className="portfolio__timeline__year portfolio__timeline__year--aqua">
          <span className="text">2017</span>
          <hr />
        </div>
        <div className="portfolio__timeline__content">
          <Card
            description={localization.seeMore}
            link=""
            linkName={localization.seeMore}
            icons={[
              <FontAwesomeIcon icon={["fab", "php"]} />,
              <FontAwesomeIcon icon={["fab", "js"]} />,
              <FontAwesomeIcon icon={["fab", "html5"]} />,
              <FontAwesomeIcon icon={["fab", "css3"]} />,
              <FontAwesomeIcon icon={["fab", "laravel"]} />,
              <FontAwesomeIcon icon={["fab", "vuejs"]} />,
            ]}
            img="/images/default.png"
            imgBackground="/images/default.png"
            title="4. Kromium"
          />
        </div>
      </div>
      <div className="portfolio__timeline portfolio__timeline--left">
        <div className="portfolio__timeline__year portfolio__timeline__year--purple">
          <span className="text">2018</span>
          <hr />
        </div>
        <div className="portfolio__timeline__content">
          <Card
            description={localization.seeMore}
            link=""
            linkName={localization.seeMore}
            icons={[
              <FontAwesomeIcon icon={["fab", "php"]} />,
              <FontAwesomeIcon icon={["fab", "js"]} />,
              <FontAwesomeIcon icon={["fab", "html5"]} />,
              <FontAwesomeIcon icon={["fab", "css3"]} />,
              <FontAwesomeIcon icon={["fab", "wordpress"]} />,
            ]}
            img="/images/salvador.png"
            imgBackground="/images/salvador.png"
            title="5. XSalvador"
          />
          <Card
            description={localization.seeMore}
            link=""
            linkName={localization.seeMore}
            icons={[
              <FontAwesomeIcon icon={["fab", "php"]} />,
              <FontAwesomeIcon icon={["fab", "js"]} />,
              <FontAwesomeIcon icon={["fab", "html5"]} />,
              <FontAwesomeIcon icon={["fab", "css3"]} />,
              <FontAwesomeIcon icon={["fab", "wordpress"]} />,
            ]}
            img="/images/panaPanadero.png"
            imgBackground="/images/panaPanadero.png"
            title="6. PanaPanadero"
          />
          <Card
            description={localization.seeMore}
            link=""
            linkName={localization.seeMore}
            icons={[
              <FontAwesomeIcon icon={["fab", "php"]} />,
              <FontAwesomeIcon icon={["fab", "js"]} />,
              <FontAwesomeIcon icon={["fab", "html5"]} />,
              <FontAwesomeIcon icon={["fab", "css3"]} />,
              <FontAwesomeIcon icon={["fab", "wordpress"]} />,
            ]}
            img="/images/ilargento.png"
            imgBackground="/images/ilargento.png"
            title="7. Ilargento"
          />
          <Card
            description={localization.seeMore}
            link=""
            linkName={localization.seeMore}
            icons={[
              <FontAwesomeIcon icon={["fab", "js"]} />,
              <FontAwesomeIcon icon={["fab", "html5"]} />,
              <FontAwesomeIcon icon={["fab", "css3"]} />,
              <FontAwesomeIcon icon={["fab", "vuejs"]} />,
            ]}
            img="/images/panaPanadero.png"
            imgBackground="/images/panaPanadero.png"
            title={localization.PortfolioVueJS}
          />
        </div>
      </div>
      <div className="portfolio__timeline portfolio__timeline--rigth">
        <div className="portfolio__timeline__year portfolio__timeline__year--pink">
          <span className="text">2019</span>
          <hr />
        </div>
        <div className="portfolio__timeline__content">
          <Card
            description={localization.seeMore}
            link=""
            linkName={localization.seeMore}
            icons={[
              <FontAwesomeIcon icon={["fab", "php"]} />,
              <FontAwesomeIcon icon={["fab", "js"]} />,
              <FontAwesomeIcon icon={["fab", "html5"]} />,
              <FontAwesomeIcon icon={["fab", "css3"]} />,
              <FontAwesomeIcon icon={["fab", "laravel"]} />,
              <FontAwesomeIcon icon={["fab", "vuejs"]} />,
              <FontAwesomeIcon icon={["fab", "sass"]} />,
            ]}
            img="/images/tuOfertazo.png"
            imgBackground="/images/tuOfertazo.png"
            title="9. TuOfertazo"
          />
          <Card
            description={localization.seeMore}
            link=""
            linkName={localization.seeMore}
            icons={[
              <FontAwesomeIcon icon={["fab", "php"]} />,
              <FontAwesomeIcon icon={["fab", "js"]} />,
              <FontAwesomeIcon icon={["fab", "html5"]} />,
              <FontAwesomeIcon icon={["fab", "css3"]} />,
              <FontAwesomeIcon icon={["fab", "wordpress"]} />,
              <FontAwesomeIcon icon={["fab", "sass"]} />,
            ]}
            img="/images/aldi.png"
            imgBackground="/images/aldi.png"
            title="10. Aldi"
          />
          <Card
            description={localization.seeMore}
            link=""
            linkName={localization.seeMore}
            icons={[
              <FontAwesomeIcon icon={["fab", "php"]} />,
              <FontAwesomeIcon icon={["fab", "js"]} />,
              <FontAwesomeIcon icon={["fab", "html5"]} />,
              <FontAwesomeIcon icon={["fab", "css3"]} />,
              <FontAwesomeIcon icon={["fab", "laravel"]} />,
              <FontAwesomeIcon icon={["fab", "vuejs"]} />,
              <FontAwesomeIcon icon={["fab", "sass"]} />,
              <FontAwesomeIcon icon={["fab", "react"]} />,
            ]}
            img="/images/activeCity.png"
            imgBackground="/images/activeCity.png"
            title="11. Active City"
          />
          <Card
            description={localization.seeMore}
            link=""
            linkName={localization.seeMore}
            icons={[
              <FontAwesomeIcon icon={["fab", "php"]} />,
              <FontAwesomeIcon icon={["fab", "js"]} />,
              <FontAwesomeIcon icon={["fab", "html5"]} />,
              <FontAwesomeIcon icon={["fab", "css3"]} />,
              <FontAwesomeIcon icon={["fab", "wordpress"]} />,
              <FontAwesomeIcon icon={["fab", "sass"]} />,
            ]}
            img="/images/default.png"
            imgBackground="/images/default.png"
            title="12. Dragoy"
          />
        </div>
      </div>
      <div className="portfolio__timeline portfolio__timeline--left">
        <div className="portfolio__timeline__year portfolio__timeline__year--yellow">
          <span className="text">2020</span>
          <hr />
        </div>
        <div className="portfolio__timeline__content">
          <Card
            description={localization.seeMore}
            link=""
            linkName={localization.seeMore}
            icons={[
              <FontAwesomeIcon icon={["fab", "php"]} />,
              <FontAwesomeIcon icon={["fab", "js"]} />,
              <FontAwesomeIcon icon={["fab", "html5"]} />,
              <FontAwesomeIcon icon={["fab", "css3"]} />,
              <FontAwesomeIcon icon={["fab", "laravel"]} />,
              <FontAwesomeIcon icon={["fab", "vuejs"]} />,
              <FontAwesomeIcon icon={["fab", "sass"]} />,
              <FontAwesomeIcon icon={["fab", "react"]} />,
            ]}
            img="/images/comingSoon.png"
            imgBackground="/images/comingSoon.png"
            title={localization.comingSoon}
          />
        </div>
      </div>
    </section>
  );
}

export default Portfolio;
