const disasterData = {
    flood: {
        name: "Flood",
        before: [
            "Keep emergency supplies and drinking water ready.",
            "Move valuable items and documents to higher floors.",
            "Know your local evacuation routes and community shelters."
        ],
        during: [
            "Move immediately to higher ground or upper levels.",
            "Do not walk or drive through flowing floodwaters.",
            "Turn off electricity and gas supplies if safe to do so."
        ],
        after: [
            "Return home only when authorities declare it safe.",
            "Inspect your home for structural damage before entering.",
            "Boil drinking water or use bottled water until tested."
        ],
        avoid: [
            "Do not drink tap water directly after a flood.",
            "Avoid touching downed electrical power lines.",
            "Do not cross flowing streams on foot or in vehicles."
        ]
    },
    earthquake: {
        name: "Earthquake",
        before: [
            "Secure heavy furniture and appliances to walls.",
            "Identify safe spots in each room, such as sturdy tables.",
            "Keep emergency contact numbers easily accessible."
        ],
        during: [
            "Drop to your hands and knees, Cover under a sturdy table, and Hold On.",
            "Stay away from glass, windows, and exterior walls.",
            "Do not use elevators or lifts during or immediately after tremors."
        ],
        after: [
            "Check yourself and others around you for injuries.",
            "Expect aftershocks and remain alert to surroundings.",
            "Step outside if the building shows structural cracks."
        ],
        avoid: [
            "Do not run outside while shaking is actively occurring.",
            "Avoid using elevators during or after the tremor.",
            "Do not light matches or candles if gas leaks are suspected."
        ]
    },
    fire: {
        name: "Fire",
        before: [
            "Install and regularly test smoke alarms at home.",
            "Keep fire extinguishers accessible and know how to use them.",
            "Keep matches and lighters away from children."
        ],
        during: [
            "Stay low to the ground beneath smoke while escaping.",
            "Test doors for heat with the back of your hand before opening.",
            "Stop, Drop, and Roll if your clothing catches fire."
        ],
        after: [
            "Remain outside at your designated assembly point.",
            "Call emergency services immediately once you are safe.",
            "Wait for professional fire clearance before re-entering."
        ],
        avoid: [
            "Never use lifts or elevators during a building fire.",
            "Do not re-enter a burning building to retrieve belongings.",
            "Avoid opening doors that feel hot to the touch."
        ]
    },
    cyclone: {
        name: "Cyclone",
        before: [
            "Secure loose roofing sheets, doors, and outdoor items.",
            "Trim weak tree branches near your house.",
            "Stock up on dry food, drinking water, and batteries."
        ],
        during: [
            "Stay indoors in a windowless room or corridor.",
            "Keep away from glass windows and exterior doors.",
            "Listen to battery-powered radio for official updates."
        ],
        after: [
            "Watch out for fallen trees and snapped power lines.",
            "Stay away from coastal storm surge areas.",
            "Report damaged infrastructure to local authorities."
        ],
        avoid: [
            "Do not go outside during the calm eye of the storm.",
            "Avoid walking near coastal shores or flooded banks.",
            "Do not consume contaminated food or open water."
        ]
    },
    heatwave: {
        name: "Heatwave",
        before: [
            "Install curtains or reflective shades on windows.",
            "Stock plenty of clean drinking water and oral rehydration salts.",
            "Identify nearby shaded or air-conditioned public spaces."
        ],
        during: [
            "Drink plenty of water throughout the day, even if not thirsty.",
            "Wear lightweight, light-colored, and loose clothing.",
            "Avoid strenuous outdoor activities during peak afternoon hours."
        ],
        after: [
            "Continue to monitor elderly family members and neighbors.",
            "Replenish electrolyte and fluid levels gradually.",
            "Check for heat exhaustion symptoms like dizziness or nausea."
        ],
        avoid: [
            "Avoid alcohol, tea, and sugary carbonated drinks.",
            "Never leave children or pets inside parked vehicles.",
            "Avoid direct exposure to midday sun without protection."
        ]
    },
    landslide: {
        name: "Landslide",
        before: [
            "Learn about local landslide history and hazard zones.",
            "Plant ground cover on slopes to stabilize soil erosion.",
            "Establish an emergency communication plan with family."
        ],
        during: [
            "Move quickly away from the path of the landslide or mudflow.",
            "Curl into a tight ball and protect your head if escape is impossible.",
            "Listen for unusual sounds like cracking trees or rolling boulders."
        ],
        after: [
            "Stay away from the slide area as secondary slides can occur.",
            "Check for injured or trapped persons near the slide path.",
            "Report broken utility lines to appropriate authorities."
        ],
        avoid: [
            "Do not return to the slope area until fully inspected.",
            "Avoid crossing steep embankments during heavy rain.",
            "Do not ignore warning signs like sudden muddy water flows."
        ]
    }
};

