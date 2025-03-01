document.addEventListener('DOMContentLoaded', function () {

    /* Enter (and order) questions to ask */
    const questions = [
        {
            questionID: "1",
            question: "There's a ship in the distance with an emissary flag heading toward you. They're not Reapers. What say you?",
            answers: [
                "Do they have anything we want?",
                "Send them to the Ferryman, sort the rest out later!",
                "That ship would make a beautiful bonfire...",
                "Alert the crew, but let them make the first move.",
                "How hilarious would it be if the kraken attacked us all?"
            ],
            personality: [
                "MG", 
                "AO", 
                "AC", 
                "NS", 
                "KW"
            ]
        },
        {
            questionID: "2",
            question: "Choose a color:",
            answers: [
                "Blue — The sea and sky are all I need.",
                "Purple — I am royalty, after all.",
                "Red — I am fire, rage, and passion.",
                "Green — Even a sailor needs the comforts of land.",
                "Cyan — The best of both worlds."
            ],
            personality: [
                "NS", 
                "KW", 
                "AC", 
                "AO", 
                "MG"
            ]
        },
        {
            questionID: "3",
            question: "It's Friday night, and you've just finished supplying your ship at the outpost. Where to?",
            answers: [
                "The Devil's Roar — The sight of erupting volcanoes stirs my passions.",
                "Doesn't matter — as long as there's someone to sink.",
                "Kraken hunting in the Wilds!",
                "You know, there's always action in the Ancient Isles!",
                "The cerulean skies and white sandy beaches of the Shores of Plenty are calling to me..."
            ],
            personality: [
                "AC", 
                "MG", 
                "KW", 
                "AO", 
                "NS"
            ]
        },
        {
            questionID: "4",
            question: "A fast-moving storm approaches. What now?",
            answers: [
                "Go around it — we'll conserve supplies.",
                "I'm just waiting for the bell — already whipped my fishing pole out.",
                "Sail on! No storm's the boss of me.",
                "Let me just go and make sure my keg stash is safe...",
                "Good. We can use it for cover."
            ],
            personality: [
                "MG", 
                "KW", 
                "NS", 
                "AC", 
                "AO"
            ]
        },
        {
            questionID: "5",
            question: "The winds of change are blowing. Choose the next world event!",
            answers: [
                "A glowing skull taunts you from the sky — the living dead await you at a nearby Skeleton Fort!",
                "A great horn bellows — the unmistakable herald of the Fort of Fortune!",
                "The wind dies, and the ship surrounded by inky black water. Enormous tentacles rise from the waves — it's the kraken!",
                "The sickening gurgle of a skeleton fleet bubbles up from below — send that Skeleton Fleet back to Davy Jones' locker!",
                "A red swirl fills the horizon — the Ashen Winds are blowing again, and a Skeleton Lord awaits!"
            ],
            personality: [
                "AO", 
                "MG", 
                "KW", 
                "NS", 
                "AC"
            ]
        },
        {
            questionID: "6",
            question: "Which of the following appeals to you most?",
            answers: [
                "Forced from your ancestral home, you subsisted off the great beasts beneath the waves and became a pirate.",
                "You are heir to the ruins and secrets of the islands — and even lay claim to treasures hidden beneath the sea.",
                "Banished from your homeland, you now hone your skills to perfection — and protect the worthy.",
                "Eager to make you fortune, you voyaged from your frozen homeland, braving intense storms to reach a distant paradise.",
                "You have a mysterious, smoldering allure. Your history has been consumed by the volcanic eruptions that call to you — like a moth to a flame."
            ],
            personality: [
                "KW", 
                "AO", 
                "MG", 
                "NS", 
                "AO"
            ]
        },
        {
            questionID: "7",
            question: "A bug in the game makes most of your favorite titles missing. Which do you use in the meantime?",
            answers: [
                "Legend of the Sun",
                "The Wandering Reaper",
                "Invader of Glittering Vaults",
                "Ashen Seeker",
                "Protector of the Wilds"
            ],
            personality: [
                "NS", 
                "MG", 
                "AO", 
                "AC", 
                "KW"
            ]
        }/*,
        {
            questionID: "8",
            question: "It's community weekend, and the gold is flowing! How do you spend it?",
            answers: [
                "",
                "",
                "",
                "",
                ""
            ],
            personality: [
                "KW", 
                "AO", 
                "KW", 
                "NS", 
                "MG"
            ]
        },
        {
            questionID: "9",
            question: "You've just cleared the Fort of Fortune, and a Reaper ship is sailing straight toward you. You notice a hefty supply of kegs in the vault.",
            answers: [
                "", 
                "", 
                "", 
                "", 
                ""
            ],
            personality: [
                "AC", 
                "AO", 
                "KW", 
                "NS", 
                "MG"
            ]
        },
        {
            questionID: "10",
            question: "A friend invites you to fish battlegills for a commendation. How fun are the next few hours?",
            answers: [
                "", 
                "", 
                "", 
                "", 
                ""
            ],
            personality: [
                "AC", 
                "AO", 
                "KW", 
                "NS", 
                "MG"
            ]
        },
        {
            questionID: "11",
            question: "An eager, inexperienced pirate joins your crew. How do you show them the ropes?",
            answers: [
                "", 
                "", 
                "", 
                "", 
                ""
            ],
            personality: [
                "AC", 
                "AO", 
                "KW", 
                "NS", 
                "MG"
            ]
        },*/
    ];

    /* Define answer codes and factions */
    const personalities = {
        "AC": "The Ashen Creed",
        "AO": "The Ancient Order of Chaos",
        "KW": "The Kinship of the Wilds",
        "NS": "The Norsemen of the Shores",
        "MG": "The Marauders of Golden Shores"
    };

    /* Set affinity counters to 0 */
    let currentQuestionIndex = 0;
    let personalityScores = { 
        "AC": 0, 
        "AO": 0, 
        "KW": 0, 
        "NS": 0, 
        "MG": 0 
    };

    /* Define elements by ID */
    const questionIDElement = document.getElementById('questionID');
    const questionElement = document.getElementById('question');
    const answersElement = document.getElementById('answers');
    const resultContainer = document.getElementById('resultContainer');
    const resultElement = document.getElementById('result');

    /* Count total number of questions */
    let questionsTotal = 0;
    for (const obj of questions) {
    if (obj.questionID > 0) questionsTotal++;
    }
    console.log(questionsTotal);
    document.getElementById('questionsTotal').textContent = questionsTotal;

    /* Show a question */
    function showQuestion(questionIndex) {
        const question = questions[questionIndex];
        questionIDElement.textContent = question.questionID;
        questionElement.textContent = question.question;
        answersElement.innerHTML = '';
        question.answers.forEach((answer, index) => {
            const button = document.createElement('button');
            button.textContent = answer;
            button.addEventListener('click', () => selectAnswer(index));
            answersElement.appendChild(button);
        });
    }

    /* Select an answer and move onto the next question */
    function selectAnswer(answerIndex) {
        const question = questions[currentQuestionIndex];
        const personalityType = question.personality[answerIndex];
        personalityScores[personalityType]++;
        currentQuestionIndex++;
        if (currentQuestionIndex < questions.length) {
            showQuestion(currentQuestionIndex);
        } else {
            showResult();
        }
    };

    /* Populate results */
    function showResult() {

        /* Determine faction with greatest affinity count */
        const highestScore = Math.max(...Object.values(personalityScores));
        const personalityType = Object.keys(personalityScores).find(key => personalityScores[key] === highestScore);
        resultElement.textContent = personalities[personalityType];
        resultContainer.style.display = 'block';
        result.classList.add(personalityType);
        document.getElementById('quizContainer').style.display = 'none';

        /* Make faction icon visible */
        document.getElementById('icon-ac').classList.add(personalityType);
        document.getElementById('icon-ao').classList.add(personalityType);
        document.getElementById('icon-kw').classList.add(personalityType);
        document.getElementById('icon-ns').classList.add(personalityType);
        document.getElementById('icon-mg').classList.add(personalityType);

        /* Calculte affinity percentage to display */
        const scoreAC = Math.round(personalityScores["AC"] / questionsTotal * 100);
        const scoreAO = Math.round(personalityScores["AO"] / questionsTotal * 100);
        const scoreKW = Math.round(personalityScores["KW"] / questionsTotal * 100);
        const scoreNS = Math.round(personalityScores["NS"] / questionsTotal * 100);
        const scoreMG = Math.round(personalityScores["MG"] / questionsTotal * 100);

        /* Print affinity percentage */
        document.getElementById('scoreAC').textContent = scoreAC;
        document.getElementById('scoreAO').textContent = scoreAO;
        document.getElementById('scoreKW').textContent = scoreKW;
        document.getElementById('scoreNS').textContent = scoreNS;
        document.getElementById('scoreMG').textContent = scoreMG;

        /* Bar graph width */
        document.getElementById('graphAC').style.width = scoreAC + '%';
        document.getElementById('graphAO').style.width = scoreAO + '%';
        document.getElementById('graphKW').style.width = scoreKW + '%';
        document.getElementById('graphNS').style.width = scoreNS + '%';
        document.getElementById('graphMG').style.width = scoreMG + '%';

    }

    /* Show first or next question */
    showQuestion(currentQuestionIndex);
});