/* =====================================================
   RETRO BOLLYWOOD RADIO
   AUDIO PLAYER ENGINE
===================================================== */


/* =====================================================
   SONG DATABASE
===================================================== */

const emraanSongs = [

    {
        title: "Ishq Sufiyana",
        movie: "The Dirty Picture",
        artist: "Vishal Dadlani",
        file: "audio/ishq-sufiyana.mp3"
    },

    {
        title: "Pee Loon",
        movie: "Once Upon a Time in Mumbaai",
        artist: "Mohit Chauhan",
        file: "audio/pee-loon.mp3"
    },

    {
        title: "Phir Mohabbat",
        movie: "Murder 2",
        artist: "Mohammed Irfan, Arijit Singh, Saim Bhat",
        file: "audio/phir-mohabbat.mp3"
    },

    {
        title: "Hale Dil",
        movie: "Murder 2",
        artist: "Harshit Saxena",
        file: "audio/hale-dil.mp3"
    },

    {
        title: "Deewana Kar Raha Hai",
        movie: "Raaz 3",
        artist: "Jubin Nautiyal",
        file: "audio/deewana-kar-raha-hai.mp3"
    },

    {
        title: "Tu Hi Haqeeqat",
        movie: "Tum Mile",
        artist: "Javed Ali",
        file: "audio/tu-hi-haqeeqat.mp3"
    },

    {
        title: "Dil Ibaadat",
        movie: "Tum Mile",
        artist: "KK",
        file: "audio/dil-ibaadat.mp3"
    },

    {
        title: "Haan Tu Hain",
        movie: "Jannat",
        artist: "KK",
        file: "audio/haan-tu-hain.mp3"
    },

    {
        title: "Zara Sa",
        movie: "Jannat",
        artist: "KK",
        file: "audio/zara-sa.mp3"
    },

    {
        title: "Tu Hi Meri Shab Hai",
        movie: "Gangster",
        artist: "KK",
        file: "audio/tu-hi-meri-shab-hai.mp3"
    },

    {
        title: "Ya Ali",
        movie: "Gangster",
        artist: "Zubeen Garg",
        file: "audio/ya-ali.mp3"
    },

    {
        title: "Aadat",
        movie: "Kalyug",
        artist: "Atif Aslam",
        file: "audio/aadat.mp3"
    },

    {
        title: "Agar Tum Mil Jao",
        movie: "Zeher",
        artist: "Shreya Ghoshal",
        file: "audio/agar-tum-mil-jao.mp3"
    },

    {
        title: "Woh Lamhe Woh Baatein",
        movie: "Zeher",
        artist: "Atif Aslam",
        file: "audio/woh-lamhe-woh-baatein.mp3"
    },

    {
        title: "Bheege Hont Tere",
        movie: "Murder",
        artist: "Kunal Ganjawala",
        file: "audio/bheege-hont-tere.mp3"
    },

    {
        title: "Kaho Na Kaho",
        movie: "Murder",
        artist: "Amir Jamal",
        file: "audio/kaho-na-kaho.mp3"
    },

    {
        title: "Jiya Dhadak Dhadak Jaye",
        movie: "Kalyug",
        artist: "Rahat Fateh Ali Khan",
        file: "audio/jiya-dhadak-dhadak-jaye.mp3"
    },

    {
        title: "Tera Mera Rishta",
        movie: "Awarapan",
        artist: "Mustafa Zahid",
        file: "audio/tera-mera-rishta.mp3"
    },

    {
        title: "Toh Phir Aao",
        movie: "Awarapan",
        artist: "Mustafa Zahid",
        file: "audio/toh-phir-aao.mp3"
    },

    {
        title: "Maahi",
        movie: "Raaz: The Mystery Continues",
        artist: "Toshi Sabri",
        file: "audio/maahi.mp3"
    },

    {
        title: "Abhi Kuch Dino Se",
        movie: "Dil Toh Baccha Hai Ji",
        artist: "Mohit Chauhan",
        file: "audio/abhi-kuch-dino-se.mp3"
    },

    {
        title: "Tera Deedar Hua",
        movie: "Jannat 2",
        artist: "Rahat Fateh Ali Khan",
        file: "audio/tera-deedar-hua.mp3"
    },

    {
        title: "Soniye",
        movie: "Aksar",
        artist: "Kunal Ganjawala",
        file: "audio/soniye.mp3"
    },

    {
        title: "Aashiq Banaya Aapne",
        movie: "Aashiq Banaya Aapne",
        artist: "Himesh Reshammiya",
        file: "audio/aashiq-banaya-aapne.mp3"
    },

    {
        title: "Aap Ki Kashish",
        movie: "Aashiq Banaya Aapne",
        artist: "Himesh Reshammiya",
        file: "audio/aap-ki-kashish.mp3"
    },

    {
        title: "Rafta Rafta",
        movie: "Namastey London",
        artist: "Rahat Fateh Ali Khan",
        file: "audio/rafta-rafta.mp3"
    },

    {
        title: "Jo Bheji Thi Duaa",
        movie: "Shanghai",
        artist: "Arijit Singh, Nandini Srikar",
        file: "audio/jo-bheji-thi-duaa.mp3"
    },

    {
        title: "Bol Do Na Zara",
        movie: "Azhar",
        artist: "Armaan Malik",
        file: "audio/bol-do-na-zara.mp3"
    }

];


