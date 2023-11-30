class BookSearch {
    constructor(bookData) {
        this.bookData = bookData;
        this.setupEventListeners();
    }

    searchBooks() {
        const inputElement = document.getElementById("titulo");
        const bookTitle = inputElement.value;

        if (this.bookData.hasOwnProperty(bookTitle)) {
            window.location.href = this.bookData[bookTitle];
        } else {
            alert("Libro no encontrado");
        }
    }

    setupEventListeners() {
        const searchButton = document.getElementById("search-button");
        searchButton.addEventListener("click", () => this.searchBooks());
    }
}

const bookData = {
        "Administración : una perspectiva global y empresarial": "administracion.html",
        "Administrar para la calidad : conceptos administrativos del control total de calidad": "administracion.html",
        "Empresas familiares": "administracion.html",
        "Aprendizaje basado en competencias: una propuesta para la evaluación de las competencias genéricas": "desarrollo_humano.html",
        "Inteligencia emocional para el liderazgo: somos el resultado de nuestros pensamientos dominantes, por tanto, el éxito son solo hábitos": "desarrollo_humano.html",
        "Inteligencia emocional plena: mindfulness y la gestión eficaz de las emociones": "desarrollo_humano.html",
        "Psicología": "desarrollo_humano.html",
        "Física : electricidad y magnetismo": "ciencias_basicas.html",
        "Fundamentos de física": "ciencias_basicas.html",
        "Química": "ciencias_basicas.html",
        "Fundamentos de las relaciones internacionales": "comercio_negocios.html",
        "Historia mínima de Estados Unidos de América": "comercio_negocios.html",
        "Integración latinoamericana y caribeña: política y economía": "comercio_negocios.html"
    };

const bookSearch = new BookSearch(bookData);
