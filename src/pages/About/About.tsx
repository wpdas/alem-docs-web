import { RouteLink } from "alem";
import TelegramIcon from "@app/assets/svgs/telegram-icon.module";
import { Row } from "../../components/UI";
import { RoutesPath } from "../../modules/routes/routeProps";
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
  ExampleApp,
  AppsList,
} from "./styles";

export const AboutPage = () => {
  return (
    <div>
      <Container style={{ marginBottom: 0 }}>
        <Logo src="https://cdn.jsdelivr.net/gh/wpdas/alem/docs/assets/near-script-logo.png" width={120} alt="logo" />
        <Title>Além</Title>
        <Description>The library to build web3 applications for Near BOS</Description>
        <Row>
          <CustomLink href="https://t.me/alemlib" target="_blank">
            <TelegramIcon fill="white" />
            <p style={{ marginLeft: 8 }}>Telegram</p>
          </CustomLink>

          <CustomAnchor>
            <RouteLink to={RoutesPath.featureOverview.path} label="Learn Alem" />
          </CustomAnchor>
        </Row>
      </Container>
      <Section
        style={{
          marginTop: 40,
          paddingTop: 20,
          paddingBottom: 10,
          marginBottom: 60,
          backgroundColor: "#fff",
        }}
      >
        <p>
          Some dApps built using this tool. <br /> Click to visit their repository and get to know more!
        </p>
        <AppsList>
          <ExampleApp href="https://github.com/PotLock/bos-app-alem" target="_blank">
            <img src="https://app.potlock.org/favicon.png" alt="PotLock" />
            <span>PotLock</span>
          </ExampleApp>

          <ExampleApp href="https://github.com/wpdas/nextly-alem-template" target="_blank">
            <img
              src="https://ipfs.near.social/ipfs/bafkreigamd4f4t3vkhlkwu6bw2mzlvpnqwdcovjxxxoodrhsjhije3oyn4"
              alt="Nextly Template"
            />
            <span>Nextly Template</span>
          </ExampleApp>

          <ExampleApp href="https://github.com/wpdas/alem-docs-web" target="_blank">
            <img src="https://cdn.jsdelivr.net/gh/wpdas/alem/docs/assets/near-script-logo.png" alt="Além Docs" />
            <span>Além Docs</span>
          </ExampleApp>

          <ExampleApp href="https://github.com/wpdas/bitbabble-dchat" target="_blank">
            <img
              src="https://ipfs.near.social/ipfs/bafkreiegyjsgok6ctnurix3shkm7mrbdqzclfqpsh4tltnkxqyuxzgvbk4"
              alt="Bit Babble"
            />
            <span>Bit Babble</span>
          </ExampleApp>
        </AppsList>
      </Section>

      <Section style={{ backgroundColor: "#fff", paddingBottom: 0 }}>
        <p className="project-title">PotLock</p>
        <img
          src="https://ipfs.near.social/ipfs/bafkreibctv5y3ypwedoml6z7bsoy45fa5p5tbnkcimbzkap7lnb7lhswb4"
          width="100%"
          alt="PotLock"
        />
      </Section>

      <Section style={{ backgroundColor: "#fff" }}>
        <p className="project-title">Nextly Template: Além & Tailwind</p>
        <img
          src="https://user-images.githubusercontent.com/1884712/121497169-03228680-c990-11eb-975a-e77fddc43de0.png"
          width="100%"
          alt="Nextly Template built with Além & Tailwind"
        />
      </Section>

      <Section style={{ backgroundColor: "#fff", paddingBottom: 60, paddingTop: 0 }}>
        {/* <img
          src="https://cdn.jsdelivr.net/gh/wpdas/alem-docs-web/src/md/assets/diagram.jpg"
          width="100%"
          alt="Diagram"
        /> */}

        <p>
          You can create your applications in a similar way to React. All components and other resources will be
          transformed into a file understandable by Near VM.
        </p>
      </Section>
      <Section>
        <Title>Create user interfaces from components</Title>
        <p>
          Alem use its compiler to let you build user interfaces out of individual pieces. Create your own components
          like <Code>Thumbnail</Code>, <Code>LikeButton</Code>, and <Code>Avatar</Code>. Then combine them into entire
          screens, pages, and other components.
        </p>
      </Section>
      <Section style={{ backgroundColor: "#fff" }}>
        <Title>Stateless & Stateful Component</Title>
        <p>
          Leverage the full power of JSX to create your components easily, quickly, and efficiently. Both stateful and
          stateless components <BlueCode>support children</BlueCode>, which is not natively supported by the Near VM,
          but Além handles this in a way that it is processed and understood.
        </p>
      </Section>
      <Section>
        <Title>Network</Title>
        <p>
          Currently supports <Code>Mainnet</Code> and <Code>Testnet</Code>. So, while you are developing and testing
          features you can test everything without worrying about expenses.
        </p>
      </Section>
    </div>
  );
};
