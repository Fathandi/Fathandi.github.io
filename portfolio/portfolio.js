const images = [
  {
    url: "portfolio/image/ProfileCardCode_1-1.jpg",
    ratio: "ratio-1-1",
    title: "Creating Template",
    desc: "Create Profile Card Template using React.tsx",
  },
  {
    url: "portfolio/image/PortfolioBodyCode_3-4.jpg",
    ratio: "ratio-3-4",
    title: "Clean Code for My Portfolio",
    desc: "Using JavaScript Function as JavaScript Components",
  },
  {
    url: "portfolio/image/ChartGeneratorCode_4-3.jpg",
    ratio: "ratio-4-3",
    title: "Chart Generator Code",
    desc: "Code for Data Visualization with Chart.js",
  },
  {
    url: "portfolio/image/ChartGeneratorPreview_16-9.jpg",
    ratio: "ratio-16-9",
    title: "Chart Generator Preview",
    desc: "Preview of Data Visualization with Chart.js",
  },
  {
    url: "portfolio/image/FiberOptic_1-4-5.png",
    ratio: "ratio-3-4",
    title: "Fiber Optic",
    desc: "Instalasi Fiber Optic Rumah Pompa Bukit Duri",
  },
  {
    url: "portfolio/image/FiberOptic_2-4-5.png",
    ratio: "ratio-3-4",
    title: "Fiber Optic",
    desc: "Instalasi Fiber Optic Rumah Pompa Bukit Duri",
  },
  {
    url: "portfolio/image/WatercressGrowthPreview_16-9.jpg",
    ratio: "ratio-16-9",
    title: "Grapichs Watercress Growth",
    desc: "Made by Chart.js",
  },
  {
    url: "portfolio/image/AnalystGoldProfit_4-3.jpeg",
    ratio: "ratio-4-3",
    title: "Analyst Gold Market",
    desc: "If Claim The Bounty for Panen Feature",
  },
  {
    url: "portfolio/image/IntiNusantaraPreview_16-9.jpg",
    ratio: "ratio-16-9",
    title: "PT. Inti Telecom Nusantara",
    desc: "Company Profile Website",
  },
  {
    url: "portfolio/image/IT2024Preview_16-9.jpg",
    ratio: "ratio-16-9",
    title: "Community Profile Website",
    desc: "IT 2024 SMAN 7 Tangerang Website",
  },
  {
    url: "portfolio/image/DoctorShare_1-16-9.png",
    ratio: "ratio-16-9",
    title: "Non-Profit Organization Website",
    desc: "Order and Delivery Tracking",
  },
  {
    url: "portfolio/image/DoctorShare_3-4-3.png",
    ratio: "ratio-4-3",
    title: "Non-Profit Organization Website",
    desc: "Monitoring Partner Relationship",
  },
  {
    url: "portfolio/image/DoctorShare_2-16-9.png",
    ratio: "ratio-16-9",
    title: "Non-Profit Organization Website",
    desc: "Monitoring Partner Relationship",
  },
  {
    url: "portfolio/image/FiberOptic_3-4-5.png",
    ratio: "ratio-3-4",
    title: "Fiber Optic",
    desc: "Instalasi Fiber Optic Rumah Pompa Bukit Duri",
  },
  {
    url: "portfolio/image/GokaiTech_1-1.png",
    ratio: "ratio-1-1",
    title: "My Digital Creative Agency Website",
    desc: "Coming Soon",
  }
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
