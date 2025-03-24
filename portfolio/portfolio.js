const images = [
  {
    url: "/api/placeholder/500/500",
    ratio: "ratio-1-1",
    title: "Keindahan Alam",
    desc: "Panorama Gunung Indah",
  },
  {
    url: "/api/placeholder/300/400",
    ratio: "ratio-3-4",
    title: "Potret Wajah",
    desc: "Ekspresi Tanpa Kata",
  },
  {
    url: "./image/ChartGeneratorCode_4-3.jpg",
    ratio: "ratio-4-3",
    title: "Chart Generator Code",
    desc: "Code for Data Visualization with Chart.js",
  },
  {
    url: "./image/ChartGeneratorPreview_16-9.jpg",
    ratio: "ratio-16-9",
    title: "Chart Generator Preview",
    desc: "Preview of Data Visualization with Chart.js",
  },
  {
    url: "/api/placeholder/200/300",
    ratio: "ratio-2-3",
    title: "Portrait Mode",
    desc: "Keindahan Yang Vertikal",
  },
  {
    url: "/api/placeholder/500/500",
    ratio: "ratio-1-1",
    title: "Kupu-kupu Langka",
    desc: "Warna Memikat Hati",
  },
  {
    url: "/api/placeholder/400/300",
    ratio: "ratio-4-3",
    title: "Pantai Eksotis",
    desc: "Suasana Yang Menenangkan",
  },
  {
    url: "/api/placeholder/300/400",
    ratio: "ratio-3-4",
    title: "Bunga Mawar",
    desc: "Merah Menggoda Jiwa",
  },
  {
    url: "./image/WatercressGrowthPreview_16-9.jpg",
    ratio: "ratio-16-9",
    title: "Grapichs Watercress Growth",
    desc: "Made by Chart.js",
  },
  {
    url: "/api/placeholder/200/300",
    ratio: "ratio-2-3",
    title: "Monumen Bersejarah",
    desc: "Peninggalan Masa Lalu",
  },
  {
    url: "/api/placeholder/500/500",
    ratio: "ratio-1-1",
    title: "Kucing Peliharaan",
    desc: "Teman Setia Rumah",
  },
  {
    url: "/api/placeholder/300/400",
    ratio: "ratio-3-4",
    title: "Buah Segar",
    desc: "Vitamin Untuk Tubuh",
  },
  {
    url: "/api/placeholder/300/400",
    ratio: "ratio-3-4",
    title: "Sayur Segar",
    desc: "Mineral Untuk Tubuh",
  },
  {
    url: "/api/placeholder/400/300",
    ratio: "ratio-4-3",
    title: "Arsitektur Modern",
    desc: "Desain Masa Kini",
  },
  {
    url: "./image/IntiNusantaraPreview_16-9.jpg",
    ratio: "ratio-16-9",
    title: "PT. Inti Telecom Nusantara",
    desc: "Company Profile Website",
  },
  {
    url: "./image/IT2024Preview_16-9.jpg",
    ratio: "ratio-16-9",
    title: "Community Profile Website",
    desc: "IT 2024 SMAN 7 Tangerang Website",
  },
  {
    url: "/api/placeholder/200/300",
    ratio: "ratio-2-3",
    title: "Burung Elang",
    desc: "Terbang Tinggi Menjulang",
  },
  {
    url: "/api/placeholder/500/500",
    ratio: "ratio-1-1",
    title: "Calista",
    desc: "Cantik nya Maha Pencipta",
  },
];

function getAnimationClass(index, totalItems) {
  const position = index % 3;

  if (position === 0) {
    return "top";
  } else if (position === 2 || (position === 1 && index === totalItems - 1)) {
    return "bottom";
  } else if (position === 1) {
    return index % 2 === 0 ? "left" : "right";
  }

  return "right";
}

function createNatureElements() {
  const overlay = document.getElementById("natureOverlay");
  overlay.innerHTML = "";

  for (let i = 0; i < 15; i++) {
    const leaf = document.createElement("div");
    leaf.className = "leaf";
    leaf.style.left = `${Math.random() * 100}%`;
    leaf.style.animationDuration = `${15 + Math.random() * 30}s`;
    leaf.style.animationDelay = `${Math.random() * 15}s`;
    overlay.appendChild(leaf);
  }
}

function createGallery() {
  const gallery = document.getElementById("gallery");
  gallery.innerHTML = ""; // Clear gallery

  images.forEach((image, index) => {
    const itemDiv = document.createElement("div");
    itemDiv.className = `gallery-item ${image.ratio} ${getAnimationClass(
      index,
      images.length
    )}`;

    const imgContainer = document.createElement("div");
    imgContainer.className = "img-container";
    imgContainer.style.backgroundImage = `url(${image.url})`;

    const infoDiv = document.createElement("div");
    infoDiv.className = "img-info";

    const title = document.createElement("h3");
    title.textContent = image.title;

    const desc = document.createElement("p");
    desc.textContent = image.desc;

    infoDiv.appendChild(title);
    infoDiv.appendChild(desc);

    itemDiv.appendChild(imgContainer);
    itemDiv.appendChild(infoDiv);

    gallery.appendChild(itemDiv);
  });
}

function isInViewport(element) {
  const rect = element.getBoundingClientRect();
  return (
    rect.top <= (window.innerHeight || document.documentElement.clientHeight) &&
    rect.bottom >= 0
  );
}

function handleScrollAnimation() {
  const items = document.querySelectorAll(".gallery-item:not(.visible)");
  items.forEach((item) => {
    if (isInViewport(item)) {
      setTimeout(() => {
        item.classList.add("visible");
      }, 100 * Math.random());
    }
  });
}

document.addEventListener("DOMContentLoaded", () => {
  createNatureElements();
  createGallery();
  handleScrollAnimation();

  window.addEventListener("scroll", handleScrollAnimation);

  window.addEventListener("resize", () => {
    createGallery();
    handleScrollAnimation();
  });
});
