document.addEventListener("DOMContentLoaded", () => {
    const sounds = {
        "a": "kick-sound",
        "s": "snare-sound",
        "d": "tom-sound",
        "f": "hihat-sound"
    };

    const playSound = (soundId) => {
        const sound = document.getElementById(soundId);
        if (sound) {
            sound.currentTime = 0; // Reset the sound to the beginning
            sound.play();
        } else {
            console.error(`${soundId} not found.`);
        }
    };

    const addButtonListeners = () => {
        Object.entries(sounds).forEach(([key, soundId]) => {
            const buttonId = key + "-button";
            const button = document.getElementById(buttonId);
            if (button) {
                button.addEventListener("click", () => playSound(soundId));
            } else {
                console.error(`${buttonId} not found.`);
            }
        });
    };

    const addKeyboardListener = () => {
        document.addEventListener("keydown", (event) => {
            const keyPressed = event.key.toLowerCase();
            if (sounds[keyPressed]) {
                playSound(sounds[keyPressed]);
            }
        });
    };

    addButtonListeners();
    addKeyboardListener();
});
