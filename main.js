// variable assignment document
const $ = document.querySelector.bind(document);
const $$ = document.querySelectorAll.bind(document);

const PLAYER_STOGARE_KEY = "URIC";

/** Các chức năng:
 * A1 - Render playlist ra màn hình
 * A2 - CD rotate
 * A3 - Ấn để ra playlist
 * A4 - Play,pause,seek + chỉnh âm lượng
 * A5 - Next, previous
 * A6 - Random song
 * A7 - Next or Repeat when ended
 * A8 - Active song trong playlist
 * A9 - Scroll active song lên view
 * A10 - Play song khi click
 */

/* ========== SELECT DOM ELEMENT ========== */
const appMusic = $(".app-music");

const btnShowPlaylist = $(".btn-playlist-show");
const btnHidePlaylist = $(".btn-playlist-hide");
const btnTogglePlaylist = $(".btn-toggle-playlist");

const musicDashboard = $(".music__dashboard");

const cdThumb = $(".cd__thumb");

const titleSongName = $(".title h1");
const titleSongArtist = $(".title h3");

const audio = $("#audio");

const btnControl = $(".ctrl__btn");
const btnPlay = $(".ctrl__btn-tonggle--item");
const btnNext = $(".ctrl__btn--next");
const btnPrev = $(".ctrl__btn--prev");
const btnRandom = $(".ctrl__btn--random");
const btnRepeat = $(".ctrl__btn--repeat");

const progressBar = $(".ctrl__progress--value");

const timeCurrent = $(".ctrl__progress-time--current");
const timeDuration = $(".ctrl__progress-time--duration");

const volumeBar = $(".ctrl__volume--value");
const volumeUp = $(".volume__icon");
const volumeMute = $(".mute");

const playlist = $(".music__playlist");
const playlistBtn = $(".song__thumb");

let theVolume = 100;

