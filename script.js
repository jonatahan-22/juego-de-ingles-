const levels = [
    // Nivel 1 (dificultad aumentada)
    {
        sentences: [
            { text: "The results of the experiment _ not what we expected, leading us to question our initial hypothesis.", correct: ["were"], options: ["am", "is", "are", "was", "were"] },
            { text: "I _ feeling better than yesterday, even though I _ still a bit tired.", correct: ["am", "am"], options: ["am", "is", "are", "was", "were"] },
            { text: "She _ always supportive, and she _ there for me when I need her.", correct: ["is", "is"], options: ["am", "is", "are", "was", "were"] },
            { text: "They _ planning a surprise party for her birthday next week.", correct: ["are"], options: ["am", "is", "are", "was", "were"] },
            { text: "We _ excited about the concert tonight; it _ going to be amazing!", correct: ["are", "is"], options: ["am", "is", "are", "was", "were"] },
            { text: "He _ not feeling well, so he _ going to skip work today.", correct: ["is", "is"], options: ["am", "is", "are", "was", "were"] },
            { text: "The weather _ perfect for a picnic, and the sun _ shining brightly.", correct: ["is", "is"], options: ["am", "is", "are", "was", "were"] },
            { text: "Are you _ ready for the exam tomorrow?", correct: ["am"], options: ["am", "is", "are", "was", "were"] },
            { text: "What _ your favorite hobbies?", correct: ["are"], options: ["am", "is", "are", "was", "were"] },
            { text: "I _ at the concert last night, and it _ incredible!", correct: ["was", "was"], options: ["am", "is", "are", "was", "were"] }
        ]
    },
    // Nivel 2 (dificultad aumentada, respuesta triple, más opciones)
    {
        sentences: [
            { text: "This book _ captivating, it _ beautifully written, and it _ deeply engaging for readers.", correct: ["is", "is", "is"], options: ["am", "is", "are", "was", "were", "be", "been", "become", "becoming", "appears", "seems"] },
            { text: "Her performance _ outstanding, it _ received rave reviews, and it _ left the audience in awe.", correct: ["was", "has been", "is"], options: ["am", "is", "are", "was", "were", "be", "been", "become", "becoming", "appears", "seems"] },
            { text: "The results of our analysis _ important, they _ reveal significant trends, and they _ provide valuable insights.", correct: ["are", "will", "can"], options: ["am", "is", "are", "was", "were", "be", "been", "become", "becoming", "appear", "seem"] },
            { text: "In the current economic climate, the challenges we face _ numerous, they _ require innovative strategies, and they _ affect everyone.", correct: ["are", "will", "must"], options: ["am", "is", "are", "was", "were", "be", "been", "become", "becoming", "might", "could"] },
            { text: "The committee's recommendations _ crucial, they _ guide our actions, and they _ help us achieve our goals.", correct: ["are", "will", "can"], options: ["am", "is", "are", "was", "were", "be", "been", "become", "becoming", "should", "may"] },
            { text: "The team _ eager to begin, they _ prepared for challenges, and they _ optimistic about the outcome.", correct: ["are", "are", "are"], options: ["am", "is", "are", "was", "were", "be", "been", "become", "becoming", "appeared", "looked"] },
            { text: "There _ many factors influencing success, each one _ critical, and they _ should not be overlooked.", correct: ["are", "is", "are"], options: ["am", "is", "are", "was", "were", "be", "been", "become", "becoming", "may", "can"] },
            { text: "Her skills _ exceptional, they _ set her apart, and they _ are crucial for the team’s success.", correct: ["are", "have", "will"], options: ["am", "is", "are", "was", "were", "be", "been", "become", "becoming", "could", "should"] },
            { text: "The findings _ significant, they _ change our approach, and they _ contribute to future research.", correct: ["are", "could", "will"], options: ["am", "is", "are", "was", "were", "be", "been", "become", "becoming", "might", "may"] },
            { text: "As we progress, expectations _ likely to shift, they _ depend on new information, and they _ require constant review.", correct: ["are", "will", "must"], options: ["am", "is", "are", "was", "were", "be", "been", "become", "becoming", "should", "can"] }
        ]
    },
    // Nivel 3 (dificultad aumentada, respuesta triple, más opciones)
    {
        sentences: [
            { text: "The theories proposed by the researcher _ revolutionary, they _ challenge existing paradigms, and they _ inspire further inquiry.", correct: ["are", "do", "can"], options: ["am", "is", "are", "was", "were", "be", "been", "become", "becoming", "might", "should"] },
            { text: "The landscape of technology _ rapidly evolving, it _ demands adaptability, and it _ influences all industries.", correct: ["is", "requires", "has"], options: ["am", "is", "are", "was", "were", "be", "been", "become", "becoming", "might", "should"] },
            { text: "In the debate over climate change, the evidence _ compelling, it _ drives action, and it _ affects policy decisions.", correct: ["is", "has", "should"], options: ["am", "is", "are", "was", "were", "be", "been", "become", "becoming", "might", "could"] },
            { text: "These discrepancies in data _ often indicative of deeper issues, they _ require investigation, and they _ complicate our conclusions.", correct: ["are", "might", "will"], options: ["am", "is", "are", "was", "were", "be", "been", "become", "becoming", "can", "could"] },
            { text: "The implications of this discovery _ vast, they _ influence multiple disciplines, and they _ prompt reevaluation of current theories.", correct: ["are", "could", "should"], options: ["am", "is", "are", "was", "were", "be", "been", "become", "becoming", "might", "may"] },
            { text: "Her insights _ critical for advancing our understanding, they _ challenge the status quo, and they _ open doors to new research.", correct: ["are", "can", "will"], options: ["am", "is", "are", "was", "were", "be", "been", "become", "becoming", "should", "could"] },
            { text: "There _ numerous strategies to address this issue, each one _ valuable, and they _ should be considered carefully.", correct: ["are", "is", "can"], options: ["am", "is", "are", "was", "were", "be", "been", "become", "becoming", "might", "should"] },
            { text: "The evidence gathered _ substantial, it _ calls for action, and it _ also urges collaboration among stakeholders.", correct: ["is", "has", "should"], options: ["am", "is", "are", "was", "were", "be", "been", "become", "becoming", "might", "may"] },
            { text: "As we advance, it _ essential that we remain flexible, and we _ adapt quickly to changes, ensuring we stay relevant.", correct: ["is", "must", "can"], options: ["am", "is", "are", "was", "were", "be", "been", "become", "becoming", "should", "could"] },
            { text: "If current trends continue, the outcomes _ likely to reshape our understanding, and they _ require new approaches to problem-solving.", correct: ["are", "will", "may"], options: ["am", "is", "are", "was", "were", "be", "been", "become", "becoming", "might", "could"] }
        ]
    }
];

