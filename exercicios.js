/* =====================================================
   30 EXERCISES
===================================================== */

const exercises = [

    {
        id: 1,
        name: "Jumping Jacks",
        category: "Aquecimento",
        duration: 30,
        calories: 8,
        description:
            "Jump while opening and closing your legs and arms in a controlled way.",
        gif: "gifs/polichinelo.gif"
    },

    {
        id: 2,
        name: "Running in Place",
        category: "Aquecimento",
        duration: 40,
        calories: 10,
        description:
            "Run in place while keeping your upper body stable.",
        gif: "gifs/corridaparada.gif"
    },

    {
        id: 3,
        name: "High Knees",
        category: "Aquecimento",
        duration: 30,
        calories: 8,
        description:
            "Raise your knees alternately to a comfortable height.",
        gif: "gifs/elevaçaodejoelhos.gif"
    },

    {
        id: 4,
        name: "Butt Kicks",
        category: "Aquecimento",
        duration: 30,
        calories: 7,
        description:
            "Alternately bring your heels toward your glutes.",
        gif: "gifs/calcanharnogluteo.gif"
    },

    {
        id: 5,
        name: "Arm Circles",
        category: "Aquecimento",
        duration: 30,
        calories: 4,
        description:
            "Make circular movements with your arms to warm up your shoulders.",
        gif: "gifs/rotacaodebraço.gif"
    },

    {
        id: 6,
        name: "Squat",
        category: "Pernas e Glúteos",
        duration: 40,
        calories: 9,
        description:
            "Bend your knees while pushing your hips back, then return to the starting position.",
        gif: "gifs/agachamento.gif"
    },

    {
        id: 7,
        name: "Sumo Squat",
        category: "Pernas e Glúteos",
        duration: 40,
        calories: 9,
        description:
            "Keep your feet wide apart and perform a squat movement.",
        gif: "gifs/agachamentosumo.gif"
    },

    {
        id: 8,
        name: "Lunge",
        category: "Pernas e Glúteos",
        duration: 40,
        calories: 9,
        description:
            "Step forward and bend your knees while maintaining your balance.",
        gif: "gifs/afundo.gif"
    },

    {
        id: 9,
        name: "Reverse Lunge",
        category: "Pernas e Glúteos",
        duration: 40,
        calories: 8,
        description:
            "Step one leg backward and lower your body in a controlled movement.",
        gif: "gifs/afundoreverso.gif"
    },

    {
        id: 10,
        name: "Jump Squat",
        category: "Pernas e Glúteos",
        duration: 30,
        calories: 11,
        description:
            "Perform a squat and gently jump as you return to the starting position.",
        gif: "gifs/agachamentocomsalto.gif"
    },

    {
        id: 11,
        name: "Hip Raise",
        category: "Pernas e Glúteos",
        duration: 40,
        calories: 7,
        description:
            "Lie down, bend your knees and lift your hips.",
        gif: "gifs/elevaçãopelvica.gif"
    },

    {
        id: 12,
        name: "Glute Bridge",
        category: "Pernas e Glúteos",
        duration: 40,
        calories: 7,
        description:
            "Lift your hips while squeezing your glutes at the top of the movement.",
        gif: "gifs/pontedegluteos.gif"
    },

    {
        id: 13,
        name: "Side Leg Raise",
        category: "Pernas e Glúteos",
        duration: 35,
        calories: 6,
        description:
            "Raise your leg to the side while keeping your hips stable.",
        gif: "gifs/elevaçaonatural.gif"
    },

    {
        id: 14,
        name: "Glute Kickback",
        category: "Pernas e Glúteos",
        duration: 35,
        calories: 6,
        description:
            "On all fours, lift one leg backward and upward.",
        gif: "gifs/coicedegluteos.gif"
    },

    {
        id: 15,
        name: "Isometric Squat",
        category: "Pernas e Glúteos",
        duration: 30,
        calories: 7,
        description:
            "Hold the squat position for the specified amount of time.",
        gif: "gifs/agachamentoisometrico.gif"
    },

    {
        id: 16,
        name: "Traditional Crunch",
        category: "Abdômen",
        duration: 30,
        calories: 6,
        description:
            "Lift your upper body in a controlled way while keeping your core engaged.",
        gif: "gifs/abdominaltradicional.gif"
    },

    {
        id: 17,
        name: "Bicycle Crunch",
        category: "Abdômen",
        duration: 30,
        calories: 8,
        description:
            "Alternate your elbow and knee in a cycling-like movement.",
        gif: "gifs/abdominalbicicleta.gif"
    },

    {
        id: 18,
        name: "Leg Raises",
        category: "Abdômen",
        duration: 30,
        calories: 7,
        description:
            "Raise your legs while keeping your core engaged.",
        gif: "gifs/elevaçaodepernas.gif"
    },

    {
        id: 19,
        name: "Mountain Climber",
        category: "Abdômen",
        duration: 30,
        calories: 10,
        description:
            "From a plank position, alternate bringing your knees toward your chest.",
        gif: "gifs/Mountainclimber.gif"
    },

    {
        id: 20,
        name: "Plank",
        category: "Abdômen",
        duration: 30,
        calories: 5,
        description:
            "Keep your body aligned while supporting yourself on your arms and feet.",
        gif: "gifs/prancha.gif"
    },

    {
        id: 21,
        name: "Side Plank",
        category: "Abdômen",
        duration: 30,
        calories: 5,
        description:
            "Keep your body aligned while supporting yourself on your side.",
        gif: "gifs/pranchalateral.gif"
    },

    {
        id: 22,
        name: "Jackknife Crunch",
        category: "Abdômen",
        duration: 30,
        calories: 8,
        description:
            "Bring your arms and legs toward the center of your body.",
        gif: "gifs/abdominalcanivete.gif"
    },

    {
        id: 23,
        name: "Burpee",
        category: "Cardio",
        duration: 30,
        calories: 12,
        description:
            "Combine a squat, push-up position and jump in one continuous movement.",
        gif: "gifs/burpee.gif"
    },

    {
        id: 24,
        name: "Skater",
        category: "Cardio",
        duration: 30,
        calories: 10,
        description:
            "Perform side-to-side movements similar to a speed skater.",
        gif: "gifs/skater.gif"
    },

    {
        id: 25,
        name: "High Knee Run",
        category: "Cardio",
        duration: 30,
        calories: 11,
        description:
            "Run in place while quickly lifting your knees.",
        gif: "gifs/corridadejoelhosaltos.gif"
    },

    {
        id: 26,
        name: "Lateral Jumps",
        category: "Cardio",
        duration: 30,
        calories: 9,
        description:
            "Perform small jumps from side to side.",
        gif: "gifs/saltoslaterais.gif"
    },

    {
        id: 27,
        name: "Stationary Run",
        category: "Cardio",
        duration: 45,
        calories: 12,
        description:
            "Run in place while maintaining a comfortable pace.",
        gif: "gifs/corridaestacionaria.gif"
    },

    {
        id: 28,
        name: "Inchworm",
        category: "Corpo inteiro",
        duration: 35,
        calories: 8,
        description:
            "Walk your hands forward into a plank position and return.",
        gif: "gifs/inchworm.gif"
    },

    {
        id: 29,
        name: "Bear Crawl",
        category: "Corpo inteiro",
        duration: 30,
        calories: 9,
        description:
            "Move on all fours while keeping your knees close to the floor.",
        gif: "gifs/bearcrawl.gif"
    },

    {
        id: 30,
        name: "Bodyweight Thruster",
        category: "Corpo inteiro",
        duration: 30,
        calories: 10,
        description:
            "Combine a squat with an overhead arm extension.",
        gif: "gifs/thrustercorporal.gif"
    }

];


