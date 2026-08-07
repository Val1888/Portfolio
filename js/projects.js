const modal = document.getElementById("projectModal");

const modalTitle = document.getElementById("modalTitle");

const viewer = document.getElementById("viewer");

const projectName = document.getElementById("projectName");

const projectDescription = document.getElementById("projectDescription");

const softwareList = document.getElementById("softwareList");

const dotsContainer = document.getElementById("dots");

let currentCategory = [];

let currentIndex = 0;

//==============================
// Abrir Modal
//==============================

document.querySelectorAll(".project-card").forEach(card => {

    card.addEventListener("click", () => {

        const category = card.dataset.category;

        currentCategory = portfolio[category];

        currentIndex = 0;

        modalTitle.textContent = card.querySelector("h3").textContent;

        modal.classList.add("show");

        loadProject();

    });

});

//==============================
// Cargar Proyecto
//==============================

function loadProject(){

    const project = currentCategory[currentIndex];

    //--------------------
    // Imagen o Video
    //--------------------

    if(project.type === "image"){

        viewer.innerHTML = `
            <img src="${project.src}" alt="${project.title}">
        `;

    }
        if(project.type === "youtube"){

    viewer.innerHTML = `
        <iframe
            width="100%"
            height="500"
            src="${project.src}"
            title="${project.title}"
            frameborder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            allowfullscreen>
        </iframe>
    `;

}

if(project.type === "video"){

    viewer.innerHTML = `
        <video controls>
            <source src="${project.src}">
        </video>
    `;

}

    //--------------------
    // Información
    //--------------------

    projectName.textContent = project.title;

    projectDescription.textContent = project.description;

    //--------------------
    // Software
    //--------------------

    softwareList.innerHTML = "";

    project.software.forEach(program => {

        softwareList.innerHTML += `
            <span>${program}</span>
        `;

    });

    //--------------------
    // Indicadores
    //--------------------

    dotsContainer.innerHTML = "";

    currentCategory.forEach((item,index)=>{

        dotsContainer.innerHTML += `
            <div class="dot ${index===currentIndex ? "active" : ""}"
                 onclick="goToSlide(${index})">
            </div>
        `;

    });

}

//==============================
// Flechas
//==============================

document.getElementById("nextSlide").onclick=()=>{

    currentIndex++;

    if(currentIndex>=currentCategory.length){

        currentIndex=0;

    }

    loadProject();

}

document.getElementById("prevSlide").onclick=()=>{

    currentIndex--;

    if(currentIndex<0){

        currentIndex=currentCategory.length-1;

    }

    loadProject();

}

//==============================
// Ir a un proyecto
//==============================

function goToSlide(index){

    currentIndex=index;

    loadProject();

}

//==============================
// Cerrar
//==============================

document.querySelector(".close-modal").onclick=()=>{

    modal.classList.remove("show");

}

modal.onclick=(e)=>{

    if(e.target===modal){

        modal.classList.remove("show");

    }

}