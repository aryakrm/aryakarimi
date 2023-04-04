const Footer = () => {
  return (
    <div className="footer">
      <div className="footer__builder">
        <div className="container">
          <div className="row">
            <div className="col-xs-12 col-sm-12 col-md-4 col-lg-4">
              <div
                className="social-links scrolla-element-anim-1 scroll-animate"
                data-animate="active"
              >
                <a
                  target="_blank"
                  rel="nofollow"
                  href="https://github.com/aryakrm"
                >
                  <i aria-hidden="true" className="fab fa-github" />
                </a>
                <a
                  target="_blank"
                  rel="nofollow"
                  href="https://www.instagram.com/aryakarimmi/"
                >
                  <i aria-hidden="true" className="fab fa-instagram" />
                </a>
                <a
                  target="_blank"
                  rel="nofollow"
                  href="https://www.linkedin.com/in/arya-karimi-590508189/"
                >
                  <i aria-hidden="true" className="fab fa-linkedin" />
                </a>
                <a
                  target="_blank"
                  rel="nofollow"
                  href="https://twitter.com/devAryaKarimi"
                >
                  <i aria-hidden="true" className="fab fa-twitter" />
                </a>
              </div>
            </div>
            <div className="col-xs-12 col-sm-12 col-md-4 col-lg-4">
              <div
                className="copyright-text align-center scrolla-element-anim-1 scroll-animate"
                data-animate="active"
              >
                © 2020 <strong>Arya Karimi</strong>. All rights reserved
              </div>
            </div>
            <div className="col-xs-12 col-sm-12 col-md-4 col-lg-4">
              <div
                className="copyright-text align-right scrolla-element-anim-1 scroll-animate"
                data-animate="active"
              >
                Developed by <strong>Arya Karimi</strong>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Footer;
