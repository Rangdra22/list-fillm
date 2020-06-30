const h1 = document.getElementsByTagName("h1");
h1[0].innerText = "Belajar Dasar Pemrograman Web";

const p = document.querySelectorAll("p");
p[1].innerText =
  "Ini adalah Subsmission Belajar Dasar Pemrograman Web yang bertema tentang Film Harry Potter";

const harryPotterDesc = document.querySelector("#content #artikel p");
harryPotterDesc.innerHTML = `<b>Harry Potter</b> adalah serial film Inggris Amerika berdasarkan
novel-novel Harry Potter karya penulis J. K. Rowling. Seri ini
didistribusikan oleh Warner Bros. dan terdiri dari delapan film
fantasi, dimulai dengan Harry Potter dan Batu Bertuah (2001) dan
diakhiri dengan Harry Potter dan Relikui Kematian – Bagian 2 (2011).
<br /><br />
Seri ini sebagian besar disutradarai oleh David Heyman, dan
bintang-bintang Daniel Radcliffe, Rupert Grint dan Emma Watson yang
berperan sebagai tiga karakter utama: Harry Potter, Ron Weasley dan
Hermione Granger. Empat direktor bekerja pada seri: Chris Columbus,
Alfonso Cuarón, Mike Newell, dan David Yates. Skenario delapan
film-film mereka ditulis oleh Steve Kloves, dengan pengecualian
Harry Potter and the Order of the Phoenix (2007), yang ditulis oleh
Michael Goldenberg. Penyelesaian produksinya menghabiskan lebih dari
sepuluh tahun, dengan busur cerita berikut usaha Harry Potter untuk
mengatasi musuh Lord Voldemort.
<br /><br />
Harry Potter dan Relikui Kematian, novel ke tujuh dan terakhir di
seri ini diadaptasi menjadi dua bagian panjang dengan dua
fitur.Bagian 1 dirilis pada bulan November 2010, dan Bagian 2
dirilis pada bulan Juli 2011.
<br /><br />
Harry Potter and the Prisoner of Azkaban adalah satu-satunya film
dalam seri tidak termasuk 50 film terlaris tertinggi, dengan Harry
Potter dan Relikui Kematian – Bagian 2, film paling terlaris dalam
seri dan satu dari 26 film dengan pendapatan lebih dari $1 miliar,
peringkat di nomor 8.Tanpa penyesuaian inflasi, itu adalah film seri
kedua paling terlaris dengan $7,7 miliar dengan penerimaan dari
seluruh dunia. 1–3%.`;

const dicodingImg = document.getElementById("img-dicoding");
dicodingImg.setAttribute("src", "image/logo-dicoding3.png");

const img = document.querySelectorAll(".img-dom");
img[0].setAttribute("src", "image/harrypotter.jpg");
img[1].setAttribute("src", "image/harry1.jpg");
img[2].setAttribute("src", "image/harry2.jpg");
img[3].setAttribute("src", "image/harry3.jpg");
img[4].setAttribute("src", "image/harry4.jpg");
img[5].setAttribute("src", "image/harry5.jpg");
img[6].setAttribute("src", "image/harry6.jpg");
img[7].setAttribute("src", "image/harry7.jpg");
img[8].setAttribute("src", "image/harry8.jpg");
img[9].setAttribute("src", "image/harry9.jpg");
img[10].setAttribute("src", "image/emoji.jpg");

const aside = document.querySelector("#biodata article section");
aside.innerHTML = `<h3>Biodata Diri</h3>
<table>
<tr>
<th>Nama:</th>
</tr>
<tr>
<td>Rangdra Pangestu</td>
</tr>
<tr>
<th>Tempat, Tgl/Lahir:</th>
</tr>
<tr>
<td>Bekasi, 22 Oktober 2000</td>
</tr>
<tr>
<th>Alamat:</th>
</tr>
<tr>
<td>Bekasi, Indonesia</td>
</tr>
<tr>
<th>Email:</th>
</tr>
<td>
rangdrapange@gmail.com
</td>
</table>`;
const tableFilm = document.querySelectorAll(".wrapper section");
tableFilm[0].innerHTML = `<h3>Harry Potter and the Deathly Hallows: Part 2 (2011)</h3>
<table>
<tr>
<th>Director:</th>
</tr>
<tr>
<td>David Yates</td>
</tr>
<tr>
<th>
  Actors:
</th>
</tr>
<tr>
<td>Gambon, Alan Rickman, Daniel Radcliffe</td>
</tr>
<tr>
<th>Writer:</th>
</tr>
<tr>
<td>Steve Kloves (screenplay), J.K. Rowling (novel)</td>
</tr>
<tr>
<th>Plot:</th>
</tr>
<tr>
<td>
  Harry, Ron, and Hermione search for Voldemort's remaining Horcruxes in
  their effort to destroy the Dark Lord as the final battle rages on at
  Hogwarts.
</td>
</tr>
</table>
`;