/* =====================================================
   STATE
===================================================== */

let currentProfile =
    localStorage.getItem("fit30_profile") || "";

let completedExercises =
    JSON.parse(
        localStorage.getItem("fit30_completed")
    ) || [];

let completedDays =
    JSON.parse(
        localStorage.getItem("fit30_days")
    ) || [];

let water =
    Number(
        localStorage.getItem("fit30_water")
    ) || 0;

let currentExercise = null;

let timer = null;

let timeLeft = 0;

let timerMode = "work";


/* =====================================================
   INITIALIZATION
===================================================== */

document.addEventListener(
    "DOMContentLoaded",
    () => {

        if (currentProfile) {
            selectProfile(
                currentProfile,
                false
            );
        }

        renderExercises("Todos");

        renderDays();

        updateDashboard();

        updateWater();

    }
);


/* =====================================================
   PROFILE
===================================================== */

function selectProfile(
    profile,
    save = true
) {

    if (!profile) return;

    currentProfile = profile;

    if (save) {

        localStorage.setItem(
            "fit30_profile",
            profile
        );

        showToast(
            profile === "mulher"
                ? "Female profile selected 👩"
                : "Male profile selected 👨"
        );

    }


    document
        .getElementById(
            "femaleProfile"
        )
        .classList.toggle(
            "selected",
            profile === "mulher"
        );


    document
        .getElementById(
            "maleProfile"
        )
        .classList.toggle(
            "selected",
            profile === "homem"
        );


    document
        .getElementById(
            "headerProfile"
        )
        .textContent =
            profile === "mulher"
                ? "👩 Female profile"
                : "👨 Male profile";

}


