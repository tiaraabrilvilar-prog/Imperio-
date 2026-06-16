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
function render(id){
  gallery.innerHTML = categorias[id].map(([f,c])=>
    `<figure><img src="assets/${f}" alt="${c}" loading="lazy"><figcaption>${c}</figcaption></figure>`
  ).join("");
}
document.querySelectorAll(".tab").forEach(btn=>{
  btn.addEventListener("click",()=>{
    document.querySelectorAll(".tab").forEach(b=>b.classList.remove("active"));
    btn.classList.add("active");
    render(btn.dataset.tab);
  });
});
render("bebe");

const snack = document.getElementById("snack");
snack.addEventListener("click",()=>{ snack.textContent="Snack recibido. Tigre evalúa. 😼"; });
