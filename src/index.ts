// Type annotations

// const nome: string = "Felipe"
// const idade: number = 17
// const statuscv: boolean = false

// Interfaces
// interface UserWallet {
//     coins?: number,
//     credits?: number;
// }

// interface User {
//     name: string,
//     createdAt: Date;
//     wallet?: UserWallet
// }

// function createUser(name: string): User{
//     return { name, createdAt: new Date() }
// }
// function updateWallet(user: User, wallet: UserWallet){
//     user.wallet = { ...user.wallet, ...wallet }
// }

// const felipe = createUser("Felipe");

// updateWallet (felipe, { coins: 10 } )

// console.log(felipe)

// interface RedesSociais{
//     instagram?: string,
//     github?: string
// }

// interface Perfil {
//     id: number, 
//     nome: string,
//     bio: string,
//     links?: RedesSociais
// }

// function CriarPerfil(id: number, nome: string, bio: string, links: RedesSociais ={}): Perfil {
//     return {
//         id,
//         nome, 
//         bio,
//         links
//     }
// }

// const felipe = CriarPerfil(1, "Felipe", "Gosto de estudar programação", {instagram: "Link do meu instagram" })

// console.log(felipe)

// function EditarRedes(user: Perfil, links: RedesSociais){
//     user.links = {...user.links, ...links}
// }

// EditarRedes(felipe, {github: "Link do meu git hub"})

// console.log(felipe)

// interface Personagem {
//     id: number,
//     nome: string,
//     classe: string,
//     nivel: number,
//     estaVivo: boolean,
//     poder?: string

// }

// interface MeuHeroi extends Personagem {
//     poderEspecial: string
// }

// const felipe: MeuHeroi = {
//     id: 1,
//     nome: "Felipe",
//     classe: "Cavaleiro",
//     nivel: 200,
//     estaVivo: true,
//     poder: "",
//     poderEspecial: ""
// }

// const equipe: Personagem[] = [
//     {
//     id: 1,
//     nome: "Jonas",
//     classe: "Mago",
//     nivel: 200,
//     estaVivo: true,
//     poder: "Fogo",
//     },
//     {
//     id: 2,
//     nome: "Mike",
//     classe: "Cavaleiro",
//     nivel: 200,
//     estaVivo: false,
//     poder: "Luta",
//     }
// ]

// equipe.push(felipe)

//  function filtrarVivos(lista: Personagem[]): Personagem[] {
//   return lista.filter((p) => p.estaVivo);
//  }


