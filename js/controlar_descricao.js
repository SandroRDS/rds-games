var delayDescricao;

for(var i = 1; i <= 6; i++)
{
    var descricao = document.querySelector(`#projeto_${i}`);
    descricao.onmouseenter = mostrarDescricao;
    descricao.onmouseleave = esconderDescricao;
    console.log(descricao)
}

function mostrarDescricao(evento)
{
    var id = evento.target.id;
    var id_dividido = id.split("_");
    numeroProjeto = id_dividido[1];

    descricao = document.querySelector(`#descricao${numeroProjeto}`);
    imagem = document.querySelector(`#projeto_${numeroProjeto} .gameplay`);

    delayDescricao = setTimeout(function(){
        descricao.style.opacity = "100%";
        imagem.style.opacity = "100%";
    }, 650)
}

function esconderDescricao(evento)
{
    clearTimeout(delayDescricao);

    var id = evento.target.id;
    var id_dividido = id.split("_");
    numeroProjeto = id_dividido[1];

    descricao = document.querySelector(`#descricao${numeroProjeto}`);
    imagem = document.querySelector(`#projeto_${numeroProjeto} .gameplay`);

    descricao.style.opacity = "0";
    imagem.style.opacity = "0";
}