tableFilm[1].innerHTML = `<h3>Harry Potter and the Sorcerer's Stone (2001)</h3>
<table>
<tr>
<th>Director:</th>
</tr>
<tr>
<td>Chris Columbus</td>
</tr>
<tr>
<th>
  Actors:
</th>
</tr>
<tr>
<td>	Richard Harris, Maggie Smith, Robbie Coltrane, Saunders Triplets</td>
</tr>
<tr>
<th>Writer:</th>
</tr>
<tr>
<td>	J.K. Rowling (novel), Steve Kloves (screenplay)</td>
</tr>
<tr>
<th>Plot:</th>
</tr>
<tr>
<td>
An orphaned boy enrolls in a school of wizardry, where he learns the truth about himself, his family and the terrible evil that haunts the magical world.
</td>
</tr>
</table>
`;

tableFilm[2].innerHTML = `<h3>Harry Potter and the Chamber of Secrets (2002)</h3>
<table>
<tr>
<th>Director:</th>
</tr>
<tr>
<td>Chris Columbus</td>
</tr>
<tr>
<th>
  Actors:
</th>
</tr>
<tr>
<td>Daniel Radcliffe, Rupert Grint, Emma Watson, Richard Griffiths</td>
</tr>
<tr>
<th>Writer:</th>
</tr>
<tr>
<td>	J.K. Rowling (novel), Steve Kloves (screenplay)</td>
</tr>
<tr>
<th>Plot:</th>
</tr>
<tr>
<td>
An ancient prophecy seems to be coming true when a mysterious presence begins stalking the corridors of a school of magic and leaving its victims paralyzed.
</td>
</tr>
</table>
`;

tableFilm[3].innerHTML = `<h3>Harry Potter and the Prisoner of Azkaban (2004)</h3>
<table>
<tr>
<th>Director:</th>
</tr>
<tr>
<td>Chris Columbus</td>
</tr>
<tr>
<th>
  Actors:
</th>
</tr>
<tr>
<td>Daniel Radcliffe, Rupert Grint, Emma Watson, Richard Griffiths</td>
</tr>
<tr>
<th>Writer:</th>
</tr>
<tr>
<td>	J.K. Rowling (novel), Steve Kloves (screenplay)</td>
</tr>
<tr>
<th>Plot:</th>
</tr>
<tr>
<td>
An ancient prophecy seems to be coming true when a mysterious presence begins stalking the corridors of a school of magic and leaving its victims paralyzed.
</td>
</tr>
</table>
 `;