const checklistItems = [
    { id: "water", label: "Drinking water (3 litres per person per day)" },
    { id: "food", label: "Non-perishable food items and energy bars" },
    { id: "firstaid", label: "First aid box with antiseptics and bandages" },
    { id: "torch", label: "Torch / Flashlight with extra batteries" },
    { id: "powerbank", label: "Fully charged portable power bank" },
    { id: "documents", label: "Important personal documents in waterproof folder" },
    { id: "medicines", label: "Essential prescription medicines" },
    { id: "whistle", label: "Emergency signaling whistle" },
    { id: "contacts", label: "Written list of emergency contact numbers" }
];

const quizQuestions = [
    {
        question: "What is the recommended immediate action during an earthquake when indoors?",
        options: [
            "Run outside immediately through the door",
            "Drop, Cover, and Hold On under a sturdy table",
            "Stand near a glass window to signal for help",
            "Use the elevator to reach the ground floor quickly"
        ],
        correct: 1,
        explanation: "Drop, Cover, and Hold On protects you from falling debris. Running during shaking can cause falls or injury."
    },
    {
        question: "Which of the following items is most critical to store in your emergency kit?",
        options: [
            "Extra video game consoles",
            "Drinking water and non-perishable food",
            "Glassware and ceramic plates",
            "Decorative items"
        ],
        correct: 1,
        explanation: "Clean drinking water and food are basic survival necessities during emergency disruptions."
    },
    {
        question: "What should you avoid doing during a building fire?",
        options: [
            "Staying close to the ground beneath smoke",
            "Testing doors for heat before opening",
            "Using lifts or elevators",
            "Covering your nose with a damp cloth"
        ],
        correct: 2,
        explanation: "Lifts and elevators can malfunction or fail during a fire, trapping you inside."
    },
    {
        question: "What is the primary action to take during a severe heatwave?",
        options: [
            "Drink plenty of water and stay indoors during peak hours",
            "Exercise heavily in direct sunlight to build tolerance",
            "Wear heavy woolen clothing",
            "Turn off all ventilation"
        ],
        correct: 0,
        explanation: "Hydration and avoiding peak sun exposure prevent heat exhaustion and heatstroke."
    },
    {
        question: "If you encounter a downed power line after a storm, what should you do?",
        options: [
            "Move it aside with a dry wooden stick",
            "Step over it carefully",
            "Stay away and report it immediately to authorities",
            "Pour water on it to cool it down"
        ],
        correct: 2,
        explanation: "Downed power lines can carry lethal electrical current and must never be touched."
    },
    {
        question: "How much drinking water should ideally be stored per person per day?",
        options: [
            "0.5 litres",
            "3 litres",
            "10 litres",
            "20 litres"
        ],
        correct: 1,
        explanation: "Storing at least 3 litres per person per day covers basic drinking and hygiene needs."
    },
    {
        question: "What should you do after an earthquake has stopped?",
        options: [
            "Turn on all electrical switches immediately",
            "Check for injuries and structural damage",
            "Ignore aftershocks and return to damaged rooms",
            "Lock all doors from the inside"
        ],
        correct: 1,
        explanation: "Checking for injuries and structural safety ensures you avoid hazards from weakened structures."
    },
    {
        question: "What is a recommended action when a flood warning is issued?",
        options: [
            "Drive your car through flooded underpasses",
            "Move to higher ground and upper floors",
            "Store electronics on the floor level",
            "Go swimming in the overflow"
        ],
        correct: 1,
        explanation: "Moving to higher ground prevents getting trapped by rising waters."
    },
    {
        question: "Why is a whistle useful in an emergency kit?",
        options: [
            "To signal rescuers if you are trapped",
            "To entertain children",
            "To check wind direction",
            "To cook food"
        ],
        correct: 0,
        explanation: "A whistle requires less energy than shouting and can be heard over long distances by rescue personnel."
    },
    {
        question: "During an emergency, where should you look for authoritative information?",
        options: [
            "Random unverified social media forwards",
            "Local government authorities and official emergency broadcasts",
            "Untrusted rumor channels",
            "Guesswork"
        ],
        correct: 1,
        explanation: "Official channels provide verified instructions and accurate safety guidance."
    }
];

