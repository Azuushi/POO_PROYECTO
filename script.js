document.addEventListener('DOMContentLoaded', function () {
    class Usuario {
        constructor(username, password) {
            this.username = username;
            this.password = password;
        }

        autenticar() {
            return this.username === 'poo_p3' && this.password === 'hola12';
        }
    }

    class FormularioLogin {
        constructor() {
            this.formulario = document.getElementById("login-form");
            this.loginForm = document.getElementById('loginForm');

            this.loginForm.addEventListener('submit', (event) => {
                event.preventDefault();
                this.iniciarSesion();
            });
        }

        mostrar() {
            this.formulario.style.display = "block";
        }

        cerrar() {
            this.formulario.style.display = "none";
        }

        iniciarSesion() {
            const usernameInput = document.getElementById('usernameInput');
            const passwordInput = document.getElementById('passwordInput');
            const username = usernameInput.value;
            const password = passwordInput.value;
            const usuario = new Usuario(username, password);

            if (usuario.autenticar()) {
                window.location.href = "index.html";
            } else {
                alert('Inicio de sesión fallido. Verifica tu nombre de usuario y contraseña.');
            }
        }
    }

    const formularioLogin = new FormularioLogin();

    class Slider {
        constructor(selector, options) {
            this.selector = selector;
            this.options = options;
        }

        init() {
            const sliderElement = document.querySelector(this.selector);
            if (sliderElement) {
                this.slick = new Slick(sliderElement, this.options);
            }
        }
    }

    const sliderOptions = {
        dots: true,
        autoplay: true,
        autoplaySpeed: 2000
    };

    const miSlider = new Slider("#slider", sliderOptions);
    miSlider.init();
})