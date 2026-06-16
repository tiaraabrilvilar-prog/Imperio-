const categorias = {
  bebe: [
    ["bebe-1.jpeg","Cachorro entre almohadones"],
    ["bebe-2.jpeg","Mirada de heredero"],
    ["bebe-mamadera.jpeg","Protocolo de mamadera"],
    ["bebe-siesta.jpeg","Siesta real, no molestar"],
  ],
  enojado: [
    ["enojado-1.jpeg","Indignación monárquica"],
    ["enojado-2.jpeg","Audiencia oficial"],
    ["enojado-3.jpeg","Mirada de advertencia"],
    ["enojado-4.jpeg","Primer plano imperial"],
    ["enojado-5.jpeg","Patrullando el reino"],
  ],
  posando: [
    ["modelo-1.jpeg","Perfil con pañuelo violeta"],
    ["modelo-3.jpeg","Bufanda celeste, mirada lánguida"],
    ["modelo-4.jpeg","Editorial al aire libre"],
    ["modelo-2.jpeg","Contrapicado de escultura"],
  ],
  siesta: [
    ["siesta_1.jpeg","Fortaleza de cartón"],
    ["siesta_2.jpeg","Panza arriba, tregua momentánea"],
    ["siesta_3.jpeg","Apoyado en súbdito autorizado"],
    ["siesta_4.jpeg","Entre peluches, como uno más"],
    ["siesta_9.jpeg","Lengüita afuera, sueño profundo"],
    ["siesta-abrazo.jpeg","Abrazado a su tigre de peluche"],
  ],
  privacidad: [
    ["sin_privacidad_1.jpeg","Inspección del lavabo, postura imperial"],
    ["sin_privacidad_2.jpeg","Vigilando la ducha desde la bacha"],
    ["sin_privacidad_3.jpeg","Cámara invertida, dignidad intacta"],
  ],
};

const gallery = document.getElementById("gallery");
let current = "bebe";
let index = 0;
let autoplayId = null;

function buildCarousel(id){
  current = id;
  index = 0;
  const items = categorias[id];
  gallery.innerHTML = `
    <div class="carousel">
      <button class="carousel-btn prev" aria-label="Anterior">‹</button>
      <div class="carousel-track">
        ${items.map(([f,c])=>`
          <figure class="carousel-slide">
            <img src="assets/${f}" alt="${c}" loading="lazy">
            <figcaption>${c}</figcaption>
          </figure>`).join("")}
      </div>
      <button class="carousel-btn next" aria-label="Siguiente">›</button>
      <div class="carousel-dots">
        ${items.map((_,i)=>`<button class="dot${i===0?' active':''}" data-i="${i}" aria-label="Ir a ${i+1}"></button>`).join("")}
      </div>
    </div>`;
  update();
  gallery.querySelector(".prev").onclick = ()=>{ go(index-1); resetAutoplay(); };
  gallery.querySelector(".next").onclick = ()=>{ go(index+1); resetAutoplay(); };
  gallery.querySelectorAll(".dot").forEach(d=>{
    d.onclick = ()=>{ go(parseInt(d.dataset.i)); resetAutoplay(); };
  });
  resetAutoplay();
}

function go(i){
  const items = categorias[current];
  index = (i + items.length) % items.length;
  update();
}

function update(){
  const track = gallery.querySelector(".carousel-track");
  if(!track) return;
  track.style.transform = `translateX(-${index*100}%)`;
  gallery.querySelectorAll(".dot").forEach((d,i)=>d.classList.toggle("active",i===index));
}

function resetAutoplay(){
  clearInterval(autoplayId);
  autoplayId = setInterval(()=>go(index+1), 5000);
}

document.querySelectorAll(".tab").forEach(btn=>{
  btn.addEventListener("click",()=>{
    document.querySelectorAll(".tab").forEach(b=>b.classList.remove("active"));
    btn.classList.add("active");
    buildCarousel(btn.dataset.tab);
  });
});
buildCarousel("bebe");

const snack = document.getElementById("snack");
snack.addEventListener("click",()=>{ snack.textContent="Snack recibido. Tigre evalúa. 😼"; });
