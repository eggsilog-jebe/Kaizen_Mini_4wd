// AOS Initialization
AOS.init();

// ---- FOOTER SCRIPTS -------//
// Dynamic Year
document.getElementById("year").textContent = new Date().getFullYear();

// ---- LOGIN AND CREATE ACCOUNT SCRIPTS -------//
function togglePassword() {
  const passwordInput = document.getElementById("password");
  const eyeIcon = document.getElementById("eyeIcon");

  const isVisible = passwordInput.type === "text";
  passwordInput.type = isVisible ? "password" : "text";

  eyeIcon.src = isVisible ? "Assets/eye.svg" : "Assets/eye-slash.svg";
  eyeIcon.alt = isVisible ? "Show Password" : "Hide Password";
}

// Create Account Page
function toggleCreateAccountPassword(inputId, eyeIconId) {
  const passwordInput = document.getElementById(inputId);
  const eyeIcon = document.getElementById(eyeIconId);

  const isVisible = passwordInput.type === "text";

  passwordInput.type = isVisible ? "password" : "text";

  eyeIcon.src = isVisible ? "Assets/eye.svg" : "Assets/eye-slash.svg";
  eyeIcon.alt = isVisible ? "Show Password" : "Hide Password";
}

// ---- CONTACT SCRIPTS -------//

// WhatsApp Button – Para ma copy sa clipboard
function copyWhatsAppNumber(e, el) {
  e.preventDefault();
  const number = "+63 912 345 6789";
  navigator.clipboard.writeText(number).then(() => {
    const tooltip = el.parentElement.querySelector(".copy-tooltip");
    tooltip.textContent = "Number copied to clipboard";
    el.parentElement.classList.add("show-tooltip");
    setTimeout(() => {
      el.parentElement.classList.remove("show-tooltip");
    }, 2000);
  });
}

// ---- BLOG AND PAGE-------//

// Sorting - Dates
document.addEventListener("DOMContentLoaded", function () {
  const blogSections = document.querySelectorAll(".blog-posts");

  function sortAllBlogPages(order = "desc") {
    blogSections.forEach((section) => {
      const posts = Array.from(section.getElementsByClassName("blog-post"));

      const sorted = posts.sort((a, b) => {
        const dateA = new Date(a.getAttribute("data-date"));
        const dateB = new Date(b.getAttribute("data-date"));
        return order === "asc" ? dateA - dateB : dateB - dateA;
      });

      section.innerHTML = "";
      sorted.forEach((post) => section.appendChild(post));
    });
  }

  document.getElementById("sortRecent").addEventListener("click", function (e) {
    e.preventDefault();
    sortAllBlogPages("desc"); // Most Recent
  });

  document.getElementById("sortOldest").addEventListener("click", function (e) {
    e.preventDefault();
    sortAllBlogPages("asc"); // Oldest
  });

  // Optional: sort by default on load
  sortAllBlogPages("desc");
});

// Pagination Function
document.addEventListener("DOMContentLoaded", function () {
  let currentPage = 1;
  const totalPages = 3; // Set total number of pages

  function showPage(pageNumber) {
    // Hide all pages
    const pages = document.querySelectorAll('[id^="blogPage"]');
    pages.forEach((page) => {
      page.classList.add("d-none");
    });

    // Show the selected page
    const pageToShow = document.getElementById(`blogPage${pageNumber}`);
    if (pageToShow) {
      pageToShow.classList.remove("d-none");
    }

    // Update active page in pagination
    const activePage = document.querySelector(".page-item.active");
    if (activePage) {
      activePage.classList.remove("active");
    }

    // Set the clicked page as active
    const pageLink = document.getElementById(`page${pageNumber}`);
    if (pageLink) {
      pageLink.parentElement.classList.add("active");
    }

    // Disable the "Previous" and "Next" buttons based on the current page
    const prevBtn = document.getElementById("prevBtn");
    const nextBtn = document.getElementById("nextBtn");

    if (currentPage === 1) {
      prevBtn.classList.add("disabled");
    } else {
      prevBtn.classList.remove("disabled");
    }

    if (currentPage === totalPages) {
      nextBtn.classList.add("disabled");
    } else {
      nextBtn.classList.remove("disabled");
    }
  }

  // Handle page click
  document.querySelectorAll(".page-link").forEach((link) => {
    link.addEventListener("click", (e) => {
      e.preventDefault(); // Prevent the default behavior (link jumping)

      const clickedPage = e.target.id.replace("page", "");
      if (clickedPage) {
        currentPage = parseInt(clickedPage);
      }

      // Show the selected page
      showPage(currentPage);
    });
  });

  // Handle "Previous" button click
  const prevBtn = document.getElementById("prevBtn");
  prevBtn.addEventListener("click", () => {
    if (currentPage > 1) {
      currentPage--;
      showPage(currentPage);
    }
  });

  // Handle "Next" button click
  const nextBtn = document.getElementById("nextBtn");
  nextBtn.addEventListener("click", () => {
    if (currentPage < totalPages) {
      currentPage++;
      showPage(currentPage);
    }
  });

  // Show the first page on load
  showPage(currentPage);
});

