function expandeBusca(elemento){
    elemento.classList.add('aberto');
    elemento.classList.remove('fechado');
    document.getElementById('titulo-site').classList.remove('visivel');
    document.getElementById('titulo-site').classList.add('invisivel');
    document.getElementById('sessaoMenu').classList.remove('visivelMenu')
    document.getElementById('sessaoMenu').classList.add('invisivelMenu')
}

function fechaBusca(elemento){
    elemento.classList.add('fechado');
    elemento.classList.remove('aberto');
    document.getElementById('titulo-site').classList.remove('invisivel')
    document.getElementById('titulo-site').classList.add('visivel')
    document.getElementById('sessaoMenu').classList.remove('invisivelMenu')
    document.getElementById('sessaoMenu').classList.add('visivelMenu')
}
