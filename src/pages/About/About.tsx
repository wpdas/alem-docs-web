import { RouteLink } from "alem";
import {
  Container,
  Logo,
  Title,
  Description,
  CustomButton,
  Section,
  Code,
  CustomLink,
} from "./styles";
import { RoutesPath } from "../../Routes";
import { Row } from "../../components/UI";

export const AboutPage = () => {
  return (
    <div>
      <Container>
        <Logo
          src="https://cdn.jsdelivr.net/gh/wpdas/alem/docs/assets/near-script-logo.png"
          width={120}
          alt="logo"
        />
        <Title>Além</Title>
        <Description>The library for web3 NEAR BOS interfaces</Description>
        <Row>
          <CustomLink href="https://github.com/wpdas/alem-docs-web" target="_blank">
            <p>See an Example</p>
          </CustomLink>

          <RouteLink to={RoutesPath.featureOverview.path}>
            <CustomButton>Learn Alem</CustomButton>
          </RouteLink>
        </Row>
      </Container>
      <Section>
        <Title>Create user interfaces from components</Title>
        <p>
          Alem use its compiler to let you build user interfaces out of individual pieces. Create
          your own components like <Code>Thumbnail</Code>, <Code>LikeButton</Code>, and{" "}
          <Code>Avatar</Code>. Then combine them into entire screens, pages, and other components.
        </p>
      </Section>
      <Section style={{ backgroundColor: "#fff" }}>
        <Title>Network</Title>
        <p>
          Currently supports <Code>Mainnet</Code> and <Code>Testnet</Code>. So, while you are
          developing and testing features you can test everything without worrying about expenses.
        </p>
      </Section>
      <Section>
        <Title>Good Practices</Title>
        <p>
          All project content will be organized in just one file. Be aware of this when developing
          your application. Whenever possible, use functions that return the desired content to
          avoid possible issues in the application.
        </p>
      </Section>
    </div>
  );
};
