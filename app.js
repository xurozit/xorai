// ── CONTENT DATABASE ──
const data = {
  festivals: [
    {
      id: "rongali-bihu",
      name: "Rongali Bihu",
      tag: "Festival",
      summary: "The most celebrated festival of Assam, marking the Assamese New Year and the onset of spring.",
      content: `Rongali Bihu, also known as Bohag Bihu, is the most joyous of the three Bihu festivals celebrated in Assam. It marks the beginning of the Assamese New Year and the arrival of spring, typically falling in mid-April. The festival is a time of new beginnings, celebrated with music, dance, feasting, and the exchange of gamosa — the traditional white cotton cloth with red borders that is a symbol of Assamese identity.\n\nThe Bihu dance performed during Rongali Bihu is energetic and vibrant, performed by both young men and women in traditional attire. The music is driven by the dhol (drum), pepa (horn), and toka (bamboo clapper).`,
      image: "",
      imageCredit: ""
    },
    {
      id: "kongali-bihu",
      name: "Kongali Bihu",
      tag: "Festival",
      summary: "The festival of lights and austerity, observed during the month of Kati when granaries are empty.",
      content: `Kongali Bihu, also called Kati Bihu, is observed in mid-October. Unlike the festive Rongali Bihu, Kongali Bihu is a more subdued, solemn occasion. The word 'Kongali' means poor or empty, reflecting the time of year when the granaries are nearly depleted before the new harvest.\n\nDuring this festival, earthen lamps called saki are lit in fields, near tulsi plants, and at the base of trees as offerings to the gods for a good harvest. It is a time of prayers and quiet reflection rather than celebration.`,
      image: "",
      imageCredit: ""
    },
    {
      id: "bhogali-bihu",
      name: "Bhogali Bihu",
      tag: "Festival",
      summary: "The harvest festival of Assam, celebrated with feasting, bonfires, and community gatherings.",
      content: `Bhogali Bihu, also known as Magh Bihu, is the harvest festival of Assam, celebrated in mid-January. The word 'Bhogali' comes from 'Bhog', meaning food and enjoyment, reflecting the spirit of feasting that defines this festival.\n\nThe night before Bhogali Bihu, known as Uruka, communities gather around large bonfires called Meji, built from bamboo and thatch. Feasting continues through the night. At dawn the next morning, the Meji is set ablaze as an offering to Agni, the fire god, and prayers are offered for prosperity.`,
      image: "",
      imageCredit: ""
    },
    {
      id: "ambubachi-mela",
      name: "Ambubachi Mela",
      tag: "Festival",
      summary: "One of the largest Hindu pilgrimages in South Asia, held annually at Kamakhya Temple in Guwahati.",
      content: `Ambubachi Mela is an annual Hindu festival held at the Kamakhya Temple on Nilachal Hill in Guwahati, Assam. It is one of the largest religious gatherings in South Asia, attracting hundreds of thousands of pilgrims, saints, and tantric practitioners every year.\n\nThe festival celebrates the annual menstruation of the goddess Kamakhya, a deeply significant event in Shakta tradition. During the three-day period, the temple remains closed. On the fourth day it reopens with great ceremony, and devotees receive prasad in the form of a piece of red cloth, symbolizing the goddess's blessing.`,
      image: "",
      imageCredit: ""
    }
  ],
  tribes: [
    {
      id: "bodo",
      name: "Bodo People",
      tag: "Community",
      summary: "The largest plains tribal community of Assam, known for their distinct language, weaving traditions, and Bagurumba dance.",
      content: `The Bodo people are the largest plains tribal group in Assam and one of the oldest inhabitants of Northeast India. They primarily inhabit the Bodoland Territorial Region (BTR) in northern Assam. The Bodo language belongs to the Tibeto-Burman language family and has its own script.\n\nThe Bodo community is renowned for their exquisite traditional weaving, particularly the dokhna (a wraparound garment for women) woven in distinctive geometric patterns. Their traditional dance, Bagurumba, often called the butterfly dance, is a graceful performance inspired by nature and is performed during the Bwisagu festival, the Bodo new year celebration.`,
      image: "",
      imageCredit: ""
    },
    {
      id: "mising",
      name: "Mising People",
      tag: "Community",
      summary: "A riverine community of Assam known for their stilt houses, Po:Lo Aie festival, and distinctive textile weaving.",
      content: `The Mising people (also spelled Mising or Mishing) are one of the major tribal communities of Assam, predominantly inhabiting the riverine areas along the Brahmaputra and its tributaries in districts such as Dhemaji, Lakhimpur, and Majuli. Their close relationship with rivers is reflected in their traditional stilt houses, built on bamboo platforms above flood levels.\n\nThe Mising celebrate Po:Lo Aie, their spring festival, with great enthusiasm. They are also known for their distinctive textile tradition, particularly the weaving of Mibu Galuk and Mibu Gaseng, traditional garments with intricate patterns that carry deep cultural significance.`,
      image: "",
      imageCredit: ""
    }
  ],
  artcraft: [
    {
      id: "muga-silk",
      name: "Muga Silk",
      tag: "Textile",
      summary: "The golden silk unique to Assam, produced by the Antheraea assamensis silkworm, and a GI-tagged heritage product of India.",
      content: `Muga silk is one of the most precious and unique textiles in the world, produced exclusively in Assam. It is made from the silk of the Antheraea assamensis silkworm, which feeds on the leaves of the Som and Soalu trees native to the Brahmaputra valley. Muga silk is distinguished by its natural golden-yellow lustre, which actually deepens and brightens with every wash over the years — a quality found in no other natural silk in the world.\n\nMuga silk has been awarded a Geographical Indication (GI) tag by the Government of India, meaning it can only be authentically produced in Assam. Traditional Muga garments include the mekhela chador, the traditional two-piece dress of Assamese women, worn during festivals and ceremonies.`,
      image: "",
      imageCredit: ""
    },
    {
      id: "majuli-masks",
      name: "Majuli Mask Making",
      tag: "Craft",
      summary: "A centuries-old craft tradition from Majuli island, where artisans create large ceremonial masks used in Sattriya performances.",
      content: `The art of mask making in Majuli, the world's largest river island located in the Brahmaputra river, is a tradition that dates back over five hundred years to the time of the Vaishnavite saint-reformer Srimanta Sankardeva. These masks, known as mukha, are used in Bhaona performances — traditional Sattriya theatrical presentations enacted in the sattras (Vaishnavite monasteries) of Majuli.\n\nThe masks are made from bamboo, clay, dung, and cloth using entirely natural materials. They range from small face-covering masks to enormous full-body structures that can be over two metres tall. Each mask takes weeks or months to complete and represents characters from Hindu epics and mythology.`,
      image: "",
      imageCredit: ""
    }
  ],
  food: [
    {
      id: "assamese-thali",
      name: "Assamese Thali",
      tag: "Cuisine",
      summary: "A traditional complete meal representing the full spectrum of Assamese culinary philosophy — simple, fresh, and deeply rooted in nature.",
      content: `A traditional Assamese thali is a carefully balanced meal that reflects the Assamese culinary philosophy of using fresh, locally sourced ingredients with minimal spices, allowing the natural flavours of the ingredients to dominate. A typical thali includes rice — the staple of every Assamese meal — served with dal (lentils), masor tenga (sour fish curry), khar (an alkaline dish made from banana ash), and a variety of vegetable preparations.\n\nKhar is considered the defining dish of Assamese cuisine — a unique preparation made by filtering water through the ash of the dried skin of a specific variety of banana, creating a natural alkaline liquid used to cook vegetables, fish, or raw papaya. No other regional cuisine in India has an equivalent dish.`,
      image: "",
      imageCredit: ""
    }
  ],
  musicdance: [
    {
      id: "bihu-dance",
      name: "Bihu Dance",
      tag: "Dance",
      summary: "The most iconic folk dance of Assam, performed during Rongali Bihu by young men and women with energetic movements and vibrant traditional attire.",
      content: `Bihu dance is the most widely recognised cultural expression of Assam, performed during the Rongali Bihu festival in April. It is a vibrant, energetic folk dance performed by young men and women together, distinguished by rapid hand and hip movements, expressive footwork, and the wearing of traditional Assamese attire — women in mekhela chador and men in dhoti and gamosa headband.\n\nThe dance is accompanied by a traditional ensemble of instruments including the dhol (a two-sided drum), pepa (a horn instrument made from buffalo horn), gogona (a jaw harp made of bamboo), and toka (a bamboo clapper). Bihu dance was inscribed on the UNESCO Representative List of the Intangible Cultural Heritage of Humanity in 2023.`,
      image: "",
      imageCredit: ""
    },
    {
      id: "sattriya",
      name: "Sattriya Dance",
      tag: "Classical Dance",
      summary: "One of India's eight classical dance forms, originating from the Vaishnavite sattras of Assam, created by saint Srimanta Sankardeva in the 15th century.",
      content: `Sattriya is one of the eight classical dance forms of India, recognised by the Sangeet Natak Akademi in 2000. It originated in the sattras — Vaishnavite monasteries — of Assam, created by the 15th century saint-scholar-reformer Srimanta Sankardeva as a means of spreading the Bhakti movement and Vaishnavite philosophy through art.\n\nFor centuries Sattriya was performed exclusively by male monks (bhokots) within the sattras as part of religious rituals. Today it is performed by both men and women on concert stages worldwide. The dance is characterised by its graceful, sculpturally precise movements, elaborate costumes, and themes drawn from the life of Lord Krishna and Assamese Vaishnavite literature.`,
      image: "",
      imageCredit: ""
    },
    {
      id: "borgeet",
      name: "Borgeet",
      tag: "Music",
      summary: "Sacred lyrical compositions created by Srimanta Sankardeva and Madhavdeva in the 15th–16th centuries, forming the foundation of Assamese classical music.",
      content: `Borgeet are devotional lyrical compositions created by the Vaishnavite saints Srimanta Sankardeva and his chief disciple Madhavdeva during the 15th and 16th centuries. The word 'Borgeet' translates roughly as 'great songs' or 'celestial songs'. These compositions are considered the highest form of classical music in Assam and are still sung in sattras and cultural gatherings today.\n\nBorgeet are composed in a form of literary Brajawali — a blend of Assamese and Braj Bhasha — and are set to specific ragas of Indian classical music. They are sung without instrumental accompaniment during religious ceremonies and are regarded as sacred compositions that should be treated with deep respect.`,
      image: "",
      imageCredit: ""
    }
  ]
};

