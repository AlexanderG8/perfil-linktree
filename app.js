document.addEventListener("DOMContentLoaded", function () {
    const profileData = {
        name: "Alexander Gomez",
        subtitle: "Don't overthink it, just do it",
        links: [
            {
                text: "Portfolio Web",
                url: "https://alexandergomez.netlify.app/",
                bgImage: "./img/CajaDesing.png"
            },
            {
                text: "LinkedIn",
                url: "https://pe.linkedin.com/in/marcello-alexander-gomez-gomez-130587268",
                bgImage: "./img/CajaDesing.png"
            },
            {
                text: "Youtube",
                url: "https://www.youtube.com/@xandev008",
                bgImage: "./img/CajaDesing.png"
            },
            {
                text: "Github",
                url: "https://github.com/AlexanderG8",
                bgImage: "./img/CajaDesing.png"
            }
        ]
    };

    // Rellenar el contenido del perfil
    document.getElementById("profile-name").textContent = profileData.name;
    document.getElementById("profile-subtitle").textContent = profileData.subtitle;



    const copyButtons = document.querySelectorAll(".copy-btn");
    const toast = document.getElementById("toast");

    // Rellenar los enlaces dinámicamente
    const linksContainer = document.getElementById("links-container");
    profileData.links.forEach(link => {
        const linkElement = document.createElement("div");
        linkElement.classList.add("link");
        linkElement.style.backgroundImage = `url(${link.bgImage})`; // Imagen de fondo

        const linkContent = `
            <span><a href="${link.url}" target="_blank">${link.text}</a></span>
            <i class="fa fa-copy copy-btn"></i>
        `;
        linkElement.innerHTML = linkContent;

        // Agregar funcionalidad para copiar el enlace
        linkElement.querySelector(".copy-btn").addEventListener("click", function () {
            navigator.clipboard.writeText(link.url).then(() => {
                const toast = document.getElementById("toast");
                toast.classList.add("show");
                setTimeout(() => toast.classList.remove("show"), 3000);
            });
        });

        linksContainer.appendChild(linkElement);
    });
});