import { RouteLink } from "alem";
import {
  AboutContainer,
  AboutLogo,
  AboutTitle,
  AboutDescription,
  Row,
  CustomButton,
  AboutSectionGray,
  Code,
} from "./styles";
import { RoutesPath } from "@dapp/Routes";

export const AboutPage = () => {
  return (
    <div>
      <AboutContainer>
        <AboutLogo
          src="https://cdn.jsdelivr.net/gh/wpdas/alem/docs/assets/near-script-logo.png"
          width={120}
          alt="logo"
        />
        <AboutTitle>Além</AboutTitle>
        <AboutDescription>The library for web3 NEAR BOS interfaces</AboutDescription>
        <Row>
          <RouteLink to={RoutesPath.featureOverview.path}>
            <CustomButton>Learn Alem</CustomButton>
          </RouteLink>
        </Row>
      </AboutContainer>
      <AboutSectionGray>
        <AboutTitle>Create user interfaces from components</AboutTitle>
        <p>
          Alem lets you build user interfaces out of individual pieces called components. Create
          your own React components like <Code>Thumbnail</Code>, <Code>LikeButton</Code>, and{" "}
          <Code>Avatar</Code>. Then combine them into entire screens, pages, and other componets.
        </p>
      </AboutSectionGray>
    </div>
  );
};