/* =====================================================
   RENDER EXERCISES
===================================================== */

function renderExercises(
    category = "Todos"
) {

    const grid =
        document.getElementById(
            "exerciseGrid"
        );

    if (!grid) return;

    grid.innerHTML = "";


    const list =
        category === "Todos"
            ? exercises
            : exercises.filter(
                exercise =>
                    exercise.category === category
            );


    list.forEach(
        exercise => {

            const completed =
                completedExercises.includes(
                    exercise.id
                );


            const card =
                document.createElement(
                    "div"
                );

            card.className =
                "exercise-card" +
                (
                    completed
                        ? " completed"
                        : ""
                );


            let imageHTML = "";


            if (exercise.gif) {

                imageHTML = `
                    <img
                        src="${exercise.gif}"
                        alt="${exercise.name}"
                        loading="lazy"
                    >
                `;

            } else {

                imageHTML = `

                    <div class="gif-placeholder">

                        <div
                            style="font-size:35px">

                            🎞️

                        </div>

                        <strong>
                            Exercise GIF
                        </strong>

                        <span>
                            Add your GIF in the
                            exercicios.js file
                        </span>

                    </div>

                `;

            }


            card.innerHTML = `

                <div class="exercise-image">

                    ${imageHTML}

                </div>


                <div class="exercise-info">

                    <h3>
                        ${exercise.name}
                    </h3>


                    <p>
                        ${exercise.description}
                    </p>


                    <div class="exercise-meta">

                        <span class="badge">
                            ${getCategoryName(exercise.category)}
                        </span>

                        <span class="badge">
                            🔥
                            ${exercise.calories}
                            kcal
                        </span>

                        <span class="badge">
                            ⏱️
                            ${exercise.duration}s
                        </span>

                    </div>


                    <button
                        class="exercise-button"
                        onclick="
                            openExercise(
                                ${exercise.id}
                            )
                        ">

                        ${
                            completed
                                ? "✓ Completed"
                                : "Start Exercise"
                        }

                    </button>

                </div>

            `;


            grid.appendChild(card);

        }
    );

}


/* =====================================================
   CATEGORY TRANSLATION
===================================================== */

function getCategoryName(category) {

    const categories = {

        "Todos": "All",

        "Aquecimento": "Warm-up",

        "Pernas e Glúteos": "Legs & Glutes",

        "Abdômen": "Abs",

        "Cardio": "Cardio",

        "Corpo inteiro": "Full Body"

    };


    return categories[category] || category;

}


/* =====================================================
   FILTER
===================================================== */

function filterCategory(
    category,
    element
) {

    document
        .querySelectorAll(
            ".category"
        )
        .forEach(
            button =>
                button.classList.remove(
                    "active"
                )
        );


    element.classList.add(
        "active"
    );


    renderExercises(
        category
    );

}


/* =====================================================
   OPEN EXERCISE
===================================================== */

