export function getDemoBlogs(limit = 48) {
  const now = new Date().toISOString();

  // ✅ Tvoje slike iz /public/blog/
  const images = {
    // Spawn
    spawn1: "/blog/spawn1.webp",
    spawn2: "/blog/spawn2.webp",
    spawn3: "/blog/spawn3.webp",

    // Jobs + levels
    jobs1: "/blog/jobs1.webp", // main jobs menu
    jobs2: "/blog/jobs2.webp", // job browser / choosing menu
    jobs3: "/blog/jobs3.webp", // job points shop
    jobs4: "/blog/jobs4.webp", // extra jobs screen (ako je)
    levels: "/blog/levels.webp",

    // World / misc
    world: "/blog/world.webp"
  };

  const baseAuthor = {
    id: "author-demo-1",
    name: "TerraHR Team",
    slug: "terrahr-team",
    profile_image: "https://placehold.co/100x100?text=TerraHR",
    cover_image: null,
    bio: "Službeni TerraHR tim.",
    website: null,
    location: null,
    facebook: null,
    twitter: null,
    meta_title: null,
    meta_description: null,
    url: "/author/terrahr-team/"
  };

  const posts = [
    // 1) Featured - Start
    {
      id: "demo-1",
      uuid: "uuid-demo-1",
      title: "Dobrodošli na TerraHR — vodič za početak (Survival)",
      slug: "dobrodosli-na-terrahr-vodic-za-pocetak",
      excerpt:
        "Kratko i jasno: gdje početi, kako do prvih resursa i koje sustave vrijedi odmah isprobati.",
      html: `
        <p><strong>Dobrodošli na TerraHR!</strong> Premium Survival server s puno sadržaja, ali sve je složeno da bude pregledno i lako za naučiti.</p>

        <h3>Preporučeni start</h3>
        <ul>
          <li><strong>Spawn & vodič:</strong> prvo prođi osnovne izbornike i info na spawnu.</li>
          <li><strong>Zarada:</strong> kreni s miningom/farmama i prodajom.</li>
          <li><strong>Nagrade:</strong> iskoristi vote i daily/weekly nagrade za brži start.</li>
        </ul>

        <p>Ako zapneš, najbrže je pitati na Discordu ili otvoriti ticket.</p>
      `,
      feature_image: images.spawn1,
      published_at: now,
      created_at: now,
      updated_at: now,
      authors: [baseAuthor],
      tags: [
        {
          id: "tag-demo-1",
          name: "Početak",
          slug: "pocetak",
          url: "/tag/pocetak/"
        }
      ],
      primary_author: baseAuthor,
      primary_tag: {
        id: "tag-demo-1",
        name: "Početak",
        slug: "pocetak",
        url: "/tag/pocetak/"
      },
      url: "/blog/dobrodosli-na-terrahr-vodic-za-pocetak/",
      featured: true,
      visibility: "public",
      reading_time: 2,
      access: true,
      comments: false
    },

    // 2) Coins & CoinShop
    {
      id: "demo-2",
      uuid: "uuid-demo-2",
      title: "Coins & CoinShop — kako funkcionira ekonomija na TerraHR",
      slug: "coins-i-coinshop-ekonomija",
      excerpt:
        "Objašnjenje premium valute (Coins), gdje se troši i kako do nje doći bez kompliciranja.",
      html: `
        <p>Na TerraHR postoji premium valuta <strong>Coins</strong> koja se koristi u <strong>CoinShopu</strong> za kupnju perkova, kozmetike i posebnih stvari.</p>

        <h3>Kako do Coins</h3>
        <ul>
          <li>kupnja u web shopu</li>
          <li>vote nagrade / crate nagrade</li>
          <li>posebne nagrade (eventi, referral, dnevne/tjedne)</li>
        </ul>

        <p><strong>CoinShop</strong> je podijeljen po kategorijama kako bi sve bilo brzo i pregledno.</p>
      `,
      feature_image: images.world,
      published_at: now,
      created_at: now,
      updated_at: now,
      authors: [baseAuthor],
      tags: [
        {
          id: "tag-demo-2",
          name: "Ekonomija",
          slug: "ekonomija",
          url: "/tag/ekonomija/"
        }
      ],
      primary_author: baseAuthor,
      primary_tag: {
        id: "tag-demo-2",
        name: "Ekonomija",
        slug: "ekonomija",
        url: "/tag/ekonomija/"
      },
      url: "/blog/coins-i-coinshop-ekonomija/",
      featured: false,
      visibility: "public",
      reading_time: 2,
      access: true,
      comments: false
    },

    // 3) Crates
    {
      id: "demo-3",
      uuid: "uuid-demo-3",
      title: "Crates, ključevi i vote nagrade — što dobivaš i kako",
      slug: "crates-kljucevi-i-vote-nagrade",
      excerpt:
        "Brzo objašnjenje crate sustava: rariteti, ključevi i najčešće nagrade.",
      html: `
        <p>Na TerraHR imamo više vrsta <strong>crateova</strong> (različiti rariteti) te <strong>vote</strong> crate za aktivne igrače.</p>

        <h3>Kako dobiti ključeve</h3>
        <ul>
          <li>vote nagrade</li>
          <li>dnevne/tjedne nagrade</li>
          <li>eventi i posebne akcije</li>
          <li>web shop</li>
        </ul>

        <p>Crateovi su odličan način da dobiješ coine, money, perkove i rijetke stvari bez velikog grinda.</p>
      `,
      feature_image: images.spawn2,
      published_at: now,
      created_at: now,
      updated_at: now,
      authors: [baseAuthor],
      tags: [
        {
          id: "tag-demo-3",
          name: "Nagrade",
          slug: "nagrade",
          url: "/tag/nagrade/"
        }
      ],
      primary_author: baseAuthor,
      primary_tag: {
        id: "tag-demo-3",
        name: "Nagrade",
        slug: "nagrade",
        url: "/tag/nagrade/"
      },
      url: "/blog/crates-kljucevi-i-vote-nagrade/",
      featured: false,
      visibility: "public",
      reading_time: 2,
      access: true,
      comments: false
    },

    // 4) Quests
    {
      id: "demo-4",
      uuid: "uuid-demo-4",
      title: "Quests i napredak — kako najbrže do nagrada",
      slug: "quests-i-napredak",
      excerpt:
        "Quest sustav donosi puno zadataka kroz više kategorija i nagrađuje aktivnu igru.",
      html: `
        <p><strong>Questovi</strong> su jedan od glavnih načina napretka na TerraHR. Radiš zadatke, skupljaš nagrade i otključavaš još sadržaja.</p>

        <h3>Savjet</h3>
        <ul>
          <li>kreni s lakšim questovima</li>
          <li>kad uhvatiš ritam, pređi na teže questove za bolji loot</li>
          <li>kombiniraj questove s farmanjem i shopom</li>
        </ul>

        <p>Uz questove, super su i daily/weekly nagrade koje pomažu da brže dođeš do coinova i ključeva.</p>
      `,
      feature_image: images.spawn3,
      published_at: now,
      created_at: now,
      updated_at: now,
      authors: [baseAuthor],
      tags: [
        {
          id: "tag-demo-4",
          name: "Questovi",
          slug: "questovi",
          url: "/tag/questovi/"
        }
      ],
      primary_author: baseAuthor,
      primary_tag: {
        id: "tag-demo-4",
        name: "Questovi",
        slug: "questovi",
        url: "/tag/questovi/"
      },
      url: "/blog/quests-i-napredak/",
      featured: false,
      visibility: "public",
      reading_time: 2,
      access: true,
      comments: false
    },

    // ✅ 5) JOBS (novi detaljni post sa tvojim slikama)
    {
      id: "demo-5",
      uuid: "uuid-demo-5",
      title: "Jobs — kako zaraditi novac i napredovati kroz levele",
      slug: "jobs-kako-zaraditi-i-napredovati",
      excerpt:
        "Jobs je jedan od najpopularnijih sustava na survival serverima: radiš posao, zarađuješ novac i bodove te otključavaš nagrade kroz levele.",
      html: `
        <p><strong>Jobs</strong> je jedan od najpopularnijih sustava na survival serverima — jednostavan je, motivira igrače na aktivnost i daje jasan način zarade.</p>

        <h3>1) Glavni Jobs meni</h3>
        <p>Ovo je početni izbornik gdje vidiš osnovne informacije, svoj napredak i brze opcije. Iz ovog menija najlakše ulaziš u ostale Jobs opcije.</p>
        <p><em>(Na slici: glavni Jobs meni)</em></p>
        <p><strong>Slika:</strong> jobs1.webp</p>

        <h3>2) Izbor poslova (Join / Leave)</h3>
        <p>U “Jobs Choosing” meniju možeš vidjeti sve dostupne poslove i odabrati u koje poslove želiš ući ili izaći. Svaki posao ima svoje radnje (npr. kopanje, sječenje, lov, gradnja…) koje ti donose zaradu.</p>
        <p><em>(Na slici: Jobs browser / izbor poslova)</em></p>
        <p><strong>Slika:</strong> jobs2.webp</p>

        <h3>3) Jobs Points i PointShop</h3>
        <p>Dok radiš posao, osim novca možeš dobivati i <strong>Jobs bodove</strong>. Te bodove trošiš u <strong>Jobs PointShopu</strong> za vrijedne iteme.</p>
        <p>PointShop je podijeljen u više kategorija kako bi sve bilo pregledno, a u ponudi je puno itema (razne korisne i rijetke stvari).</p>
        <p><em>(Na slici: Jobs PointShop)</em></p>
        <p><strong>Slika:</strong> jobs3.webp</p>

        <h3>4) Jobs levele i Jobs Rewards</h3>
        <p>Svaki posao ima svoj <strong>level</strong>. Kako ti level raste, tako raste i tvoja zarada — znači, što si aktivniji u tom poslu, to više zarađuješ.</p>
        <p>Uz to, postoji i <strong>Jobs Rewards</strong> sustav: kada dođeš do određenih “milestone” levela, dobivaš dodatne nagrade.</p>
        <p><em>(Na slici: Jobs levels / napredak)</em></p>
        <p><strong>Slika:</strong> levels.webp</p>

        <h3>Savjeti (da zaradiš brže)</h3>
        <ul>
          <li>Odaberi 1–2 posla i fokusiraj se na njih (tako brže dižeš level).</li>
          <li>Kombiniraj posao s onim što već radiš (npr. mining + builder/farmer).</li>
          <li>Troši Jobs bodove pametno — prvo uzmi iteme koji ti ubrzavaju gameplay.</li>
        </ul>

        <p>Ako ti nešto nije jasno ili misliš da nagrada nije sjela, javi se na Discord i napiši svoj nick + što si radio (posao) + vrijeme.</p>
      `,
      // ovo je slika koja se prikazuje na kartici (može jobs1)
      feature_image: images.jobs1,

      // ✅ ovo je dodatno: više slika za budući slider (kad ubaciš carousel)
      images: [images.jobs1, images.jobs2, images.jobs3, images.levels],

      published_at: now,
      created_at: now,
      updated_at: now,
      authors: [baseAuthor],
      tags: [
        {
          id: "tag-demo-5",
          name: "Jobs",
          slug: "jobs",
          url: "/tag/jobs/"
        }
      ],
      primary_author: baseAuthor,
      primary_tag: {
        id: "tag-demo-5",
        name: "Jobs",
        slug: "jobs",
        url: "/tag/jobs/"
      },
      url: "/blog/jobs-kako-zaraditi-i-napredovati/",
      featured: false,
      visibility: "public",
      reading_time: 3,
      access: true,
      comments: false
    },

    // 6) FAQ
    {
      id: "demo-6",
      uuid: "uuid-demo-6",
      title: "FAQ — najčešća pitanja (shop, coins, ključevi, rankovi)",
      slug: "faq-terrahr",
      excerpt:
        "Brzi odgovori na pitanja koja svi pitaju: kako kupiti, gdje stiže, što ako nešto ne dođe itd.",
      html: `
        <p><strong>1) Kako dobijem stvari nakon kupnje?</strong><br/>
        Nakon kupnje u web shopu, itemi se isporučuju automatski na server (kad si online). Ako nešto ne dođe, javi se na Discord.</p>

        <p><strong>2) Gdje trošim Coins?</strong><br/>
        U <strong>CoinShopu</strong> (perks, cosmetics, posebne stvari).</p>

        <p><strong>3) Kako do ključeva bez kupnje?</strong><br/>
        Vote, daily/weekly nagrade, eventi i ponekad posebne akcije.</p>

        <p><strong>4) Mogu li promijeniti nick / account?</strong><br/>
        U pravilu da, ali za shop isporuke uvijek koristi isti Minecraft account s kojim si kupio.</p>

        <p><strong>5) Trebam pomoć?</strong><br/>
        Najbrže je preko Discorda: otvori ticket i napiši nick + što si kupio + vrijeme kupnje.</p>
      `,
      feature_image: images.world,
      published_at: now,
      created_at: now,
      updated_at: now,
      authors: [baseAuthor],
      tags: [
        {
          id: "tag-demo-6",
          name: "FAQ",
          slug: "faq",
          url: "/tag/faq/"
        }
      ],
      primary_author: baseAuthor,
      primary_tag: {
        id: "tag-demo-6",
        name: "FAQ",
        slug: "faq",
        url: "/tag/faq/"
      },
      url: "/blog/faq-terrahr/",
      featured: false,
      visibility: "public",
      reading_time: 2,
      access: true,
      comments: false
    }
  ];

  // ✅ Normalizacija: polja koja UI očekuje (da ništa ne pukne)
  const normalized = posts.map((p) => ({
    feature_image_alt: null,
    feature_image_caption: null,
    custom_excerpt: null,
    codeinjection_head: null,
    codeinjection_foot: null,
    custom_template: null,
    canonical_url: null,
    og_image: null,
    og_title: null,
    og_description: null,
    twitter_image: null,
    twitter_title: null,
    twitter_description: null,
    meta_title: null,
    meta_description: null,
    email_subject: null,
    frontmatter: null,
    visibility: "public",
    reading_time: p.reading_time ?? 2,
    access: true,
    comments: false,
    ...p
  }));

  return normalized.slice(0, limit);
}
