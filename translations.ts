export type Language = 'id' | 'en' | 'ja';

export interface Translations {
  common: {
    signIn: string;
    getStarted: string;
    dashboard: string;
    myCourses: string;
    settingsLabel: string;
    signOut: string;
    level: string;
    premium: string;
  };
  nav: {
    courses: string;
    coursesEnglish: string;
    coursesEnglishDesc: string;
    coursesJapanese: string;
    coursesJapaneseDesc: string;
    coursesBusiness: string;
    coursesBusinessDesc: string;
    coursesJlpt: string;
    coursesJlptDesc: string;
    viewAllCourses: string;
    resources: string;
    aiTutor: string;
    aiTutorDesc: string;
    vocabulary: string;
    vocabularyDesc: string;
    jobPrep: string;
    jobPrepDesc: string;
    community: string;
    forums: string;
    studyGroups: string;
    leaderboards: string;
    pricing: string;
    languageSwitcherLabel: string;
  };
  hero: {
    badgeNew: string;
    badgeUsers: string;
    title: string;
    titleHighlight1: string;
    titleHighlight2: string;
    subtitle: string;
    ctaPrimary: string;
    ctaSecondary: string;
    pointFree: string;
    pointNoCard: string;
    progressLabel: string;
    streakLabel: string;
  };
  stats: {
    activeLearners: string;
    courses: string;
    languages: string;
    rating: string;
  };
  learningModes: {
    title: string;
    subtitle: string;
    vocabulary: string;
    vocabularyCount: string;
    grammar: string;
    grammarCount: string;
    speaking: string;
    speakingCount: string;
    listening: string;
    listeningCount: string;
    writing: string;
    writingCount: string;
  };
  courses: {
    title: string;
    subtitle: string;
    viewAll: string;
    free: string;
    studentsSuffix: string;
    flagEnglish: string;
    flagJapanese: string;
    items: {
      slug: string;
      title: string;
      description: string;
      language: 'en' | 'ja';
      level: string;
      duration: string;
      isFree: boolean;
      image: string;
      students: string;
      rating: number;
    }[];
  };
  whyChooseUs: {
    badge: string;
    title: string;
    subtitle: string;
    items: { title: string; desc: string }[];
  };
  japaneseProgram: {
    badge: string;
    title: string;
    subtitle: string;
    levels: { level: string; label: string }[];
    cta: string;
  };
  englishProgram: {
    badge: string;
    title: string;
    subtitle: string;
    levels: { level: string; label: string }[];
    cta: string;
  };
  jlptPrep: {
    badge: string;
    title: string;
    subtitle: string;
    features: string[];
    cta: string;
  };
  ieltsPrep: {
    badge: string;
    title: string;
    subtitle: string;
    features: string[];
    cta: string;
  };
  testimonials: {
    title: string;
    subtitle: string;
    items: {
      name: string;
      role: string;
      content: string;
      language: string;
      level: string;
      avatar: string;
    }[];
  };
  pricingPreview: {
    badge: string;
    title: string;
    subtitle: string;
    period: string;
    freeName: string;
    freeDesc: string;
    freeFeatures: string[];
    premiumName: string;
    premiumDesc: string;
    premiumFeatures: string[];
    premiumBadge: string;
    seeAllPlans: string;
  };
  faq: {
    title: string;
    subtitle: string;
    items: { q: string; a: string }[];
  };
  finalCta: {
    title: string;
    subtitle: string;
    primary: string;
    secondary: string;
  };
  footer: {
    tagline: string;
    coursesTitle: string;
    coursesLinks: { title: string; href: string }[];
    resourcesTitle: string;
    resourcesLinks: { title: string; href: string }[];
    communityTitle: string;
    communityLinks: { title: string; href: string }[];
    companyTitle: string;
    companyLinks: { title: string; href: string }[];
    legalTitle: string;
    legalLinks: { title: string; href: string }[];
    rights: string;
  };
}

