import TelegramIcon from "../../assets/svgs/telegram-icon.module";
import { GithubIcon } from "../../assets/svgs/github-icon.module";
import { Container, Description, Item, Logo, Socials } from "./styles";
import { Row } from "../UI";

const Footer = () => {
  return (
    <Container>
      <Logo>
        <img
          src="https://cdn.jsdelivr.net/gh/wpdas/alem/docs/assets/near-script-logo.png"
          width={30}
          alt="logo"
        />
        <p>Além</p>
      </Logo>
      <Row>
        <Description>
          Want to support? Buy me a coffee 😃 <br />
          <a
            href="https://bos.potlock.org/?tab=project&projectId=alem-lib.near&potId=oss.v1.potfactory.potlock.near"
            target="_blank"
          >
            alem-lib.near
          </a>
        </Description>
      </Row>
      <Socials>
        <Item href="https://t.me/alemlib" target="_blank">
          <TelegramIcon />
          <p>Telegram</p>
        </Item>
        <Item href="https://github.com/wpdas/alem" target="_blank">
          <GithubIcon />
          <p>GitHub</p>
        </Item>
      </Socials>
    </Container>
  );
};

export default Footer;
