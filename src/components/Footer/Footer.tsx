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
          This library is still under development.
          <a
            href="https://near.org/near/widget/ProfilePage?accountId=wendersonpires.near"
            target="_blank"
          >
            wendersonpires.near
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
