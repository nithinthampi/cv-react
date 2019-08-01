/**@jsx jsx */
import { jsx } from "@emotion/core";
import { Container } from "./common/styles/containers";
import { text_center } from "./common/styles/overrides";
import resume from "../data/resume.json";

export default () => {
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
