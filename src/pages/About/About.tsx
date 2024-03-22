import { RouteLink } from "alem";
import {
  Container,
  Logo,
  Title,
  Description,
  Section,
  Code,
  CustomLink,
  CustomAnchor,
  BlueCode,
  RedCode,
} from "./styles";
import { Row } from "../../components/UI";
import { RoutesPath } from "../../routeProps";

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

          <CustomAnchor>
            <RouteLink to={RoutesPath.featureOverview.path} label="Learn Alem" />
          </CustomAnchor>
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
        <Title>Stateless & Stateful Component</Title>
        <p>
          Both types of components work perfectly with Além. Prefer using stateless components for
          faster rendering. Stateless components <BlueCode>can receive children</BlueCode>. Stateful
          components <RedCode>cannot natively support children</RedCode> due to a limitation in Near
          VM. Although it is possible to also send children to stateful components using Além, but
          it is not recommended as the children's properties may be lost.
        </p>
      </Section>
      <Section>
        <Title>Network</Title>
        <p>
          Currently supports <Code>Mainnet</Code> and <Code>Testnet</Code>. So, while you are
          developing and testing features you can test everything without worrying about expenses.
        </p>
      </Section>
      <Section style={{ backgroundColor: "#fff" }}>
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
