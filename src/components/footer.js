/**@jsx jsx */
import {jsx} from "@emotion/core";
import {Container, text_center} from "./common"


export default () => {
      return <footer>
    <Container>
      <p css={text_center}>
        © Nithin Thampi. All right reserved by
        <a href="http://nithinthampi.me" target="_blank">
          <strong>Myself😈</strong>
        </a>
      </p>
    </Container>
  </footer>
}