export const settings = {
  navbar_logo_url: "/logo.png",
  hero_image_url: "/logo.png",

  // Tvoj server
  server_name: "TerraHR",
  server_ip: "194.164.96.2",
  server_port: "25631",

  // Bedrock
  server_bedrock_ip: "",
  server_bedrock_port: "",
  bedrock_support: false,

  // Linkovi
  discord_url: "https://discord.gg/az4ENrg4Wk",
  discord_invite_code: "az4ENrg4Wk",

  community_goal_variant: "bar",

  show_support_widget: true,
  show_login_cta: true,

  wiki_link: {
    shown: false,
    url: ""
  },

  blog_system: {
    enabled: true,
    home_page_featured_post: "newest",
    ghost_api_key: "",
    ghost_url: ""
  },

  sales: {
    show_sale_banner: false,
    sale_banner_variant: "full"
  },

  theme: {
    enable_snow: false
  },

  // SAMO HRVATSKI
  translation_system: {
    enabled: false,
    default_language: "hr",
    languages: [
      { flag: "/language_icons/hr.png", value: "Hrvatski", key: "hr" }
    ]
  },

  currency_symbol: "€",

// ✅ LINKOVI ZA GLASANJE
voting_links: [
  {
    name: "Minecraft-MP",
    url: "https://minecraft-mp.com/server/354880/vote/"
  },
  {
    name: "TopG",
    url: "https://topg.org/minecraft-servers/server-679937#vote"
  },
  {
    name: "MinecraftServers.org",
    url: "https://minecraftservers.org/vote/684489"
  },
  {
    name: "PlanetMinecraft",
    url: "https://www.planetminecraft.com/server/terrahr/vote/"
  }
]
};

export const serverRules = [
  { label: "noCheating", description: "noCheatingDesc" },
  { label: "respectOthers", description: "respectOthersDesc" },
  { label: "noGriefing", description: "noGriefingDesc" },
  { label: "noAdvertising", description: "noAdvertisingDesc" },
  { label: "keepChatAppropriate", description: "keepChatAppropriateDesc" }
];

export const discordRules = [
  { label: "followDiscordTos", description: "followDiscordTosDesc" },
  { label: "noSpamming", description: "noSpammingDesc" },
  { label: "respectPrivacy", description: "respectPrivacyDesc" },
  { label: "noNsfwContent", description: "noNsfwContentDesc" },
  { label: "useChannelsProperly", description: "useChannelsProperlyDesc" }
];