function openExercise(id) {

    currentExercise =
        exercises.find(
            exercise =>
                exercise.id === id
        );


    if (!currentExercise) return;


    stopTimer();


    timerMode = "work";


    timeLeft =
        currentExercise.duration;


    document
        .getElementById(
            "workoutName"
        )
        .textContent =
            currentExercise.name;


    document
        .getElementById(
            "workoutDescription"
        )
        .textContent =
            currentExercise.description;


    document
        .getElementById(
            "workoutCategory"
        )
        .textContent =
            getCategoryName(
                currentExercise.category
            );


    document
        .getElementById(
            "workoutCalories"
        )
        .textContent =
            currentExercise.calories;


    document
        .getElementById(
            "workoutDuration"
        )
        .textContent =
            currentExercise.duration;


    document
        .getElementById(
            "timerCalories"
        )
        .textContent =
            currentExercise.calories;


    updateTimerDisplay();


    const container =
        document.getElementById(
            "workoutGifContainer"
        );


    if (currentExercise.gif) {

        container.innerHTML = `

            <img
                class="workout-gif"
                src="${currentExercise.gif}"
                alt="${currentExercise.name}"
            >

        `;

    } else {

        container.innerHTML = `

            <div class="
                gif-placeholder
                large
            ">

                <div>

                    <div
                        style="
                            font-size:60px;
                            margin-bottom:15px;
                        ">

                        🎞️

                    </div>


                    <strong>
                        ${currentExercise.name}
                    </strong>


                    <span>
                        Add the GIF for this exercise
                        in the "gif" field of the
                        exercicios.js file.
                    </span>

                </div>

            </div>

        `;

    }


    document
        .getElementById(
            "homeScreen"
        )
        .classList.remove(
            "active"
        );


    document
        .getElementById(
            "exerciseScreen"
        )
        .classList.add(
            "active"
        );


    window.scrollTo({
        top: 0,
        behavior: "smooth"
    });

}


/* =====================================================
   GO BACK
===================================================== */

function goHome() {

    stopTimer();


    document
        .getElementById(
            "exerciseScreen"
        )
        .classList.remove(
            "active"
        );


    document
        .getElementById(
            "homeScreen"
        )
        .classList.add(
            "active"
        );


    renderExercises(
        "Todos"
    );


    updateDashboard();


    window.scrollTo({
        top: 0,
        behavior: "smooth"
    });

}


/* =====================================================
   TIMER
===================================================== */

function startTimer() {

    if (timer) return;


    timer =
        setInterval(
            () => {

                if (timeLeft > 0) {

                    timeLeft--;

                    updateTimerDisplay();

                } else {

                    stopTimer();


                    if (
                        timerMode === "work"
                    ) {

                        showToast(
                            "Exercise finished! Time to rest 😴"
                        );

                        startRest();

                    } else {

                        showToast(
                            "Rest finished! Let's keep going! 💪"
                        );

                    }

                }

            },
            1000
        );

}


function pauseTimer() {

    stopTimer();

}


function stopTimer() {

    if (timer) {

        clearInterval(
            timer
        );

        timer = null;

    }

}


function resetTimer() {

    stopTimer();

    timerMode = "work";

    timeLeft =
        currentExercise
            ? currentExercise.duration
            : 30;

    updateTimerDisplay();

}


function startRest() {

    stopTimer();

    timerMode = "rest";

    timeLeft = 20;

    updateTimerDisplay();

    startTimer();

}


function updateTimerDisplay() {

    const timerElement =
        document.getElementById(
            "timer"
        );

    const status =
        document.getElementById(
            "timerStatus"
        );


    if (
        timerMode === "work"
    ) {

        timerElement.className =
            "timer work";

        status.textContent =
            "EXERCISE TIME";

    } else {

        timerElement.className =
            "timer rest";

        status.textContent =
            "REST TIME";

    }


    timerElement.textContent =
        timeLeft;


    document
        .getElementById(
            "restTimer"
        )
        .textContent =
            timerMode === "rest"
                ? timeLeft
                : 20;

}


/* =====================================================
   COMPLETE EXERCISE
===================================================== */