const challengeItems = [
    {
        situation: "You are inside your apartment on the third floor when a strong earthquake starts shaking the building.",
        options: [
            "Run quickly towards the staircase and try to exit.",
            "Drop to the floor, take cover under a sturdy desk, and hold on.",
            "Stand on the balcony and wave to people on the street."
        ],
        correct: 1,
        explanation: "Taking cover under sturdy furniture protects you from falling objects during active shaking. Running outside during tremors is dangerous."
    },
    {
        situation: "Heavy continuous rain has caused water levels on your street to rise rapidly, and water is entering the ground floor.",
        options: [
            "Stay on the ground floor and wait for it to recede.",
            "Walk through the deep moving water to reach your vehicle.",
            "Turn off electrical mains if safe and move immediately to the upper floor or roof."
        ],
        correct: 2,
        explanation: "Moving to upper levels protects you from rising currents, and turning off power prevents electrical hazards."
    },
    {
        situation: "You smell smoke and hear the fire alarm sounding in your multi-storey college building corridor.",
        options: [
            "Open the corridor door immediately and run towards the elevator.",
            "Check the door for heat, stay low under smoke, and use the stairs to evacuate.",
            "Hide under your classroom desk and wait."
        ],
        correct: 1,
        explanation: "Checking for heat prevents exposure to flashover, staying low avoids toxic smoke inhalation, and stairs are safe while elevators are hazardous."
    },
    {
        situation: "A severe heatwave alert is in effect, and you must travel outdoors for an urgent task during afternoon hours.",
        options: [
            "Wear dark heavy clothing and run to your destination quickly.",
            "Drink plenty of water, wear light loose cotton clothing, carry an umbrella, and avoid direct sun where possible.",
            "Avoid drinking water so you do not need washrooms."
        ],
        correct: 1,
        explanation: "Light clothing, hydration, and sun protection help prevent heatstroke and dehydration."
    },
    {
        situation: "You notice a severe crack forming on a nearby hillside slope after days of heavy monsoon rainfall.",
        options: [
            "Ignore it as a natural occurrence.",
            "Move away from the slope immediately and inform local authorities.",
            "Park your car near the slope to observe it closely."
        ],
        correct: 1,
        explanation: "Slopes showing sudden cracks are prone to immediate landslides. Evacuating the danger zone is crucial."
    }
];

document.addEventListener("DOMContentLoaded", function() {
    setupNavigation();
    setupDisasterSection();
    setupChecklistSection();
    setupQuizSection();
    setupChallengesSection();
    setupEmergencyMode();
});

function setupNavigation() {
    const navButtons = document.querySelectorAll(".nav-btn");
    navButtons.forEach(btn => {
        btn.addEventListener("click", function() {
            const targetId = this.getAttribute("data-target");
            switchSection(targetId);
        });
    });
}

function switchSection(sectionId) {
    document.querySelectorAll(".content-section").forEach(sec => {
        sec.classList.remove("active");
    });
    document.querySelectorAll(".nav-btn").forEach(btn => {
        btn.classList.remove("active");
    });

    const targetSection = document.getElementById(sectionId);
    if (targetSection) {
        targetSection.classList.add("active");
    }

    const targetBtn = document.querySelector(`.nav-btn[data-target="${sectionId}"]`);
    if (targetBtn) {
        targetBtn.classList.add("active");
    }

    window.scrollTo({ top: 0, behavior: "smooth" });
}

function setupDisasterSection() {
    const filterButtons = document.querySelectorAll(".filter-btn");
    filterButtons.forEach(btn => {
        btn.addEventListener("click", function() {
            filterButtons.forEach(b => b.classList.remove("active"));
            this.classList.add("active");
            const disasterKey = this.getAttribute("data-disaster");
            renderDisasterDetails(disasterKey);
        });
    });

    renderDisasterDetails("flood");
}

function renderDisasterDetails(key) {
    const data = disasterData[key];
    const container = document.getElementById("disaster-display-area");
    if (!data || !container) return;

    let html = `
        <div class="disaster-detail-card">
            <h3>${data.name} Preparedness & Response</h3>
            <div class="disaster-grid-phases">
                <div class="phase-box">
                    <h4>Before</h4>
                    <ul>
                        ${data.before.map(item => `<li>${item}</li>`).join("")}
                    </ul>
                </div>
                <div class="phase-box">
                    <h4>During</h4>
                    <ul>
                        ${data.during.map(item => `<li>${item}</li>`).join("")}
                    </ul>
                </div>
                <div class="phase-box">
                    <h4>After</h4>
                    <ul>
                        ${data.after.map(item => `<li>${item}</li>`).join("")}
                    </ul>
                </div>
                <div class="phase-box avoid-box">
                    <h4>Things to Avoid</h4>
                    <ul>
                        ${data.avoid.map(item => `<li>${item}</li>`).join("")}
                    </ul>
                </div>
            </div>
        </div>
    `;
    container.innerHTML = html;
}