// ── SECTION NAVIGATION ──
function showSection(sectionId) {
  document.querySelectorAll('.section').forEach(s => s.classList.remove('active'));
  document.querySelectorAll('.nav-btn').forEach(b => b.classList.remove('active'));
  document.getElementById(sectionId).classList.add('active');
  const buttons = document.querySelectorAll('.nav-btn');
  buttons.forEach(btn => {
    if (btn.getAttribute('onclick') === `showSection('${sectionId}')`) {
      btn.classList.add('active');
    }
  });
  window.scrollTo(0, 0);
  renderList(sectionId);
}

// ── RENDER ENTRY LIST ──
function renderList(sectionId) {
  const listId = sectionId + '-list';
  const container = document.getElementById(listId);
  if (!container) return;
  const entries = data[sectionId];
  if (!entries) return;
  container.innerHTML = entries.map(entry => `
    <div class="entry-card" onclick="showDetail('${sectionId}', '${entry.id}')">
      <span class="entry-tag">${entry.tag}</span>
      <h3>${entry.name}</h3>
      <p>${entry.summary}</p>
    </div>
  `).join('');
}

// ── SHOW DETAIL PAGE ──
function showDetail(sectionId, entryId) {
  const entry = data[sectionId].find(e => e.id === entryId);
  if (!entry) return;
  const section = document.getElementById(sectionId);
  const imageHTML = entry.image
    ? `<img src="${entry.image}" alt="${entry.name}"/><p class="image-credit">${entry.imageCredit}</p>`
    : '';
  const bodyHTML = entry.content.split('\n\n').map(p => `<p>${p}</p>`).join('');
  section.innerHTML = `
    <div class="detail-view">
      <button class="back-btn" onclick="showSection('${sectionId}')">← Back</button>
      <span class="entry-tag">${entry.tag}</span>
      <h2>${entry.name}</h2>
      ${imageHTML}
      ${bodyHTML}
    </div>
  `;
}