// Temporary Data for Blogs and Products
document.addEventListener("DOMContentLoaded", function () {
  // Array of data for each page
  const cardsDataPage1 = [
    {
      imageSrc:
        "https://www.tamiya.com/cms/images/stories/newstopics/2025/01/15spiel/top_955_500.jpg",
      badgeText: "04/13/2025",
      titleText:
        "Tamiya models receive awards from prestigious German magazines!"
    },
    {
      imageSrc:
        "https://www.tamiya.com/cms/images/stories/newstopics/2024/09/03hs_info/62_poster_707_1000.jpg",
      badgeText: "04/12/2025",
      titleText: "Tamiya at the All Japan Model & Hobby Show 2024"
    },
    {
      imageSrc:
        "https://cinemabravo.com/wp-content/uploads/2024/11/the-brickyard-tamiya.png?w=1024",
      badgeText: "04/11/2025",
      titleText: "Tamiya Mini 4WD is hot in the Philippines"
    },
    {
      imageSrc:
        "https://www.tamiya.com/cms/images/stories/newstopics/2025/01/15spiel/messe2025_955_500_04.jpg",
      badgeText: "04/10/2025",
      titleText: "Items on Display in the Tamiya Booth at Spielwarenmesse 2025"
    },
    {
      imageSrc:
        "https://images.unsplash.com/photo-1659107387845-fb760cd4a811?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      badgeText: "04/09/2025",
      titleText: "Tamiya unveils new RC car kit"
    },
    {
      imageSrc:
        "https://www.tamiyausa.com/media/CACHE/images/products/ferrari-f50-none-1-6df9/b9fb6dc63be45d8e40039ce7df258e28.jpg",
      badgeText: "04/08/2025",
      titleText: "New Ferrari model launched by Tamiya"
    },
    {
      imageSrc:
        "https://d7z22c0gz59ng.cloudfront.net/cms/img/usr/item/2/24027/24027_1.jpg",
      badgeText: "04/07/2025",
      titleText: "Tamiya announces new racecar model"
    },
    {
      imageSrc:
        "https://d7z22c0gz59ng.cloudfront.net/japan_contents/img/usr/item/1/16042/16042_1.jpg",
      badgeText: "04/06/2025",
      titleText: "New Bike Model Released by Tamiya"
    },
    {
      imageSrc:
        "https://d7z22c0gz59ng.cloudfront.net/cms/img/usr/item/3/35389/35389_1.jpg",
      badgeText: "04/05/2025",
      titleText: "Tamiya releases new limited-edition model"
    }
  ];

  const cardsDataPage2 = [
    {
      imageSrc:
        "https://www.tamiyausa.com/media/CACHE/images/post_content/dukwho-race-nght-5-16-2024-p4-5536/80778d2b23839e8c3804ae7e601e038b.jpg",
      badgeText: "04/04/2025",
      titleText: "Tamiya unveils new model for 2025"
    },
    {
      imageSrc:
        "https://d7z22c0gz59ng.cloudfront.net/japan_contents/img/usr/item/1/19024/19024_1_02.jpg",
      badgeText: "04/03/2025",
      titleText: "New RC car release by Tamiya"
    },
    {
      imageSrc: "https://www.tamiya.com/cms/img/usr/item/9/95676/95676_1.jpg",
      badgeText: "04/02/2025",
      titleText: "New Scale Model Collection Launched"
    },
    {
      imageSrc:
        "https://www.tamiyausa.com/media/CACHE/images/post_content/japan-cup-f09b/0e8a062e7a88731e9a8b76311521a504.jpg",
      badgeText: "04/01/2025",
      titleText: "Remembering Great Cross Circuit 2017"
    },
    {
      imageSrc:
        "https://www.tamiyausa.com/media/CACHE/images/post_content/img-5085-2-c393/73caeb9c513ea2d170ffa8070d8759f0.jpg",
      badgeText: "03/31/2025",
      titleText: "Tamiya announces new competition models"
    },
    {
      imageSrc:
        "https://www.tamiyausa.com/media/CACHE/images/post_content/dukwho-race-nght-5-16-2024-vs-winner-dc15/d5ff91c0deba92120fe9665bafd02d88.jpg",
      badgeText: "03/30/2025",
      titleText: "Vintage Tamiya models return"
    },
    {
      imageSrc:
        "https://www.tamiyausa.com/media/CACHE/images/post_content/dukwho-race-nght-5-16-2024-p3-3da1/85e7b671974acaecc99fd072a447c9cb.jpg",
      badgeText: "03/29/2025",
      titleText: "The Best Tamiya models of the decade"
    },
    {
      imageSrc:
        "https://www.tamiyausa.com/media/CACHE/images/post_content/dukwho-race-nght-5-16-2024-p11-9958/cf1cfdd4c71395c871dcd9c3b805e8f9.jpg",
      badgeText: "03/28/2025",
      titleText: "Tamiya hits record sales in Europe"
    },
    {
      imageSrc:
        "https://www.tamiyausa.com/media/CACHE/images/post_content/dukwho-race-nght-5-16-2024-p7-41f2/0a428abe916b649fbdae3f3a722005d4.jpg",
      badgeText: "03/27/2025",
      titleText: "Tamiya celebrates 50 years of modeling"
    }
  ];

  const cardsDataPage3 = [
    {
      imageSrc:
        "https://www.tamiyausa.com/media/CACHE/images/post_content/dukwho-race-nght-5-16-2024-p5-2494/c42617e8519e7a8fb954fb12f5f12b78.jpg",
      badgeText: "03/26/2025",
      titleText: "Tamiya launches 2025 Mini 4WD kit"
    },
    {
      imageSrc:
        "https://www.tamiyausa.com/media/CACHE/images/post_content/dukwho-race-nght-5-16-2024-p14-dab4/99f27d189ebd88c5d93cb99167a56e6d.jpg",
      badgeText: "03/25/2025",
      titleText: "Dukwho Workshop Mini 4WD Race Report"
    },
    {
      imageSrc:
        "https://www.tamiyausa.com/media/CACHE/images/post_content/dukwho-race-nght-5-16-2024-p8-2b99/8180aa01c45007898bf530cb566f1a43.jpg",
      badgeText: "03/24/2025",
      titleText: "New RC truck kits available for preorder"
    },
    {
      imageSrc:
        "https://www.tamiyausa.com/media/CACHE/images/post_content/dukwho-race-nght-5-16-2024-p16-cf8c/b0171c813fd87f2096022ef6321a640d.jpg",
      badgeText: "03/23/2025",
      titleText: "Exclusive Tamiya model kit collection"
    },
    {
      imageSrc:
        "https://www.tamiyausa.com/media/CACHE/images/post_content/dukwho-race-nght-5-16-2024-p15-7cc3/1a1288c487707edcae3cc700c1c1fda1.jpg",
      badgeText: "03/22/2025",
      titleText: "Tamiya’s most anticipated models of 2025"
    },
    {
      imageSrc:
        "https://www.tamiyausa.com/media/CACHE/images/post_content/dukwho-race-nght-5-16-2024-p18-14d6/48d4dd706a0ff30193e8f4ae92a16872.jpg",
      badgeText: "03/21/2025",
      titleText: "Tamiya 4WD racing kits ready for release"
    },
    {
      imageSrc:
        "https://www.tamiyausa.com/media/CACHE/images/post_content/dukwho-race-nght-5-16-2024-basic-winner-a4e4/42909d8476236477391be2ada97769fe.jpg",
      badgeText: "03/20/2025",
      titleText: "New limited-edition 2025"
    },
    {
      imageSrc:
        "https://www.tamiyausa.com/media/CACHE/images/post_content/dukwho-race-nght-5-16-2024-p17-875e/8aba71a32316c895e71183df0143230d.jpg",
      badgeText: "03/19/2025",
      titleText: "Tamiya vintage models restocked"
    },
    {
      imageSrc:
        "https://www.tamiyausa.com/media/CACHE/images/post_content/dukwho-race-nght-5-16-2024-p23-ed80/3592088e54cbbeed2774a3efeee66acb.jpg",
      badgeText: "03/18/2025",
      titleText: "Tamiya’s 2025 model lineup announced"
    }
  ];

  // Function to populate cards for a specific page
  function populateCards(pageId, cardsData) {
    const cardElements = document.querySelectorAll(`#${pageId} .blog-post`);

    cardElements.forEach((card, index) => {
      if (cardsData[index]) {
        const cardData = cardsData[index];
        const imgElement = card.querySelector(".card-img-top");
        imgElement.src = cardData.imageSrc;

        const badgeElement = card.querySelector(".badge");
        badgeElement.textContent = cardData.badgeText;

        const titleElement = card.querySelector(".card-title");
        titleElement.textContent = cardData.titleText;
      }
    });
  }

  // Populate the cards for each page
  populateCards("blogPage1", cardsDataPage1);
  populateCards("blogPage2", cardsDataPage2);
  populateCards("blogPage3", cardsDataPage3);

  // ---- PRODUCT FUNCTIONS ---- //

  // PRODUCT DATA
  const products = [
    {
      imageSrc:
        "https://d7z22c0gz59ng.cloudfront.net/cms/img/usr/item/4/47514/47514_1.jpg",
      titleText: "Shadow Blitzer",
      price: "3,987.00",
      category: "rc-model"
    },
    {
      imageSrc:
        "https://d7z22c0gz59ng.cloudfront.net/japan_contents/img/usr/item/5/58680/58680_1.jpg",
      titleText: "Toyota Gazoo Racing TS050 HYBRID 2019 (F103GT Chassis)",
      price: "4,844.00",
      category: "rc-model"
    },
    {
      imageSrc:
        "https://d7z22c0gz59ng.cloudfront.net/cms/img/usr/item/5/58742/58742_1.jpg",
      titleText: "Aero Drifter",
      price: "3,334.00",
      category: "rc-model"
    },
    {
      imageSrc:
        "https://d7z22c0gz59ng.cloudfront.net/cms/img/usr/item/5/58744/58744_1.jpg",
      titleText: "Vortex Phantom",
      price: "4,234.00",
      category: "rc-model"
    },
    {
      imageSrc:
        "https://d7z22c0gz59ng.cloudfront.net/cms/img/usr/item/4/47508/47508_1.jpg",
      titleText: "Thunderbolt",
      price: "5,266.00",
      category: "rc-model"
    },
    {
      imageSrc:
        "https://d7z22c0gz59ng.cloudfront.net/cms/img/usr/item/5/58740/58740_1.jpg",
      titleText: "Stormbreaker Elite",
      price: "4,503.00",
      category: "rc-model"
    },
    {
      imageSrc:
        "https://d7z22c0gz59ng.cloudfront.net/cms/img/usr/item/5/58734/58734_1.jpg",
      titleText: "Citroen DS (MB-01 chassis)",
      price: "3,921.00",
      category: "rc-model"
    },
    {
      imageSrc:
        "https://d7z22c0gz59ng.cloudfront.net/japan_contents/img/usr/item/5/58637/58637_1.jpg",
      titleText: "Honda Civic SiR (TT-02D) Drift Spec",
      price: "4,988.00",
      category: "rc-model"
    },
    {
      imageSrc:
        "https://d7z22c0gz59ng.cloudfront.net/cms/img/usr/item/5/56376/56376_1.jpg",
      titleText: "Scania 770 S 8x4/4",
      price: "3,100.00",
      category: "rc-model"
    },
    {
      imageSrc:
        "https://d7z22c0gz59ng.cloudfront.net/cms/img/usr/item/5/58746/58746_1.jpg",
      titleText: "Peugeot 306 Maxi",
      price: "2,800.00",
      category: "rc-model"
    },
    {
      imageSrc:
        "https://d7z22c0gz59ng.cloudfront.net/japan_contents/img/usr/item/5/58741/58741_1.jpg",
      titleText: "Fighter NXGEN",
      price: "4,500.00",
      category: "rc-model"
    },
    {
      imageSrc:
        "https://d7z22c0gz59ng.cloudfront.net/cms/img/usr/item/5/58729/58729_1.jpg",
      titleText: "Opel Kadett GT/E",
      price: "3,700.00",
      category: "rc-model"
    },
    {
      imageSrc:
        "https://d7z22c0gz59ng.cloudfront.net/japan_contents/img/usr/item/7/74057/74057_1.jpg",
      titleText: "Portable tool set (for drilling)",
      price: "4,823.00",
      category: "tool"
    },
    {
      imageSrc:
        "https://d7z22c0gz59ng.cloudfront.net/japan_contents/img/usr/item/7/74146/74146_1.jpg",
      titleText: "Needle nose w/cutter II",
      price: "4,060.00",
      category: "tool"
    },
    {
      imageSrc:
        "https://d7z22c0gz59ng.cloudfront.net/cms/img/usr/item/6/69943/69943_1.jpg",
      titleText: "Modeler's knife (blue)",
      price: "6,176.00",
      category: "tool"
    },
    {
      imageSrc:
        "https://d7z22c0gz59ng.cloudfront.net/japan_contents/img/usr/item/7/74152/74152_1.jpg",
      titleText: "Ratcheting screwdriver pro",
      price: "5,198.00",
      category: "tool"
    },
    {
      imageSrc:
        "https://d7z22c0gz59ng.cloudfront.net/cms/img/usr/item/8/87221/87221_1.jpg",
      titleText: "DIORAMA TEXTURE CLAY (SOIL EFFECT, BROWN) 150g",
      price: "2,500.00",
      category: "tool"
    },
    {
      imageSrc:
        "https://d7z22c0gz59ng.cloudfront.net/japan_contents/img/usr/item/7/74041/74041_1.jpg",
      titleText: "ELECTRIC HANDY DRILL",
      price: "4,199.00",
      category: "tool"
    },
    {
      imageSrc:
        "https://d7z22c0gz59ng.cloudfront.net/japan_contents/img/usr/item/7/74064/74064_1.jpg",
      titleText: "WORK STAND w/MAGNIFYING LENS",
      price: "5,100.00",
      category: "tool"
    },
    {
      imageSrc:
        "https://d7z22c0gz59ng.cloudfront.net/japan_contents/img/usr/item/8/87225/87225_1.jpg",
      titleText: "CHIPPING LIQUID",
      price: "3,987.00",
      category: "tool"
    },
    {
      imageSrc:
        "https://d7z22c0gz59ng.cloudfront.net/japan_contents/img/usr/item/6/67037/67037_s.jpg",
      titleText: "KTC TOOL SET EKB (for R/C)",
      price: "2,500.00",
      category: "tool"
    },
    {
      imageSrc:
        "https://d7z22c0gz59ng.cloudfront.net/japan_contents/img/usr/item/7/74088/74088_1.jpg",
      titleText: "NUT DRIVER (4mm/4.5mm)",
      price: "4,199.00",
      category: "tool"
    },
    {
      imageSrc:
        "https://d7z22c0gz59ng.cloudfront.net/japan_contents/img/usr/item/7/74085/74085_1.jpg",
      titleText: "R/C TOOL SET (8PCS.)",
      price: "5,100.00",
      category: "tool"
    },
    {
      imageSrc:
        "https://d7z22c0gz59ng.cloudfront.net/cms/img/usr/item/7/74156/74156_1.jpg",
      titleText: "MODELING TEMPLATE (SQUARE, 1-10mm)",
      price: "2,300.00",
      category: "tool"
    },
    {
      imageSrc:
        "https://d7z22c0gz59ng.cloudfront.net/cms/img/usr/item/1/18105/18105_1.jpg",
      titleText: "The GRASSHOPPER Jr. (VZ CHASSIS)",
      price: "2,300.00",
      category: "kit"
    },
    {
      imageSrc:
        "https://d7z22c0gz59ng.cloudfront.net/japan_contents/img/usr/item/9/95679/95679_1.jpg",
      titleText: "MINI 4WD NEW YEAR'S EDITION YEAR OF THE SNAKE 2025",
      price: "3,400.00",
      category: "kit"
    },
    {
      imageSrc:
        "https://d7z22c0gz59ng.cloudfront.net/cms/img/usr/item/1/18104/18104_1.jpg",
      titleText: "CROSS SPEAR 02 (VZ CHASSIS)",
      price: "4,500.00",
      category: "kit"
    },
    {
      imageSrc:
        "https://d7z22c0gz59ng.cloudfront.net/cms/img/usr/item/9/95603/95603_1.jpg",
      titleText:
        "HURRICANE SONIC POLYCARBONATE BODY SPECIAL (AR CHASSIS) FULLY COWLED MINI 4WD 30TH ANNIVERSARY",
      price: "2,800.00",
      category: "kit"
    },
    {
      imageSrc:
        "https://d7z22c0gz59ng.cloudfront.net/cms/img/usr/item/9/95168/95168_1.jpg",
      titleText: "IGNICION (MA CHASSIS) JAPAN CUP 2024",
      price: "3,200.00",
      category: "kit"
    },
    {
      imageSrc:
        "https://d7z22c0gz59ng.cloudfront.net/cms/img/usr/item/1/18102/18102_1.jpg",
      titleText: "Mini 4WD Lupine Racer 2 (AR)",
      price: "5,100.00",
      category: "kit"
    },
    {
      imageSrc:
        "https://d7z22c0gz59ng.cloudfront.net/cms/img/usr/item/1/18103/18103_1.jpg",
      titleText: "Cross Spear 01 (VZ)",
      price: "3,500.00",
      category: "kit"
    },
    {
      imageSrc:
        "https://d7z22c0gz59ng.cloudfront.net/cms/img/usr/item/1/18659/18659_1.jpg",
      titleText: "ESTOURA (MA CHASSIS)",
      price: "2,800.00",
      category: "kit"
    },
    {
      imageSrc:
        "https://d7z22c0gz59ng.cloudfront.net/cms/img/usr/item/1/18658/18658_1.jpg",
      titleText: "CHEVALIER (MA CHASSIS)",
      price: "4,000.00",
      category: "kit"
    },
    {
      imageSrc:
        "https://d7z22c0gz59ng.cloudfront.net/cms/img/usr/item/1/18720/18720_1.jpg",
      titleText: "K4TASCHE (FM-A CHASSIS)",
      price: "3,600.00",
      category: "kit"
    },
    {
      imageSrc:
        "https://d7z22c0gz59ng.cloudfront.net/cms/img/usr/item/1/18101/18101_1_03.jpg",
      titleText: "SUPER AVANTE Jr. (VZ)",
      price: "4,800.00",
      category: "kit"
    },
    {
      imageSrc:
        "https://d7z22c0gz59ng.cloudfront.net/cms/img/usr/item/1/18099/18099_1.jpg",
      titleText: "RAY SPEAR (VZ CHASSIS)",
      price: "2,900.00",
      category: "kit"
    },
    {
      imageSrc:
        "https://d7z22c0gz59ng.cloudfront.net/cms/img/usr/item/1/18100/18100_1.jpg",
      titleText: "ELEGLITTER (VZ CHASSIS)",
      price: "6,200.00",
      category: "kit"
    },
    {
      imageSrc:
        "https://d7z22c0gz59ng.cloudfront.net/cms/img/usr/item/1/18098/18098_1.jpg",
      titleText: "IRON BEAK (VZ CHASSIS)",
      price: "2,750.00",
      category: "kit"
    },
    {
      imageSrc:
        "https://d7z22c0gz59ng.cloudfront.net/cms/img/usr/item/9/95501/95501_1_02.jpg",
      titleText: "AVANTE Jr. BLACK SPECIAL",
      price: "3,880.00",
      category: "kit"
    },
    {
      imageSrc:
        "https://d7z22c0gz59ng.cloudfront.net/cms/img/usr/item/9/95571/95571_1.jpg",
      titleText: "EXFLOWLY POLYCARBONATE BODY SPECIAL (PURPLE) (MS CHASSIS)",
      price: "4,100.00",
      category: "kit"
    },
    {
      imageSrc:
        "https://d7z22c0gz59ng.cloudfront.net/cms/img/usr/item/9/95572/95572_1.jpg",
      titleText: "RAYVOLF POLYCARBONATE BODY SPECIAL (LIGHT BLUE) (MS CHASSIS)",
      price: "5,950.00",
      category: "kit"
    },
    {
      imageSrc:
        "https://d7z22c0gz59ng.cloudfront.net/cms/img/usr/item/1/18096/18096_1.jpg",
      titleText: "DUAL RIDGE Jr. (VZ CHASSIS)",
      price: "3,200.00",
      category: "kit"
    },
    {
      imageSrc:
        "https://d7z22c0gz59ng.cloudfront.net/cms/img/usr/item/1/18094/18094_1.jpg",
      titleText: "NEO-VQS (VZ CHASSIS)",
      price: "2,450.00",
      category: "kit"
    },
    {
      imageSrc:
        "https://d7z22c0gz59ng.cloudfront.net/cms/img/usr/item/1/19454/19454_1.jpg",
      titleText: "COSMOSONIC (FM-A CHASSIS)",
      price: "3,730.00",
      category: "kit"
    },
    {
      imageSrc:
        "https://d7z22c0gz59ng.cloudfront.net/cms/img/usr/item/1/18714/18714_1.jpg",
      titleText: "MACH FRAME (FM-A CHASSIS)",
      price: "4,690.00",
      category: "kit"
    },
    {
      imageSrc:
        "https://d7z22c0gz59ng.cloudfront.net/cms/img/usr/item/1/18715/18715_1.jpg",
      titleText: "COPPERFANG (FM-A CHASSIS)",
      price: "5,250.00",
      category: "kit"
    },
    {
      imageSrc:
        "https://d7z22c0gz59ng.cloudfront.net/japan_contents/img/usr/item/1/18650/18650_1.jpg",
      titleText: "DCR-02 (MA CHASSIS)",
      price: "3,990.00",
      category: "kit"
    },
    {
      imageSrc:
        "https://d7z22c0gz59ng.cloudfront.net/cms/img/usr/item/1/18093/18093_1.jpg",
      titleText: "MINI 4WD KOALA RACER",
      price: "4,300.00",
      category: "kit"
    },
    {
      imageSrc:
        "https://d7z22c0gz59ng.cloudfront.net/cms/img/usr/item/1/15546/15546_1.jpg",
      titleText:
        "LARGE DIA. LOW FRICTION ARCHED TIRES (31mm) & CARBON WHEELS (V SPOKE)",
      price: "2,990.00",
      category: "4wd-parts"
    },
    {
      imageSrc:
        "https://d7z22c0gz59ng.cloudfront.net/cms/img/usr/item/1/15545/15545_1.jpg",
      titleText:
        "HARD SMALL DIA. LOW-PROFILE TIRES (26mm/GRAY) & CARBON WHEELS (DISH, for SUPER X & XX CHASSIS)",
      price: "4,250.00",
      category: "4wd-parts"
    },
    {
      imageSrc:
        "https://d7z22c0gz59ng.cloudfront.net/cms/img/usr/item/1/15544/15544_1.jpg",
      titleText:
        "LARGE DIA. LOW FRICTION LOW-PROFILE TIRES (31mm) & CARBON WHEELS (DISH)",
      price: "3,600.00",
      category: "4wd-parts"
    },
    {
      imageSrc:
        "https://d7z22c0gz59ng.cloudfront.net/japan_contents/img/usr/item/9/95680/95680_1.jpg",
      titleText:
        "HG ALUMINUM WHEELS for SMALL DIA. NARROW TIRES (24mm) (REVERSIBLE, 2PCS.)",
      price: "5,100.00",
      category: "4wd-parts"
    },
    {
      imageSrc:
        "https://d7z22c0gz59ng.cloudfront.net/cms/img/usr/item/1/15532/15532_1.jpg",
      titleText: "LOW FRICTION PLASTIC DOUBLE ROLLERS (BLUE/19-19mm)",
      price: "6,480.00",
      category: "4wd-parts"
    },
    {
      imageSrc:
        "https://d7z22c0gz59ng.cloudfront.net/cms/img/usr/item/9/95643/95643_1.jpg",
      titleText:
        "MINI 4WD 40th ANNIVERSARY HG 19mm ALUMINUM BALL-RACE ROLLERS (RINGLESS)",
      price: "2,850.00",
      category: "4wd-parts"
    },
    {
      imageSrc:
        "https://d7z22c0gz59ng.cloudfront.net/japan_contents/img/usr/item/9/95583/95583_1.jpg",
      titleText: "HG 19mm TAPERED ALUMINUM BALL-RACE ROLLERS (RINGLESS/GOLD)",
      price: "3,770.00",
      category: "4wd-parts"
    },
    {
      imageSrc:
        "https://d7z22c0gz59ng.cloudfront.net/japan_contents/img/usr/item/9/95597/95597_1.jpg",
      titleText: "HG 17mm TAPERED ALUMINUM BALL-RACE ROLLERS (RINGLESS)",
      price: "4,990.00",
      category: "4wd-parts"
    },
    {
      imageSrc:
        "https://d7z22c0gz59ng.cloudfront.net/cms/img/usr/item/1/15527/15527_1.jpg",
      titleText: "STAINLESS STEEL COUNTERSUNK SCREW SET (6/8/15mm)",
      price: "300.00",
      category: "4wd-parts"
    },
    {
      imageSrc:
        "https://d7z22c0gz59ng.cloudfront.net/cms/img/usr/item/1/15528/15528_1.jpg",
      titleText: "HI-MOUNT TUBE STABILIZER SET (BLACK)",
      price: "400.00",
      category: "4wd-parts"
    },
    {
      imageSrc:
        "https://d7z22c0gz59ng.cloudfront.net/cms/img/usr/item/1/15526/15526_1.jpg",
      titleText: "BASIC TUNE-UP PARTS SET for VZ CHASSIS",
      price: "310.00",
      category: "4wd-parts"
    },
    {
      imageSrc:
        "https://d7z22c0gz59ng.cloudfront.net/japan_contents/img/usr/item/9/95239/95239_1.jpg",
      titleText: "CARBON REINFORCED SUPER FM CHASSIS SET",
      price: "4,620.00",
      category: "4wd-parts"
    },
    {
      imageSrc:
        "https://d7z22c0gz59ng.cloudfront.net/cms/img/usr/item/9/95677/95677_1.jpg",
      titleText:
        "MINI 4WD JAPAN CUP JUNIOR CIRCUIT SPECIAL COLOR EDITION (YELLOW)",
      price: "25,000.00",
      category: "4wd-circuit"
    },
    {
      imageSrc:
        "https://d7z22c0gz59ng.cloudfront.net/japan_contents/img/usr/item/9/94893/94893_1.jpg",
      titleText:
        "MINI 4WD OVAL HOME CIRCUIT (TWO-LEVEL LANE CHANGE) (RED/WHITE/BLUE)",
      price: "30,500.00",
      category: "4wd-circuit"
    },
    {
      imageSrc:
        "https://d7z22c0gz59ng.cloudfront.net/japan_contents/img/usr/item/6/69571/69571_s.jpg",
      titleText: "CIRCUIT BANK-APPROACH 20 (RED)",
      price: "8,000.00",
      category: "4wd-circuit"
    },
    {
      imageSrc:
        "https://d7z22c0gz59ng.cloudfront.net/japan_contents/img/usr/item/6/69575/69575_1.jpg",
      titleText: "CIRCUIT WAVE SECTION SET (WHITE, 4PCS.)",
      price: "850.00",
      category: "4wd-circuit"
    },
    {
      imageSrc:
        "https://d7z22c0gz59ng.cloudfront.net/japan_contents/img/usr/item/6/69574/69574_1.jpg",
      titleText: "CIRCUIT STRAIGHT SECTION SET (WHITE, 4PCS.)",
      price: "700.00",
      category: "4wd-circuit"
    },
    {
      imageSrc:
        "https://d7z22c0gz59ng.cloudfront.net/cms/img/usr/item/2/24031/24031_1.jpg",
      titleText: "1/24 Audi quattro",
      price: "3,120.00",
      category: "st-model"
    },
    {
      imageSrc:
        "https://d7z22c0gz59ng.cloudfront.net/cms/img/usr/item/2/24371/24371_1.jpg",
      titleText: "1/24 SCALE TOYOTA GR Supra CUSTOM",
      price: "3,230.00",
      category: "st-model"
    },
    {
      imageSrc:
        "https://d7z22c0gz59ng.cloudfront.net/cms/img/usr/item/2/24027/24027_1.jpg",
      titleText: "1/24 RENAULT 5 TURBO RALLY",
      price: "3,450.00",
      category: "st-model"
    },
    {
      imageSrc:
        "https://d7z22c0gz59ng.cloudfront.net/cms/img/usr/item/2/24369/24369_1.jpg",
      titleText: "1/24 SCALE Honda CITY TURBO",
      price: "3,500.00",
      category: "st-model"
    },
    {
      imageSrc:
        "https://d7z22c0gz59ng.cloudfront.net/cms/img/usr/item/2/24370/24370_1.jpg",
      titleText: "1/24 SCALE PORSCHE 911 GT3 RS (992)",
      price: "3,220.00",
      category: "st-model"
    },
    {
      imageSrc:
        "https://d7z22c0gz59ng.cloudfront.net/cms/img/usr/item/2/24045/24045_1a.jpg",
      titleText: "1/24 Honda BALLADE SPORTS MUGEN CR-X PRO.",
      price: "3,670.00",
      category: "st-model"
    },
    {
      imageSrc:
        "https://d7z22c0gz59ng.cloudfront.net/cms/img/usr/item/2/24367/24367_1.jpg",
      titleText: "1/24 NISSAN FAIRLADY 240Z STREET-CUSTOM",
      price: "3,850.00",
      category: "st-model"
    },
    {
      imageSrc:
        "https://d7z22c0gz59ng.cloudfront.net/cms/img/usr/item/2/24365/24365_1.jpg",
      titleText: "1/24 TOYOTA SOARER 2000VR-TURBO",
      price: "3,300.00",
      category: "st-model"
    },
    {
      imageSrc:
        "https://d7z22c0gz59ng.cloudfront.net/cms/img/usr/item/2/24188/24188_1.jpg",
      titleText: "1/24 ALFA ROMEO GIULIA SPRINT GTA",
      price: "3,450.00",
      category: "st-model"
    },
    {
      imageSrc:
        "https://d7z22c0gz59ng.cloudfront.net/cms/img/usr/item/2/24169/24169_1.jpg",
      titleText: "1/24 FIAT 500F",
      price: "3,570.00",
      category: "st-model"
    },
    {
      imageSrc:
        "https://d7z22c0gz59ng.cloudfront.net/cms/img/usr/item/2/20072/20072_1.jpg",
      titleText: "1/20 TOYOTA CELICA LB TURBO Gr.5",
      price: "3,180.00",
      category: "st-model"
    },
    {
      imageSrc:
        "https://d7z22c0gz59ng.cloudfront.net/cms/img/usr/item/2/20071/20071_1.jpg",
      titleText: "1/20 PORSCHE 935 VAILLANT",
      price: "3,900.00",
      category: "st-model"
    },
    {
      imageSrc:
        "https://d7z22c0gz59ng.cloudfront.net/cms/img/usr/item/2/24364/24364_1a.jpg",
      titleText: "1/24 GMA T.50",
      price: "3,150.00",
      category: "st-model"
    },
    {
      imageSrc:
        "https://d7z22c0gz59ng.cloudfront.net/cms/img/usr/item/2/24363/24363_1a.jpg",
      titleText: "1/24 NISSAN Z",
      price: "3,500.00",
      category: "st-model"
    },
    {
      imageSrc:
        "https://d7z22c0gz59ng.cloudfront.net/cms/img/usr/item/2/24362/24362_1.jpg",
      titleText: "1/24 SUBARU BRZ (ZD8)",
      price: "3,850.00",
      category: "st-model"
    },
    {
      imageSrc:
        "https://d7z22c0gz59ng.cloudfront.net/cms/img/usr/item/2/24360/24360_1.jpg",
      titleText: "1/24 NISSAN FAIRLADY 240ZG",
      price: "3,820.00",
      category: "st-model"
    },
    {
      imageSrc:
        "https://d7z22c0gz59ng.cloudfront.net/cms/img/usr/item/2/24361/24361_1a.jpg",
      titleText: "1/24 TOYOTA GR 86",
      price: "3,410.00",
      category: "st-model"
    },
    {
      imageSrc:
        "https://d7z22c0gz59ng.cloudfront.net/cms/img/usr/item/2/24355/24355_1.jpg",
      titleText: "1/24 McLAREN SENNA",
      price: "3,350.00",
      category: "st-model"
    },
    {
      imageSrc:
        "https://d7z22c0gz59ng.cloudfront.net/cms/img/usr/item/4/48218/48218_1y.jpg",
      titleText: "GERMAN TANK PANZERKAMPFWAGEN IV Ausf.J (w/CONTROL UNIT)",
      price: "4,250.00",
      category: "rc-model"
    },
    {
      imageSrc:
        "https://d7z22c0gz59ng.cloudfront.net/cms/img/usr/item/4/48217/48217_1.jpg",
      titleText: "U.S. MEDIUM TANK M4A3 SHERMAN (w/CONTROL UNIT)",
      price: "4,500.00",
      category: "rc-model"
    },
    {
      imageSrc:
        "https://d7z22c0gz59ng.cloudfront.net/cms/img/usr/item/5/56044/56044_1.jpg",
      titleText:
        "BRITISH BATTLE TANK CENTURION Mk.III FULL-OPTION COMPLETE KIT",
      price: "4,350.00",
      category: "rc-model"
    },
    {
      imageSrc:
        "https://d7z22c0gz59ng.cloudfront.net/cms/img/usr/item/4/48215/48215_1.jpg",
      titleText:
        "JAPAN GROUND SELF DEFENSE FORCE TYPE 10 TANK (w/CONTROL UNIT)",
      price: "4,700.00",
      category: "rc-model"
    },
    {
      imageSrc:
        "https://d7z22c0gz59ng.cloudfront.net/japan_contents/img/usr/item/5/56017/56017_1.jpg",
      titleText: "HEAVY TANK TYPE VI KING TIGER FULL-OPTION COMPLETE KIT",
      price: "4,900.00",
      category: "rc-model"
    },
    {
      imageSrc:
        "https://d7z22c0gz59ng.cloudfront.net/cms/img/usr/item/5/56048/info/56048_1.jpg",
      titleText: "SHERMAN 105mm HOWITZER (MECHANICAL STEERING SYSTEM)",
      price: "4,200.00",
      category: "rc-model"
    },
    {
      imageSrc:
        "https://d7z22c0gz59ng.cloudfront.net/japan_contents/img/usr/item/5/56013/56013_1.jpg",
      titleText: "M4 SHERMAN 105mm HOWITZER FULL-OPTION KIT",
      price: "4,800.00",
      category: "rc-model"
    },
    {
      imageSrc:
        "https://d7z22c0gz59ng.cloudfront.net/japan_contents/img/usr/item/5/55120/55120_1.jpg",
      titleText: "POWERCHAMP RX (12PCS.) (Mini 4WD Batteries)",
      price: "2,000.00",
      category: "4wd-battery"
    },
    {
      imageSrc:
        "https://d7z22c0gz59ng.cloudfront.net/japan_contents/img/usr/item/5/55119/55119_1.jpg",
      titleText: "POWERCHAMP RX",
      price: "170.00",
      category: "4wd-battery"
    },
    {
      imageSrc:
        "https://d7z22c0gz59ng.cloudfront.net/japan_contents/img/usr/item/5/55117/55117_1.jpg",
      titleText: "POWERCHAMP RS",
      price: "1,500.00",
      category: "4wd-battery"
    },
    {
      imageSrc:
        "https://d7z22c0gz59ng.cloudfront.net/japan_contents/img/usr/item/6/67244/67244_1.jpg",
      titleText: "TAMIYA RACING FACTORY STRIPE LOGO T-SHIRT A TYPE (BLACK) S",
      price: "170.00",
      category: "misc"
    },
    {
      imageSrc:
        "https://d7z22c0gz59ng.cloudfront.net/japan_contents/img/usr/item/6/67295/67295_1.jpg",
      titleText: "TAMIYA QUICK-DRYING T-SHIRT A TYPE (BLACK) L",
      price: "1,500.00",
      category: "misc"
    }
  ];

  const productsPerPage = 12;
  let currentPage = 1;

  function filterAndSortProducts() {
    let filteredProducts = [...products];

    const filterCategory = document.getElementById("filter-dropdown").value;
    const searchQuery = document
      .getElementById("search-bar")
      .value.toLowerCase();
    const sortOption = document.getElementById("sort-dropdown").value;

    if (filterCategory !== "Filter by Category") {
      filteredProducts = filteredProducts.filter(
        (p) => p.category === filterCategory
      );
    }

    if (searchQuery) {
      filteredProducts = filteredProducts.filter((p) =>
        p.titleText.toLowerCase().includes(searchQuery)
      );
    }

    const parsePrice = (priceStr) => parseFloat(priceStr.replace(/,/g, ""));

    if (sortOption === "price-asc") {
      filteredProducts.sort(
        (a, b) => parsePrice(a.price) - parsePrice(b.price)
      );
    } else if (sortOption === "price-desc") {
      filteredProducts.sort(
        (a, b) => parsePrice(b.price) - parsePrice(a.price)
      );
    } else if (sortOption === "name-asc") {
      filteredProducts.sort((a, b) => a.titleText.localeCompare(b.titleText));
    } else if (sortOption === "name-desc") {
      filteredProducts.sort((a, b) => b.titleText.localeCompare(a.titleText));
    }

    paginateAndDisplay(filteredProducts);
  }

  function paginateAndDisplay(filteredProducts) {
    const productContainer = document.getElementById("product-container");
    productContainer.innerHTML = "";

    const startIndex = (currentPage - 1) * productsPerPage;
    const endIndex = startIndex + productsPerPage;
    const paginatedProducts = filteredProducts.slice(startIndex, endIndex);

    if (paginatedProducts.length === 0) {
      productContainer.innerHTML =
        "<p>Oops! It looks like we don't have any products available in this category right now. Please check back later!</p>";
      return;
    }

    paginatedProducts.forEach((product) => {
      const cardHTML = `
        <div class="col-6 col-sm-6 col-md-3 mb-4">
          <div class="card position-relative h-100">
            <div class="card-img-wrapper">
              <img src="${product.imageSrc}" class="card-img-top prodPopulate-img" alt="${product.titleText}" />
            </div>
            <div class="card-body d-flex flex-column">
              <h5 class="card-title mb-1 prodPopulate-title">${product.titleText}</h5>
              <p class="fw-bold mb-2">
                <span class="currency">&#8369;</span><span class="price">${product.price}</span>
              </p>
              <a href="login.html" class="btn kzn-btn-black mt-auto">Buy Now</a>
            </div>
          </div>
        </div>
      `;
      productContainer.innerHTML += cardHTML;
    });

    updatePaginationControls(filteredProducts.length);
  }

  function updatePaginationControls(totalProducts) {
    const totalPages = Math.ceil(totalProducts / productsPerPage);
    const pagination = document.getElementById("productPagination");

    const prevBtn = document.getElementById("prevBtn");
    const nextBtn = document.getElementById("nextBtn");

    prevBtn.classList.toggle("disabled", currentPage === 1);
    nextBtn.classList.toggle("disabled", currentPage === totalPages);

    // Clear all page items except Prev and Next
    const existingPageBtns = Array.from(
      pagination.querySelectorAll("li")
    ).filter((li) => li !== prevBtn && li !== nextBtn);
    existingPageBtns.forEach((li) => li.remove());

    function createPageItem(page) {
      const li = document.createElement("li");
      li.className = "page-item" + (page === currentPage ? " active" : "");
      const btn = document.createElement("button");
      btn.className = "page-link";
      btn.textContent = page;
      btn.addEventListener("click", () => {
        if (currentPage !== page) {
          currentPage = page;
          filterAndSortProducts();
        }
      });
      li.appendChild(btn);
      return li;
    }

    function createEllipsis() {
      const li = document.createElement("li");
      li.className = "page-item disabled";
      const span = document.createElement("span");
      span.className = "page-link";
      span.textContent = "...";
      li.appendChild(span);
      return li;
    }

    const pages = [];

    if (totalPages <= 7) {
      for (let i = 1; i <= totalPages; i++) {
        pages.push(i);
      }
    } else {
      pages.push(1);

      if (currentPage > 3) {
        pages.push("ellipsis");
      }

      const start = Math.max(2, currentPage - 1);
      const end = Math.min(totalPages - 1, currentPage + 1);

      for (let i = start; i <= end; i++) {
        pages.push(i);
      }

      if (currentPage < totalPages - 2) {
        pages.push("ellipsis");
      }

      pages.push(totalPages);
    }

    pages.forEach((page) => {
      if (page === "ellipsis") {
        pagination.insertBefore(createEllipsis(), nextBtn);
      } else {
        pagination.insertBefore(createPageItem(page), nextBtn);
      }
    });
  }

  // Event listeners
  document.getElementById("search-bar").addEventListener("input", () => {
    currentPage = 1;
    filterAndSortProducts();
  });

  document.getElementById("filter-dropdown").addEventListener("change", () => {
    currentPage = 1;
    filterAndSortProducts();
  });

  document.getElementById("sort-dropdown").addEventListener("change", () => {
    currentPage = 1;
    filterAndSortProducts();
  });

  document.getElementById("prevBtn").addEventListener("click", () => {
    if (currentPage > 1) {
      currentPage--;
      filterAndSortProducts();
    }
  });

  document.getElementById("nextBtn").addEventListener("click", () => {
    let filteredProducts = [...products];

    const filterCategory = document.getElementById("filter-dropdown").value;
    const searchQuery = document
      .getElementById("search-bar")
      .value.toLowerCase();

    if (filterCategory !== "Filter by Category") {
      filteredProducts = filteredProducts.filter(
        (p) => p.category === filterCategory
      );
    }

    if (searchQuery) {
      filteredProducts = filteredProducts.filter((p) =>
        p.titleText.toLowerCase().includes(searchQuery)
      );
    }

    const totalPages = Math.ceil(filteredProducts.length / productsPerPage);
    if (currentPage < totalPages) {
      currentPage++;
      filterAndSortProducts();
    }
  });

  // Initial load
  filterAndSortProducts();
});

// ---- CONTACT PAGE-------//
document
  .getElementById("contactForm")
  .addEventListener("submit", function (event) {
    event.preventDefault(); // Prevents form submission
  });