function completeCurrentExercise() {

    if (!currentExercise) return;


    if (
        !completedExercises.includes(
            currentExercise.id
        )
    ) {

        completedExercises.push(
            currentExercise.id
        );

        localStorage.setItem(
            "fit30_completed",
            JSON.stringify(
                completedExercises
            )
        );

        showToast(
            "Exercise marked as completed! ✅"
        );

    } else {

        completedExercises =
            completedExercises.filter(
                id =>
                    id !== currentExercise.id
            );

        localStorage.setItem(
            "fit30_completed",
            JSON.stringify(
                completedExercises
            )
        );

        showToast(
            "Exercise unmarked."
        );

    }


    updateDashboard();

}


/* =====================================================
   WATER
===================================================== */

function addWater(amount) {

    water += amount;


    if (water > 10000) {
        water = 10000;
    }


    saveWater();

    updateWater();

}


function removeWater() {

    water -= 250;


    if (water < 0) {
        water = 0;
    }


    saveWater();

    updateWater();

}


function resetWater() {

    water = 0;

    saveWater();

    updateWater();

}


function saveWater() {

    localStorage.setItem(
        "fit30_water",
        water
    );

}


function updateWater() {

    const amount =
        document.getElementById(
            "waterAmount"
        );

    const dashboard =
        document.getElementById(
            "waterDashboard"
        );

    const progress =
        document.getElementById(
            "waterProgress"
        );


    if (!amount) return;


    amount.textContent =
        water;


    dashboard.textContent =
        water + " ml";


    const percentage =
        Math.min(
            (water / 2000) * 100,
            100
        );


    progress.style.width =
        percentage + "%";

}


/* =====================================================
   DASHBOARD
===================================================== */

function updateDashboard() {

    const total =
        completedExercises.length;


    let calories = 0;


    completedExercises.forEach(
        id => {

            const exercise =
                exercises.find(
                    item =>
                        item.id === id
                );


            if (exercise) {

                calories +=
                    exercise.calories;

            }

        }
    );


    document
        .getElementById(
            "totalExercises"
        )
        .textContent =
            total;


    document
        .getElementById(
            "totalCalories"
        )
        .textContent =
            calories + " kcal";


    document
        .getElementById(
            "completedDays"
        )
        .textContent =
            completedDays.length +
            "/30";


    const progress =
        Math.min(
            Math.round(
                (
                    total /
                    exercises.length
                ) * 100
            ),
            100
        );


    document
        .getElementById(
            "mainProgress"
        )
        .style.width =
            progress + "%";


    document
        .getElementById(
            "progressText"
        )
        .textContent =
            progress + "%";


    renderDays();

}


/* =====================================================
   DAYS
===================================================== */

function renderDays() {

    const container =
        document.getElementById(
            "daysContainer"
        );


    if (!container) return;


    container.innerHTML = "";


    for (
        let day = 1;
        day <= 30;
        day++
    ) {

        const done =
            completedDays.includes(
                day
            );


        const div =
            document.createElement(
                "button"
            );


        div.className =
            "day" +
            (
                done
                    ? " done"
                    : ""
            );


        div.innerHTML = `

            <div class="day-number">
                ${day}
            </div>

            <div class="day-status">

                ${
                    done
                        ? "✓ Done"
                        : "Day"
                }

            </div>

        `;


        div.onclick = () =>
            toggleDay(day);


        container.appendChild(
            div
        );

    }

}


/* =====================================================
   MARK DAY
===================================================== */

function toggleDay(day) {

    if (
        completedDays.includes(day)
    ) {

        completedDays =
            completedDays.filter(
                d =>
                    d !== day
            );

    } else {

        completedDays.push(
            day
        );

        showToast(
            "Day " +
            day +
            " completed! 🎉"
        );

    }


    localStorage.setItem(
        "fit30_days",
        JSON.stringify(
            completedDays
        )
    );


    updateDashboard();

}


/* =====================================================
   TOAST
===================================================== */

function showToast(message) {

    const toast =
        document.getElementById(
            "toast"
        );


    if (!toast) return;


    toast.textContent =
        message;


    toast.classList.add(
        "show"
    );


    setTimeout(
        () => {

            toast.classList.remove(
                "show"
            );

        },
        2500
    );

}