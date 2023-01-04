
export default function Home({destaques}) {
  return (
    <div>
      {destaques.abilities[0].ability.name}
    </div>
  )
}

export async function getStaticProps(){
  let urlRequisicao   = 'https://pokeapi.co/api/v2/pokemon/ditto'
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

