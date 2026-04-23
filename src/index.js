"use strict";
// Type annotations
const felipe = {
    id: 1,
    nome: "Felipe",
    classe: "Cavaleiro",
    nivel: 200,
    estaVivo: true,
    poder: "Seu personagem tem habilidade em espada e luta aprimorados",
    poderEspecial: "Seu especial invoca uma armadura indestrutivel e aumenta seu poder 1000000x"
};
const equipe = [
    {
        id: 1,
        nome: "Jonas",
        classe: "Mago",
        nivel: 200,
        estaVivo: true,
        poder: "Fogo",
        ols: 12
    },
    {
        id: 2,
        nome: "Mike",
        classe: "Cavaleiro",
        nivel: 200,
        estaVivo: true,
        poder: "Luta",
    }
];
function apresentarEquipe(lista) {
    console.log("Apresentando os heróis:");
    lista.forEach((p) => {
        console.log(`Herói: ${p.nome} - Classe: ${p.classe}`);
    });
}
// Chame a função passando a sua equipe
apresentarEquipe(equipe);
