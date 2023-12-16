import logo_Reacteur from "../img/Logo_Reacteur.avif";

const Footer = () => {
  return (
    <footer>
      <p>
        Made at{" "}
        <a href="https://www.lereacteur.io/" target="_blank">
          <img src={logo_Reacteur} alt="Logo Reacteur" />
          Le Reacteur
        </a>{" "}
        by{" "}
        <a href="https://github.com/bc-vsgd" target="_blank">
          <i class="fa-brands fa-github"></i>
          Benoît Charles
        </a>{" "}
        - 2023
      </p>
    </footer>
  );
};

export default Footer;
