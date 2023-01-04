export async function getStaticProps(){
  let urlRequisicao   = 'https://api-dev.infoimoveis.com.br/imoveis'
  let lojaId          = ["1722"]
  try {
    let body = JSON.stringify({
      acao : "destaques"
      , loja : lojaId
      , resultados : 8
    })  

    const data = await fetch(urlRequisicao)
    const destaques = await data.json()
    console.log(destaques)
    return {    
      props: {destaques}
    }
  } catch(e) {
    return {
      notFound: true
    }
  }
  
  
}

export default function Home({destaques}) {
  return (
    <div>
      {destaques.resultados[0].id}
    </div>
  )
}