const id: Translations = {
  common: {
    signIn: 'Masuk',
    getStarted: 'Mulai Gratis',
    dashboard: 'Dasbor',
    myCourses: 'Kursus Saya',
    settingsLabel: 'Pengaturan',
    signOut: 'Keluar',
    level: 'Level',
    premium: 'Premium',
  },
  nav: {
    courses: 'Kursus',
    coursesEnglish: 'Kursus Bahasa Inggris',
    coursesEnglishDesc: 'Level A1 sampai C2',
    coursesJapanese: 'Kursus Bahasa Jepang',
    coursesJapaneseDesc: 'Level N5 sampai N1',
    coursesBusiness: 'Bahasa Inggris Bisnis',
    coursesBusinessDesc: 'Keterampilan profesional',
    coursesJlpt: 'Persiapan JLPT',
    coursesJlptDesc: 'Semua level JLPT',
    viewAllCourses: 'Lihat Semua Kursus',
    resources: 'Sumber Belajar',
    aiTutor: 'Tutor AI',
    aiTutorDesc: 'Latihan percakapan',
    vocabulary: 'Kosakata',
    vocabularyDesc: 'Flashcard & latihan',
    jobPrep: 'Persiapan Kerja',
    jobPrepDesc: 'Latihan wawancara',
    community: 'Komunitas',
    forums: 'Forum Diskusi',
    studyGroups: 'Kelompok Belajar',
    leaderboards: 'Papan Peringkat',
    pricing: 'Harga',
    languageSwitcherLabel: 'Bahasa',
  },
  hero: {
    badgeNew: 'Baru: Latihan Wawancara AI',
    badgeUsers: 'Digunakan oleh 2 Jt+ pelajar',
    title: 'Belajar Bahasa Jepang & Inggris dari Nol hingga Mahir',
    titleHighlight1: 'Bahasa Jepang',
    titleHighlight2: 'Inggris',
    subtitle:
      'Platform belajar bahasa untuk pelajar, mahasiswa, dan calon pekerja internasional. Semua materi dijelaskan dalam Bahasa Indonesia agar lebih mudah dipahami pemula.',
    ctaPrimary: 'Mulai Belajar Gratis',
    ctaSecondary: 'Lihat Program',
    pointFree: 'Kursus gratis tersedia',
    pointNoCard: 'Tanpa kartu kredit',
    progressLabel: 'Progres hari ini',
    streakLabel: 'hari',
  },
  stats: {
    activeLearners: 'Pelajar Aktif',
    courses: 'Kursus',
    languages: 'Bahasa',
    rating: 'Rating Aplikasi',
  },
  learningModes: {
    title: 'Belajar Secara Menyeluruh',
    subtitle:
      'Kembangkan semua keterampilan bahasa dengan pendekatan terintegrasi. Setiap mode dirancang untuk saling melengkapi.',
    vocabulary: 'Kosakata',
    vocabularyCount: '10.000+ kata',
    grammar: 'Tata Bahasa',
    grammarCount: '200+ pelajaran',
    speaking: 'Berbicara',
    speakingCount: 'Percakapan AI',
    listening: 'Mendengarkan',
    listeningCount: '500+ audio',
    writing: 'Menulis',
    writingCount: 'Koreksi AI',
  },
  courses: {
    title: 'Kursus Populer',
    subtitle:
      'Bergabunglah dengan ribuan pelajar yang menguasai bahasa baru. Mulai dari kursus gratis atau upgrade untuk materi premium.',
    viewAll: 'Lihat Semua Kursus',
    free: 'Gratis',
    studentsSuffix: 'siswa',
    flagEnglish: 'Bahasa Inggris',
    flagJapanese: 'Bahasa Jepang',
    items: [
      {
        slug: 'english-foundations-a1',
        title: 'Bahasa Inggris Dasar A1',
        description:
          'Mulai perjalanan Bahasa Inggrismu dari nol dengan kosakata dan tata bahasa penting, dijelaskan dalam Bahasa Indonesia.',
        language: 'en',
        level: 'A1',
        duration: '20 jam',
        isFree: true,
        image: 'https://images.pexels.com/photos/267695/pexels-photo-267695.jpeg',
        students: '12,5K',
        rating: 4.8,
      },
      {
        slug: 'japanese-n5-beginner',
        title: 'Bahasa Jepang Pemula N5',
        description:
          'Pelajari hiragana, katakana, dan kanji dasar untuk JLPT N5 dengan penjelasan lengkap dalam Bahasa Indonesia.',
        language: 'ja',
        level: 'N5',
        duration: '25 jam',
        isFree: true,
        image: 'https://images.pexels.com/photos/168044/pexels-photo-168044.jpeg',
        students: '8,2K',
        rating: 4.9,
      },
      {
        slug: 'ielts-mastery',
        title: 'Pemantapan IELTS',
        description:
          'Persiapan lengkap untuk keempat sesi ujian IELTS: Listening, Reading, Writing, dan Speaking.',
        language: 'en',
        level: 'B2',
        duration: '40 jam',
        isFree: false,
        image: 'https://images.pexels.com/photos/5905716/pexels-photo-5905716.jpeg',
        students: '5,5K',
        rating: 4.9,
      },
      {
        slug: 'business-japanese-keigo',
        title: 'Bahasa Jepang Bisnis & Keigo',
        description:
          'Kuasai bahasa hormat (keigo) dan etika profesional Jepang untuk dunia kerja internasional.',
        language: 'ja',
        level: 'N2',
        duration: '35 jam',
        isFree: false,
        image: 'https://images.pexels.com/photos/3184292/pexels-photo-3184292.jpeg',
        students: '3,2K',
        rating: 4.8,
      },
    ],
  },
  whyChooseUs: {
    badge: 'Mengapa Memilih Kami',
    title: 'Semua yang Anda Butuhkan untuk Berhasil',
    subtitle:
      'Platform kami menggabungkan metode pengajaran yang terbukti efektif dengan teknologi terkini, dengan penjelasan dalam Bahasa Indonesia yang mudah dipahami.',
    items: [
      {
        title: 'Tutor AI',
        desc: 'Latihan percakapan dengan tutor AI 24/7. Dapatkan koreksi grammar dan pengucapan secara instan.',
      },
      {
        title: 'Pembelajaran Gamifikasi',
        desc: 'Kumpulkan XP, koin, dan pencapaian. Bersaing di papan peringkat dan jaga streak harianmu.',
      },
      {
        title: 'Persiapan JLPT & IELTS',
        desc: 'Kursus terstruktur khusus untuk ujian sertifikasi dengan latihan soal dan strategi terbukti.',
      },
      {
        title: 'Komunitas',
        desc: 'Gabung kelompok belajar, ikut forum diskusi, dan berteman dengan sesama pelajar bahasa.',
      },
      {
        title: 'Video Pembelajaran',
        desc: 'Konten video berkualitas tinggi dengan penutur asli yang mendemonstrasikan penggunaan nyata.',
      },
      {
        title: 'Sertifikat',
        desc: 'Dapatkan sertifikat terverifikasi setelah menyelesaikan kursus untuk membuktikan pencapaianmu.',
      },
    ],
  },
  japaneseProgram: {
    badge: '🇯🇵 Program Bahasa Jepang',
    title: 'Program Bahasa Jepang',
    subtitle:
      'Dari hiragana hingga keigo bisnis — kuasai Bahasa Jepang langkah demi langkah dengan penjelasan lengkap dalam Bahasa Indonesia.',
    levels: [
      { level: 'N5', label: 'Pemula' },
      { level: 'N4', label: 'Dasar' },
      { level: 'N3', label: 'Menengah' },
      { level: 'N2', label: 'Mahir' },
      { level: 'N1', label: 'Ahli' },
    ],
    cta: 'Jelajahi Kursus Jepang',
  },
  englishProgram: {
    badge: '🇬🇧 Program Bahasa Inggris',
    title: 'Program Bahasa Inggris',
    subtitle:
      'Dari dasar hingga tingkat profesional — kuasai Bahasa Inggris untuk sekolah, kuliah, dan karier internasional.',
    levels: [
      { level: 'A1', label: 'Pemula' },
      { level: 'A2', label: 'Dasar' },
      { level: 'B1', label: 'Menengah' },
      { level: 'B2', label: 'Menengah Atas' },
      { level: 'C1', label: 'Mahir' },
      { level: 'C2', label: 'Ahli' },
    ],
    cta: 'Jelajahi Kursus Inggris',
  },
  jlptPrep: {
    badge: '🎌 Sertifikasi Bahasa Jepang',
    title: 'Persiapan JLPT',
    subtitle:
      'Siap menghadapi Japanese Language Proficiency Test dengan latihan soal, simulasi ujian, dan strategi dari instruktur berpengalaman.',
    features: [
      'Latihan soal untuk level N5 sampai N1',
      'Simulasi ujian dengan waktu nyata',
      'Pembahasan tata bahasa & kanji mendalam',
      'Statistik dan analisis skor pribadi',
    ],
    cta: 'Mulai Persiapan JLPT',
  },
  ieltsPrep: {
    badge: '📝 Sertifikasi Bahasa Inggris',
    title: 'Persiapan IELTS',
    subtitle:
      'Raih skor IELTS impianmu dengan latihan lengkap untuk 4 keterampilan: Listening, Reading, Writing, dan Speaking.',
    features: [
      'Latihan soal 4 keterampilan lengkap',
      'Simulasi ujian seperti aslinya',
      'Koreksi Writing & Speaking oleh AI',
      'Strategi & tips dari instruktur bersertifikat',
    ],
    cta: 'Mulai Persiapan IELTS',
  },
  testimonials: {
    title: 'Testimoni',
    subtitle: 'Pelajar yang telah mencapai tujuan bahasa mereka',
    items: [
      {
        name: 'Sarah Chen',
        role: 'Software Engineer di Google',
        content:
          'Lulus JLPT N2 dalam 8 bulan! Tutor AI membantu saya melatih keigo untuk wawancara kerja di Tokyo.',
        language: 'Bahasa Jepang',
        level: 'N2',
        avatar: 'https://images.pexels.com/photos/774909/pexels-photo-774909.jpeg',
      },
      {
        name: 'Budi Santoso',
        role: 'Mahasiswa Teknik, calon beasiswa luar negeri',
        content:
          'Skor IELTS saya naik ke 7.5! Penjelasan dalam Bahasa Indonesia membuat materi yang sulit jadi mudah dipahami.',
        language: 'Bahasa Inggris',
        level: 'IELTS 7.5',
        avatar: 'https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg',
      },
      {
        name: 'Marie Dupont',
        role: 'Business Analyst',
        content:
          'Gamifikasinya membuat saya termotivasi. Streak 180 hari dan terus bertambah! Belajar Bahasa Jepang jadi seru.',
        language: 'Bahasa Jepang',
        level: 'N3',
        avatar: 'https://images.pexels.com/photos/1181686/pexels-photo-1181686.jpeg',
      },
    ],
  },
  pricingPreview: {
    badge: 'Harga',
    title: 'Mulai Gratis, Upgrade Saat Siap',
    subtitle:
      'Mulai dengan kursus gratis dan upgrade ke Premium untuk akses tanpa batas ke semua materi dan tutor AI.',
    period: '/bulan',
    freeName: 'Gratis',
    freeDesc: 'Cocok untuk memulai',
    freeFeatures: ['Akses kursus gratis', 'Kosakata dasar', 'Latihan soal', 'Forum komunitas'],
    premiumName: 'Premium',
    premiumDesc: 'Semua materi plus tutor AI',
    premiumFeatures: [
      'Semua kursus terbuka',
      'Sesi tutor AI tanpa batas',
      'Persiapan IELTS & JLPT',
      'Sertifikat resmi',
      'Tanpa iklan',
    ],
    premiumBadge: 'Populer',
    seeAllPlans: 'Lihat Semua Paket',
  },
  faq: {
    title: 'Pertanyaan yang Sering Diajukan',
    subtitle: 'Masih ada pertanyaan? Berikut jawaban yang paling sering ditanyakan.',
    items: [
      {
        q: 'Apakah platform ini benar-benar gratis?',
        a: 'Ya. Kamu bisa mengakses banyak kursus dasar secara gratis selamanya. Paket Basic, Premium, dan Pro tersedia jika kamu ingin akses penuh ke semua materi dan fitur tutor AI tanpa batas.',
      },
      {
        q: 'Apakah semua materi dijelaskan dalam Bahasa Indonesia?',
        a: 'Betul. Seluruh penjelasan, instruksi, dan panduan di platform ini menggunakan Bahasa Indonesia agar lebih mudah dipahami oleh pemula, meskipun bahasa yang dipelajari adalah Bahasa Inggris dan Bahasa Jepang.',
      },
      {
        q: 'Apa perbedaan paket Basic, Premium, dan Pro?',
        a: 'Basic memberi akses ke lebih banyak kursus dasar. Premium menambahkan tutor AI tanpa batas dan persiapan IELTS/JLPT. Pro memberikan akses penuh ke seluruh kursus, sertifikat resmi, dan dukungan prioritas.',
      },
      {
        q: 'Apakah saya mendapatkan sertifikat setelah lulus kursus?',
        a: 'Ya, setiap kursus yang diselesaikan akan memberikan sertifikat. Pengguna paket Premium dan Pro mendapatkan sertifikat terverifikasi yang dapat dibagikan dengan tautan unik.',
      },
      {
        q: 'Bagaimana cara membatalkan langganan?',
        a: 'Kamu dapat membatalkan langganan kapan saja melalui halaman Dasbor tanpa kontrak jangka panjang. Akses tetap berlaku sampai akhir periode tagihan.',
      },
    ],
  },
  finalCta: {
    title: 'Siap Mengubah Kemampuan Bahasamu?',
    subtitle:
      'Bergabunglah dengan ribuan pelajar di Indonesia. Mulai perjalananmu hari ini dan raih kemahiran berbahasa dengan metode yang terbukti efektif.',
    primary: 'Mulai Belajar Gratis',
    secondary: 'Jelajahi Kursus',
  },
  footer: {
    tagline:
      'Membantu pelajar Indonesia menguasai Bahasa Inggris dan Bahasa Jepang melalui teknologi pembelajaran modern, dengan penjelasan lengkap dalam Bahasa Indonesia.',
    coursesTitle: 'Kursus',
    coursesLinks: [
      { title: 'Bahasa Inggris A1-C2', href: '/courses?lang=en' },
      { title: 'Bahasa Jepang N5-N1', href: '/courses?lang=ja' },
      { title: 'Persiapan IELTS', href: '/courses?category=ielts' },
      { title: 'Persiapan JLPT', href: '/courses?category=jlpt' },
      { title: 'Bahasa Inggris Bisnis', href: '/courses?category=business' },
      { title: 'Kursus Keigo', href: '/courses/business-japanese-keigo' },
    ],
    resourcesTitle: 'Sumber Belajar',
    resourcesLinks: [
      { title: 'Tutor AI', href: '/ai-tutor' },
      { title: 'Kosakata', href: '/vocabulary' },
      { title: 'Persiapan Kerja', href: '/job-prep' },
      { title: 'Pembuat CV', href: '/job-prep#resume' },
      { title: 'Latihan Wawancara', href: '/ai-tutor?mode=interview' },
    ],
    communityTitle: 'Komunitas',
    communityLinks: [
      { title: 'Forum Diskusi', href: '/community/forums' },
      { title: 'Kelompok Belajar', href: '/community/groups' },
      { title: 'Papan Peringkat', href: '/community/leaderboard' },
      { title: 'Acara', href: '/community/events' },
    ],
    companyTitle: 'Perusahaan',
    companyLinks: [
      { title: 'Tentang Kami', href: '/about' },
      { title: 'Karier', href: '/careers' },
      { title: 'Kontak', href: '/contact' },
      { title: 'Pers', href: '/press' },
    ],
    legalTitle: 'Legal',
    legalLinks: [
      { title: 'Kebijakan Privasi', href: '/privacy' },
      { title: 'Syarat & Ketentuan', href: '/terms' },
      { title: 'Kebijakan Cookie', href: '/cookies' },
      { title: 'Kebijakan Pengembalian Dana', href: '/refund' },
    ],
    rights: 'Hak cipta dilindungi.',
  },
};

