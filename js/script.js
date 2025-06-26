// aqui onde incia o DOM  carregar 
document.addEventListener("DOMContentLoaded", () => {
    /* aqui esta a variaveis selecionando os elementos e  pegando os id  do botao
    e do input e mais o id do <ul>  todos estao declarado no html
    */        
    const botaoAdicionar = document.getElementById("btnAdicionar");
    const inputReceber = document.getElementById("receberTarefa");
    const lista = document.getElementById("listaDeTarefas");    

    // recupera no JSON os dados salvo no localStorage
    const tarefasSalvas = JSON.parse(localStorage.getItem("tarefas"));
        // verifica se tem alguma coisa salva no tarefasSalvas
        if (tarefasSalvas) {
            // pega cada tarefas do array e depois cria os elementos
            tarefasSalvas.forEach((tarefa) => {
                const novaLista = document.createElement("li");
                const meuSpan = document.createElement("span");

                meuSpan.textContent = tarefa.texto;
                if (tarefa.concluida) meuSpan.classList.add("concluida");

                meuSpan.addEventListener("click", function() {
                    this.classList.toggle("concluida");
                    atualizarLocalStorage();
                });

                const botaoExcluir = document.createElement("button");
                botaoExcluir.textContent = "🗑️";
                botaoExcluir.addEventListener("click", function() {
                    this.parentElement.remove();
                    atualizarLocalStorage();
                });

                novaLista.appendChild(botaoExcluir);
                novaLista.appendChild(meuSpan);
                lista.appendChild(novaLista);
            });
        }

    //funcao  que ira mexer no SPAN 
    function atualizarLocalStorage() {
        const tarefasDOM = document.querySelectorAll("li");//pegar todas as <li>
        const tarefas = [];//array  dos <li>
            tarefasDOM.forEach((li) => {
            const texto = li.querySelector("span").textContent;
            const concluida = li.querySelector("span").classList.contains("concluida");

            tarefas.push({
                texto: texto,
                concluida: concluida
            });
        });
        //salva das as tarefas adicionada
        localStorage.setItem("tarefas", JSON.stringify(tarefas));
    }

        //Botao addicionar e excluir
    botaoAdicionar.addEventListener("click", ( ) => {
            const valor = inputReceber.value.trim();

            if (valor !== "") {
                const novaLista = document.createElement("li");
                const meuSpan = document.createElement("span");
                //criando evento para quanddo clicar vai adicionar uma linha na palavra
                meuSpan.textContent = valor;
                    meuSpan.addEventListener("click", function(){
                        this.classList.toggle("concluida");
                        atualizarLocalStorage();
                    });
                //aqui foi criado o btn excluir  e removendo o elemento pai
                const botaoExcluir = document.createElement("button");
                botaoExcluir.textContent = "Excluir";
                botaoExcluir.addEventListener("click", function(){
                    this.parentElement.remove();
                    atualizarLocalStorage();
                });
                //aqui ira juntar tudo e mostra no navegador
                novaLista.appendChild(botaoExcluir);
                novaLista.appendChild(meuSpan);
                lista.appendChild(novaLista);
                atualizarLocalStorage();

                inputReceber.value = "";

        
            
            }


    });


});