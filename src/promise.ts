// // 1. Definimos as interfaces para o TS não reclamar
// interface User {
//   email: string;
//   senha: string;
// }

// interface VideoDetails {
//   titulo: string;
//   duracao: string;
// }

// // 2. Função de LOGIN
// const loginUserPromise = (email: string, senha: string): Promise<User> => {
//   return new Promise((resolve, reject) => {
//     const error = false;
//     setTimeout(() => {
//       if (error) {
//         reject(new Error("Erro no login"));
//       } else {
//         console.log("1. Usuário logado com sucesso!");
//         resolve({ email, senha });
//       }
//     }, 1500);
//   });
// };

// // 3. Função de VÍDEOS
// const getVideosPromise = (email: string): Promise<string[]> => {
//   return new Promise((resolve) => {
//     setTimeout(() => {
//       console.log("2. Buscando lista de vídeos para:", email);
//       resolve(["Video_TypeScript", "Video_Promises", "Video_AsyncAwait"]);
//     }, 2000);
//   })
// };

// // 4. Função de DETALHES
// const getVideoDetailsPromise = (video: string): Promise<VideoDetails> => {
//   return new Promise((resolve) => {
//     setTimeout(() => {
//       console.log("3. Buscando detalhes do vídeo:", video);
//       resolve({ titulo: video, duracao: "15:00" });
//     }, 2500);
//   });
// };

// // --- EXECUTANDO EM SEQUÊNCIA (O ENCADEAMENTO) ---

// loginUserPromise("felipe@gmail.com", "1234567")
//   .then((user) => {
//     // O login resolveu! Agora pedimos os vídeos e RETORNAMOS a promessa
//     return getVideosPromise(user.email); 
//   })
//   .then((videos) => {
//     // Esse 'videos' é o resultado da getVideosPromise
//     console.log("Lista recebida:", videos);
//     return getVideoDetailsPromise(videos[0]); // Pede detalhe do primeiro vídeo
//   })
//   .then((detalhes) => {
//     // Esse 'detalhes' é o objeto VideoDetails final
//     console.log("Resultado Final:", detalhes);
//   })
//   .catch((error) => {
//     // Se qualquer uma das 3 funções falhar, o erro cai aqui
//     console.log("Caiu no catch:", error.message);
//   });


interface Pedido {
  id: number,
  item: string
}
 interface Pagamento {
  pedidoId: number,
  aprovado: boolean
 } 
 interface Entrega{
  pedidoId: number,
  previsao: number,
  entregador: string
 }


const fazerPedido = (item: string): Promise<Pedido> => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (item === "") {
        reject(new Error("Pedido inválido: item não pode ser vazio"));
      } else {
        console.log("1. Pedido feito:", item);
        resolve({ id: 101, item });
      }
    }, 1000);
  });
};
const PagamentoStatus = (pedido: Pedido): Promise<Pagamento> =>{

    return new Promise((resolve, reject) => {
      const aprovado = false
      setTimeout(() => {
        if(aprovado){
          console.log("Pagamento concluido")
          resolve({ pedidoId: pedido.id, aprovado });
        }
        else{
          reject(console.log("Pagamento não foi concluido"))
        }
  
      }, 1500);
  })

}

const EntregaPedido = (pagamento: Pagamento):Promise<Entrega> => {
  return new Promise((resolve)=>{
    setTimeout(() => {
    console.log("O entregador saiu para entrega do pedido" )
    resolve({ pedidoId: pagamento.pedidoId, previsao: 15, entregador: "Felipe" })
    }, 1500);
  })
}

const Processamento = async () => {
  try {

  const pedido = await fazerPedido("Açai com nutela")
  const pagamento = await PagamentoStatus(pedido) 
  const entrega = await EntregaPedido(pagamento)
  
  console.log(entrega)
  } catch (error) {
    console.log({ error })
  }
}

Processamento();