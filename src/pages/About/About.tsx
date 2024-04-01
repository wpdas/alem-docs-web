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
      <Section style={{ backgroundColor: "#fff" }}>
        <Title>Good to Know</Title>
        <ul>
          <li>
            Stateful components are interpreted as Widgets by Além, while Stateless components are
            seen as auxiliary resources injected into the Widgets that import them.
          </li>
          <li>
            A <BlueCode>.tsx/.jsx</BlueCode> file can have only one component. You can create other
            internal components within the component's function.
          </li>
          <li>
            Prefer creating one file per resource, as importing a resource from a{" "}
            <BlueCode>.ts/.js</BlueCode> file will inject the entire content of that file into the
            Widget.
          </li>
          <li>
            The use of the <RedCode>import * foo from './foo'</RedCode> signature is not supported.
            This is intentional, as the idea is to import only the necessary fragments into the
            Widget.
          </li>
          <li>
            The use of <BlueCode>async/await</BlueCode> is supported and
            <BlueCode>experimental</BlueCode>. It should be used only in the main scope of the
            component. It will make changes to the state of the main Widget. Do not use in hooks.
          </li>
          <li>
            Avoid importing a resource that has the same name as any variable within your component.
            Além handles exports that use the same names but does not handle variables of the same
            name at runtime.
          </li>
          <li>
            Use correct comment structure for css/styled-components and jsx/js/tsx/ts files. Using
            the wrong nomenclature for comments can affect the final result of the compiled project.
          </li>
        </ul>
      </Section>
    </div>
  );
};
