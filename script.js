document.addEventListener('DOMContentLoaded', () => {
    
    // --- FUNGSI GLOBAL (Jam Otomatis di Footer) ---
    const footer = document.querySelector('footer p');
    const timeElement = document.createElement('span');
    timeElement.id = 'current-time';
    
    if (footer) {
        footer.appendChild(document.createTextNode(' | '));
        footer.appendChild(timeElement);
        
        function updateClock() {
            const now = new Date();
            const options = { 
                weekday: 'long', 
                hour: '2-digit', 
                minute: '2-digit', 
                second: '2-digit' 
            };
            const formattedTime = now.toLocaleDateString('id-ID', options);
            timeElement.textContent = `Waktu: ${formattedTime}`;
        }
        updateClock();
        setInterval(updateClock, 1000); 
    }
    
    
    // --- INTERAKTIVITAS PER HALAMAN ---

    // 1. Interaksi di Halaman Kontak (contact.html): Alert Pesan Terkirim

    const contactForm = document.getElementById("contactForm");
    if (contactForm) {
        contactForm.addEventListener('submit', function(event) {
            event.preventDefault();
            const backButton = document.createElement('button');
            backButton.textContent = 'Kembali';
            backButton.onclick = () => location.reload();
            this.innerHTML = "✅ Terima kasih, pesan Anda telah terkirim!";
            this.appendChild(backButton);
        });
    }


    // 2. Interaksi di Halaman Utama (index.html): Tombol Tema (Toggle Light/Dark Mode)
    const body = document.body;
    const themeButton = document.getElementById('theme-toggle');

    if (themeButton) {
        themeButton.addEventListener('click', () => {
            // Mengganti class pada body untuk mengubah seluruh tema
            body.classList.toggle('dark-mode');
            
            // Mengubah teks tombol
            if (body.classList.contains('dark-mode')) {
                themeButton.textContent = 'Mode Cerah';
            } else {
                themeButton.textContent = 'Mode Gelap';
            }
        });
    }


    // 3. Interaksi di Halaman Portofolio (portfolio.html): Log ke Konsol
    // Ini adalah interaksi sederhana yang menunjukkan penggunaan JS pada halaman ini.
    const projects = document.querySelectorAll('.project-item');
    projects.forEach(project => {
        project.addEventListener('click', function() {
            const projectName = this.querySelector('h3').textContent;
            console.log(`Pengguna mengklik proyek: ${projectName}`);
            // Anda bisa menambahkan navigasi ke halaman detail proyek di sini
        });
    });


    // 4. Interaksi di Halaman Tentang (about.html): Menghitung Usia Otomatis
    const birthYear = 2000; // Ganti dengan tahun lahir Anda yang sebenarnya!
    const ageElement = document.getElementById('age-display');

    if (ageElement) {
        const currentYear = new Date().getFullYear();
        const age = currentYear - birthYear;
        ageElement.textContent = age;
        
        // Tambahkan elemen baru ke tabel (Pastikan Anda sudah punya ID ini di about.html)
        const tableBody = document.querySelector('.about-table tbody');
        if (tableBody) {
             const newRow = tableBody.insertRow(-1); // Sisipkan di baris terakhir
             newRow.innerHTML = `<th>Usia (Otomatis)</th><td>: <span class="highlight-age">${age} Tahun</span></td>`;
        }
    }
});

// =====================================
// Toggle Menu Mobile
// =====================================
document.addEventListener("DOMContentLoaded", function () {
  const menuToggle = document.getElementById("menu-toggle");
  const navLinks = document.querySelector("nav ul");

  if (menuToggle && navLinks) {
    menuToggle.addEventListener("click", () => {
      navLinks.classList.toggle("show");
    });
  }

  // =====================================
  // Mode Gelap / Terang
  // =====================================
  const themeToggle = document.getElementById("theme-toggle");
  const body = document.body;

  // Cek tema tersimpan di localStorage
  if (localStorage.getItem("theme") === "dark") {
    body.classList.add("dark");
    if (themeToggle) themeToggle.textContent = "☀️";
  }

  // Klik untuk toggle tema
  if (themeToggle) {
    themeToggle.addEventListener("click", () => {
      body.classList.toggle("dark");

      if (body.classList.contains("dark")) {
        localStorage.setItem("theme", "dark");
        themeToggle.textContent = "☀️"; // ikon matahari
      } else {
        localStorage.setItem("theme", "light");
        themeToggle.textContent = "🌙"; // ikon bulan
      }
    });
  }
});