const en: Translations = {
  common: {
    signIn: 'Sign In',
    getStarted: 'Get Started Free',
    dashboard: 'Dashboard',
    myCourses: 'My Courses',
    settingsLabel: 'Settings',
    signOut: 'Sign Out',
    level: 'Level',
    premium: 'Premium',
  },
  nav: {
    courses: 'Courses',
    coursesEnglish: 'English Courses',
    coursesEnglishDesc: 'A1 to C2 levels',
    coursesJapanese: 'Japanese Courses',
    coursesJapaneseDesc: 'N5 to N1 levels',
    coursesBusiness: 'Business English',
    coursesBusinessDesc: 'Professional skills',
    coursesJlpt: 'JLPT Preparation',
    coursesJlptDesc: 'All JLPT levels',
    viewAllCourses: 'View All Courses',
    resources: 'Resources',
    aiTutor: 'AI Tutor',
    aiTutorDesc: 'Practice conversations',
    vocabulary: 'Vocabulary',
    vocabularyDesc: 'Flashcards & review',
    jobPrep: 'Job Prep',
    jobPrepDesc: 'Interview practice',
    community: 'Community',
    forums: 'Discussion Forums',
    studyGroups: 'Study Groups',
    leaderboards: 'Leaderboards',
    pricing: 'Pricing',
    languageSwitcherLabel: 'Language',
  },
  hero: {
    badgeNew: 'New: AI Interview Practice',
    badgeUsers: 'Used by 2M+ learners',
    title: 'Learn Japanese & English From Zero to Fluent',
    titleHighlight1: 'Japanese',
    titleHighlight2: 'English',
    subtitle:
      'A language learning platform for students, university students, and future international workers. All lessons are explained in Bahasa Indonesia, making it easier for beginners to understand.',
    ctaPrimary: 'Start Learning Free',
    ctaSecondary: 'View Programs',
    pointFree: 'Free courses available',
    pointNoCard: 'No credit card required',
    progressLabel: "Today's progress",
    streakLabel: 'days',
  },
  stats: {
    activeLearners: 'Active Learners',
    courses: 'Courses',
    languages: 'Languages',
    rating: 'App Rating',
  },
  learningModes: {
    title: 'Comprehensive Learning',
    subtitle:
      'Develop all language skills with our integrated approach. Each mode is designed to work together.',
    vocabulary: 'Vocabulary',
    vocabularyCount: '10,000+ words',
    grammar: 'Grammar',
    grammarCount: '200+ lessons',
    speaking: 'Speaking',
    speakingCount: 'AI conversations',
    listening: 'Listening',
    listeningCount: '500+ audio',
    writing: 'Writing',
    writingCount: 'AI correction',
  },
  courses: {
    title: 'Popular Courses',
    subtitle:
      'Join thousands of learners mastering a new language. Start with a free course or upgrade for premium content.',
    viewAll: 'View All Courses',
    free: 'Free',
    studentsSuffix: 'students',
    flagEnglish: 'English',
    flagJapanese: 'Japanese',
    items: [
      {
        slug: 'english-foundations-a1',
        title: 'English Foundations A1',
        description:
          'Start your English journey from scratch with essential vocabulary and grammar, explained in Bahasa Indonesia.',
        language: 'en',
        level: 'A1',
        duration: '20 hours',
        isFree: true,
        image: 'https://images.pexels.com/photos/267695/pexels-photo-267695.jpeg',
        students: '12.5K',
        rating: 4.8,
      },
      {
        slug: 'japanese-n5-beginner',
        title: 'Japanese N5 Beginner',
        description:
          'Learn hiragana, katakana, and basic kanji for JLPT N5, fully explained in Bahasa Indonesia.',
        language: 'ja',
        level: 'N5',
        duration: '25 hours',
        isFree: true,
        image: 'https://images.pexels.com/photos/168044/pexels-photo-168044.jpeg',
        students: '8.2K',
        rating: 4.9,
      },
      {
        slug: 'ielts-mastery',
        title: 'IELTS Mastery',
        description: 'Complete preparation for all four IELTS exam sections: Listening, Reading, Writing, Speaking.',
        language: 'en',
        level: 'B2',
        duration: '40 hours',
        isFree: false,
        image: 'https://images.pexels.com/photos/5905716/pexels-photo-5905716.jpeg',
        students: '5.5K',
        rating: 4.9,
      },
      {
        slug: 'business-japanese-keigo',
        title: 'Business Japanese & Keigo',
        description: 'Master honorific language and professional Japanese etiquette for international careers.',
        language: 'ja',
        level: 'N2',
        duration: '35 hours',
        isFree: false,
        image: 'https://images.pexels.com/photos/3184292/pexels-photo-3184292.jpeg',
        students: '3.2K',
        rating: 4.8,
      },
    ],
  },
  whyChooseUs: {
    badge: 'Why Choose Us',
    title: 'Everything You Need to Succeed',
    subtitle:
      'Our platform combines proven teaching methods with the latest technology, with all explanations in clear Bahasa Indonesia.',
    items: [
      {
        title: 'AI Tutor',
        desc: 'Practice conversations with an AI tutor 24/7. Get instant grammar and pronunciation corrections.',
      },
      {
        title: 'Gamified Learning',
        desc: 'Earn XP, coins, and achievements. Compete on leaderboards and keep up your daily streak.',
      },
      {
        title: 'JLPT & IELTS Prep',
        desc: 'Structured courses built specifically for certification exams, with practice tests and proven strategies.',
      },
      {
        title: 'Community',
        desc: 'Join study groups, take part in discussion forums, and make friends learning the same language.',
      },
      {
        title: 'Video Lessons',
        desc: 'High-quality video content with native speakers demonstrating real-world usage.',
      },
      {
        title: 'Certificates',
        desc: 'Earn a verified certificate after completing a course to showcase your achievement.',
      },
    ],
  },
  japaneseProgram: {
    badge: '🇯🇵 Japanese Program',
    title: 'Japanese Program',
    subtitle:
      'From hiragana to business keigo — master Japanese step by step, with full explanations in Bahasa Indonesia.',
    levels: [
      { level: 'N5', label: 'Beginner' },
      { level: 'N4', label: 'Elementary' },
      { level: 'N3', label: 'Intermediate' },
      { level: 'N2', label: 'Advanced' },
      { level: 'N1', label: 'Expert' },
    ],
    cta: 'Explore Japanese Courses',
  },
  englishProgram: {
    badge: '🇬🇧 English Program',
    title: 'English Program',
    subtitle: 'From the basics to a professional level — master English for school, university, and an international career.',
    levels: [
      { level: 'A1', label: 'Beginner' },
      { level: 'A2', label: 'Elementary' },
      { level: 'B1', label: 'Intermediate' },
      { level: 'B2', label: 'Upper Intermediate' },
      { level: 'C1', label: 'Advanced' },
      { level: 'C2', label: 'Expert' },
    ],
    cta: 'Explore English Courses',
  },
  jlptPrep: {
    badge: '🎌 Japanese Certification',
    title: 'JLPT Preparation',
    subtitle:
      'Get ready for the Japanese Language Proficiency Test with practice questions, timed mock exams, and strategies from experienced instructors.',
    features: [
      'Practice questions for N5 through N1',
      'Real-time timed mock exams',
      'In-depth grammar & kanji breakdowns',
      'Personal score statistics & analysis',
    ],
    cta: 'Start JLPT Prep',
  },
  ieltsPrep: {
    badge: '📝 English Certification',
    title: 'IELTS Preparation',
    subtitle: 'Reach your target IELTS score with complete practice for all 4 skills: Listening, Reading, Writing, and Speaking.',
    features: [
      'Complete practice for all 4 skills',
      'Realistic mock exam simulations',
      'AI-powered Writing & Speaking feedback',
      'Strategies and tips from certified instructors',
    ],
    cta: 'Start IELTS Prep',
  },
  testimonials: {
    title: 'Testimonials',
    subtitle: 'Learners who reached their language goals',
    items: [
      {
        name: 'Sarah Chen',
        role: 'Software Engineer at Google',
        content: 'Passed JLPT N2 in 8 months! The AI tutor helped me practice keigo for my job interviews in Tokyo.',
        language: 'Japanese',
        level: 'N2',
        avatar: 'https://images.pexels.com/photos/774909/pexels-photo-774909.jpeg',
      },
      {
        name: 'Budi Santoso',
        role: 'Engineering student, scholarship applicant',
        content: 'My IELTS score jumped to 7.5! Explanations in Bahasa Indonesia made the hard material easy to understand.',
        language: 'English',
        level: 'IELTS 7.5',
        avatar: 'https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg',
      },
      {
        name: 'Marie Dupont',
        role: 'Business Analyst',
        content: "The gamification kept me motivated. 180-day streak and counting! Learning Japanese has never been this fun.",
        language: 'Japanese',
        level: 'N3',
        avatar: 'https://images.pexels.com/photos/1181686/pexels-photo-1181686.jpeg',
      },
    ],
  },
  pricingPreview: {
    badge: 'Pricing',
    title: 'Start Free, Upgrade When Ready',
    subtitle: 'Get started with free courses and upgrade to Premium for unlimited access to all content and the AI tutor.',
    period: '/month',
    freeName: 'Free',
    freeDesc: 'Perfect to get started',
    freeFeatures: ['Access to free courses', 'Basic vocabulary', 'Practice exercises', 'Community forums'],
    premiumName: 'Premium',
    premiumDesc: 'Everything plus AI tutoring',
    premiumFeatures: ['All courses unlocked', 'Unlimited AI tutor sessions', 'IELTS & JLPT prep', 'Official certificate', 'No ads'],
    premiumBadge: 'Popular',
    seeAllPlans: 'See All Plans',
  },
  faq: {
    title: 'Frequently Asked Questions',
    subtitle: "Still have questions? Here are the answers we're asked most often.",
    items: [
      {
        q: 'Is this platform really free?',
        a: 'Yes. You can access many basic courses for free, forever. Basic, Premium, and Pro plans are available if you want full access to all materials and unlimited AI tutor sessions.',
      },
      {
        q: 'Is everything explained in Bahasa Indonesia?',
        a: "That's right. All explanations, instructions, and guidance on this platform are in Bahasa Indonesia so beginners can understand more easily, even though the languages being taught are English and Japanese.",
      },
      {
        q: "What's the difference between Basic, Premium, and Pro?",
        a: 'Basic gives you access to more foundational courses. Premium adds unlimited AI tutor access and IELTS/JLPT prep. Pro gives full access to every course, official certificates, and priority support.',
      },
      {
        q: 'Do I get a certificate after finishing a course?',
        a: 'Yes, every completed course awards a certificate. Premium and Pro users receive a verified certificate that can be shared via a unique link.',
      },
      {
        q: 'How do I cancel my subscription?',
        a: 'You can cancel anytime from your Dashboard page, with no long-term contract. Access stays active until the end of your billing period.',
      },
    ],
  },
  finalCta: {
    title: 'Ready to Transform Your Language Skills?',
    subtitle: 'Join thousands of learners across Indonesia. Start your journey today and reach fluency with a proven method.',
    primary: 'Start Learning Free',
    secondary: 'Browse Courses',
  },
  footer: {
    tagline:
      'Helping Indonesian learners master English and Japanese through modern learning technology, with every explanation in Bahasa Indonesia.',
    coursesTitle: 'Courses',
    coursesLinks: [
      { title: 'English A1-C2', href: '/courses?lang=en' },
      { title: 'Japanese N5-N1', href: '/courses?lang=ja' },
      { title: 'IELTS Prep', href: '/courses?category=ielts' },
      { title: 'JLPT Prep', href: '/courses?category=jlpt' },
      { title: 'Business English', href: '/courses?category=business' },
      { title: 'Keigo Course', href: '/courses/business-japanese-keigo' },
    ],
    resourcesTitle: 'Resources',
    resourcesLinks: [
      { title: 'AI Tutor', href: '/ai-tutor' },
      { title: 'Vocabulary', href: '/vocabulary' },
      { title: 'Job Preparation', href: '/job-prep' },
      { title: 'Resume Builder', href: '/job-prep#resume' },
      { title: 'Interview Practice', href: '/ai-tutor?mode=interview' },
    ],
    communityTitle: 'Community',
    communityLinks: [
      { title: 'Forums', href: '/community/forums' },
      { title: 'Study Groups', href: '/community/groups' },
      { title: 'Leaderboards', href: '/community/leaderboard' },
      { title: 'Events', href: '/community/events' },
    ],
    companyTitle: 'Company',
    companyLinks: [
      { title: 'About Us', href: '/about' },
      { title: 'Careers', href: '/careers' },
      { title: 'Contact', href: '/contact' },
      { title: 'Press', href: '/press' },
    ],
    legalTitle: 'Legal',
    legalLinks: [
      { title: 'Privacy Policy', href: '/privacy' },
      { title: 'Terms of Service', href: '/terms' },
      { title: 'Cookie Policy', href: '/cookies' },
      { title: 'Refund Policy', href: '/refund' },
    ],
    rights: 'All rights reserved.',
  },
};