const himeshSongs = [

    {
        title: "Aashiq Banaya Aapne",
        movie: "Aashiq Banaya Aapne",
        artist: "Himesh Reshammiya",
        file: "audio/aashiq-banaya-aapne.mp3"
    },

    {
        title: "Aap Ki Kashish",
        movie: "Aashiq Banaya Aapne",
        artist: "Himesh Reshammiya",
        file: "audio/aap-ki-kashish.mp3"
    },

    {
        title: "Jhalak Dikhla Ja",
        movie: "Aksar",
        artist: "Himesh Reshammiya",
        file: "audio/jhalak-dikhla-ja.mp3"
    },

    {
        title: "Tera Surroor",
        movie: "Aap Kaa Surroor",
        artist: "Himesh Reshammiya",
        file: "audio/tera-surroor.mp3"
    },

    {
        title: "Tera Mera Milna",
        movie: "Aap Kaa Surroor",
        artist: "Himesh Reshammiya",
        file: "audio/tera-mera-milna.mp3"
    },

    {
        title: "Mujhko Yaad Sataye Teri",
        movie: "Phir Hera Pheri",
        artist: "Himesh Reshammiya",
        file: "audio/mujhko-yaad-sataye-teri.mp3"
    },

    {
        title: "Ae Meri Zohrajabeen",
        movie: "Phir Hera Pheri",
        artist: "Himesh Reshammiya",
        file: "audio/ae-meri-zohrajabeen.mp3"
    },

    {
        title: "Aashiqui Mein Teri",
        movie: "36 China Town",
        artist: "Himesh Reshammiya",
        file: "audio/aashiqui-mein-teri.mp3"
    },

    {
        title: "Hookah Bar",
        movie: "Khiladi 786",
        artist: "Himesh Reshammiya",
        file: "audio/hookah-bar.mp3"
    },

    {
        title: "Chalao Na Naino Se",
        movie: "Bol Bachchan",
        artist: "Himesh Reshammiya, Shreya Ghoshal",
        file: "audio/chalao-na-naino-se.mp3"
    },

    {
        title: "Main Jahaan Rahoon",
        movie: "Namastey London",
        artist: "Rahat Fateh Ali Khan",
        file: "audio/main-jahaan-rahoon.mp3"
    },

    {
        title: "Chakna Chakna",
        movie: "Namastey London",
        artist: "Himesh Reshammiya",
        file: "audio/chakna-chakna.mp3"
    },

    {
        title: "Tandoori Nights",
        movie: "Karzzzz",
        artist: "Himesh Reshammiya",
        file: "audio/tandoori-nights.mp3"
    },

    {
        title: "Zara Jhoom Jhoom",
        movie: "Tom Dick And Harry",
        artist: "Himesh Reshammiya",
        file: "audio/zara-jhoom-jhoom.mp3"
    },

    {
        title: "Teri Chunnariya",
        movie: "Hello Brother",
        artist: "Himesh Reshammiya",
        file: "audio/teri-chunnariya.mp3"
    },

    {
        title: "Mujhse Shaadi Karogi",
        movie: "Mujhse Shaadi Karogi",
        artist: "Himesh Reshammiya",
        file: "audio/mujhse-shaadi-karogi.mp3"
    },

    {
        title: "Meri Aawargi",
        movie: "Good Boy Bad Boy",
        artist: "Himesh Reshammiya",
        file: "audio/meri-aawargi.mp3"
    },

    {
        title: "Sanam Teri Kasam",
        movie: "Sanam Teri Kasam",
        artist: "Himesh Reshammiya",
        file: "audio/sanam-teri-kasam.mp3"
    },

    {
        title: "Tera Chehra",
        movie: "Sanam Teri Kasam",
        artist: "Himesh Reshammiya",
        file: "audio/tera-chehra.mp3"
    },

    {
        title: "Naiyo Lagda",
        movie: "Kisi Ka Bhai Kisi Ki Jaan",
        artist: "Himesh Reshammiya",
        file: "audio/naiyo-lagda.mp3"
    },

    {
        title: "Kangan Ruby",
        movie: "Raksha Bandhan",
        artist: "Himesh Reshammiya",
        file: "audio/kangan-ruby.mp3"
    },

    {
        title: "Tuk Tuk",
        movie: "Love You Zindagi",
        artist: "Himesh Reshammiya",
        file: "audio/tuk-tuk.mp3"
    },

    {
        title: "Heer Tu Meri",
        movie: "Happy Hardy and Heer",
        artist: "Himesh Reshammiya",
        file: "audio/heer-tu-meri.mp3"
    },

    {
        title: "Teri Yaad",
        movie: "Teraa Surroor",
        artist: "Himesh Reshammiya",
        file: "audio/teri-yaad.mp3"
    },

    {
        title: "Jhalak Dikhla Ja Reloaded",
        movie: "The Body",
        artist: "Himesh Reshammiya",
        file: "audio/jhalak-dikhla-ja-reloaded.mp3"
    }

];


