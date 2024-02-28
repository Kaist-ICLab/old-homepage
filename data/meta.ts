const meta: { [key: string]: any } = {
  // System Info
  language: 'ko-kr',
  locale: 'ko-KR',
  // siteUrl: 'https://tailwind-nextjs-starter-blog.vercel.app',
  siteLogo: '/assets/seo/logo.png',
  // It will be show with your link
  socialBanner: '/assets/seo/twitter-card.png',
  //Lab Info
  title: 'ICLab',
  fullName: 'Interactive Computing Lab',
  description: 'Homepage of KAIST Interactive Computing Lab',
  headerTitle: 'ICLab',
  theme: 'light',

  location: 'N1 721, KAIST 291 Daehak-ro, Yuseong-gu, Daejeon 34141, Repulbic of Korea',
  carouselList: [
    "/assets/main/carousels/1_2022_kcc_jeju.jpg",
    "/assets/main/carousels/2_2022_straw_berry_party.jpg"
  ],
  menus: [
    { href: '/projects', title: 'Projects' },
    { href: '/publications', title: 'Publications' },
    { href: '/members', title: 'Members' },
    { href: '/courses', title: 'Courses' },
    { href: 'https://brunch.co.kr/@kaisticlab', title: 'Blog' },
  ]
}

export default meta;
