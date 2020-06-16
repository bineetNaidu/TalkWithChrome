const btn = document.querySelector(".talk");
const content = document.querySelector(".content");

// greetings
const greetings = ["Im good buddy", "doing good homies", "leave me alom"];
const weather = ["chilling", "fine"];

const speechRecognition =
    window.SpeechRecognition || window.webkitSpeechRecognition;
const recognition = new speechRecognition();

recognition.onstart = function () {
    console.log("voice is activated");
};

recognition.onresult = function (event) {
    const current = event.resultIndex;

    const transcript = event.results[current][0].transcript;
    content.textContent = transcript;
    readOutLoad(transcript);
};

// add listener to btn
btn.addEventListener("click", () => {
    recognition.start();
});

function readOutLoad(message) {
    const speech = new SpeechSynthesisUtterance();

    speech.text = "How will i know";

    if (message.includes("how are you")) {
        const greetText =
            greetings[Math.floor(Math.random() * greetings.length)];
        speech.text = greetText;
    }

    speech.volume = 1;
    speech.rate = 1;
    speech.pitch = 1;

    window.speechSynthesis.speak(speech);
}
