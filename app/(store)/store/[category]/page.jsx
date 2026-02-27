<SimpleGrid
  grow
  mb="4rem"
  cols={{ base: 2, sm: 2, md: 3 }}
  spacing={{ base: "sm", sm: "md" }}
  verticalSpacing={{ base: "sm", sm: "md" }}
>
  {allPackages?.data?.packages?.map((rank) => (
    <RankPopup key={rank.id} rank={rank}>
      <Paper
        pos="relative"
        mih={{ base: "15rem", sm: "22rem" }}
        p={{ base: "sm", sm: undefined }}
        style={{ cursor: "pointer", overflow: "hidden" }}
        radius="lg"
      >
        <Group justify="center">
          <Image
            mt={{ base: "0.6rem", sm: "1rem" }}
            src={rank.image}
            alt={rank.name}
            mah={{ base: "7.5rem", sm: "12rem" }}
            w="auto"
          />
        </Group>

        <Box pos="absolute" px="0.8rem" bottom="0.8rem" w="100%">
          <Group justify="space-between" gap="0.4rem">
            <Text
              c="bright"
              size={{ base: "lg", sm: "xl" }}
              fw={700}
              style={{
                maxWidth: "70%",
                overflow: "hidden",
                textOverflow: "ellipsis",
                whiteSpace: "nowrap",
              }}
              title={rank.name}
            >
              {rank.name}
            </Text>

            <Badge size={{ base: "md", sm: "lg" }} c="#fff" color="#282C42">
              {rank.discount !== 0 && (
                <Text c="red.5" inherit inline span td="line-through">
                  {settings.currency_symbol}
                  {rank.total_price + rank.discount}
                </Text>
              )}
              &nbsp;{settings.currency_symbol}
              {rank.total_price}
            </Badge>
          </Group>

          <AddToCartButton
            package_id={rank.id}
            quantity={1}
            category_id={selectedCategory.id}
            extraProps={{ size: "sm", mt: "0.45rem" }}
          />
        </Box>
      </Paper>
    </RankPopup>
  ))}
</SimpleGrid>
