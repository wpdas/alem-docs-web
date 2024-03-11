import TelegramIcon from "../../assets/svgs/telegram-icon";
import { GithubIcon } from "../../assets/svgs/github-icon";
import {
  FooterContainer,
  FooterDescription,
  FooterItem,
  FooterLogo,
  FooterSocials,
} from "./styles";
import styled from "styled-components";
import { Row } from "../UI";

const Footer = () => {
  // const Row = styled.div`
  //   display: flex;
  // `;

  // const Column = styled.div`
  //   display: flex;
  //   flex-direction: column;
  // `;

  return (
    <FooterContainer>
      <FooterLogo>
        <img
          src="https://cdn.jsdelivr.net/gh/wpdas/alem/docs/assets/near-script-logo.png"
          width={30}
          alt="logo"
        />
        <p>Além</p>
      </FooterLogo>
      <Row>
        <FooterDescription>
          This library is still under development.
          <a
            href="https://near.org/near/widget/ProfilePage?accountId=wendersonpires.near"
            target="_blank"
          >
            wendersonpires.near
          </a>
        </FooterDescription>
      </Row>
      <FooterSocials>
        <FooterItem href="https://t.me/alemlib" target="_blank">
          <TelegramIcon />
          <p>Telegram</p>
        </FooterItem>
        <FooterItem href="https://github.com/wpdas/alem" target="_blank">
          <GithubIcon />
          <p>GitHub</p>
        </FooterItem>
      </FooterSocials>
    </FooterContainer>
  );
};

export default Footer;
