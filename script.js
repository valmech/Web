document.addEventListener("DOMContentLoaded", function () {
    const openBtn = document.getElementById("openModalBtn");
    const closeBtn = document.getElementById("closeModalBtn");
    const saveBtn = document.getElementById("saveNameBtn");
    const modal = document.getElementById("modalOverlay");
    const input = document.getElementById("userNameInput");
    const result = document.getElementById("greetingResult");

    const poster = document.getElementById("moviePost");
    const actionBtn = document.getElementById("actionBtn");
    const movieTitle = document.getElementById("movieTitle");
    const Genre = document.getElementById("Genre");
    const changeBg = document.getElementById("atmosfere");

// Закриття модального вікна клавішею Esc 
document.addEventListener("keydown", function (event) {
    if (event.key === "Escape" && !modal.classList.contains("hidden")) {
        modal.classList.add("hidden");
    }
});

    // модальне вікно
    openBtn.addEventListener("click", () => modal.classList.remove("hidden"));
    closeBtn.addEventListener("click", () => modal.classList.add("hidden"));
    saveBtn.addEventListener("click", function () {
        const name = input.value.trim();
        result.textContent = name ? `Привіт, ${name}!` : "Будь ласка, введіть ім'я.";
        if (name) modal.classList.add("hidden");
        localStorage.setItem("userName", name); // Зберігаємо ім'я
    });

    const savedName = localStorage.getItem("userName");
    if (savedName) {
        result.textContent = `З поверненням, ${savedName}!`; // Відновлюємо ім'я 
    }

    //завдання з картинками

    poster.addEventListener("click", function() {
        if (poster.src.includes("popcorn.jfif")){ 
            poster.src = "camera.jfif";
        }else{
            poster.src = "popcorn.jfif";
        }
    });

    //завдання з кнопками 
    
    actionBtn.addEventListener("click", function() {
        if(actionBtn.textContent.trim() === "Купити квиток"){
            actionBtn.textContent = "Повернути квиток";
        } else {
            actionBtn.textContent = 'Купити квиток';
        }
    });

    //завдання з фільмом

    actionBtn.addEventListener("click", function() {
        if (Genre.textContent.trim() === "Жанр: Жахи") {
            Genre.textContent = "Успішно заброньовано!";
            Genre.style.color = "#faed2e"; 
        } else {
            Genre.textContent = "Жанр: Жахи";
            Genre.style.color = "#bd0909"; 
        }
    });

    // циклічна зміна кольру

    const colors = ["#6e2c2c", '#3f1279', '#227b1f'];
    let colorIndex = 0;

    changeBg.addEventListener('click', function(){
        colorIndex = (colorIndex + 1) % colors.length;
        document.body.style.backgroundColor = colors[colorIndex];
    });

    let clickCount = 0; // Лічильник 

    actionBtn.addEventListener("click", function() {
        clickCount++;
        console.log(`Кнопку натиснуто ${clickCount} разів`);
    });

    const themeToggle = document.getElementById('themeToggle');

    themeToggle.addEventListener('click', function(){
        document.body.classList.toggle('light-theme');
    });

});