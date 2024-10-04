document.addEventListener('DOMContentLoaded', () => {
    const radios = document.querySelectorAll('input[name="slider"]');
    const audios = [document.getElementById('audio1'), document.getElementById('audio2'), document.getElementById('audio3')];
    const songInfos = document.querySelectorAll('.song-info');
    const playIcon = document.getElementById('play-icon');

    let currentAudioIndex = 0;

    radios.forEach((radio, index) => {
        radio.addEventListener('change', () => {
            // Atualiza o índice da música atual
            currentAudioIndex = index;

            // Pausar todos os áudios
            audios.forEach(audio => {
                audio.pause();
                audio.currentTime = 0; // Reiniciar o áudio
            });

            // Mostrar a informação da música correspondente
            songInfos.forEach(info => info.style.display = 'none');
            songInfos[index].style.display = 'block';
        });
    });

    // Adiciona o evento ao ícone de play
    playIcon.addEventListener('click', () => {
        // Pausar todos os áudios
        audios.forEach(audio => {
            audio.pause();
            audio.currentTime = 0; // Reiniciar o áudio
        });

        // Tocar o áudio correspondente ao índice atual
        audios[currentAudioIndex].play();
    });
});
