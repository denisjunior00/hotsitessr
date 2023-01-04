
export default function Home({destaques}) {
  return (
    <div>
      Informação por ServerSide  ---
      Anuncio {destaques[0].vei_id}
    </div>
  )
}

export async function getStaticProps(){
  let urlRequisicao   = 'https://dev.shopcar.com.br/webservice/shopcar_multiplos.php'
let lojaId          = ["1722"]
  try {
    let body = JSON.stringify({
      acao : "destaques"
      , loja : lojaId
      , resultados : 8
    })  

    const data = await fetch(urlRequisicao,{
      method: 'POST',
      headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
      body: body
    })

    const destaques = await data.json()


    return {    
      props: {destaques}
    }
  } catch(e) {
    return {
      notFound: true
    }
  }
  
  
}

