import {
  Button,
  Container,
  Group,
  Image,
  List,
  ListItem,
  Paper,
  SimpleGrid,
  Title,
  Text
} from "@mantine/core";
import { TbArrowRight, TbCopy } from "react-icons/tb";
import JoinButton from "../../../components/JoinButton";
import { settings } from "../../../settings";
import { getTranslations } from "next-intl/server";

export const dynamic = "force-dynamic";
export const revalidate = 0;

export const metadata = {
  title: "Vote | " + settings.server_name,
  description: "Vote for " + settings.server_name + " to earn rewards!",
  openGraph: {
    title: "Vote | " + settings.server_name,
    description: "Vote for " + settings.server_name + " to earn rewards!"
  }
};

// ✅ mapiranje imena -> logo fajl (public/logo/...)
const voteLogoFor = (name = "") => {
  const n = name.toLowerCase();

  if (n.includes("minecraft-mp") || n.includes("minecraft mp")) return "/logo/minecraft-mp.png";
  if (n.includes("topg")) return "/logo/topg.png";
  if (n.includes("minecraftservers")) return "/logo/minecraftservers.org.png";
  if (n.includes("planetminecraft") || n.includes("planet minecraft")) return "/logo/planetminecraft.png";

  // fallback (ako dodaš novi link bez loga)
  return "/logo.png";
};

export default async function Page() {
  const t = await getTranslations("Vote");
  const tJoin = await getTranslations("Join");

  return (
    <Container mb="6rem" pos="relative" style={{ zIndex: 1 }}>
      {/* ✅ Profesionalne vote kartice: samo logo + Glasaj */}
      <SimpleGrid mb="1rem" cols={{ base: 1, sm: 2, md: 2, lg: 2 }} spacing="0.9rem">
        {(settings.voting_links ?? []).map((item) => (
          <Paper
            key={item.name}
            withBorder
            radius="xl"
            p="lg"
            style={{
              background:
                "linear-gradient(135deg, rgba(0,255,255,0.18), rgba(0,255,255,0.05))",
              borderColor: "rgba(0,255,255,0.35)"
            }}
          >
            <Group justify="space-between" align="center" wrap="nowrap">
              {/* LOGO */}
              <Group wrap="nowrap" style={{ minWidth: 0 }}>
                <Paper
                  radius="lg"
                  p="sm"
                  style={{
                    background: "rgba(0,0,0,0.15)",
                    border: "1px solid rgba(0,255,255,0.25)"
                  }}
                >
                  <Image
                    src={voteLogoFor(item.name)}
                    alt={item.name}
                    w={120}
                    h={34}
                    fit="contain"
                  />
                </Paper>
              </Group>

              {/* BUTTON */}
              <Button
                component="a"
                href={item.url}
                target="_blank"
                rel="noopener noreferrer"
                radius="xl"
                size="md"
                variant="white"
                leftSection={<TbArrowRight />}
                style={{
                  minWidth: 160,
                  flexShrink: 0
                }}
              >
                Glasaj
              </Button>
            </Group>
          </Paper>
        ))}
      </SimpleGrid>

      {/* Kako glasati */}
      <Paper h="100%" mb="1rem" p="1rem">
        <Title order={2} mb="1rem">
          {t("howToVote")}
        </Title>
        <Text mb="1rem">{t("toEarnRewards", { server_name: settings.server_name })}</Text>

        <List type="ordered" spacing="md">
          <ListItem>{t("step1")}</ListItem>
          <ListItem>{t("step2")}</ListItem>
          <ListItem>{t("step3")}</ListItem>
        </List>
      </Paper>

      {/* Hvala */}
      <Paper p="1rem">
        <Title order={2} mb="1rem">
          {t("thankYou")}
        </Title>
        <Text>{t("yourVoteHelps")}</Text>
      </Paper>

      {/* Join server */}
      <Paper bg="primary" p="1rem" mt="1rem">
        <Group justify="space-between">
          <div>
            <Title order={2} c="#000" mb="0.4rem">
              {tJoin("joinServer")}
            </Title>
            <Text c="#000">{tJoin("joinToGetRewards")}</Text>
          </div>

          <JoinButton>
            <Button size="lg" variant="white" color="white" leftSection={<TbCopy />}>
              <Text size="lg">{tJoin("joinServer")}</Text>
            </Button>
          </JoinButton>
        </Group>
      </Paper>
    </Container>
  );
}