tableFilm[4].innerHTML = `<h3>Harry Potter and the Goblet of Fire (2005)</h3>
<table>
<tr>
<th>Director:</th>
</tr>
<tr>
<td>Mike Newell</td>
</tr>
<tr>
<th>
  Actors:
</th>
</tr>
<tr>
<td>	Eric Sykes, Timothy Spall, David Tennant, Daniel Radcliffe</td>
</tr>
<tr>
<th>Writer:</th>
</tr>
<tr>
<td>	J.K. Rowling (novel), Steve Kloves (screenplay)</td>
</tr>
<tr>
<th>Plot:</th>
</tr>
<tr>
<td>
Harry Potter (Daniel Radcliffe) finds himself competing in a hazardous tournament between rival schools of magic, but he is distracted by recurring nightmares.
</td>
</tr>
</table>
`;
tableFilm[5].innerHTML = `<h3>Harry Potter and the Order of the Phoenix (2007)</h3>
<table>
<tr>
<th>Director:</th>
</tr>
<tr>
<td>David Yates</td>
</tr>
<tr>
<th>
  Actors:
</th>
</tr>
<tr>
<td>Daniel Radcliffe, Harry Melling, Jason Boyd, Richard Macklin</td>
</tr>
<tr>
<th>Writer:</th>
</tr>
<tr>
<td>Michael Goldenberg (screenplay), J.K. Rowling (novel)</td>
</tr>
<tr>
<th>Plot:</th>
</tr>
<tr>
<td>
With their warning about Lord Voldemort's (Ralph Fiennes') return scoffed at, Harry (Daniel Radcliffe) and Dumbledore (Sir Michael Gambon) are targeted by the Wizard authorities as an authoritarian bureaucrat slowly seizes power at Hogwarts.
</td>
</tr>
</table>
`;
tableFilm[6].innerHTML = `<h3>Harry Potter and the Deathly Hallows: Part 1 (2010)</h3>
<table>
<tr>
<th>Director:</th>
</tr>
<tr>
<td>David Yates</td>
</tr>
<tr>
<th>
  Actors:
</th>
</tr>
<tr>
<td>Daniel Radcliffe, Harry Melling, Jason Boyd, Richard Macklin</td>
</tr>
<tr>
<th>Writer:</th>
</tr>
<tr>
<td>Michael Goldenberg (screenplay), J.K. Rowling (novel)</td>
</tr>
<tr>
<th>Plot:</th>
</tr>
<tr>
<td>
With their warning about Lord Voldemort's (Ralph Fiennes') return scoffed at, Harry (Daniel Radcliffe) and Dumbledore (Sir Michael Gambon) are targeted by the Wizard authorities as an authoritarian bureaucrat slowly seizes power at Hogwarts.
</td>
</tr>
</table>
`;
tableFilm[7].innerHTML = `<h3>Harry Potter and the Half-Blood Prince (2009)</h3>
<table>
<tr>
<th>Director:</th>
</tr>
<tr>
<td>David Yates</td>
</tr>
<tr>
<th>
  Actors:
</th>
</tr>
<tr>
<td>Daniel Radcliffe, Harry Melling, Jason Boyd, Richard Macklin</td>
</tr>
<tr>
<th>Writer:</th>
</tr>
<tr>
<td>Michael Goldenberg (screenplay), J.K. Rowling (novel)</td>
</tr>
<tr>
<th>Plot:</th>
</tr>
<tr>
<td>
With their warning about Lord Voldemort's (Ralph Fiennes') return scoffed at, Harry (Daniel Radcliffe) and Dumbledore (Sir Michael Gambon) are targeted by the Wizard authorities as an authoritarian bureaucrat slowly seizes power at Hogwarts.
</td>
</tr>
</table>
`;
tableFilm[8].innerHTML = `<h3>Harry Potter and the Forbidden Journey (2010)</h3>
<table>
<tr>
<th>Director:</th>
</tr>
<tr>
<td>David Yates</td>
</tr>
<tr>
<th>
  Actors:
</th>
</tr>
<tr>
<td>Daniel Radcliffe, Harry Melling, Jason Boyd, Richard Macklin</td>
</tr>
<tr>
<th>Writer:</th>
</tr>
<tr>
<td>Michael Goldenberg (screenplay), J.K. Rowling (novel)</td>
</tr>
<tr>
<th>Plot:</th>
</tr>
<tr>
<td>
With their warning about Lord Voldemort's (Ralph Fiennes') return scoffed at, Harry (Daniel Radcliffe) and Dumbledore (Sir Michael Gambon) are targeted by the Wizard authorities as an authoritarian bureaucrat slowly seizes power at Hogwarts.
</td>
</tr>
</table>
 `;

const button = document.querySelector("button");
const nav = document.querySelectorAll("nav ul li");
const toTop = document.querySelector("#content article p a");

button.addEventListener("click", function () {
  document.getElementById("artikel").scrollIntoView({ behavior: "smooth" });
});

nav[0].addEventListener("click", function () {
  document.getElementById("artikel").scrollIntoView({ behavior: "smooth" });
});
nav[1].addEventListener("click", function () {
  document.getElementById("biodata").scrollIntoView({ behavior: "smooth" });
});
nav[2].addEventListener("click", function () {
  document.getElementById("biodata").scrollIntoView({ behavior: "smooth" });
});
nav[3].addEventListener("click", function () {
  document.body.scrollIntoView({ behavior: "smooth" });
});

toTop.addEventListener("click", function () {
  document.body.scrollIntoView({ behavior: "smooth" });
});

// for (let i = 0; i < nav.length; i++) {
//   nav[i].addEventListener("click", function () {
//     document.querySelector("footer").scrollIntoView({ behavior: "smooth" });
//   });
// }
