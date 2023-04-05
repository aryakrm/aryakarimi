import Isotope from "isotope-layout";
import Link from "next/link";
import { Fragment, useEffect, useRef, useState } from "react";
const PortfolioIsotope = ({ noViewMore }) => {
  // Isotope
  const isotope = useRef();
  const [filterKey, setFilterKey] = useState("*");
  useEffect(() => {
    isotope.current = new Isotope(".works-items", {
      itemSelector: ".works-col",
      //    layoutMode: "fitRows",
      percentPosition: true,
      masonry: {
        columnWidth: ".works-col",
      },
      animationOptions: {
        duration: 750,
        easing: "linear",
        queue: false,
      },
    });
    return () => isotope.current.destroy();
  });
  useEffect(() => {
    if (isotope.current) {
      filterKey === "*"
        ? isotope.current.arrange({ filter: `*` })
        : isotope.current.arrange({ filter: `.${filterKey}` });
    }
  }, [filterKey]);
  const handleFilterKeyChange = (key) => () => {
    setFilterKey(key);
  };
  const activeBtn = (value) => (value === filterKey ? "active" : "");

  return (
    <Fragment>
      <div className="works-box">
        <div
          className="filter-links scrolla-element-anim-1 scroll-animate"
          data-animate="active"
        >
          <a
            className={`c-pointer lui-subtitle ${activeBtn("*")}`}
            onClick={handleFilterKeyChange("*")}
            data-href=".works-col"
          >
            All
          </a>
          <a
            className={`c-pointer lui-subtitle ${activeBtn(
              "sorting-development"
            )}`}
            onClick={handleFilterKeyChange("sorting-development")}
            data-href=".sorting-development"
          >
            Development
          </a>

          <a
            className={`c-pointer lui-subtitle ${activeBtn("sorting-photo")}`}
            onClick={handleFilterKeyChange("sorting-photo")}
            data-href=".sorting-photo"
          >
            3D Design
          </a>

          <a
            className={`c-pointer lui-subtitle ${activeBtn(
              "sorting-branding"
            )}`}
            onClick={handleFilterKeyChange("sorting-branding")}
            data-href=".sorting-branding"
          >
            Branding
          </a>
        </div>
        <div className="works-items works-masonry-items row">
          <div className="works-col col-xs-12 col-sm-12 col-md-12 col-lg-12 sorting-development sorting-ui-ux-design ">
            <div
              className="works-item scrolla-element-anim-1 scroll-animate"
              data-animate="active"
            >
              <div className="image">
                <div className="img">
                  <Link legacyBehavior href="https://omitdesign.com">
                    <a target="_blank">
                      <img
                        decoding="async"
                        src="assets/images/myWebProjects/omitDesign.jpg"
                        alt="Explore"
                      />
                      <span className="overlay" />
                    </a>
                  </Link>
                </div>
              </div>
              <div className="desc">
                <span className="category"> Development, UI UX Design </span>
                <h5 className="name">
                  <Link legacyBehavior href="https://omitdesign.com">
                    <a target="_blank">Omit Design</a>
                  </Link>
                </h5>
                <div className="text">
                  <p>
                    I developed a website for Omit Design, an architecture
                    company, using React.js. The website is user-friendly,
                    visually appealing, and provides detailed information about
                    the company's services and portfolio.
                  </p>
                </div>
                <Link legacyBehavior href="https://omitdesign.com">
                  <a target="_blank" className="lnk">
                    See project
                  </a>
                </Link>
              </div>
              <div
                className="bg-img"
                style={{
                  backgroundImage: "url(assets/images/pat-2.png)",
                }}
              />
            </div>
          </div>

          <div className="works-col col-xs-12 col-sm-12 col-md-12 col-lg-12 sorting-development sorting-ui-ux-design ">
            <div
              className="works-item scrolla-element-anim-1 scroll-animate"
              data-animate="active"
            >
              <div className="image">
                <div className="img">
                  <Link legacyBehavior href="https://babbaza.com">
                    <a target="_blank">
                      <img
                        decoding="async"
                        src="assets/images/myWebProjects/BabbazaLuxury.jpg"
                        alt="Stay Fit"
                      />
                      <span className="overlay" />
                    </a>
                  </Link>
                </div>
              </div>
              <div className="desc">
                <span className="category"> Development, UI UX Design </span>
                <h5 className="name">
                  <Link legacyBehavior href="https://babbaza.com">
                    <a target="_blank">Babbaza Luxury</a>
                  </Link>
                </h5>
                <div className="text">
                  <p>
                    I developed a modern and functional website for Babbaza
                    Luxury, a Furniture store. The website showcases their
                    portfolio and services in an intuitive and user-friendly
                    manner.
                  </p>
                </div>
                <Link legacyBehavior href="https://babbaza.com">
                  <a target="_blank" className="lnk">
                    See project
                  </a>
                </Link>
              </div>
              <div
                className="bg-img"
                style={{
                  backgroundImage: "url(assets/images/pat-2.png)",
                }}
              />
            </div>
          </div>
          <div className="works-col col-xs-12 col-sm-12 col-md-12 col-lg-12 sorting-development sorting-photo ">
            <div
              className="works-item scrolla-element-anim-1 scroll-animate"
              data-animate="active"
            >
              <div className="image">
                <div className="img">
                  <Link legacyBehavior href="https://idol9.com">
                    <a target="_blank">
                      <img
                        decoding="async"
                        src="assets/images/myWebProjects/idol9.jpg"
                        alt="Kana"
                      />
                      <span className="overlay" />
                    </a>
                  </Link>
                </div>
              </div>
              <div className="desc">
                <span className="category"> Development, 3D Design </span>
                <h5 className="name">
                  <Link legacyBehavior href="https://idol9.com">
                    <a target="_blank">Idol9</a>
                  </Link>
                </h5>
                <div className="text">
                  <p>
                    Using React.js, I developed a responsive website for Idol9,
                    an architecture company, with a chatbot for improved user
                    experience. The website is functional, visually appealing,
                    and presents the company's portfolio and services in an
                    efficient manner.
                  </p>
                </div>
                <Link legacyBehavior href="https://idol9.com">
                  <a target="_blank" className="lnk">
                    See project
                  </a>
                </Link>
              </div>
              <div
                className="bg-img"
                style={{
                  backgroundImage: "url(assets/images/pat-2.png)",
                }}
              />
            </div>
          </div>
          <div className="works-col col-xs-12 col-sm-12 col-md-12 col-lg-12 sorting-branding sorting-photo ">
            <div
              className="works-item scrolla-element-anim-1 scroll-animate"
              data-animate="active"
            >
              <div className="image">
                <div className="img">
                  <Link legacyBehavior href="https://devarya.netlify.app/">
                    <a target="_blank">
                      <img
                        decoding="async"
                        src="assets/images/devarya.jpg"
                        alt="devarya"
                      />
                      <span className="overlay" />
                    </a>
                  </Link>
                </div>
              </div>
              <div className="desc">
                <span className="category"> Development, React.Js </span>
                <h5 className="name">
                  <Link legacyBehavior href="/Por3">
                    <a>My Old Portfolio Website</a>
                  </Link>
                </h5>
                <div className="text">
                  <p>This is my first portfolio website :)</p>
                </div>
                <Link legacyBehavior href="/Por3">
                  <a className="lnk">See project</a>
                </Link>
              </div>
              <div
                className="bg-img"
                style={{
                  backgroundImage: "url(assets/images/pat-2.png)",
                }}
              />
            </div>
          </div>
          <div className="works-col col-xs-12 col-sm-12 col-md-12 col-lg-12 sorting-branding sorting-photo ">
            <div
              className="works-item scrolla-element-anim-1 scroll-animate"
              data-animate="active"
            >
              <div className="image">
                <div className="img">
                  <Link legacyBehavior href="/Por1">
                    <a>
                      <img
                        decoding="async"
                        src="assets/images/work4.jpg"
                        alt="Zorro"
                      />
                      <span className="overlay" />
                    </a>
                  </Link>
                </div>
              </div>
              <div className="desc">
                <span className="category"> Branding, 3D Design </span>
                <h5 className="name">
                  <Link legacyBehavior href="/Por1">
                    <a>Daze Store</a>
                  </Link>
                </h5>
                <div className="text">
                  <p>
                    I designed a fantasy-themed store using 3ds Max and V-Ray.
                    The store is visually stunning, with intricate details and
                    captivating features. My 3D design skills allowed me to
                    bring this unique store concept to life.
                  </p>
                </div>
                <Link legacyBehavior href="/Por1">
                  <a className="lnk">See project</a>
                </Link>
              </div>
              <div
                className="bg-img"
                style={{
                  backgroundImage: "url(assets/images/pat-2.png)",
                }}
              />
            </div>
          </div>
        </div>
        {!noViewMore && (
          <div className="load-more-link">
            <Link legacyBehavior href="/works">
              <a
                className="btn scrolla-element-anim-1 scroll-animate"
                data-animate="active"
              >
                <span>View More</span>
              </a>
            </Link>
          </div>
        )}
      </div>
    </Fragment>
  );
};
export default PortfolioIsotope;