/* ========== DEFINE APP ========== */
const app = {
    songs: [{
            name: 'My heart stupid (Kid Version)',
            singer: 'Walk of Earth',
            path: './music/My Stupid Heart.mp3',
            image: './image/heart.jpg'

        },
        {
            name: 'Bản Tình Ca Đầu Tiên',
            singer: 'Anh Tú',
            path: './music/btcdt.mp3',
            image: './image/btcdt.jpg'

        },
        {
            name: 'Chàng Trai Của Em',
            singer: 'Duy Văn Phạm',
            path: './music/ctce.mp3',
            image: './image/ctce.jpg'

        },
        {
            name: 'Ngày đầu tiên',
            singer: 'Đức Phúc',
            path: './music/ndt.mp3',
            image: './image/ndt.jpg'

        },
        {
            name: 'Tình Yêu Lạ Kỳ',
            singer: 'LyLy & Anh Tú',
            path: './music/tylk.mp3',
            image: './image/tylk.jpg'

        },
        {
            name: 'Đơn Giản Anh Yêu Em',
            singer: 'Hồ Quốc Việt',
            path: './music/dgaye.mp3',
            image: './image/dgaye.jpg'

        },
        {
            name: 'Ngôi nhà hoa hồng',
            singer: 'Ngô Kiến Huy if Hoà Minzy',
            path: './music/nhhh.mp3',
            image: './image/nhhh.jpg'

        },
        {
            name: 'Yêu em hơn mỗi ngày',
            singer: 'Andiez',
            path: './music/yehmn.mp3',
            image: './image/yehmn.jpg'

        },
        {
            name: 'Lỡ như anh yêu em',
            singer: 'Chi Dân',
            path: './music/lnaye.mp3',
            image: './image/lnaye.jpg'

        },
        {
            name: 'Bay Giữa Ngân Hà',
            singer: 'Anh Tú',
            path: './music/bgnh.mp3',
            image: './image/bgnh.jpg'

        },
        {
            name: 'Em ơi! Em đừng khóc',
            singer: 'Cao Thành Nam',
            path: './music/eoedk.mp3',
            image: './image/eoedk.jpg'

        },
        {
            name: 'Như anh đã thấy em (lofi)',
            singer: 'PhucXp ft. Freak D',
            path: './music/Nhu anh da thay em.mp3',
            image: './image/nadte.jpg'

        },
        {
            name: 'Chờ Đợi Có Đáng Sợ (Lofi Ver.)',
            singer: 'Andiez x Freak D',
            path: './music/cdcds.mp3',
            image: './image/cdcds.jpg'

        },
        {
            name: 'Phía Sau Em (Solo Ver)',
            singer: 'Kay Trần',
            path: './music/pse.mp3',
            image: './image/pse.jpg'

        },
        {
            name: 'Ngày không có em',
            singer: 'Đặng Vĩnh Thinh',
            path: './music/nkce.mp3',
            image: './image/nkce.jpg'

        },
        {
            name: 'Ánh Sao Và Bầu Trời',
            singer: 'T.R.I x Cá',
            path: './music/asvbt.mp3',
            image: './image/asvbt.jpg'

        },
        {
            name: 'Người như anh',
            singer: 'Mai Tiến Dũng x Quanvrox',
            path: './music/nna.mp3',
            image: './image/nna.png'

        },
        {
            name: 'Yêu người có ước mơ',
            singer: 'buitruonglinh',
            path: './music/yncum.mp3',
            image: './image/yncum.jpg'

        },
        {
            name: 'Lời tạm biệt chưa nói',
            singer: 'GREY D & ORANGE, Kai Đinh',
            path: './music/ltbcn.mp3',
            image: './image/ltbcn.jpg'

        },
        {
            name: 'Rồi ta sẽ ngắm pháo hoa cùng nhau',
            singer: 'O.lew',
            path: './music/rtsnph.mp3',
            image: './image/rtsnph.jpg'

        },
        {
            name: 'Người đáng thương là anh',
            singer: 'ONLY C',
            path: './music/ndtla.mp3',
            image: './image/ndtla.jpg'

        },
        {
            name: 'Tình yêu ngủ quên',
            singer: 'Hoàng Tôn ft. LyHan',
            path: './music/tynq.mp3',
            image: './image/tynq.jpg'

        },
        {
            name: 'Người em cố đô',
            singer: 'Rum x Đaa x Toann',
            path: './music/necd.mp3',
            image: './image/necd.jpg'

        },
        {
            name: 'Là bạn không thể yêu',
            singer: 'Lou Hoàng',
            path: './music/lbkty.mp3',
            image: './image/lbkty.jpg'

        },
        {
            name: 'Đừng Khóc Một Mình (Acoustic Cover)',
            singer: 'Quang Hùng - Huy Vạc',
            path: './music/dkmm.mp3',
            image: './image/dkmm.jpg'

        },
        {
            name: 'Chỉ muốn bên em lúc này',
            singer: 'JIKI X ft HUY VẠC',
            path: './music/cmbeln.mp3',
            image: './image/cmbeln.jpg'

        },
        {
            name: 'Chỉ Vì Quá Yêu Em',
            singer: 'Huy Vạc - Tiến Nguyễn',
            path: './music/ltbcn.mp3',
            image: './image/ltbcn.jpg'

        },
        {
            name: 'Chỉ là muốn nói (300)',
            singer: 'Khải',
            path: './music/clmn.mp3',
            image: './image/clmn.jpg'

        },
        {
            name: 'Đau để trưởng thành',
            singer: 'ONLY C',
            path: './music/ddtt.mp3',
            image: './image/ddtt.jpg'

        },
        {
            name: 'Yêu là tha thu',
            singer: 'ONLY C',
            path: './music/yltt.mp3',
            image: './image/yltt.jpg'

        },
        {
            name: 'Vỡ Tan',
            singer: 'Trịnh Thanh Bình',
            path: './music/vt.mp3',
            image: './image/vt.jpg'

        },
        {
            name: 'Gió vẫn hát',
            singer: 'Long Phạm',
            path: './music/gvh.mp3',
            image: './image/gvh.jpg'

        },
        {
            name: 'Bước qua nhau',
            singer: 'Vũ.',
            path: './music/bqn.mp3',
            image: './image/bqn.jpg'

        },
        {
            name: 'Mình xa mình yêu',
            singer: 'JUUN D',
            path: './music/mxmy.mp3',
            image: './image/mxmy.jpg'

        },
        {
            name: 'Giá Như Em Nhìn Lại',
            singer: 'JSOL x VIRUSS',
            path: './music/gnenl.mp3',
            image: './image/gnenl.jpg'

        },
        {
            name: 'Dạ Vũ',
            singer: 'Tăng Duy Tân',
            path: './music/dv.mp3',
            image: './image/dv.jpg'

        },
        {
            name: 'Suýt nữa thì',
            singer: 'Andiez',
            path: './music/snt.mp3',
            image: './image/snt.jpg'

        },
        {
            name: 'Tệ thật Anh nhớ Em',
            singer: 'Thanh Hưng x Freak D',
            path: './music/ttane.mp3',
            image: './image/ttane.jpg'

        },
        {
            name: 'Yêu thương ngày đó',
            singer: 'Soobin Hoàng Sơn',
            path: './music/ytnd.mp3',
            image: './image/ytnd.jpg'

        },
        {
            name: 'Nói đi là đi',
            singer: 'Tăng Phúc',
            path: './music/ndld.mp3',
            image: './image/ndld.jpg'

        },
        {
            name: 'Âm thầm bên em',
            singer: 'Sơn Tùng MTP',
            path: './music/atbe.mp3',
            image: './image/atbe.jpg'

        },
        {
            name: 'Ôm em lần cuối',
            singer: 'Nit ft. Sing',
            path: './music/oelc.mp3',
            image: './image/oelc.jpg'

        },
        {
            name: 'Ôm trọn nỗi nhớ',
            singer: 'Rum',
            path: './music/otnn.mp3',
            image: './image/otnn.jpg'

        },
        {
            name: 'Anh thề đấy',
            singer: 'Thanh Hưng',
            path: './music/atd.mp3',
            image: './image/atd.jpg'

        },
        {
            name: 'Trò đùa',
            singer: 'Quang Đăng Trần',
            path: './music/td.mp3',
            image: './image/td.jpg'

        },
        {
            name: 'Supper Idol',
            singer: 'Nguyen Anh Vu x KProx',
            path: './music/si.mp3',
            image: './image/si.jpg'

        },
        {
            name: 'You are my crush',
            singer: 'Quân A.P',
            path: './music/yamcr.mp3',
            image: './image/yamcr.jpg'

        },
        {
            name: 'Tình yêu diệu kỳ',
            singer: 'Bùi Công Nam',
            path: './music/tydk.mp3',
            image: './image/tydk.jpg'

        }
    ],

    /* ========== Các biến trong app ========== */
    currentIndex: 0,
    isPlaying: false,
    isRandom: false,
    isRepeat: false,

    config: JSON.parse(localStorage.getItem(PLAYER_STOGARE_KEY)) || {},
    setConfig: function(key, value) {
        this.config[key] = value;
        localStorage.setItem(PLAYER_STOGARE_KEY, JSON.stringify(this.config));
    },

    /* ========== Định nghĩa Object ========== */
    defineProperties: function() {
        Object.defineProperty(this, "currentSong", {
            // trả về bài hát theo chỉ mục của currentIndex
            get: function() {
                return this.songs[this.currentIndex];
            },
        });
    },

    // A1 - Render playlist ra màn hình
    render: function() {
        const htmls = this.songs.map((song, index) => {
            return `      
            <div class="playlist__song ${
              index === this.currentIndex ? "active" : ""
            }" data-index="${index}">
                <div class="song__thumb" style="background-image: url('${
                  song.image
                }')">
                </div>
    
                <div class="song__content">
                    <h3 class="song__title">${song.name}</h3>
                    <p class="song__author">${song.singer}</p>
                </div>
                <div class="option">
                    <i class="fa fa-music"></i>
                </div>
            </div>
                `;
        });

        playlist.innerHTML = htmls.join("");
    },

    // Hàm xử lý các sự kiện
    handleEvents: function() {
        const _this = this; // this = app

        // A2 - CD rotate
        const cdThumAnimation = cdThumb.animate([{ transform: "rotate(360deg)" }], {
            duration: 10000, // 10s
            iterations: Infinity,
        });
        cdThumAnimation.pause();

        // A3 - Sự kiện click để hiện danh sách bài hát
        btnShowPlaylist.addEventListener("click", () => {
            playlist.classList.toggle("active");
            playlist.classList.remove("non-active");
            musicDashboard.classList.toggle("non-active");

            btnShowPlaylist.classList.add("hide");
            btnHidePlaylist.classList.add("show");
            btnHidePlaylist.classList.remove("hide");
        });

        // A3 - Sự kiện click để ẩn danh sách bài hát
        btnHidePlaylist.addEventListener("click", () => {
            playlist.classList.toggle("active");
            playlist.classList.add("non-active");
            musicDashboard.classList.toggle("non-active");

            btnHidePlaylist.classList.add("hide");
            btnShowPlaylist.classList.add("show");
            btnShowPlaylist.classList.remove("hide");
        });

        //A4 - Play / pause / seek / xử lý âm lượng
        btnPlay.addEventListener("click", () => {
            if (_this.isPlaying) {
                audio.pause();
            } else {
                audio.play();
            }
        });

        // Xử lý khi play
        audio.onplay = () => {
            _this.isPlaying = true;
            btnControl.classList.add("playing");
            cdThumAnimation.play();
        };

        // Xử lý khi pause
        audio.onpause = () => {
            _this.isPlaying = false;
            btnControl.classList.remove("playing");
            cdThumAnimation.pause();
        };

        // Theo dõi tiến độ bài hát
        audio.addEventListener("timeupdate", function() {
            // method duration trả về độ dài của audio/video
            const audioDuration = audio.duration;
            //   console.log(audio.duration);
            //
            if (!isNaN(audioDuration)) {
                // audio.currentTime trả về thời gian đang chạy của audio/video
                const progressPercent = (audio.currentTime / audio.duration) * 100; // Tính phần trăm chạy của bài hát

                // gán phần trăm bài hát vào thanh progress
                progressBar.value = progressPercent;
            }
            /* ========== Hiển thị thời gian hiện tại của bài hát ========== */
            // Trả về số phút hiện tại của audio/video
            let currentMinutes = Math.floor(audio.currentTime / 60);
            // Trả về số giây hiện tại của audio/video
            let currentSeconds = Math.floor(audio.currentTime - currentMinutes * 60);

            if (currentMinutes < 10) {
                currentMinutes = `0${currentMinutes}`;
            }

            if (currentSeconds < 10) {
                currentSeconds = `0${currentSeconds}`;
            }

            timeCurrent.innerText = `${currentMinutes}:${currentSeconds}`;
        });

        /* ========== Hiển thị thời gian bài hát ========== */
        audio.addEventListener("loadedmetadata", function() {
            // Trả về số phút của audio/video
            let durationMinutes = Math.floor(audio.duration / 60);
            // Trả về số giây của audio/video
            let durationSeconds = Math.floor(audio.duration - durationMinutes * 60);

            if (durationMinutes < 10) {
                durationMinutes = `0${durationMinutes}`;
            }

            if (durationSeconds < 10) {
                durationSeconds = `0${durationSeconds}`;
            }

            timeDuration.innerText = `${durationMinutes}:${durationSeconds}`;
        });

        // Xử lý khi tua bài hát
        progressBar.oninput = (e) => {
            const seekTime = (audio.duration / 100) * e.target.value;
            audio.currentTime = seekTime;
            // console.log(e.target.value)
        };

        // Xử lý âm lượng
        volumeBar.oninput = function(e) {
            console.log(volumeBar);
            theVolume = e.target.value / 100;
            audio.volume = theVolume;
            if (theVolume === 0) {
                volumeUp.classList.add("over__block");
                volumeMute.classList.remove("over__block");
            } else {
                volumeUp.classList.remove("over__block");
                volumeMute.classList.add("over__block");
            }
        };

        // Xử lý khi ấn btn volumeUp
        volumeUp.onclick = function() {
            volumeUp.classList.add("over__block");
            volumeMute.classList.remove("over__block");
            audio.volume = 0;
            volumeBar.value = 0;
        };

        // Xử lý khi ấn btn volumeMute
        volumeMute.onclick = function() {
            volumeUp.classList.remove("over__block");
            volumeMute.classList.add("over__block");
            audio.volume = 1;
            volumeBar.value = 100;
        };

        // Xử lý khi next song
        btnNext.onclick = function() {
            if (_this.isRandom) {
                _this.playRandomSong();
            } else {
                _this.nextSong();
            }

            audio.play();
            _this.render();
            _this.scrollToActiveSong();
            // _this.playRandomSong();
        };

        // Xử lý khi prev song
        btnPrev.onclick = function() {
            if (_this.isRandom) {
                _this.playRandomSong();
            } else {
                _this.prevSong();
            }

            audio.play();
            _this.scrollToActiveSong();
        };

        // Xử lý khi random song
        btnRandom.onclick = function() {
            _this.isRandom = !_this.isRandom;
            _this.setConfig("isRandom", _this.isRandom);
            btnRandom.classList.toggle("active", _this.isRandom);
        };

        // Xử lý khi repeat song
        btnRepeat.onclick = function() {
            _this.isRepeat = !_this.isRepeat;
            _this.setConfig("isRepeat", _this.isRepeat);
            btnRepeat.classList.toggle("active", _this.isRepeat);
        };

        // Xử lý khi bài hát kết thúc
        audio.onended = function() {
            if (_this.isRepeat) {
                audio.play();
            } else {
                btnNext.click();
            }
        };

        // Lắng nghe hành vi click vào playlist
        playlist.addEventListener("click", function(e) {
            const songNode = e.target.closest(".playlist__song:not(.active)");
            if (songNode || e.target.closest(".option")) {
                if (songNode) {
                    _this.currentIndex = Number(songNode.dataset.index);
                    _this.loadCurrentSong();
                    audio.play();
                    _this.render();
                }

                // Xử lý khi ấn vào option
            }
        });
    },

    // Xử lý active bài hat
    scrollToActiveSong: function() {
        setTimeout(function() {
            if (this.currentIndex === 0) {
                $(".playlist__song.active").scrollIntoView({
                    behavior: "smooth",
                    block: "end",
                });
            } else {
                $(".playlist__song.active").scrollIntoView({
                    behavior: "smooth",
                    block: "center",
                });
            }
        }, 100);
    },

    loadConfig: function() {
        this.isRandom = this.config.isRandom;
        this.isRepeat = this.config.isRepeat;
    },

    // Hiển thị bài hát đầu tiên trên player
    loadCurrentSong: function() {
        // Hiển thị tên bài hát trên player
        titleSongName.innerText = this.currentSong.name;
        // Hiển thị tên ca sĩ trên player
        titleSongArtist.innerText = this.currentSong.singer;
        // Hiển thị tên ảnh bài hát trên player
        cdThumb.style.backgroundImage = `url('${this.currentSong.image}')`;
        // Trả về đường dẫn của bài hát
        audio.setAttribute("src", `${this.currentSong.path}`);
    },
    // xử lý khi next song
    nextSong: function() {
        this.currentIndex++;
        if (this.currentIndex >= this.songs.length) {
            this.currentIndex = 0;
        }
        this.loadCurrentSong();
    },

    // Xử lý khi prev song
    prevSong: function() {
        this.currentIndex--;
        if (this.currentIndex < 0) {
            this.currentIndex = this.songs.length - 1;
        }
        this.loadCurrentSong();
    },

    // Xử lý khi random song
    playRandomSong: function() {
        let newIndex;
        do {
            newIndex = Math.floor(Math.random() * this.songs.length);
        } while (newIndex === this.currentIndex);
        this.currentIndex = newIndex;
        this.loadCurrentSong();
    },

    // Chạy app
    start: function() {
        this.loadConfig();
        // render playlist ra màn hình
        this.render();
        // Sử lý các sự kiện
        this.handleEvents();
        // Định nghĩa object gán chỉ mục
        this.defineProperties();
        // Hiển thị bài đầu tiên khi chạy app
        this.loadCurrentSong();
        //Hiển thị trạng thái ban đầu của btn random / repeat
        btnRandom.classList.toggle("active", app.isRandom);
        btnRepeat.classList.toggle("active", app.isRepeat);
    },
};

app.start();
