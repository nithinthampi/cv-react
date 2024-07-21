/** @jsxImportSource @emotion/react */
import { Container } from "../common/containers";
import { text_center } from "../common/overrides";
import resume from "../../data/resume.json";

const Footer = () => {
  return (
    <footer>
      <Container>
        <p css={text_center}>
          © {resume.name}. All right reserved by
          <a
            href={resume.basic.website}
            target="_blank"
            rel="noopener noreferrer"
          >
            <strong>
              Myself
              <span role="img" aria-label="Smiley">
                😈
              </span>
            </strong>
          </a>
        </p>
      </Container>
    </footer>
  );
};

export default Footer;