/* =====================================================
   PLAYER STATE
===================================================== */

const audio = document.getElementById("audioPlayer");

let currentPlaylist = emraanSongs;

let currentIndex = 0;

let isShuffle = false;

let isRepeat = false;


/* =====================================================
   DOM ELEMENTS
===================================================== */

const playButton =
    document.getElementById("playButton");

const previousButton =
    document.getElementById("previousButton");

const nextButton =
    document.getElementById("nextButton");

const shuffleButton =
    document.getElementById("shuffleButton");

const repeatButton =
    document.getElementById("repeatButton");

const volumeSlider =
    document.getElementById("volumeSlider");

const progressTrack =
    document.getElementById("progressTrack");

const progressFill =
    document.getElementById("progressFill");

const currentTimeElement =
    document.getElementById("currentTime");

const durationElement =
    document.getElementById("duration");

const titleElement =
    document.getElementById("currentTitle");

const artistElement =
    document.getElementById("currentArtist");

const musicPlayer =
    document.getElementById("musicPlayer");

const searchInput =
    document.getElementById("searchInput");


/* =====================================================
   INITIAL VOLUME
===================================================== */

audio.volume = 0.8;


/* =====================================================
   FORMAT TIME
===================================================== */

function formatTime(seconds) {

    if (!Number.isFinite(seconds)) {
        return "0:00";
    }

    const minutes =
        Math.floor(seconds / 60);

    const remainingSeconds =
        Math.floor(seconds % 60);

    return (
        minutes +
        ":" +
        String(remainingSeconds).padStart(2, "0")
    );

}


/* =====================================================
   RENDER PLAYLIST
===================================================== */

function renderPlaylist(
    playlist,
    containerId,
    countId
) {

    const container =
        document.getElementById(containerId);

    const count =
        document.getElementById(countId);

    container.innerHTML = "";

    count.textContent =
        `${playlist.length} tracks`;


    playlist.forEach((song, index) => {

        const row =
            document.createElement("div");

        row.className =
            "song";

        row.dataset.search =
            `${song.title} ${song.movie} ${song.artist}`
                .toLowerCase();


        row.innerHTML = `

            <div class="song-number">
                ${String(index + 1).padStart(2, "0")}
            </div>

            <div class="song-info">

                <h4>
                    ${song.title}
                </h4>

                <p>
                    ${song.movie} • ${song.artist}
                </p>

            </div>

            <div class="song-actions">

                <div class="equalizer">
                    <span></span>
                    <span></span>
                    <span></span>
                    <span></span>
                </div>

                <button
                    class="song-play"
                    title="Play"
                >
                    ▶
                </button>

            </div>
        `;


        const button =
            row.querySelector(".song-play");


        button.addEventListener(
            "click",
            () => {

                currentPlaylist =
                    playlist;

                currentIndex =
                    index;

                loadSong(
                    currentPlaylist[currentIndex],
                    true
                );

            }
        );


        row.addEventListener(
            "dblclick",
            () => {

                currentPlaylist =
                    playlist;

                currentIndex =
                    index;

                loadSong(
                    currentPlaylist[currentIndex],
                    true
                );

            }
        );


        container.appendChild(row);

    });

}


/* =====================================================
   INITIAL RENDER
===================================================== */

renderPlaylist(
    emraanSongs,
    "emraanSongs",
    "emraanCount"
);

renderPlaylist(
    himeshSongs,
    "himeshSongs",
    "himeshCount"
);


/* =====================================================
   LOAD SONG
===================================================== */

