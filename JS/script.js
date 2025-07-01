//codigo da lista de tarefas
document.addEventListener("DOMContentLoaded",() =>{
const botaoAdicionar = document.getElementById("btnAdicionar");
  // criacao da div e ul  fora do click 
    const novaDiv = document.createElement("div"); 
        novaDiv.classList.add("nova-div"); 
    const novaUl = document.createElement("ul");  
    document.body.appendChild(novaDiv);   
            novaDiv.appendChild(novaUl); 

    // criado o botao com evento click 
    botaoAdicionar.addEventListener("click", () => {
        const valorInput = document.getElementById("InputTarefas").value ;
        if (valorInput === "") {
            alert("digite alguma coisa");
            return;
        }
        //pegando data e hora do pc
        const criacao = new Date();
        const dataCriacao = criacao.toLocaleString();
        
        // criando um span para a data e hora
        const spanData = document.createElement("span");
        spanData.classList.add("Data-Criacao");
        spanData.textContent = `(Criado em ${dataCriacao} )`;


        // criacao dos elementos definição de tipo e class           
        const novaLi = document.createElement("li");
        const labelCheck = document.createElement("label");
        labelCheck.classList.add("label-tarefa");
        const checkTask = document.createElement("input");
        checkTask.classList.add("check-tarefas");        
        checkTask.type = "checkbox";

        // botao para exluir tarefas 
        const botaoRemover = document.createElement("button");
        botaoRemover.textContent = "🗑️";
        botaoRemover.classList.add("btn-remover");
        novaLi.appendChild(botaoRemover);
        botaoRemover.addEventListener("click", () => {
            novaLi.remove();
        })
        
        //adiciona uma linha tarefa como concluida 
        checkTask.addEventListener("change", () =>{
            
            if (checkTask.checked) {
            labelCheck.classList.add("concluido");
            } else {
            labelCheck.classList.remove("concluido");
            }
        });
       
        //ordem de fluxo q ira aparecer no html DOM            
            novaUl.appendChild(novaLi);
            novaLi.appendChild(labelCheck);
            labelCheck.appendChild(checkTask);
            labelCheck.appendChild(document.createTextNode(" " + valorInput ));
            novaLi.appendChild(spanData);
            document.getElementById("InputTarefas").value = "";
            document.getElementById("InputTarefas").focus();
            

      
        
    });

});