function setupChecklistSection() {
    const container = document.getElementById("checklist-items-container");
    if (!container) return;

    let savedChecklist = {};
    try {
        const stored = localStorage.getItem("disaster_ready_checklist");
        if (stored) {
            savedChecklist = JSON.parse(stored);
        }
    } catch (e) {
        savedChecklist = {};
    }

    let html = "";
    checklistItems.forEach(item => {
        const isChecked = savedChecklist[item.id] ? "checked" : "";
        html += `
            <div class="checklist-item-card">
                <input type="checkbox" id="check-${item.id}" data-id="${item.id}" ${isChecked}>
                <label for="check-${item.id}">${item.label}</label>
            </div>
        `;
    });
    container.innerHTML = html;

    updateChecklistProgress();

    container.querySelectorAll("input[type='checkbox']").forEach(box => {
        box.addEventListener("change", function() {
            const id = this.getAttribute("data-id");
            savedChecklist[id] = this.checked;
            try {
                localStorage.setItem("disaster_ready_checklist", JSON.stringify(savedChecklist));
            } catch (e) {}
            updateChecklistProgress();
        });
    });
}

function updateChecklistProgress() {
    try {
        const stored = localStorage.getItem("disaster_ready_checklist");
        const saved = stored ? JSON.parse(stored) : {};
        let completedCount = 0;
        checklistItems.forEach(item => {
            if (saved[item.id]) completedCount++;
        });

        const total = checklistItems.length;
        const percentage = Math.round((completedCount / total) * 100);

        const textEl = document.getElementById("checklist-progress-text");
        const fillEl = document.getElementById("checklist-progress-fill");

        if (textEl) textEl.textContent = `${completedCount} / ${total} items ready (${percentage}%)`;
        if (fillEl) fillEl.style.width = `${percentage}%`;
    } catch (e) {}
}

let currentQuizIndex = 0;
let userQuizAnswers = {};
let quizSubmitted = false;

function setupQuizSection() {
    renderQuizQuestion();
}

function renderQuizQuestion() {
    const container = document.getElementById("quiz-container");
    if (!container) return;

    if (currentQuizIndex >= quizQuestions.length) {
        renderQuizResults();
        return;
    }

    const q = quizQuestions[currentQuizIndex];
    let html = `
        <div class="quiz-question-container">
            <h3>Question ${currentQuizIndex + 1} of ${quizQuestions.length}: ${q.question}</h3>
            <div class="quiz-options">
                ${q.options.map((opt, idx) => `
                    <button class="quiz-option-btn ${userQuizAnswers[currentQuizIndex] === idx ? 'selected' : ''}" onclick="selectQuizOption(${idx})">${opt}</button>
                `).join("")}
            </div>
    `;

    if (userQuizAnswers[currentQuizIndex] !== undefined) {
        const isCorrect = userQuizAnswers[currentQuizIndex] === q.correct;
        html += `
            <div class="quiz-feedback">
                <strong>${isCorrect ? 'Correct!' : 'Incorrect.'}</strong> ${q.explanation}
            </div>
        `;
    }

    html += `
            <div class="quiz-navigation">
                <button class="tertiary-btn" onclick="prevQuizQuestion()" ${currentQuizIndex === 0 ? 'disabled' : ''}>Previous</button>
                <button class="primary-btn" onclick="nextQuizQuestion()">${currentQuizIndex === quizQuestions.length - 1 ? 'Finish Quiz' : 'Next Question'}</button>
            </div>
        </div>
    `;
    container.innerHTML = html;
}

function selectQuizOption(idx) {
    userQuizAnswers[currentQuizIndex] = idx;
    renderQuizQuestion();
}

function nextQuizQuestion() {
    if (currentQuizIndex < quizQuestions.length - 1) {
        currentQuizIndex++;
        renderQuizQuestion();
    } else {
        renderQuizResults();
    }
}

function prevQuizQuestion() {
    if (currentQuizIndex > 0) {
        currentQuizIndex--;
        renderQuizQuestion();
    }
}

