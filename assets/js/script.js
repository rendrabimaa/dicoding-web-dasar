// toggle menu 

let menuOpen = document.querySelector('.menu-toggle');
let menuAppear = document.querySelector('.nav-menu');

menuOpen.addEventListener('click', function() {
    menuOpen.classList.toggle('bx-x');
    menuAppear.classList.toggle('active')
})

// end toggle menu 


// looping for Benefit Card

let benefitCard = document.querySelector(".benefit-cards");
let cardContent = [
    {
        title: "Komunitas Belajar",
        description: "Lingkaran berisi teman-teman yang belajar hal yang sama yaitu pemrograman akan membuatmu lebih semangat dalam belajar.",
        image: "Saly-31.png"
    },
    {
        title: "Portofolio",
        description: "Hasil dari project belajar di BuildWithYou dapat kamu jadikan sebagai project portofolio juga loh.",
        image: "Saly-12.png"
    },
    {
        title: "Belajar Dimanapun",
        description: "Tidak perlu harus pergi kemanapun untuk belajar bersama, kamu hanya perlu internet dan laptop untuk belajar dimanapun. ",
        image: "Saly-13.png"
    },
    {
        title: "Jadwal Belajar",
        description: "Jadwal belajar dapat membantu kamu agar kamu tetap konsisten dalam belajar di BuildWithYou",
        image: "Saly-42.png"
    },    
]

for (const item of cardContent) {
    benefitCard.innerHTML += `
        <article class="benefit-card">
            <img src="assets/images/${item.image}" alt="gambar manfaat">
            <h4 class="card-title">${item.title}</h4>
            <p class="card-description">${item.description}</p>
        </article>
    `
}


