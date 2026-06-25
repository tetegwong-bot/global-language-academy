export type Lesson = {
  id: string;
  title: string;
  duration: number; // minutes
  isPreview: boolean;
  /** Paragraphs of lesson material in Bahasa Indonesia. `null` = belum ditulis (shows fallback message instead of 404). */
  content: string[] | null;
};

export type Instructor = {
  name: string;
  title: string;
  avatar: string;
  bio: string;
};

export type Course = {
  id: string;
  slug: string;
  title: string;
  description: string;
  longDescription: string;
  language: 'en' | 'ja';
  level: string;
  category: string;
  coverImage: string;
  isPublished: boolean;
  isFree: boolean;
  xpReward: number;
  durationHours: number;
  enrolledCount: number;
  rating: number;
  instructor: Instructor;
  lessons: Lesson[];
  whatYouWillLearn: string[];
};

export const levelOrder = ['A1', 'A2', 'B1', 'B2', 'C1', 'C2', 'N5', 'N4', 'N3', 'N2', 'N1'];

export const coursesData: Course[] = [
  {
    id: '1',
    slug: 'english-foundations-a1',
    title: 'Bahasa Inggris Dasar A1',
    description: 'Mulai perjalanan Bahasa Inggrismu dari nol',
    longDescription:
      'Kursus yang sempurna untuk pemula mutlak. Pelajari kosakata dasar, tata bahasa, dan ungkapan sehari-hari untuk mulai berkomunikasi dalam Bahasa Inggris. Seluruh materi dijelaskan dalam Bahasa Indonesia agar mudah dipahami.',
    language: 'en',
    level: 'A1',
    category: 'vocabulary',
    coverImage: 'https://images.pexels.com/photos/267695/pexels-photo-267695.jpeg',
    isPublished: true,
    isFree: true,
    xpReward: 500,
    durationHours: 12,
    enrolledCount: 12500,
    rating: 4.8,
    instructor: {
      name: 'Dr. Emily Thompson',
      title: 'Instruktur Bersertifikat TEFL',
      avatar: 'https://images.pexels.com/photos/1181686/pexels-photo-1181686.jpeg',
      bio: 'Berpengalaman 15+ tahun mengajar Bahasa Inggris untuk pemula di berbagai negara. Bersertifikat Cambridge CELTA.',
    },
    whatYouWillLearn: [
      'Kosakata dan ungkapan dasar sehari-hari',
      'Pola tata bahasa fundamental',
      'Teknik pengucapan yang tepat',
      'Kemampuan membaca teks sederhana',
    ],
    lessons: [
      {
        id: '1',
        title: 'Perkenalan & Salam dalam Bahasa Inggris',
        duration: 25,
        isPreview: true,
        content: [
          'Sebelum mulai berbicara Bahasa Inggris, hal pertama yang perlu dikuasai adalah cara menyapa dan memperkenalkan diri. Sapaan ini akan kamu gunakan setiap hari, jadi penting untuk dihafal di luar kepala.',
          "Sapaan dasar: 'Hello' (Halo) bisa dipakai kapan saja. 'Good morning' dipakai pagi hari, 'Good afternoon' siang hari, dan 'Good evening' malam hari. Untuk berpisah, gunakan 'Goodbye' atau yang lebih santai, 'See you later'.",
          "Untuk memperkenalkan diri, gunakan pola: 'Hi, my name is [nama kamu]. Nice to meet you.' Contoh: 'Hi, my name is Dimas. Nice to meet you.' Lawan bicara biasanya akan menjawab: 'Nice to meet you too.'",
          "Untuk bertanya kabar, gunakan 'How are you?'. Jawaban umum adalah 'I'm fine, thank you. And you?' — selalu balas pertanyaannya untuk menunjukkan kamu juga peduli pada lawan bicara.",
          'Latihan: coba ucapkan keras-keras kalimat perkenalan dirimu sendiri dalam Bahasa Inggris. Semakin sering dilatih, semakin natural rasanya saat dipraktikkan sungguhan.',
        ],
      },
      {
        id: '2',
        title: 'Alfabet & Pengucapan Bahasa Inggris',
        duration: 30,
        isPreview: true,
        content: [
          "Alfabet Bahasa Inggris terdiri dari 26 huruf, sama jumlahnya dengan alfabet Indonesia, tapi cara pengucapannya berbeda. Misalnya huruf 'A' dibaca 'ei', bukan 'a' seperti dalam Bahasa Indonesia.",
          "Beberapa huruf yang sering tertukar pengucapannya: 'E' dibaca 'i', 'I' dibaca 'ai', 'J' dibaca 'jei', 'R' dibaca 'ar', dan 'W' dibaca 'dabliu'.",
          "Latihan mengeja nama menggunakan alfabet Bahasa Inggris sangat berguna, misalnya saat mengisi formulir atau menyebutkan email lewat telepon. Contoh: nama 'BUDI' diucapkan 'bi-yu-di-ai'.",
          "Selain alfabet, perhatikan juga pengucapan vokal. Bahasa Inggris punya banyak variasi suara vokal dibanding Bahasa Indonesia — misalnya kata 'cat', 'cut', dan 'cart' punya bunyi 'a' yang berbeda-beda.",
          "Tips: dengarkan native speaker mengucapkan alfabet lewat lagu 'ABC Song' yang familiar, lalu ulangi sambil menirukan intonasinya.",
        ],
      },
      {
        id: '3',
        title: 'Angka 1–100',
        duration: 20,
        isPreview: false,
        content: [
          'Angka dasar 1–10 dalam Bahasa Inggris: one, two, three, four, five, six, seven, eight, nine, ten.',
          "Angka 11–19 biasanya berakhiran '-teen': eleven, twelve, thirteen, fourteen, fifteen, sixteen, seventeen, eighteen, nineteen.",
          "Kelipatan puluhan berakhiran '-ty': twenty (20), thirty (30), forty (40), fifty (50), sixty (60), seventy (70), eighty (80), ninety (90), dan one hundred (100).",
          'Untuk angka gabungan, sebutkan puluhan lalu satuan, dipisah tanda hubung saat ditulis: 21 = twenty-one, 35 = thirty-five, 99 = ninety-nine.',
          'Latihan: coba sebutkan nomor HP atau tanggal lahirmu dalam Bahasa Inggris, angka demi angka.',
        ],
      },
      { id: '4', title: 'Warna & Kata Sifat Dasar', duration: 20, isPreview: false, content: null },
      { id: '5', title: 'Anggota Keluarga', duration: 20, isPreview: false, content: null },
      { id: '6', title: 'Hari & Bulan', duration: 20, isPreview: false, content: null },
      { id: '7', title: "Kata Kerja 'To Be'", duration: 30, isPreview: false, content: null },
      { id: '8', title: "Kata Kerja 'To Have'", duration: 25, isPreview: false, content: null },
      { id: '9', title: 'Simple Present Tense', duration: 35, isPreview: false, content: null },
      { id: '10', title: 'Ulasan & Evaluasi Akhir', duration: 30, isPreview: false, content: null },
    ],
  },
  {
    id: '2',
    slug: 'english-grammar-essentials',
    title: 'Tata Bahasa Inggris Esensial',
    description: 'Kuasai tata bahasa Inggris dari dasar hingga menengah',
    longDescription:
      'Kursus tata bahasa komprehensif yang membahas tenses, struktur kalimat, dan pola yang paling sering digunakan, dengan penjelasan langkah demi langkah dalam Bahasa Indonesia.',
    language: 'en',
    level: 'A2',
    category: 'grammar',
    coverImage: 'https://images.pexels.com/photos/1457090/pexels-photo-1457090.jpeg',
    isPublished: true,
    isFree: true,
    xpReward: 600,
    durationHours: 14,
    enrolledCount: 8500,
    rating: 4.7,
    instructor: {
      name: 'Dr. Emily Thompson',
      title: 'Instruktur Bersertifikat TEFL',
      avatar: 'https://images.pexels.com/photos/1181686/pexels-photo-1181686.jpeg',
      bio: 'Berpengalaman 15+ tahun mengajar Bahasa Inggris untuk pemula di berbagai negara. Bersertifikat Cambridge CELTA.',
    },
    whatYouWillLearn: [
      'Seluruh tenses dasar dan menengah',
      'Struktur kalimat tanya & negatif',
      'Kata depan (preposition) yang umum',
      'Comparative & superlative',
    ],
    lessons: [
      {
        id: '1',
        title: 'Pengenalan Part of Speech',
        duration: 25,
        isPreview: true,
        content: [
          'Part of speech adalah jenis-jenis kata dalam Bahasa Inggris. Memahami ini akan membantumu menyusun kalimat dengan benar.',
          'Ada 8 jenis utama: noun (kata benda, contoh: book, cat), verb (kata kerja, contoh: run, eat), adjective (kata sifat, contoh: beautiful, big), adverb (kata keterangan, contoh: quickly, very), pronoun (kata ganti, contoh: he, they), preposition (kata depan, contoh: in, on), conjunction (kata sambung, contoh: and, but), dan interjection (kata seru, contoh: wow, oh).',
          "Contoh kalimat: 'She (pronoun) quickly (adverb) opened (verb) the old (adjective) door (noun).' — perhatikan bagaimana setiap kata punya peran berbeda.",
          'Mengenali part of speech akan sangat membantu saat kamu belajar menyusun kalimat yang lebih kompleks di pelajaran berikutnya.',
          'Latihan: ambil satu kalimat sederhana dalam Bahasa Inggris, lalu coba identifikasi jenis kata dari setiap katanya.',
        ],
      },
      {
        id: '2',
        title: 'Simple Present vs Present Continuous',
        duration: 30,
        isPreview: true,
        content: [
          "Simple Present digunakan untuk kebiasaan, fakta umum, atau rutinitas. Contoh: 'I drink coffee every morning.' (Saya minum kopi setiap pagi.)",
          "Present Continuous digunakan untuk aktivitas yang sedang berlangsung saat ini. Contoh: 'I am drinking coffee right now.' (Saya sedang minum kopi sekarang.)",
          "Pola Simple Present: Subject + Verb (+s/es untuk he/she/it). Contoh: 'She works at a bank.' Pola Present Continuous: Subject + am/is/are + Verb-ing. Contoh: 'She is working right now.'",
          "Kata kunci yang sering muncul: Simple Present biasanya dengan 'always, usually, every day'. Present Continuous biasanya dengan 'now, right now, at the moment'.",
          "Latihan: ubah kalimat 'I read books' menjadi bentuk Present Continuous, lalu perhatikan bagaimana artinya berubah menjadi 'sedang membaca'.",
        ],
      },
      { id: '3', title: 'Simple Past Tense', duration: 30, isPreview: false, content: null },
      { id: '4', title: 'Past Continuous Tense', duration: 25, isPreview: false, content: null },
      { id: '5', title: 'Present Perfect Tense', duration: 35, isPreview: false, content: null },
      { id: '6', title: 'Kata Depan (Preposition) Umum', duration: 20, isPreview: false, content: null },
      { id: '7', title: 'Kalimat Tanya & Kalimat Negatif', duration: 25, isPreview: false, content: null },
      { id: '8', title: 'Comparative & Superlative', duration: 25, isPreview: false, content: null },
      { id: '9', title: 'Latihan & Evaluasi', duration: 30, isPreview: false, content: null },
    ],
  },
  {
    id: '3',
    slug: 'business-english-pro',
    title: 'Bahasa Inggris Bisnis Profesional',
    description: 'Bahasa Inggris profesional untuk dunia kerja',
    longDescription:
      'Pelajari kosakata bisnis, cara menulis email profesional, keterampilan presentasi, dan komunikasi profesional untuk karier internasional — semua dijelaskan dalam Bahasa Indonesia.',
    language: 'en',
    level: 'B2',
    category: 'business',
    coverImage: 'https://images.pexels.com/photos/3184292/pexels-photo-3184292.jpeg',
    isPublished: true,
    isFree: false,
    xpReward: 800,
    durationHours: 18,
    enrolledCount: 4200,
    rating: 4.9,
    instructor: {
      name: 'Michael Reeves',
      title: 'Konsultan Bahasa Inggris Bisnis',
      avatar: 'https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg',
      bio: '10+ tahun melatih profesional di perusahaan multinasional untuk komunikasi bisnis Bahasa Inggris.',
    },
    whatYouWillLearn: [
      'Kosakata dan istilah dunia kerja',
      'Menulis email bisnis profesional',
      'Keterampilan presentasi & rapat',
      'Etika komunikasi lintas budaya',
    ],
    lessons: [
      {
        id: '1',
        title: 'Kosakata Dunia Kerja',
        duration: 25,
        isPreview: true,
        content: [
          'Bahasa Inggris bisnis punya kosakata khusus yang berbeda dari percakapan sehari-hari. Mengenal istilah-istilah ini akan membuatmu lebih percaya diri di tempat kerja internasional.',
          "Beberapa istilah penting: 'deadline' (batas waktu), 'stakeholder' (pemangku kepentingan), 'follow up' (menindaklanjuti), 'on track' (sesuai rencana), dan 'touch base' (berdiskusi singkat).",
          'Untuk jabatan, kenali istilah seperti: CEO (Chief Executive Officer), manager, supervisor, colleague (rekan kerja), dan client (klien).',
          "Frasa umum di kantor: 'Could you send me the report by EOD (end of day)?' atau 'Let's circle back on this next week.'",
          'Latihan: tulis 3 kalimat menggunakan istilah bisnis di atas yang relevan dengan pekerjaanmu sehari-hari.',
        ],
      },
      {
        id: '2',
        title: 'Menulis Email Bisnis yang Profesional',
        duration: 30,
        isPreview: true,
        content: [
          "Email bisnis yang baik dimulai dengan salam pembuka yang sopan, misalnya 'Dear Mr. Smith,' atau 'Hi Sarah,' tergantung tingkat formalitas.",
          "Paragraf pertama biasanya menjelaskan tujuan email secara singkat. Contoh: 'I am writing to follow up on our meeting yesterday.'",
          'Gunakan bahasa yang jelas dan tidak berbelit-belit. Hindari kalimat yang terlalu panjang — pecah menjadi poin-poin jika perlu.',
          "Tutup email dengan kalimat seperti 'Please let me know if you have any questions.' lalu salam penutup: 'Best regards,' diikuti nama lengkap.",
          'Latihan: coba tulis email singkat untuk meminta penjadwalan ulang rapat (reschedule meeting) dengan kolega.',
        ],
      },
      { id: '3', title: 'Bahasa untuk Rapat (Meeting)', duration: 30, isPreview: false, content: null },
      { id: '4', title: 'Presentasi dalam Bahasa Inggris', duration: 35, isPreview: false, content: null },
      { id: '5', title: 'Small Talk dengan Klien Asing', duration: 20, isPreview: false, content: null },
      { id: '6', title: 'Negosiasi Bisnis', duration: 30, isPreview: false, content: null },
      { id: '7', title: 'Etiket Telepon Bisnis', duration: 20, isPreview: false, content: null },
      { id: '8', title: 'Menulis Laporan & Proposal', duration: 35, isPreview: false, content: null },
      { id: '9', title: 'Etika Komunikasi Lintas Budaya', duration: 25, isPreview: false, content: null },
      { id: '10', title: 'Ulasan & Simulasi Wawancara Kerja', duration: 40, isPreview: false, content: null },
    ],
  },
  {
    id: '4',
    slug: 'ielts-mastery',
    title: 'Pemantapan IELTS',
    description: 'Raih skor IELTS impianmu dengan percaya diri',
    longDescription:
      'Persiapan lengkap untuk keempat sesi ujian IELTS: Listening, Reading, Writing, dan Speaking, dengan strategi dan penjelasan dalam Bahasa Indonesia.',
    language: 'en',
    level: 'B2',
    category: 'ielts',
    coverImage: 'https://images.pexels.com/photos/5905716/pexels-photo-5905716.jpeg',
    isPublished: true,
    isFree: false,
    xpReward: 1000,
    durationHours: 24,
    enrolledCount: 5500,
    rating: 4.9,
    instructor: {
      name: 'Dr. Emily Thompson',
      title: 'Instruktur Bersertifikat TEFL & Penguji IELTS',
      avatar: 'https://images.pexels.com/photos/1181686/pexels-photo-1181686.jpeg',
      bio: 'Berpengalaman 15+ tahun mengajar Bahasa Inggris, termasuk pelatihan intensif persiapan IELTS.',
    },
    whatYouWillLearn: [
      'Format dan strategi lengkap ujian IELTS',
      'Teknik Listening & Reading yang efektif',
      'Cara menulis Writing Task 1 & 2 bernilai tinggi',
      'Latihan Speaking dengan simulasi nyata',
    ],
    lessons: [
      {
        id: '1',
        title: 'Pengenalan Format Ujian IELTS',
        duration: 30,
        isPreview: true,
        content: [
          'IELTS (International English Language Testing System) terdiri dari 4 bagian: Listening, Reading, Writing, dan Speaking. Total durasi sekitar 2 jam 45 menit untuk 3 bagian pertama, ditambah sesi Speaking yang terpisah.',
          'Listening berisi 4 rekaman audio dengan 40 soal, berdurasi sekitar 30 menit. Reading berisi 3 teks panjang dengan 40 soal dalam waktu 60 menit.',
          'Writing terdiri dari 2 tugas: Task 1 (menjelaskan grafik/diagram, minimal 150 kata) dan Task 2 (esai argumentatif, minimal 250 kata), total 60 menit.',
          'Speaking berlangsung 11–14 menit secara langsung dengan penguji, terdiri dari 3 bagian: perkenalan, cue card (topik bebas 2 menit), dan diskusi mendalam.',
          'Skor IELTS menggunakan skala band 0–9. Skor 6.0–6.5 umumnya dibutuhkan untuk kuliah S1, dan 7.0+ untuk S2 atau migrasi kerja.',
        ],
      },
      {
        id: '2',
        title: 'Strategi Listening Section 1–2',
        duration: 35,
        isPreview: true,
        content: [
          'Section 1 biasanya berupa percakapan sehari-hari (contoh: menelepon untuk reservasi hotel) dengan soal melengkapi formulir atau tabel.',
          'Section 2 biasanya berupa monolog tentang informasi umum (contoh: panduan tur museum) dengan soal pilihan ganda atau melengkapi peta/diagram.',
          'Strategi utama: baca soal terlebih dahulu sebelum audio diputar, garis bawahi kata kunci, dan perhatikan sinonim — jawaban di audio sering memakai kata berbeda dari soal tapi maknanya sama.',
          "Hati-hati dengan informasi yang 'dikoreksi' pembicara di tengah audio (contoh: 'the meeting is at 3pm... actually, let's make it 4pm') — jawaban yang benar adalah informasi terakhir.",
          'Latihan: dengarkan satu rekaman percakapan singkat berbahasa Inggris, lalu coba tulis ulang informasi penting seperti nama, tanggal, dan nomor.',
        ],
      },
      { id: '3', title: 'Strategi Listening Section 3–4', duration: 35, isPreview: false, content: null },
      { id: '4', title: 'Reading: Skimming & Scanning', duration: 30, isPreview: false, content: null },
      { id: '5', title: 'Reading: True / False / Not Given', duration: 30, isPreview: false, content: null },
      { id: '6', title: 'Writing Task 1: Menjelaskan Grafik', duration: 40, isPreview: false, content: null },
      { id: '7', title: 'Writing Task 2: Esai Argumentatif', duration: 45, isPreview: false, content: null },
      { id: '8', title: 'Speaking Part 1: Perkenalan Diri', duration: 25, isPreview: false, content: null },
      { id: '9', title: 'Speaking Part 2: Cue Card', duration: 25, isPreview: false, content: null },
      { id: '10', title: 'Speaking Part 3: Diskusi Mendalam', duration: 25, isPreview: false, content: null },
      { id: '11', title: 'Kosakata Akademik Penting', duration: 30, isPreview: false, content: null },
      { id: '12', title: 'Simulasi Ujian Penuh', duration: 60, isPreview: false, content: null },
    ],
  },
  {
    id: '5',
    slug: 'japanese-n5-beginner',
    title: 'Bahasa Jepang Pemula N5',
    description: 'Langkah pertamamu memasuki Bahasa Jepang',
    longDescription:
      'Pelajari hiragana, katakana, kanji dasar, dan tata bahasa fundamental untuk JLPT N5, dengan penjelasan lengkap dan audio latihan pengucapan dalam Bahasa Indonesia.',
    language: 'ja',
    level: 'N5',
    category: 'jlpt',
    coverImage: 'https://images.pexels.com/photos/168044/pexels-photo-168044.jpeg',
    isPublished: true,
    isFree: true,
    xpReward: 500,
    durationHours: 16,
    enrolledCount: 8200,
    rating: 4.9,
    instructor: {
      name: 'Yuki Tanaka',
      title: 'Spesialis JLPT',
      avatar: 'https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg',
      bio: 'Penutur asli Bahasa Jepang dengan 10 tahun pengalaman mengajar, spesialisasi persiapan JLPT.',
    },
    whatYouWillLearn: [
      'Membaca & menulis hiragana dan katakana',
      'Kanji dasar untuk level N5',
      'Tata bahasa dan partikel fundamental',
      'Kosakata percakapan sehari-hari',
    ],
    lessons: [
      {
        id: '1',
        title: 'Pengenalan Sistem Penulisan Jepang',
        duration: 30,
        isPreview: true,
        content: [
          'Bahasa Jepang menggunakan 3 sistem penulisan: Hiragana (untuk kata asli Jepang & tata bahasa), Katakana (untuk kata serapan asing), dan Kanji (karakter yang membawa makna, diserap dari Bahasa Cina).',
          "Hiragana memiliki 46 karakter dasar yang masing-masing mewakili satu suku kata, misalnya 'あ' (a), 'い' (i), 'う' (u), 'え' (e), 'お' (o).",
          "Katakana juga punya 46 karakter dengan bunyi yang sama seperti hiragana, tapi bentuknya lebih bersudut. Katakana dipakai untuk kata serapan, contoh: 'コーヒー' (koohii, artinya 'kopi').",
          'Kanji jumlahnya ribuan, tapi untuk percakapan sehari-hari biasanya cukup mengenal sekitar 2.000 karakter. Pemula biasanya mulai dengan kanji sederhana seperti angka dan hari.',
          'Untuk pemula, fokuslah menguasai Hiragana dengan lancar dulu sebelum lanjut ke Katakana dan Kanji — karena Hiragana adalah dasar dari hampir semua bacaan Jepang.',
        ],
      },
      {
        id: '2',
        title: 'Hiragana Bagian 1: あ–こ (a–ko)',
        duration: 35,
        isPreview: true,
        content: [
          'Baris pertama hiragana adalah baris vokal: あ (a), い (i), う (u), え (e), お (o). Hafalkan kelima bunyi dasar ini terlebih dahulu karena akan terus berulang di baris-baris berikutnya.',
          "Baris kedua adalah baris 'ka': か (ka), き (ki), く (ku), け (ke), こ (ko). Perhatikan bahwa setiap baris konsonan selalu diikuti pola vokal yang sama: a-i-u-e-o.",
          "Cara menghafal yang efektif: tulis berulang sambil mengucapkan bunyinya keras-keras, dan asosiasikan bentuk karakter dengan gambar (contoh: 'あ' mirip huruf 'a' bersambung).",
          'Urutan penulisan (stroke order) penting diperhatikan sejak awal agar tulisan tangan rapi dan mudah dibaca, terutama saat nanti menulis kanji yang lebih kompleks.',
          'Latihan: tulis masing-masing karakter あ–こ sebanyak 5 kali di buku catatan sambil mengucapkan bunyinya.',
        ],
      },
      {
        id: '3',
        title: 'Hiragana Bagian 2: さ–と (sa–to)',
        duration: 35,
        isPreview: false,
        content: [
          "Baris 'sa': さ (sa), し (shi), す (su), せ (se), そ (so). Perhatikan bahwa 'し' dibaca 'shi', bukan 'si' — ini pengecualian yang harus dihafalkan.",
          "Baris 'ta': た (ta), ち (chi), つ (tsu), て (te), と (to). Sama seperti baris 'sa', ada pengecualian bunyi pada 'ち' (chi) dan 'つ' (tsu).",
          "Pengecualian bunyi ini sering disebut 'irregular sounds' dan muncul juga di beberapa baris lain. Semakin sering berlatih, kamu akan otomatis mengingatnya tanpa perlu menghafal aturan secara kaku.",
          "Coba gabungkan karakter yang sudah dipelajari untuk membentuk kata sederhana, misalnya 'すし' (sushi) atau 'あした' (ashita, artinya 'besok').",
          "Latihan: tulis kata 'すし' dan 'たこ' (tako, artinya 'gurita') menggunakan hiragana yang sudah dipelajari, lalu ucapkan keras-keras.",
        ],
      },
      { id: '4', title: 'Katakana Lengkap', duration: 45, isPreview: false, content: null },
      { id: '5', title: 'Salam & Perkenalan Diri', duration: 25, isPreview: false, content: null },
      { id: '6', title: 'Angka & Penghitung (Counter)', duration: 30, isPreview: false, content: null },
      { id: '7', title: 'Partikel Dasar: は, が, を (wa, ga, wo)', duration: 35, isPreview: false, content: null },
      { id: '8', title: 'Kanji Dasar: Angka & Waktu', duration: 30, isPreview: false, content: null },
      { id: '9', title: 'Kata Sifat い & な (i & na)', duration: 30, isPreview: false, content: null },
      { id: '10', title: 'Bentuk て (Te-form)', duration: 35, isPreview: false, content: null },
      { id: '11', title: 'Kosakata Kehidupan Sehari-hari', duration: 25, isPreview: false, content: null },
      { id: '12', title: 'Latihan Soal & Simulasi N5', duration: 50, isPreview: false, content: null },
    ],
  },
  {
    id: '6',
    slug: 'hiragana-katakana-masterclass',
    title: 'Kelas Mahir Hiragana & Katakana',
    description: 'Kuasai sistem penulisan Bahasa Jepang',
    longDescription:
      'Panduan lengkap membaca dan menulis hiragana serta katakana, lengkap dengan urutan stroke dan teknik mnemonic, dijelaskan dalam Bahasa Indonesia.',
    language: 'ja',
    level: 'N5',
    category: 'hiragana',
    coverImage: 'https://images.pexels.com/photos/691664/pexels-photo-691664.jpeg',
    isPublished: true,
    isFree: true,
    xpReward: 300,
    durationHours: 8,
    enrolledCount: 9100,
    rating: 4.9,
    instructor: {
      name: 'Yuki Tanaka',
      title: 'Spesialis JLPT',
      avatar: 'https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg',
      bio: 'Penutur asli Bahasa Jepang dengan 10 tahun pengalaman mengajar, spesialisasi persiapan JLPT.',
    },
    whatYouWillLearn: [
      'Membaca seluruh karakter hiragana & katakana',
      'Urutan stroke (penulisan) yang benar',
      'Teknik mnemonic untuk menghafal cepat',
      'Latihan membaca kata-kata sederhana',
    ],
    lessons: [
      {
        id: '1',
        title: 'Cara Menulis Hiragana: あ–こ (a–ko)',
        duration: 30,
        isPreview: true,
        content: [
          'Sebelum menulis, kenali dulu arah dasar stroke (garis) dalam huruf Jepang: umumnya dari atas ke bawah, dan dari kiri ke kanan.',
          "Karakter 'あ' (a) terdiri dari 3 stroke: garis horizontal pendek di atas, garis lengkung panjang, dan garis lengkung kecil di bagian bawah kanan.",
          "Karakter 'か' (ka) terdiri dari 3 stroke: garis vertikal pendek di kiri, garis horizontal panjang yang melengkung ke bawah, dan tanda kecil di kanan atas.",
          'Latihan stroke order yang konsisten sejak awal akan sangat membantu saat kamu mulai menulis kanji yang strukturnya lebih kompleks.',
          'Latihan: gunakan kertas berkotak untuk menulis あ, い, う, え, お, か, き, く, け, こ dengan memperhatikan proporsi dan urutan stroke.',
        ],
      },
      { id: '2', title: 'Hiragana: さ–と hingga ま–わ', duration: 35, isPreview: false, content: null },
      { id: '3', title: 'Hiragana Lanjutan (Dakuten & Youon)', duration: 30, isPreview: false, content: null },
      { id: '4', title: 'Katakana: ア–コ hingga マ–ワ', duration: 35, isPreview: false, content: null },
      { id: '5', title: 'Katakana untuk Kata Serapan Asing', duration: 25, isPreview: false, content: null },
      { id: '6', title: 'Latihan Membaca Cepat', duration: 20, isPreview: false, content: null },
      { id: '7', title: 'Latihan Menulis dengan Stroke Order', duration: 25, isPreview: false, content: null },
      { id: '8', title: 'Ulasan & Kuis Akhir', duration: 20, isPreview: false, content: null },
    ],
  },
  {
    id: '7',
    slug: 'japanese-n4-intermediate',
    title: 'Bahasa Jepang Menengah N4',
    description: 'Lanjutkan ke level JLPT N4',
    longDescription:
      'Membangun dari fondasi N5 dengan tata bahasa, kanji, dan kosakata yang lebih kompleks untuk mencapai level JLPT N4.',
    language: 'ja',
    level: 'N4',
    category: 'jlpt',
    coverImage: 'https://images.pexels.com/photos/270408/pexels-photo-270408.jpeg',
    isPublished: true,
    isFree: false,
    xpReward: 600,
    durationHours: 20,
    enrolledCount: 4800,
    rating: 4.7,
    instructor: {
      name: 'Yuki Tanaka',
      title: 'Spesialis JLPT',
      avatar: 'https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg',
      bio: 'Penutur asli Bahasa Jepang dengan 10 tahun pengalaman mengajar, spesialisasi persiapan JLPT.',
    },
    whatYouWillLearn: [
      'Bentuk kamus & bentuk -nai',
      'Kalimat bersyarat (tara, ba)',
      'Kanji tingkat N4',
      'Memahami percakapan sehari-hari',
    ],
    lessons: [
      {
        id: '1',
        title: 'Tinjauan Tata Bahasa N5',
        duration: 30,
        isPreview: true,
        content: [
          'Sebelum melanjutkan ke level N4, mari tinjau kembali pola dasar dari N5: kalimat dengan です (desu) untuk pernyataan, partikel は (wa) sebagai topik, dan partikel を (wo) untuk objek.',
          "Contoh kalimat dasar: 'わたしは がくせいです' (Watashi wa gakusei desu — 'Saya adalah mahasiswa'). Pola ini akan menjadi pondasi untuk membangun kalimat yang lebih kompleks di level N4.",
          'Di level N4, kamu akan mulai belajar bentuk kata kerja yang lebih beragam, seperti bentuk kamus (dictionary form), bentuk -nai (negatif non-formal), dan kalimat bersyarat.',
          'Pastikan kamu sudah lancar dengan hiragana, katakana, dan sekitar 100 kanji dasar dari level N5 sebelum lanjut, karena materi N4 akan bertumpu pada kemampuan membaca dasar tersebut.',
          'Latihan: coba buat 3 kalimat sederhana menggunakan pola です yang sudah dipelajari di N5 sebagai pemanasan.',
        ],
      },
      { id: '2', title: 'Bentuk Kamus & Bentuk -nai', duration: 35, isPreview: false, content: null },
      { id: '3', title: 'Kalimat Bersyarat (たら, ば)', duration: 35, isPreview: false, content: null },
      { id: '4', title: 'Kata Kerja Bentuk Potensial', duration: 30, isPreview: false, content: null },
      { id: '5', title: 'Kanji Tingkat N4', duration: 40, isPreview: false, content: null },
      { id: '6', title: 'Ungkapan Memberi & Menerima', duration: 30, isPreview: false, content: null },
      { id: '7', title: 'Bentuk Pasif & Kausatif', duration: 35, isPreview: false, content: null },
      { id: '8', title: 'Membaca Teks Sederhana', duration: 30, isPreview: false, content: null },
      { id: '9', title: 'Mendengarkan Percakapan Sehari-hari', duration: 30, isPreview: false, content: null },
      { id: '10', title: 'Simulasi Ujian N4', duration: 50, isPreview: false, content: null },
    ],
  },
  {
    id: '8',
    slug: 'business-japanese-keigo',
    title: 'Bahasa Jepang Bisnis & Keigo',
    description: 'Bahasa Jepang profesional untuk dunia kerja',
    longDescription:
      'Pelajari keigo (bahasa hormat), etika bisnis Jepang, menulis email formal, dan tata krama profesional untuk karier internasional.',
    language: 'ja',
    level: 'N2',
    category: 'keigo',
    coverImage: 'https://images.pexels.com/photos/3184292/pexels-photo-3184292.jpeg',
    isPublished: true,
    isFree: false,
    xpReward: 900,
    durationHours: 22,
    enrolledCount: 3200,
    rating: 4.8,
    instructor: {
      name: 'Yuki Tanaka',
      title: 'Spesialis JLPT & Bahasa Jepang Bisnis',
      avatar: 'https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg',
      bio: 'Penutur asli Bahasa Jepang dengan 10 tahun pengalaman mengajar, termasuk pelatihan keigo untuk profesional.',
    },
    whatYouWillLearn: [
      'Sonkeigo & Kenjougo (bahasa hormat)',
      'Etika komunikasi kantor Jepang',
      'Menulis email bisnis formal',
      'Simulasi percakapan bisnis nyata',
    ],
    lessons: [
      {
        id: '1',
        title: 'Pengenalan Keigo: Sonkeigo & Kenjougo',
        duration: 35,
        isPreview: true,
        content: [
          'Keigo (敬語) adalah sistem bahasa hormat dalam Bahasa Jepang yang wajib dikuasai untuk dunia kerja. Ada 3 jenis utama: Teineigo (bahasa sopan umum), Sonkeigo (bahasa hormat untuk lawan bicara), dan Kenjougo (bahasa merendah untuk diri sendiri).',
          "Sonkeigo digunakan saat membicarakan tindakan atasan, klien, atau orang yang dihormati. Contoh: kata kerja 'する' (suru, 'melakukan') berubah menjadi 'なさる' (nasaru) dalam bentuk sonkeigo.",
          "Kenjougo digunakan saat membicarakan tindakan diri sendiri di hadapan orang yang lebih dihormati. Contoh: 'する' berubah menjadi 'いたします' (itashimasu) dalam bentuk kenjougo.",
          'Perbedaan utama: Sonkeigo meninggikan lawan bicara, Kenjougo merendahkan diri sendiri — keduanya sering dipakai bersamaan dalam satu percakapan formal untuk menunjukkan rasa hormat penuh.',
          "Latihan: ubah kalimat 'わたしが します' (saya akan melakukan) menjadi bentuk kenjougo yang sopan: 'わたしが いたします'.",
        ],
      },
      { id: '2', title: 'Salam & Perkenalan Formal di Kantor', duration: 25, isPreview: false, content: null },
      { id: '3', title: 'Menjawab Telepon dengan Sopan', duration: 25, isPreview: false, content: null },
      { id: '4', title: 'Bahasa Email Bisnis Jepang', duration: 35, isPreview: false, content: null },
      { id: '5', title: 'Meishi Koukan (Bertukar Kartu Nama)', duration: 20, isPreview: false, content: null },
      { id: '6', title: 'Bahasa untuk Rapat Formal', duration: 30, isPreview: false, content: null },
      { id: '7', title: 'Permintaan Maaf & Permohonan Formal', duration: 25, isPreview: false, content: null },
      { id: '8', title: 'Ungkapan untuk Tamu & Klien', duration: 25, isPreview: false, content: null },
      { id: '9', title: 'Etika Komunikasi di Perusahaan Jepang', duration: 30, isPreview: false, content: null },
      { id: '10', title: 'Simulasi Percakapan Bisnis', duration: 40, isPreview: false, content: null },
    ],
  },
  {
    id: '9',
    slug: 'jlpt-n2-advanced',
    title: 'JLPT N2 Mahir',
    description: 'Persiapan sertifikasi JLPT N2',
    longDescription:
      'Bahasa Jepang tingkat lanjut yang membahas tata bahasa kompleks, pemahaman membaca, dan keterampilan mendengarkan untuk JLPT N2.',
    language: 'ja',
    level: 'N2',
    category: 'jlpt',
    coverImage: 'https://images.pexels.com/photos/256467/pexels-photo-256467.jpeg',
    isPublished: true,
    isFree: false,
    xpReward: 1200,
    durationHours: 28,
    enrolledCount: 2100,
    rating: 4.7,
    instructor: {
      name: 'Yuki Tanaka',
      title: 'Spesialis JLPT',
      avatar: 'https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg',
      bio: 'Penutur asli Bahasa Jepang dengan 10 tahun pengalaman mengajar, spesialisasi persiapan JLPT tingkat lanjut.',
    },
    whatYouWillLearn: [
      'Tata bahasa & kanji tingkat N2',
      'Strategi membaca teks panjang',
      'Strategi listening tingkat lanjut',
      'Simulasi ujian lengkap',
    ],
    lessons: [
      {
        id: '1',
        title: 'Tinjauan Struktur Ujian N2',
        duration: 30,
        isPreview: true,
        content: [
          'JLPT N2 terdiri dari 3 bagian utama: Bahasa (Kosakata & Tata Bahasa), Membaca (Dokkai), dan Mendengarkan (Choukai), dengan total waktu sekitar 155 menit.',
          'Bagian Bahasa menguji sekitar 1.000 kanji dan 6.000 kosakata tingkat menengah-atas, termasuk pola tata bahasa yang lebih kompleks dibanding N3.',
          'Bagian Membaca berisi berbagai jenis teks: esai pendek, artikel surat kabar, dan teks informasi praktis, menguji kemampuan memahami ide utama dan detail.',
          'Bagian Mendengarkan berisi percakapan dan monolog dengan kecepatan bicara mendekati native speaker, menuntut pemahaman konteks yang cepat dan akurat.',
          'Skor kelulusan minimum adalah 90 dari 180 total poin, dengan syarat setiap bagian harus mencapai nilai minimum tertentu — meski total skor tinggi, kelulusan bisa gagal jika salah satu bagian terlalu rendah.',
        ],
      },
      { id: '2', title: 'Tata Bahasa Lanjutan N2', duration: 40, isPreview: false, content: null },
      { id: '3', title: 'Kanji & Kosakata Tingkat N2', duration: 40, isPreview: false, content: null },
      { id: '4', title: 'Strategi Membaca Teks Panjang', duration: 35, isPreview: false, content: null },
      { id: '5', title: 'Strategi Listening Tingkat Lanjut', duration: 35, isPreview: false, content: null },
      { id: '6', title: 'Ungkapan Idiomatik Jepang', duration: 30, isPreview: false, content: null },
      { id: '7', title: 'Bahasa Formal dalam Berita & Artikel', duration: 30, isPreview: false, content: null },
      { id: '8', title: 'Latihan Soal Tata Bahasa', duration: 35, isPreview: false, content: null },
      { id: '9', title: 'Latihan Soal Choukai (Listening)', duration: 35, isPreview: false, content: null },
      { id: '10', title: 'Simulasi Ujian N2 Penuh', duration: 60, isPreview: false, content: null },
    ],
  },
  {
    id: '10',
    slug: 'english-speaking-fluency',
    title: 'Kelancaran Berbicara Bahasa Inggris',
    description: 'Bangun rasa percaya diri berbicara Bahasa Inggris',
    longDescription:
      'Latih kemampuan berbicara melalui skenario nyata, latihan pengucapan, dan simulasi percakapan untuk membangun kelancaran dan rasa percaya diri.',
    language: 'en',
    level: 'B1',
    category: 'speaking',
    coverImage: 'https://images.pexels.com/photos/1679569/pexels-photo-1679569.jpeg',
    isPublished: true,
    isFree: true,
    xpReward: 450,
    durationHours: 10,
    enrolledCount: 7200,
    rating: 4.6,
    instructor: {
      name: 'Michael Reeves',
      title: 'Pelatih Speaking & Komunikasi',
      avatar: 'https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg',
      bio: 'Berpengalaman melatih ribuan pelajar membangun kepercayaan diri berbicara Bahasa Inggris.',
    },
    whatYouWillLearn: [
      'Mengatasi rasa takut berbicara',
      'Percakapan situasional sehari-hari',
      'Idiom & ungkapan umum',
      'Latihan pengucapan (pronunciation)',
    ],
    lessons: [
      {
        id: '1',
        title: 'Mengatasi Rasa Takut Berbicara',
        duration: 25,
        isPreview: true,
        content: [
          'Rasa takut berbicara Bahasa Inggris (speaking anxiety) adalah hal yang sangat normal dialami pemula. Kuncinya bukan menghilangkan rasa takut itu, tapi belajar tetap berbicara meski merasa belum sempurna.',
          'Mulai dengan berbicara sendiri di depan cermin atau merekam suara sendiri menggunakan HP. Ini membantu kamu terbiasa mendengar suaramu sendiri berbicara Bahasa Inggris tanpa rasa malu di depan orang lain.',
          'Ingat: tujuan utama berbicara adalah komunikasi, bukan kesempurnaan grammar. Native speaker sendiri sering membuat kesalahan kecil saat berbicara santai.',
          "Gunakan teknik 'shadowing' — dengarkan native speaker berbicara (lewat video atau podcast), lalu ucapkan ulang kalimat yang sama tepat setelah mereka, menirukan ritme dan intonasinya.",
          "Latihan: rekam dirimu berbicara selama 1 menit tentang topik bebas (misalnya 'my favorite food'), lalu dengarkan ulang dan catat 1 hal yang ingin diperbaiki.",
        ],
      },
      { id: '2', title: 'Memesan Makanan dalam Bahasa Inggris', duration: 20, isPreview: false, content: null },
      { id: '3', title: 'Bertanya & Memberi Arah', duration: 20, isPreview: false, content: null },
      { id: '4', title: 'Small Talk Sehari-hari', duration: 20, isPreview: false, content: null },
      { id: '5', title: 'Menceritakan Pengalaman Pribadi', duration: 25, isPreview: false, content: null },
      { id: '6', title: 'Idiom & Ungkapan Umum', duration: 25, isPreview: false, content: null },
      { id: '7', title: 'Latihan Pengucapan (Pronunciation)', duration: 25, isPreview: false, content: null },
      { id: '8', title: 'Simulasi Percakapan Bebas', duration: 30, isPreview: false, content: null },
    ],
  },
];

export function getAllCourses(): Course[] {
  return coursesData;
}

export function getCourseBySlug(slug: string): Course | undefined {
  return coursesData.find((c) => c.slug === slug);
}

export function getCoursesByLanguage(language: 'en' | 'ja'): Course[] {
  return coursesData
    .filter((c) => c.language === language)
    .sort((a, b) => levelOrder.indexOf(a.level) - levelOrder.indexOf(b.level));
}

export function getCoursesByCategory(category: string): Course[] {
  return coursesData.filter((c) => c.category === category);
}

export function getLessonById(course: Course, lessonId: string): Lesson | undefined {
  return course.lessons.find((l) => l.id === lessonId);
}

export function getLessonIndex(course: Course, lessonId: string): number {
  return course.lessons.findIndex((l) => l.id === lessonId);
}