function renderQuizResults() {
    const container = document.getElementById("quiz-container");
    if (!container) return;

    let score = 0;
    quizQuestions.forEach((q, idx) => {
        if (userQuizAnswers[idx] === q.correct) score++;
    });

    let html = `
        <div class="quiz-question-container" style="text-align: center;">
            <h3>Quiz Completed</h3>
            <p style="font-size: 1.25rem; margin: 1rem 0;">Your Score: <strong>${score} / ${quizQuestions.length}</strong></p>
            <p class="section-desc">Review your disaster preparedness knowledge and practice safety guidelines regularly.</p>
            <button class="primary-btn" onclick="resetQuiz()">Retake Quiz</button>
        </div>
    `;
    container.innerHTML = html;
}

function resetQuiz() {
    currentQuizIndex = 0;
    userQuizAnswers = {};
    renderQuizQuestion();
}

let currentChallengeIndex = 0;
let userChallengeAnswers = {};

function setupChallengesSection() {
    renderChallengeItem();
}

function renderChallengeItem() {
    const container = document.getElementById("challenges-container");
    if (!container) return;

    if (currentChallengeIndex >= challengeItems.length) {
        renderChallengeSummary();
        return;
    }

    const c = challengeItems[currentChallengeIndex];
    let html = `
        <div class="challenge-item">
            <h3>Scenario ${currentChallengeIndex + 1} of ${challengeItems.length}</h3>
            <p style="font-size: 1.05rem; margin-bottom: 1.25rem; font-weight: 500;">${c.situation}</p>
            <div class="challenge-options">
                ${c.options.map((opt, idx) => `
                    <button class="challenge-option-btn ${userChallengeAnswers[currentChallengeIndex] === idx ? 'selected' : ''}" onclick="selectChallengeOption(${idx})">${opt}</button>
                `).join("")}
            </div>
    `;

    if (userChallengeAnswers[currentChallengeIndex] !== undefined) {
        const isCorrect = userChallengeAnswers[currentChallengeIndex] === c.correct;
        html += `
            <div class="challenge-feedback">
                <strong>${isCorrect ? 'Correct Decision!' : 'Not the safest choice.'}</strong> ${c.explanation}
            </div>
        `;
    }

    html += `
            <div class="challenge-navigation">
                <button class="tertiary-btn" onclick="prevChallenge()" ${currentChallengeIndex === 0 ? 'disabled' : ''}>Previous</button>
                <button class="primary-btn" onclick="nextChallenge()">${currentChallengeIndex === challengeItems.length - 1 ? 'Finish Challenges' : 'Next Scenario'}</button>
            </div>
        </div>
    `;
    container.innerHTML = html;
}

function selectChallengeOption(idx) {
    userChallengeAnswers[currentChallengeIndex] = idx;
    renderChallengeItem();
}

function nextChallenge() {
    if (currentChallengeIndex < challengeItems.length - 1) {
        currentChallengeIndex++;
        renderChallengeItem();
    } else {
        renderChallengeSummary();
    }
}

function prevChallenge() {
    if (currentChallengeIndex > 0) {
        currentChallengeIndex--;
        renderChallengeItem();
    }
}

function renderChallengeSummary() {
    const container = document.getElementById("challenges-container");
    if (!container) return;

    let correctCount = 0;
    challengeItems.forEach((c, idx) => {
        if (userChallengeAnswers[idx] === c.correct) correctCount++;
    });

    let html = `
        <div class="challenge-item" style="text-align: center;">
            <h3>Challenges Completed</h3>
            <p style="font-size: 1.25rem; margin: 1rem 0;">Correct Choices: <strong>${correctCount} / ${challengeItems.length}</strong></p>
            <p class="section-desc">Practical situational awareness helps you stay safe during sudden emergency events.</p>
            <button class="primary-btn" onclick="resetChallenges()">Restart Challenges</button>
        </div>
    `;
    container.innerHTML = html;
}

function resetChallenges() {
    currentChallengeIndex = 0;
    userChallengeAnswers = {};
    renderChallengeItem();
}

function setupEmergencyMode() {
    const triggerBtn = document.getElementById("emergency-mode-btn");
    const overlay = document.getElementById("emergency-overlay");
    const closeBtn = document.getElementById("close-emergency-mode");

    if (triggerBtn && overlay && closeBtn) {
        triggerBtn.addEventListener("click", function() {
            overlay.classList.remove("hidden");
        });

        closeBtn.addEventListener("click", function() {
            overlay.classList.add("hidden");
        });

        overlay.addEventListener("click", function(e) {
            if (e.target === overlay) {
                overlay.classList.add("hidden");
            }
        });
    }
}