const ja: Translations = {
  common: {
    signIn: 'ログイン',
    getStarted: '無料で始める',
    dashboard: 'ダッシュボード',
    myCourses: 'マイコース',
    settingsLabel: '設定',
    signOut: 'ログアウト',
    level: 'レベル',
    premium: 'プレミアム',
  },
  nav: {
    courses: 'コース',
    coursesEnglish: '英語コース',
    coursesEnglishDesc: 'A1からC2レベル',
    coursesJapanese: '日本語コース',
    coursesJapaneseDesc: 'N5からN1レベル',
    coursesBusiness: 'ビジネス英語',
    coursesBusinessDesc: 'プロフェッショナルスキル',
    coursesJlpt: 'JLPT対策',
    coursesJlptDesc: 'すべてのJLPTレベル',
    viewAllCourses: 'すべてのコースを見る',
    resources: 'リソース',
    aiTutor: 'AIチューター',
    aiTutorDesc: '会話練習',
    vocabulary: '単語学習',
    vocabularyDesc: 'フラッシュカード復習',
    jobPrep: '就職対策',
    jobPrepDesc: '面接練習',
    community: 'コミュニティ',
    forums: 'ディスカッションフォーラム',
    studyGroups: 'スタディグループ',
    leaderboards: 'リーダーボード',
    pricing: '料金',
    languageSwitcherLabel: '言語',
  },
  hero: {
    badgeNew: '新機能：AI面接練習',
    badgeUsers: '200万人以上が利用中',
    title: '日本語と英語をゼロから上級者レベルまで学ぼう',
    titleHighlight1: '日本語',
    titleHighlight2: '英語',
    subtitle:
      '学生、大学生、そして将来海外で働きたい方のための言語学習プラットフォームです。初心者にも分かりやすいように、すべての教材はインドネシア語で説明されています。',
    ctaPrimary: '無料で学習を始める',
    ctaSecondary: 'プログラムを見る',
    pointFree: '無料コースあり',
    pointNoCard: 'クレジットカード不要',
    progressLabel: '今日の進捗',
    streakLabel: '日',
  },
  stats: {
    activeLearners: 'アクティブな学習者',
    courses: 'コース数',
    languages: '言語',
    rating: 'アプリ評価',
  },
  learningModes: {
    title: '総合的な学習',
    subtitle: '統合的なアプローチですべての言語スキルを伸ばします。各モードは互いに連携するよう設計されています。',
    vocabulary: '単語',
    vocabularyCount: '10,000語以上',
    grammar: '文法',
    grammarCount: '200以上のレッスン',
    speaking: '会話',
    speakingCount: 'AIとの会話',
    listening: 'リスニング',
    listeningCount: '500以上の音声',
    writing: 'ライティング',
    writingCount: 'AIによる添削',
  },
  courses: {
    title: '人気のコース',
    subtitle: '新しい言語を習得している何千人もの学習者と一緒に学びましょう。無料コースから始めるか、プレミアムにアップグレードできます。',
    viewAll: 'すべてのコースを見る',
    free: '無料',
    studentsSuffix: '人が受講中',
    flagEnglish: '英語',
    flagJapanese: '日本語',
    items: [
      {
        slug: 'english-foundations-a1',
        title: '英語基礎 A1',
        description: '基本的な単語と文法を、インドネシア語の説明付きでゼロから学べます。',
        language: 'en',
        level: 'A1',
        duration: '20時間',
        isFree: true,
        image: 'https://images.pexels.com/photos/267695/pexels-photo-267695.jpeg',
        students: '12.5K',
        rating: 4.8,
      },
      {
        slug: 'japanese-n5-beginner',
        title: '日本語入門 N5',
        description: 'JLPT N5に向けて、ひらがな・カタカナ・基本漢字をインドネシア語で丁寧に解説します。',
        language: 'ja',
        level: 'N5',
        duration: '25時間',
        isFree: true,
        image: 'https://images.pexels.com/photos/168044/pexels-photo-168044.jpeg',
        students: '8.2K',
        rating: 4.9,
      },
      {
        slug: 'ielts-mastery',
        title: 'IELTSマスタリー',
        description: 'IELTS試験の4セクション(リスニング・リーディング・ライティング・スピーキング)を完全対策。',
        language: 'en',
        level: 'B2',
        duration: '40時間',
        isFree: false,
        image: 'https://images.pexels.com/photos/5905716/pexels-photo-5905716.jpeg',
        students: '5.5K',
        rating: 4.9,
      },
      {
        slug: 'business-japanese-keigo',
        title: 'ビジネス日本語と敬語',
        description: '敬語と日本のビジネスマナーを学び、国際的なキャリアに備えます。',
        language: 'ja',
        level: 'N2',
        duration: '35時間',
        isFree: false,
        image: 'https://images.pexels.com/photos/3184292/pexels-photo-3184292.jpeg',
        students: '3.2K',
        rating: 4.8,
      },
    ],
  },
  whyChooseUs: {
    badge: '私たちが選ばれる理由',
    title: '成功に必要なすべてがここに',
    subtitle: '実証済みの教育法と最新のテクノロジーを組み合わせ、すべてわかりやすいインドネシア語で説明します。',
    items: [
      { title: 'AIチューター', desc: 'AIチューターと24時間いつでも会話練習。文法と発音を即座に修正します。' },
      { title: 'ゲーム感覚の学習', desc: 'XPやコイン、実績を獲得。リーダーボードで競い、毎日のストリークを維持しましょう。' },
      { title: 'JLPT・IELTS対策', desc: '資格試験のために設計された体系的なコースと、実証済みの対策戦略。' },
      { title: 'コミュニティ', desc: 'スタディグループに参加し、フォーラムで交流し、同じ言語を学ぶ仲間を見つけましょう。' },
      { title: 'ビデオレッスン', desc: 'ネイティブスピーカーによる実践的な高品質ビデオコンテンツ。' },
      { title: '認定証', desc: 'コース修了後に認定証を取得し、自分の成果を証明できます。' },
    ],
  },
  japaneseProgram: {
    badge: '🇯🇵 日本語プログラム',
    title: '日本語プログラム',
    subtitle: 'ひらがなからビジネス敬語まで、インドネシア語の丁寧な説明付きで日本語を段階的に習得します。',
    levels: [
      { level: 'N5', label: '初級' },
      { level: 'N4', label: '初中級' },
      { level: 'N3', label: '中級' },
      { level: 'N2', label: '上級' },
      { level: 'N1', label: 'エキスパート' },
    ],
    cta: '日本語コースを見る',
  },
  englishProgram: {
    badge: '🇬🇧 英語プログラム',
    title: '英語プログラム',
    subtitle: '基礎からプロフェッショナルレベルまで、学校・大学・国際的なキャリアのための英語を習得します。',
    levels: [
      { level: 'A1', label: '初級' },
      { level: 'A2', label: '初中級' },
      { level: 'B1', label: '中級' },
      { level: 'B2', label: '中上級' },
      { level: 'C1', label: '上級' },
      { level: 'C2', label: 'エキスパート' },
    ],
    cta: '英語コースを見る',
  },
  jlptPrep: {
    badge: '🎌 日本語認定試験',
    title: 'JLPT対策',
    subtitle: '練習問題、タイマー付き模擬試験、経験豊富な講師の戦略で、日本語能力試験に備えましょう。',
    features: ['N5からN1までの練習問題', 'リアルタイムの模擬試験', '文法・漢字の詳しい解説', '個人スコアの統計と分析'],
    cta: 'JLPT対策を始める',
  },
  ieltsPrep: {
    badge: '📝 英語認定試験',
    title: 'IELTS対策',
    subtitle: 'リスニング・リーディング・ライティング・スピーキングの4技能を完全対策し、目標スコアを達成しましょう。',
    features: ['4技能すべての完全対策', '本番に近い模擬試験', 'AIによるライティング・スピーキング添削', '認定講師による戦略とコツ'],
    cta: 'IELTS対策を始める',
  },
  testimonials: {
    title: 'お客様の声',
    subtitle: '言語学習の目標を達成した学習者たち',
    items: [
      {
        name: 'Sarah Chen',
        role: 'Google ソフトウェアエンジニア',
        content: '8ヶ月でJLPT N2に合格!AIチューターのおかげで、東京での面接用に敬語を練習できました。',
        language: '日本語',
        level: 'N2',
        avatar: 'https://images.pexels.com/photos/774909/pexels-photo-774909.jpeg',
      },
      {
        name: 'Budi Santoso',
        role: '工学部の学生、奨学金を目指して勉強中',
        content: 'IELTSのスコアが7.5に伸びました!インドネシア語の説明で、難しい内容も理解しやすかったです。',
        language: '英語',
        level: 'IELTS 7.5',
        avatar: 'https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg',
      },
      {
        name: 'Marie Dupont',
        role: 'ビジネスアナリスト',
        content: 'ゲーム感覚の学習でモチベーションが続きました。180日連続学習中!日本語学習がこんなに楽しいなんて。',
        language: '日本語',
        level: 'N3',
        avatar: 'https://images.pexels.com/photos/1181686/pexels-photo-1181686.jpeg',
      },
    ],
  },
  pricingPreview: {
    badge: '料金',
    title: '無料で始めて、必要なときにアップグレード',
    subtitle: '無料コースから始めて、すべてのコンテンツとAIチューターに無制限アクセスできるプレミアムにアップグレードしましょう。',
    period: '/月',
    freeName: '無料',
    freeDesc: '始めるのに最適',
    freeFeatures: ['無料コースへのアクセス', '基本単語学習', '練習問題', 'コミュニティフォーラム'],
    premiumName: 'プレミアム',
    premiumDesc: 'AIチューター付きの全機能',
    premiumFeatures: ['すべてのコースが利用可能', 'AIチューター無制限', 'IELTS・JLPT対策', '正式な認定証', '広告なし'],
    premiumBadge: '人気',
    seeAllPlans: 'すべての料金プランを見る',
  },
  faq: {
    title: 'よくある質問',
    subtitle: 'まだ質問がありますか?よく聞かれる質問への回答はこちらです。',
    items: [
      {
        q: 'このプラットフォームは本当に無料ですか?',
        a: 'はい。多くの基本コースは永久に無料でご利用いただけます。すべての教材とAIチューターへの無制限アクセスをご希望の場合は、Basic、Premium、Proプランをご利用ください。',
      },
      {
        q: 'すべてインドネシア語で説明されていますか?',
        a: 'その通りです。学習する言語は英語と日本語ですが、説明や指示はすべてインドネシア語で行われ、初心者でも理解しやすくなっています。',
      },
      {
        q: 'Basic、Premium、Proの違いは何ですか?',
        a: 'Basicはより多くの基礎コースにアクセスできます。Premiumは無制限のAIチューターとIELTS・JLPT対策が追加されます。Proはすべてのコース、正式な認定証、優先サポートが利用できます。',
      },
      {
        q: 'コース修了後に認定証はもらえますか?',
        a: 'はい、修了したコースごとに認定証が発行されます。PremiumおよびProユーザーは、固有のリンクで共有できる認証済み認定証を受け取れます。',
      },
      {
        q: 'サブスクリプションはどうやって解約しますか?',
        a: '長期契約なしで、ダッシュボードページからいつでも解約できます。アクセスは請求期間の終了まで有効です。',
      },
    ],
  },
  finalCta: {
    title: '言語力を変える準備はできましたか?',
    subtitle: 'インドネシア中の何千人もの学習者と一緒に。今日から学習を始めて、実証済みの方法で流暢さを手に入れましょう。',
    primary: '無料で学習を始める',
    secondary: 'コースを見る',
  },
  footer: {
    tagline: '最新の学習テクノロジーとインドネシア語による丁寧な説明で、インドネシアの学習者の英語・日本語習得をサポートします。',
    coursesTitle: 'コース',
    coursesLinks: [
      { title: '英語 A1-C2', href: '/courses?lang=en' },
      { title: '日本語 N5-N1', href: '/courses?lang=ja' },
      { title: 'IELTS対策', href: '/courses?category=ielts' },
      { title: 'JLPT対策', href: '/courses?category=jlpt' },
      { title: 'ビジネス英語', href: '/courses?category=business' },
      { title: '敬語コース', href: '/courses/business-japanese-keigo' },
    ],
    resourcesTitle: 'リソース',
    resourcesLinks: [
      { title: 'AIチューター', href: '/ai-tutor' },
      { title: '単語学習', href: '/vocabulary' },
      { title: '就職対策', href: '/job-prep' },
      { title: '履歴書作成', href: '/job-prep#resume' },
      { title: '面接練習', href: '/ai-tutor?mode=interview' },
    ],
    communityTitle: 'コミュニティ',
    communityLinks: [
      { title: 'フォーラム', href: '/community/forums' },
      { title: 'スタディグループ', href: '/community/groups' },
      { title: 'リーダーボード', href: '/community/leaderboard' },
      { title: 'イベント', href: '/community/events' },
    ],
    companyTitle: '会社情報',
    companyLinks: [
      { title: '私たちについて', href: '/about' },
      { title: '採用情報', href: '/careers' },
      { title: 'お問い合わせ', href: '/contact' },
      { title: 'プレス', href: '/press' },
    ],
    legalTitle: '法的情報',
    legalLinks: [
      { title: 'プライバシーポリシー', href: '/privacy' },
      { title: '利用規約', href: '/terms' },
      { title: 'クッキーポリシー', href: '/cookies' },
      { title: '返金ポリシー', href: '/refund' },
    ],
    rights: 'All rights reserved.',
  },
};

export const translations: Record<Language, Translations> = { id, en, ja };
