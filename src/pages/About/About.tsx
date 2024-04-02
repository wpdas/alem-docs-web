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
      <Container style={{ marginBottom: 0 }}>
        <Logo
          src="https://cdn.jsdelivr.net/gh/wpdas/alem/docs/assets/near-script-logo.png"
          width={120}
          alt="logo"
        />
        <Title>Além</Title>
        <Description>The library to build web3 applications for Near BOS</Description>
        <Row>
          <CustomLink href="https://github.com/wpdas/alem-docs-web" target="_blank">
            <p>See an Example</p>
          </CustomLink>

          <CustomAnchor>
            <RouteLink to={RoutesPath.featureOverview.path} label="Learn Alem" />
          </CustomAnchor>
        </Row>
      </Container>
      <Section style={{ backgroundColor: "#fff", paddingTop: 40 }}>
        <img
          src="https://cdn.jsdelivr.net/gh/wpdas/alem-docs-web/src/md/assets/diagram.jpg"
          width="100%"
          alt="Diagram"
        />

        <p>
          You can create your applications in a similar way to React. All components and other
          resources will be transformed into a file understandable by Near VM.
        </p>
      </Section>
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
          Leverage the full power of JSX to create your components easily, quickly, and efficiently.
          Both stateful and stateless components <BlueCode>support children</BlueCode>, which is not
          natively supported by the Near VM, but Além handles this in a way that it is processed and
          understood.
        </p>
      </Section>
      <Section>
        <Title>Network</Title>
        <p>
          Currently supports <Code>Mainnet</Code> and <Code>Testnet</Code>. So, while you are
          developing and testing features you can test everything without worrying about expenses.
        </p>
      </Section>
    </div>
  );
};
