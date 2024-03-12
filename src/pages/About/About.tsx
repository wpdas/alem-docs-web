import { RouteLink } from "alem";
import {
  AboutContainer,
  AboutLogo,
  AboutTitle,
  AboutDescription,
  CustomButton,
  AboutSectionGray,
  Code,
  CustomLink,
} from "./styles";
import { RoutesPath } from "../../Routes";
import { Row } from "../../components/UI";

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
          <CustomLink href="https://github.com/wpdas/alem-docs-web" target="_blank">
            <p>See an Example</p>
          </CustomLink>

          <RouteLink to={RoutesPath.featureOverview.path}>
            <CustomButton>Learn Alem</CustomButton>
          </RouteLink>
        </Row>
      </AboutContainer>
      <AboutSectionGray>
        <AboutTitle>Create user interfaces from components</AboutTitle>
        <p>
          Alem use its compiler to let you build user interfaces out of individual pieces called
          components. Create your own components like <Code>Thumbnail</Code>,{" "}
          <Code>LikeButton</Code>, and <Code>Avatar</Code>. Then combine them into entire screens,
          pages, and other components.
        </p>
      </AboutSectionGray>
      <AboutSectionGray style={{ backgroundColor: "#fff" }}>
        <AboutTitle>Good Practices</AboutTitle>
        <p>
          All project content will be organized in just one file. Be aware of this when developing
          your application. Whenever possible, use functions that return the desired content to
          avoid possible issues in the application.
        </p>
      </AboutSectionGray>
    </div>
  );
};
