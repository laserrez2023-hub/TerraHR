import {
  Container,
  SimpleGrid,
  Paper,
  Title,
  Text,
  Button,
  Stack,
  Image,
  Group,
  Grid,
  GridCol,
} from "@mantine/core";
import { settings } from "../settings.js";
import { getBlogs } from "../utils/getBlogs";
import BlogCard from "../components/BlogCard.jsx";
import { getTranslations } from "next-intl/server";

export const dynamic = "force-dynamic";
export const revalidate = 0;

export const metadata = {
  title: "Home | " + settings.server_name,
  description: "Welcome to the " + settings.server_name + " store!",
  openGraph: {
    title: "Home | " + settings.server_name,
    description: "Welcome to the " + settings.server_name + " store!",
  },
};

export default async function Page() {
  const tBlog = await getTranslations("Blog");
  const posts = await getBlogs(4);

  let heroPost, otherPosts;
  if (settings.blog_system.home_page_featured_post === "newest") {
    [heroPost, ...otherPosts] = posts;
  } else {
    heroPost = posts.find(
      (post) => post.id === settings.blog_system.home_page_featured_post
    );
    otherPosts = posts.filter(
      (post) => post.id !== settings.blog_system.home_page_featured_post
    );
  }

  return (
    <Container>
      {(heroPost && settings.blog_system.enabled) && (
        <Paper mb="2rem">
          <Grid align="stretch" columns={24} gutter={0}>
            <GridCol
              mih="100%"
              span={{ base: 24, md: 11 }}
              style={{
                display: "flex",
                flexDirection: "column",
                justifyContent: "center",
                padding: "2rem",
              }}
            >
              <Stack mih="100%" justify="space-between">
                <div>
                  <Title lineClamp={2} lh={1.1} order={1} fz={{ base: 32 }} mb="xs">
                    {heroPost.title}
                  </Title>
                  <Text fz={{ base: "md", md: "lg" }} c="dimmed" mb="md" lineClamp={5}>
                    {heroPost.excerpt}
                  </Text>
                  <Group gap="xs" mb="md">
                    <Text c="dimmed" fz="sm" fw={600}>
                      {tBlog("by", { name: heroPost.primary_author?.name })}
                    </Text>
                    <Text c="dimmed" fz="sm">•</Text>
                    <Text c="dimmed" fz="sm">
                      {new Date(heroPost.published_at).toLocaleDateString("en-GB", {
                        day: "numeric",
                        month: "short",
                        year: "numeric",
                      })}
                    </Text>
                  </Group>
                </div>

                <Button
                  size="lg"
                  component="a"
                  href={`/blog/${heroPost.slug}`}
                  target="_blank"
                  variant="filled"
                  mt="md"
                >
                  {tBlog("readMore")}
                </Button>
              </Stack>
            </GridCol>

            <GridCol h="100%" span={{ base: 24, md: 13 }}>
              {heroPost.feature_image && (
                <Image
                  className="hero-post-image"
                  src={heroPost.feature_image}
                  alt={heroPost.title}
                  mah={400}
                  fit="cover"
                />
              )}
            </GridCol>
          </Grid>
        </Paper>
      )}

      {settings.blog_system.enabled && (
        <SimpleGrid cols={{ base: 1, sm: 2, md: 3 }} spacing="1rem" mb="xl">
          {otherPosts.map((post) => (
            <BlogCard post={post} key={post.id} />
          ))}
        </SimpleGrid>
      )}
    </Container>
  );
}
