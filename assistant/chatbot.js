// Fungsi Menjawab Pertanyaan
function jawabPertanyaan() {
    const inputField = document.getElementById('user-input');
    const chatBox = document.getElementById('chat-messages');
    const pertanyaan = inputField.value.trim();
    const pertanyaanLower = pertanyaan.toLowerCase();

    if (pertanyaan === '') {
        return;
    }

    let jawaban = '';


    // Front End & Back End
    if (
        pertanyaanLower.includes("keahlian") &&
        pertanyaanLower.includes("front end") &&
        pertanyaanLower.includes("back end") &&
        pertanyaanLower.includes("fathih")) {
        jawaban = "Fathih menguasai HTML, CSS, dan JavaScript beserta dengan frameworknya seperti Bootstrap, " +
            "Vue, React, dan Angular, Fathih juga cukup ahli dalam bahasa pemrogramman " +
            "seperti PHP, Java, Python, dan C++. Ayo berikan lebih banyak pertanyaan tentang Fathih!";
    }

    else if (
        pertanyaanLower.includes("keahlian") &&
        pertanyaanLower.includes("frontend") &&
        pertanyaanLower.includes("backend") &&
        pertanyaanLower.includes("fathih")) {
        jawaban = "Fathih menguasai HTML, CSS, dan JavaScript beserta dengan frameworknya seperti Bootstrap, " +
            "Vue, React, dan Angular, Fathih juga cukup ahli dalam bahasa pemrogramman " +
            "seperti PHP, Java, Python, dan C++. Ayo berikan lebih banyak pertanyaan tentang Fathih!";
    }

    else if (
        pertanyaanLower.includes("kemampuan") &&
        pertanyaanLower.includes("front end") &&
        pertanyaanLower.includes("back end") &&
        pertanyaanLower.includes("fathih")) {
        jawaban = "Fathih menguasai HTML, CSS, dan JavaScript beserta dengan frameworknya seperti Bootstrap, " +
            "Vue, React, dan Angular, Fathih juga cukup ahli dalam bahasa pemrogramman " +
            "seperti PHP, Java, Python, dan C++. Ayo berikan lebih banyak pertanyaan tentang Fathih!";
    }

    else if (
        pertanyaanLower.includes("kemampuan") &&
        pertanyaanLower.includes("frontend") &&
        pertanyaanLower.includes("backend") &&
        pertanyaanLower.includes("fathih")) {
        jawaban = "Fathih menguasai HTML, CSS, dan JavaScript beserta dengan frameworknya seperti Bootstrap, " +
            "Vue, React, dan Angular, Fathih juga cukup ahli dalam bahasa pemrogramman " +
            "seperti PHP, Java, Python, dan C++. Ayo berikan lebih banyak pertanyaan tentang Fathih!";
    }


    // Back End
    else if (
        pertanyaanLower.includes("keahlian") &&
        pertanyaanLower.includes("back end") &&
        pertanyaanLower.includes("fathih")) {
        jawaban = "Fathih cukup ahli dalam bahasa pemrogramman seperti PHP, Java, Python, dan C++. " +
            "Ayo berikan lebih banyak pertanyaan tentang Fathih!";
    }

    else if (
        pertanyaanLower.includes("kemampuan") &&
        pertanyaanLower.includes("back end") &&
        pertanyaanLower.includes("fathih")) {
        jawaban = "Fathih cukup ahli dalam bahasa pemrogramman seperti PHP, Java, Python, dan C++. " +
            "Ayo berikan lebih banyak pertanyaan tentang Fathih!";
    }

    else if (
        pertanyaanLower.includes("keahlian") &&
        pertanyaanLower.includes("backend") &&
        pertanyaanLower.includes("fathih")) {
        jawaban = "Fathih cukup ahli dalam bahasa pemrogramman seperti PHP, Java, Python, dan C++. " +
            "Ayo berikan lebih banyak pertanyaan tentang Fathih!";
    }

    else if (
        pertanyaanLower.includes("kemampuan") &&
        pertanyaanLower.includes("backend") &&
        pertanyaanLower.includes("fathih")) {
        jawaban = "Fathih cukup ahli dalam bahasa pemrogramman seperti PHP, Java, Python, dan C++. " +
            "Ayo berikan lebih banyak pertanyaan tentang Fathih!";
    }


    // Front End
    else if (
        pertanyaanLower.includes("keahlian") &&
        pertanyaanLower.includes("front end") &&
        pertanyaanLower.includes("fathih")) {
        jawaban = "Fathih menguasai HTML, CSS, dan JavaScript beserta dengan frameworknya seperti Bootstrap, " +
            "Vue, React, dan Angular. Ayo berikan lebih banyak pertanyaan tentang Fathih!";
    }

    else if (
        pertanyaanLower.includes("kemampuan") &&
        pertanyaanLower.includes("front end") &&
        pertanyaanLower.includes("fathih")) {
        jawaban = "Fathih menguasai HTML, CSS, dan JavaScript beserta dengan frameworknya seperti Bootstrap, " +
            "Vue, React, dan Angular. Ayo berikan lebih banyak pertanyaan tentang Fathih!";
    }

    else if (
        pertanyaanLower.includes("keahlian") &&
        pertanyaanLower.includes("frontend") &&
        pertanyaanLower.includes("fathih")) {
        jawaban = "Fathih menguasai HTML, CSS, dan JavaScript beserta dengan frameworknya seperti Bootstrap, " +
            "Vue, React, dan Angular. Ayo berikan lebih banyak pertanyaan tentang Fathih!";
    }

    else if (
        pertanyaanLower.includes("kemampuan") &&
        pertanyaanLower.includes("frontend") &&
        pertanyaanLower.includes("fathih")) {
        jawaban = "Fathih menguasai HTML, CSS, dan JavaScript beserta dengan frameworknya seperti Bootstrap, " +
            "Vue, React, dan Angular. Ayo berikan lebih banyak pertanyaan tentang Fathih!";
    }


    // Database
    else if (
        pertanyaanLower.includes("database") &&
        pertanyaanLower.includes("dipahami") &&
        pertanyaanLower.includes("fathih")) {
        jawaban = "Fathih memahami MySQL, PostgreSQL, dan MongoDB dengan baik. Dia memiliki pengalaman " +
            "dalam mengelola dan menggunakan ketiga jenis basis data ini untuk berbagai aplikasi dan proyeknya. " +
            "Ayo berikan lebih banyak pertanyaan tentang Fathih!";
    }

    else if (
        pertanyaanLower.includes("database") &&
        pertanyaanLower.includes("keahlian") &&
        pertanyaanLower.includes("fathih")) {
        jawaban = "Fathih memahami MySQL, PostgreSQL, dan MongoDB dengan baik. Dia memiliki pengalaman " +
            "dalam mengelola dan menggunakan ketiga jenis basis data ini untuk berbagai aplikasi dan proyeknya. " +
            "Ayo berikan lebih banyak pertanyaan tentang Fathih!";
    }

    else if (
        pertanyaanLower.includes("database") &&
        pertanyaanLower.includes("kemampuan") &&
        pertanyaanLower.includes("fathih")) {
        jawaban = "Fathih memahami MySQL, PostgreSQL, dan MongoDB dengan baik. Dia memiliki pengalaman " +
            "dalam mengelola dan menggunakan ketiga jenis basis data ini untuk berbagai aplikasi dan proyeknya. " +
            "Ayo berikan lebih banyak pertanyaan tentang Fathih!";
    }


    // Pengalaman Developer
    else if (
        pertanyaanLower.includes("pengalaman") &&
        pertanyaanLower.includes("developer") &&
        pertanyaanLower.includes("fathih")) {
        jawaban = "Fathih menjadi developer sekitar 1-2 tahun dan telah mendevelop lebih dari 3 website. " +
            "Ayo berikan lebih banyak pertanyaan tentang Fathih!";
    }

    else if (
        pertanyaanLower.includes("berapa") &&
        pertanyaanLower.includes("developer") || pertanyaanLower.includes("pengembangan") &&
        pertanyaanLower.includes("fathih")) {
        jawaban = "Fathih menjadi developer sekitar 1-2 tahun dan telah mendevelop lebih dari 3 website. " +
            "Ayo berikan lebih banyak pertanyaan tentang Fathih!";
    }

    else if (
        pertanyaanLower.includes("pengalaman") &&
        pertanyaanLower.includes("pengembangan") &&
        pertanyaanLower.includes("fathih")) {
        jawaban = "Fathih menjadi developer sekitar 1-2 tahun dan telah mendevelop lebih dari 3 website. " +
            "Ayo berikan lebih banyak pertanyaan tentang Fathih!";
    }

    else if (
        pertanyaanLower.includes("berapa") &&
        pertanyaanLower.includes("developer") &&
        pertanyaanLower.includes("fathih")) {
        jawaban = "Fathih menjadi developer sekitar 1-2 tahun dan telah mendevelop lebih dari 3 website. " +
            "Ayo berikan lebih banyak pertanyaan tentang Fathih!";
    }


    // Pengalaman Freelancer
    else if (
        pertanyaanLower.includes("pengalaman") &&
        pertanyaanLower.includes("freelancer") &&
        pertanyaanLower.includes("fathih")) {
        jawaban = "Fathih berpengalaman sebagai freelancer lebih dari 2 tahun (content creator & web developer). " +
            "Ayo berikan lebih banyak pertanyaan tentang Fathih!";
    }

    else if (
        pertanyaanLower.includes("berapa") &&
        pertanyaanLower.includes("freelancer") &&
        pertanyaanLower.includes("fathih")) {
        jawaban = "Fathih berpengalaman sebagai freelancer lebih dari 2 tahun (content creator & web developer). " +
            "Ayo berikan lebih banyak pertanyaan tentang Fathih!";
    }


    // Pengalaman Intern
    else if (
        pertanyaanLower.includes("pengalaman") &&
        pertanyaanLower.includes("intern") &&
        pertanyaanLower.includes("fathih")) {
        jawaban = "Fathih memiliki pengalaman lebih dari 2 tahun sebagai intern (network admin & data analisis). " +
            "Ayo berikan lebih banyak pertanyaan tentang Fathih!";
    }

    else if (
        pertanyaanLower.includes("Berapa") &&
        pertanyaanLower.includes("intern") &&
        pertanyaanLower.includes("fathih")) {
        jawaban = "Fathih memiliki pengalaman lebih dari 2 tahun sebagai intern (network admin & data analisis). " +
            "Ayo berikan lebih banyak pertanyaan tentang Fathih!";
    }

    else if (
        pertanyaanLower.includes("pengalaman") &&
        pertanyaanLower.includes("magang") &&
        pertanyaanLower.includes("fathih")) {
        jawaban = "Fathih memiliki pengalaman lebih dari 2 tahun sebagai intern (network admin & data analisis). " +
            "Ayo berikan lebih banyak pertanyaan tentang Fathih!";
    }

    else if (
        pertanyaanLower.includes("Berapa") &&
        pertanyaanLower.includes("magang") &&
        pertanyaanLower.includes("fathih")) {
        jawaban = "Fathih memiliki pengalaman lebih dari 2 tahun sebagai intern (network admin & data analisis). " +
            "Ayo berikan lebih banyak pertanyaan tentang Fathih!";
    }


    // Tempat Lahir
    else if (
        pertanyaanLower.includes("di mana") &&
        pertanyaanLower.includes("lahir") &&
        pertanyaanLower.includes("fathih")) {
        jawaban = "Tempat lahir Fathih adalah Tangerang. Ayo berikan lebih banyak pertanyaan tentang Fathih!";
    }

    else if (
        pertanyaanLower.includes("dimana") &&
        pertanyaanLower.includes("lahir") &&
        pertanyaanLower.includes("fathih")) {
        jawaban = "Tempat lahir Fathih adalah Tangerang. Ayo berikan lebih banyak pertanyaan tentang Fathih!";
    }

    else if (
        pertanyaanLower.includes("di mana") &&
        pertanyaanLower.includes("dilahirkan") &&
        pertanyaanLower.includes("fathih")) {
        jawaban = "Tempat lahir Fathih adalah Tangerang. Ayo berikan lebih banyak pertanyaan tentang Fathih!";
    }

    else if (
        pertanyaanLower.includes("dimana") &&
        pertanyaanLower.includes("dilahirkan") &&
        pertanyaanLower.includes("fathih")) {
        jawaban = "Tempat lahir Fathih adalah Tangerang. Ayo berikan lebih banyak pertanyaan tentang Fathih!";
    }


    // Tanggal Lahir
    else if (
        pertanyaanLower.includes("kapan") &&
        pertanyaanLower.includes("lahir") &&
        pertanyaanLower.includes("fathih")) {
        jawaban = "Fathih lahir pada tanggal 21 April 2007. Ayo berikan lebih banyak pertanyaan tentang Fathih!";
    }

    else if (
        pertanyaanLower.includes("tanggal") &&
        pertanyaanLower.includes("lahir") &&
        pertanyaanLower.includes("fathih")) {
        jawaban = "Fathih lahir pada tanggal 21 April 2007. Ayo berikan lebih banyak pertanyaan tentang Fathih!";
    }

    else if (
        pertanyaanLower.includes("kapan") &&
        pertanyaanLower.includes("dilahirkan") &&
        pertanyaanLower.includes("fathih")) {
        jawaban = "Fathih lahir pada tanggal 21 April 2007. Ayo berikan lebih banyak pertanyaan tentang Fathih!";
    }

    else if (
        pertanyaanLower.includes("tanggal") &&
        pertanyaanLower.includes("dilahirkan") &&
        pertanyaanLower.includes("fathih")) {
        jawaban = "Fathih lahir pada tanggal 21 April 2007. Ayo berikan lebih banyak pertanyaan tentang Fathih!";
    }

    // Hobi
    else if (
        pertanyaanLower.includes("hobi") &&
        pertanyaanLower.includes("fathih")) {
        jawaban = "Hobi Fathih adalah bermain video game. Ayo berikan lebih banyak pertanyaan tentang Fathih!";
    }


    // Olahraga
    else if (
        pertanyaanLower.includes("olahraga") &&
        pertanyaanLower.includes("fathih")) {
        jawaban = "Olahraga yang dilakukan Fathih adalah berlatih gulat tangan dan membentuk badan. Ayo berikan lebih banyak pertanyaan tentang Fathih!";
    }


    // Pekerjaan
    else if (
        pertanyaanLower.includes("pekerjaan") &&
        pertanyaanLower.includes("fathih")) {
        jawaban = "Pekerjaan Fathih saat ini adalah pelajar di sekolah. Ayo berikan lebih banyak pertanyaan tentang Fathih!";
    }


    // Makanan Kesukaan
    else if (
        pertanyaanLower.includes("makanan") &&
        pertanyaanLower.includes("kesukaan") &&
        pertanyaanLower.includes("fathih")) {
        jawaban = "Makanan kesukaan Fathih adalah hidangan ayam dan daging yang tinggi akan protein. Ayo berikan lebih banyak pertanyaan tentang Fathih!";
    }

    else if (
        pertanyaanLower.includes("makanan") &&
        pertanyaanLower.includes("disukai") &&
        pertanyaanLower.includes("fathih")) {
        jawaban = "Makanan kesukaan Fathih adalah hidangan ayam dan daging yang tinggi akan protein. Ayo berikan lebih banyak pertanyaan tentang Fathih!";
    }


    // Minuman Kesukaan
    else if (
        pertanyaanLower.includes("minuman") &&
        pertanyaanLower.includes("kesukaan") &&
        pertanyaanLower.includes("fathih")) {
        jawaban = "Minuman kesukaan Fathih adalah aneka macam minuman coklat. Ayo berikan lebih banyak pertanyaan tentang Fathih!";
    }

    else if (
        pertanyaanLower.includes("minuman") &&
        pertanyaanLower.includes("disukai") &&
        pertanyaanLower.includes("fathih")) {
        jawaban = "Minuman kesukaan Fathih adalah aneka macam minuman coklat. Ayo berikan lebih banyak pertanyaan tentang Fathih!";
    }


    // Hiburan
    else if (
        pertanyaanLower.includes("hiburan") &&
        pertanyaanLower.includes("kesukaan") &&
        pertanyaanLower.includes("fathih")) {
        jawaban = "Hiburan yang disukai Fathih adalah menonton serial tokusatsu seperti Ultraman dan Kamen Rider. " +
            "Ayo berikan lebih banyak pertanyaan tentang Fathih!";
    }

    else if (
        pertanyaanLower.includes("hiburan") &&
        pertanyaanLower.includes("disukai") &&
        pertanyaanLower.includes("fathih")) {
        jawaban = "Hiburan yang disukai Fathih adalah menonton serial tokusatsu seperti Ultraman dan Kamen Rider. " +
            "Ayo berikan lebih banyak pertanyaan tentang Fathih!";
    }


    // Sekolah
    else if (
        pertanyaanLower.includes("di mana") &&
        pertanyaanLower.includes("pendidikan") &&
        pertanyaanLower.includes("fathih")) {
        jawaban = "Fathih sedang menempuh pendidikan di SMA Negeri 7 Tangerang tahun 2022-2025. Ayo berikan lebih banyak pertanyaan lagi tentang Fathih!";
    }

    else if (
        pertanyaanLower.includes("di mana") &&
        pertanyaanLower.includes("sekolah") &&
        pertanyaanLower.includes("fathih")) {
        jawaban = "Fathih sedang menempuh pendidikan di SMA Negeri 7 Tangerang tahun 2022-2025. Ayo berikan lebih banyak pertanyaan lagi tentang Fathih!";
    }

    else if (
        pertanyaanLower.includes("dimana") &&
        pertanyaanLower.includes("pendidikan") &&
        pertanyaanLower.includes("fathih")) {
        jawaban = "Fathih sedang menempuh pendidikan di SMA Negeri 7 Tangerang tahun 2022-2025. Ayo berikan lebih banyak pertanyaan lagi tentang Fathih!";
    }

    else if (
        pertanyaanLower.includes("dimana") &&
        pertanyaanLower.includes("sekolah") &&
        pertanyaanLower.includes("fathih")) {
        jawaban = "Fathih sedang menempuh pendidikan di SMA Negeri 7 Tangerang tahun 2022-2025. Ayo berikan lebih banyak pertanyaan lagi tentang Fathih!";
    }


    // Nama Lengkap
    else if (
        pertanyaanLower.includes("nama") &&
        pertanyaanLower.includes("lengkap") &&
        pertanyaanLower.includes("fathih")) {
        jawaban = "Nama lengkap Fathih adalah Fathih Apriandi. Ayo berikan lebih banyak pertanyaan tentang Fathih!";
    }

    else if (
        pertanyaanLower.includes("nama") &&
        pertanyaanLower.includes("panjang") &&
        pertanyaanLower.includes("fathih")) {
        jawaban = "Nama lengkap Fathih adalah Fathih Apriandi. Ayo berikan lebih banyak pertanyaan tentang Fathih!";
    }


    // Sekarang
    else if (
        pertanyaanLower.includes("pendidikan") &&
        pertanyaanLower.includes("sekarang") &&
        pertanyaanLower.includes("fathih")) {
            jawaban = "Saat ini, Fathih sedang menempuh pendidikan di SMA Negeri 7 Tangerang. " +
            "Cita-citanya adalah memiliki keahlian yang kompetitif di industri IT. " +
            "Ia sangat tertarik pada teknologi informasi, kecerdasan buatan, pengembangan perangkat lunak, dan desain.";
        }

    else if (
        pertanyaanLower.includes("sekolah") &&
        pertanyaanLower.includes("saat ini") &&
        pertanyaanLower.includes("fathih")) {
            jawaban = "Saat ini, Fathih sedang menempuh pendidikan di SMA Negeri 7 Tangerang. " +
            "Cita-citanya adalah memiliki keahlian yang kompetitif di industri IT. " +
            "Ia sangat tertarik pada teknologi informasi, kecerdasan buatan, pengembangan perangkat lunak, dan desain.";
        }   
        
    
        // Pengalaman
    else if (
        pertanyaanLower.includes("pengalaman") &&
        pertanyaanLower.includes("fathih")) {
        jawaban = "Fathih memiliki pengalaman yang cukup beragam dalam dunia pengembangan. Ia berpengalaman " +
            "Sebagai seorang developer, ia telah mengembangkan lebih dari 3 website dalam waktu 1-2 tahun. " +
            "Selain itu, Fathih juga aktif sebagai freelancer, menjadi content creator dan web developer.";
    }


    // Keahlian
    else if (
        pertanyaanLower.includes("keahlian") &&
        pertanyaanLower.includes("fathih")) {
            jawaban = "Fathih memiliki pengalaman yang cukup beragam dalam dunia pengembangan. Ia berpengalaman " +
            "Sebagai seorang developer, ia telah mengembangkan lebih dari 3 website dalam waktu 1-2 tahun. " +
            "Selain itu, Fathih juga aktif sebagai freelancer, menjadi content creator dan web developer.";
        }



    
    // Tentang Fathih
    else if (
        pertanyaanLower.includes("fathih")){
        jawaban = "Fathih Apriandi adalah seorang pelajar yang lahir pada tanggal 21 April 2007 di Tangerang. " +
            "Ia memiliki beragam minat dan keahlian di bidang teknologi informasi. Dalam kesehariannya, " +
            "Fathih suka bermain video game, berlatih gulat tangan, dan membentuk badan. Selain itu, ia juga " +
            "mempelajari soft skill dan hard skill di luar kurikulum sekolah.";
    }


    // Al Jazari
    else if (
        pertanyaanLower.includes("jazari")) {
        jawaban = "Al-Jazari adalah sebuah program chatbot Virtual Assistant sederhana yang dikembangkan oleh " +
            "Fathih Apriandi, apakah anda ingin mengetahui lebih banyak tentang developer Al-Jazari?";
    }

    else if (
        pertanyaanLower.includes("ya")) {
        jawaban = "Tanyakan apapun tentang Fathih kepada saya, seperti pengalaman, keahlian, ataupun " +
            "latarbelakangnya!";
        }
        
    else if (
        pertanyaanLower.includes("boleh")) {
        jawaban = "Tanyakan apapun tentang Fathih kepada saya, seperti pengalaman, keahlian, ataupun " +
            "latarbelakangnya!";
        }
        
        
    // Kondisi Terakhir
    else {
        jawaban = "Tanyakan apapun tentang Fathih kepada saya, seperti pengalaman, keahlian, ataupun " +
        "latarbelakangnya!";
    }


    // User Message
    const userMessage = document.createElement('div');
    userMessage.className = 'chat-message user';
    userMessage.textContent = `Anda: ${pertanyaan}`;
    userMessage.style.backgroundColor = 'rgb(30, 159, 171)';
    chatBox.appendChild(userMessage);

    // Bot Message
    const botMessage = document.createElement('div');
    botMessage.className = 'chat-message bot';
    chatBox.appendChild(botMessage);

    // Memanggil Fungsi Bot Message
    typeMessage(`Al-Jazari: ${jawaban}`, botMessage, 10);

    inputField.value = '';
    chatBox.scrollTop = chatBox.scrollHeight;

    pertanyaanCount++;
    if (pertanyaanCount === 5) {
        tampilkanAlertTerimakasih();
    }
}

// Bot Typing Effect
function typeMessage(message, element, speed) {
    let index = 0;
    const typingInterval = setInterval(function () {
        if (index <= message.length) {
            element.textContent = message.slice(0, index); // Menampilkan teks sebagian yang ditambahkan ke dalam elemen
            index++;
        } else {
            clearInterval(typingInterval);
        }
    }, speed);
}

// Fungsi Alert Terimakasih
function tampilkanAlertTerimakasih() {
    setTimeout(function () {
        Swal.fire({
            html: '<h1><i class="uil uil-robot" style="font-size: 48px; color: #6e57e0;"></i> Al-Jazari</h1>' +
                '<br>Terima kasih telah mengajukan 5 pertanyaan kepada saya,',
            confirmButtonText: "(・へ・)",
        });
    }, 3500);
}
let pertanyaanCount = 0;

// Fungsi Alert Pembuka
setTimeout(function () {
    Swal.fire({
        html: '<h1><i class="uil uil-robot" style="font-size: 48px; color: #6e57e0;"></i> Patren #1</h1>' +
            '<br>Tanyakan apapun tentang Fathih kepada saya, seperti pengalaman, keahlian, ataupun latar belakangnya!'
    });
}, 2000); // 2000 milidetik