function loadSong(
    song,
    autoPlay = false
) {

    if (!song) {
        return;
    }


    titleElement.textContent =
        song.title;

    artistElement.textContent =
        `${song.artist} • ${song.movie}`;


    audio.src =
        song.file;


    audio.load();


    updateActiveSong();


    if (autoPlay) {

        const playPromise =
            audio.play();


        if (playPromise !== undefined) {

            playPromise
                .then(() => {

                    updatePlayButton();

                })
                .catch(error => {

                    console.error(
                        "Audio playback error:",
                        error
                    );

                    alert(
                        "The audio file could not be played. Check that the MP3 exists inside the audio folder."
                    );

                });

        }

    }

}


/* =====================================================
   PLAY CURRENT SONG
===================================================== */

function playCurrentSong() {

    if (!audio.src) {

        loadSong(
            currentPlaylist[currentIndex],
            true
        );

        return;
    }


    if (audio.paused) {

        audio.play();

    } else {

        audio.pause();

    }

}


/* =====================================================
   PLAY / PAUSE BUTTON
===================================================== */

playButton.addEventListener(
    "click",
    playCurrentSong
);


/* =====================================================
   AUDIO PLAY EVENT
===================================================== */

audio.addEventListener(
    "play",
    () => {

        updatePlayButton();

        musicPlayer.classList.add(
            "playing"
        );

        updateActiveSong();

    }
);


/* =====================================================
   AUDIO PAUSE EVENT
===================================================== */

audio.addEventListener(
    "pause",
    () => {

        updatePlayButton();

        musicPlayer.classList.remove(
            "playing"
        );

    }
);


/* =====================================================
   UPDATE PLAY BUTTON
===================================================== */

function updatePlayButton() {

    if (audio.paused) {

        playButton.textContent =
            "▶";

    } else {

        playButton.textContent =
            "Ⅱ";

    }

}


/* =====================================================
   PREVIOUS
===================================================== */

previousButton.addEventListener(
    "click",
    () => {

        if (
            audio.currentTime > 3
        ) {

            audio.currentTime = 0;

            return;

        }


        currentIndex--;

        if (currentIndex < 0) {

            currentIndex =
                currentPlaylist.length - 1;

        }


        loadSong(
            currentPlaylist[currentIndex],
            true
        );

    }
);


/* =====================================================
   NEXT
===================================================== */

nextButton.addEventListener(
    "click",
    () => {

        playNextSong();

    }
);


/* =====================================================
   NEXT SONG FUNCTION
===================================================== */

function playNextSong() {

    if (isShuffle) {

        let nextIndex;

        do {

            nextIndex =
                Math.floor(
                    Math.random() *
                    currentPlaylist.length
                );

        } while (
            currentPlaylist.length > 1 &&
            nextIndex === currentIndex
        );

        currentIndex =
            nextIndex;

    } else {

        currentIndex++;

        if (
            currentIndex >=
            currentPlaylist.length
        ) {

            currentIndex = 0;

        }

    }


    loadSong(
        currentPlaylist[currentIndex],
        true
    );

}


/* =====================================================
   AUDIO ENDED
===================================================== */

audio.addEventListener(
    "ended",
    () => {

        if (isRepeat) {

            audio.currentTime = 0;

            audio.play();

            return;

        }


        playNextSong();

    }
);


/* =====================================================
   PROGRESS
===================================================== */

audio.addEventListener(
    "timeupdate",
    () => {

        if (!audio.duration) {
            return;
        }


        const percentage =
            (
                audio.currentTime /
                audio.duration
            ) * 100;


        progressFill.style.width =
            `${percentage}%`;


        currentTimeElement.textContent =
            formatTime(
                audio.currentTime
            );

    }
);


/* =====================================================
   DURATION
===================================================== */

audio.addEventListener(
    "loadedmetadata",
    () => {

        durationElement.textContent =
            formatTime(
                audio.duration
            );

    }
);


/* =====================================================
   CLICK PROGRESS BAR
===================================================== */

progressTrack.addEventListener(
    "click",
    event => {

        if (!audio.duration) {
            return;
        }


        const rectangle =
            progressTrack.getBoundingClientRect();


        const clickPosition =
            event.clientX -
            rectangle.left;


        const percentage =
            clickPosition /
            rectangle.width;


        audio.currentTime =
            percentage *
            audio.duration;

    }
);


/* =====================================================
   VOLUME
===================================================== */

volumeSlider.addEventListener(
    "input",
    () => {

        audio.volume =
            Number(
                volumeSlider.value
            );

    }
);


/* =====================================================
   SHUFFLE
===================================================== */

