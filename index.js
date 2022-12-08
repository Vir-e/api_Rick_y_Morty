console.log('he cargado!!!!!!')

class API{

    

    get(pag){
        //let pag=34
        //const main = document.querySelector("main");
        
        fetch("https://rickandmortyapi.com/api/character/?page="+pag)
        //fetch("api/characters")
        .then((response) => response.json())
        .then((data)=> api.agregarDatos(data,pag))  // para mostarlos por consola del navegaodr => console.log('response', data))
/*
        fetch("https://rickandmortyapi.com/api/character/?page="+pag)
        //fetch("api/characters")
        .then((response) => response.json())
        .then((data)=> console.log('response',data))  // para mostarlos por consola del navegaodr => console.log('response', data))*/

    }

    


    agregarDatos(data,pag){

       // if(main.hasChildNodes){}  SE PODRIA PROBAR DESDE AQUI PARA COMPROBAR SI TIENE NODOS HIJOS Y BORRARLOS

        data.results.forEach(personaje =>{
            
            const main = document.querySelector("#main");
            
            const article = document.createRange().createContextualFragment(/*html*/`
                <article>
                    <div class="contenedorImg">
                        <img src="${personaje.image}" alt="Personaje"/>
                    </div>
                    <span class="txtPers">${personaje.name}</span>
                </article>
                `
            )
            if(pag!=1 || x==false){
                
                const art = document.querySelector("article");
                
                art.remove();
                
            }
           

            
            
            main.appendChild(article);

        
        })

        

    }







}
let x=true;
let pag =1;
const api = new API();

function iniciar(){

    const btnSig = document.getElementById("btnSig");
    btnSig.addEventListener("click",SigPag);
    console.log("LLegue aqui")

    const btnAnt = document.getElementById("btnAnt");
    btnAnt.addEventListener("click",AntPag);

}

function SigPag(){
    if(pag>0 && pag<43){
        pag++;
        x=false;
        api.get(pag);
        console.log("LLegue aqui2")
    }
   
    
}


function AntPag(){
    if(pag>1){
        pag--;
        api.get(pag);
        console.log("llegueaqui anterior")

    }
   


}



api.get(pag);

//

