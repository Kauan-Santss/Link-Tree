'mode strict'

const links = {
    "nome": "Kauan",
    "img": "teste.jpg",
    "links": [{
        "titulo": "GitHub",
        "url": "https://github.com/Kauan-Santss"
        },
        {
            "titulo": "Instagram",
            "url": "https://www.instagram.com/now_kauan/"
        },
        {
            "titulo": "Linkedin",
            "url": "https://www.linkedin.com/in/kauan-santos-00a336202/"
        },
        {
            "titulo": "Facebook",
            "url": "https://www.facebook.com/profile.php?id=100008967426493"
        }
    ]
}
let avatar = document.getElementById("avatar");
avatar.src = links["img"]

const titulo = document.getElementById('titulo')
titulo.textContent = links["nome"]

for (let index = 0; index < links["links"].length; index++) {

    const div = document.getElementById("linkTree")
    const tagA = document.createElement("a")
    tagA.href = links["links"][index]["url"]
    tagA.innerText = links["links"][index]["titulo"]
    div.appendChild(tagA)

}