let currentLevel = 0;
let currentSentence = 0;
let score = 0;

const sentenceElement = document.getElementById("sentence");
const levelElement = document.getElementById("level");
const scoreElement = document.getElementById("score");
const resultElement = document.getElementById("result");
const gameContainer = document.getElementById("game-container");
const loginContainer = document.getElementById("login-container");
const greetingElement = document.getElementById("greeting");
const options = [
    document.getElementById("option1"),
    document.getElementById("option2"),
    document.getElementById("option3"),
    document.getElementById("option4"),
    document.getElementById("option5")
];

function startGame() {
    const username = document.getElementById("username").value;
    if (username.trim()) {
        greetingElement.textContent = `¡Hi, ${username}!`;
        loginContainer.style.display = "none";
        gameContainer.style.display = "block";
        loadLevel();
    }
}

function loadSentence() {
    const sentence = levels[currentLevel].sentences[currentSentence];
    sentenceElement.innerHTML = sentence.text.replace(/_/g, '<span id="blank" class="dropzone">____</span>');
    const dropzone = document.getElementById("blank");
    dropzone.addEventListener('dragover', (event) => event.preventDefault());
    dropzone.addEventListener('drop', (event) => {
        event.preventDefault();
        const answer = event.dataTransfer.getData('text'); // Permitir una respuesta
        dropzone.textContent = answer;
        checkAnswer(answer);
    });
    options.forEach((option, index) => {
        option.textContent = sentence.options[index];
    });
}

function loadLevel() {
    levelElement.textContent = `Level: ${currentLevel + 1}`;
    loadSentence();
    updateScore();
}

function updateScore() {
    scoreElement.textContent = `Points: ${score}`;
}

options.forEach(option => {
    option.addEventListener('dragstart', (event) => {
        event.dataTransfer.setData('text', event.target.textContent);
    });
});

function checkAnswer(answer) {
    const sentence = levels[currentLevel].sentences[currentSentence];

    if (sentence.correct.includes(answer)) {
        score += 10;
        resultElement.textContent = "¡Correcto!";
        resultElement.classList.add("correct");
        nextSentence();
    } else {
        resultElement.textContent = "Incorrecto, inténtalo de nuevo.";
        resultElement.classList.add("incorrect");
    }
    updateScore();
}

function nextSentence() {
    currentSentence++;

    if (currentSentence >= levels[currentLevel].sentences.length) {
        currentSentence = 0;
        currentLevel++;

        if (currentLevel >= levels.length) {
            resultElement.textContent = "¡Felicidades! Has completado todos los niveles.";
            resultElement.classList.remove("incorrect");
            resultElement.classList.add("correct");
            gameContainer.style.display = "none";
            document.getElementById("congratulationsScreen").style.display = "block";
            return;
        } else {
            // Mostrar GIF después de 6 segundos al pasar de nivel
            setTimeout(() => {
                const gifScreen = document.createElement('div');
                gifScreen.innerHTML = `<img src="Recursos/up.gif" class="gif">`; // Cambia la ruta a la de tu GIF
                document.body.appendChild(gifScreen);

                // Ocultar GIF después de 5 segundos
                setTimeout(() => {
                    gifScreen.remove();
                }, 5000);
            }, 6000);
        }
    }
    loadSentence();
}

// Carga el primer nivel
loadLevel();




























