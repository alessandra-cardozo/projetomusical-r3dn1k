const songs = [
  { title: "CHEMICALS", id: "xaX0nsjERis" },
  { title: "Inside Out", id: "_EfVg6J32So" },
  { title: "Limerence", id: "7ZtlVy1IUd0" },
  { title: "I Adore You", id: "h90S0S0m3h8" },
  { title: "In My Body", id: "DTuL0CZFEoE" },
  { title: "Shine", id: "_5PGrcKjED0" },
  { title: "Numb", id: "UT8zEZjC6Ys" },
  { title: "Afterlight", id: "L5W_zlYxEQE" },
  { title: "Azure", id: "jR6-uSAkzX8" },
  { title: "Fly", id: "fytcvdoTLd8" },
  { title: "Drown", id: "L3GdKO2W2vc" },
  { title: "R3DN1K - Poison", id: "f3Nz88_Zncs" },
  { title: "Ocean Eyes", id: "DIWySdVP1RA" },
  { title: "Shiver", id: "ad-JN0TeLXo" },
  { title: "R3DN1K - Motion", id: "Z9BZKu4fLdE" },
  { title: "R3DN1K - You", id: "0JP64RhY-pQ" },
  { title: "Same", id: "06_u28Yu0To" },
  { title: "Nadek", id: "MqW-ea2lDXQ" }
];

function playMusic(index) {
  if (index < 0 || index >= songs.length) {
    return;
  }

  const ytPlayer = document.getElementById("yt");
  const cover = document.getElementById("cover");

  if (!ytPlayer || !cover) {
    return;
  }

  const song = songs[index];
  const songId = song.id;

  ytPlayer.src = `https://www.youtube.com/embed/${songId}?autoplay=1`;
  cover.style.background = `url("https://img.youtube.com/vi/${songId}/hqdefault.jpg") center/cover no-repeat`;
}