shuffleButton.addEventListener(
    "click",
    () => {

        isShuffle =
            !isShuffle;

        shuffleButton.classList.toggle(
            "active",
            isShuffle
        );

    }
);


/* =====================================================
   REPEAT
===================================================== */

repeatButton.addEventListener(
    "click",
    () => {

        isRepeat =
            !isRepeat;

        repeatButton.classList.toggle(
            "active",
            isRepeat
        );

    }
);


/* =====================================================
   ACTIVE SONG UI
===================================================== */

function updateActiveSong() {

    document.querySelectorAll(
        ".song"
    ).forEach(
        row => row.classList.remove(
            "active"
        )
    );


    const activeContainer =
        currentPlaylist === emraanSongs
            ? document.getElementById(
                "emraanSongs"
            )
            : document.getElementById(
                "himeshSongs"
            );


    const rows =
        activeContainer.querySelectorAll(
            ".song"
        );


    if (rows[currentIndex]) {

        rows[currentIndex]
            .classList.add("active");

    }

}


/* =====================================================
   SWITCH PLAYLIST
===================================================== */

function switchPlaylist(type) {

    const emraanPlaylist =
        document.getElementById(
            "emraanPlaylist"
        );

    const himeshPlaylist =
        document.getElementById(
            "himeshPlaylist"
        );

    const emraanTab =
        document.getElementById(
            "emraanTab"
        );

    const himeshTab =
        document.getElementById(
            "himeshTab"
        );


    if (type === "emraan") {

        currentPlaylist =
            emraanSongs;

        currentIndex =
            0;

        emraanPlaylist
            .classList.remove("hidden");

        himeshPlaylist
            .classList.add("hidden");

        emraanTab
            .classList.add("active");

        himeshTab
            .classList.remove("active");

    } else {

        currentPlaylist =
            himeshSongs;

        currentIndex =
            0;

        emraanPlaylist
            .classList.add("hidden");

        himeshPlaylist
            .classList.remove("hidden");

        emraanTab
            .classList.remove("active");

        himeshTab
            .classList.add("active");

    }


    searchInput.value = "";

    filterSongs();

}


/* =====================================================
   SEARCH
===================================================== */

searchInput.addEventListener(
    "input",
    filterSongs
);


function filterSongs() {

    const query =
        searchInput.value
            .toLowerCase()
            .trim();


    document.querySelectorAll(
        ".song"
    ).forEach(
        song => {

            const searchableText =
                song.dataset.search;


            if (
                searchableText.includes(
                    query
                )
            ) {

                song.style.display =
                    "grid";

            } else {

                song.style.display =
                    "none";

            }

        }
    );

}


/* =====================================================
   LOCAL AUDIO UPLOAD
===================================================== */

const audioUpload =
    document.getElementById(
        "audioUpload"
    );


audioUpload.addEventListener(
    "change",
    event => {

        const files =
            Array.from(
                event.target.files
            );


        if (!files.length) {
            return;
        }


        files.forEach(
            file => {

                const objectURL =
                    URL.createObjectURL(
                        file
                    );


                const song = {

                    title:
                        file.name
                            .replace(
                                /\.[^/.]+$/,
                                ""
                            )
                            .replace(
                                /[-_]/g,
                                " "
                            ),

                    movie:
                        "Local Audio",

                    artist:
                        "Your Audio",

                    file:
                        objectURL

                };


                currentPlaylist.push(
                    song
                );

            }
        );


        if (
            currentPlaylist ===
            emraanSongs
        ) {

            renderPlaylist(
                emraanSongs,
                "emraanSongs",
                "emraanCount"
            );

        } else {

            renderPlaylist(
                himeshSongs,
                "himeshSongs",
                "himeshCount"
            );

        }


        alert(
            `${files.length} audio file(s) added successfully.`
        );

    }
);


/* =====================================================
   KEYBOARD CONTROLS
===================================================== */

document.addEventListener(
    "keydown",
    event => {

        if (
            event.target.tagName ===
            "INPUT"
        ) {
            return;
        }


        if (
            event.code ===
            "Space"
        ) {

            event.preventDefault();

            playCurrentSong();

        }


        if (
            event.code ===
            "ArrowRight"
        ) {

            playNextSong();

        }


        if (
            event.code ===
            "ArrowLeft"
        ) {

            currentIndex--;

            if (currentIndex < 0) {

                currentIndex =
                    currentPlaylist.length - 1;

            }

            loadSong(
                currentPlaylist[currentIndex],
                true
            );

        }

    }
);


/* =====================================================
   START WITH FIRST SONG LOADED
   BUT DON'T AUTOPLAY
===================================================== */

loadSong(
    currentPlaylist[0],
    false
);