function expandeBusca(elemento){
    console.log('funcionando')
    elemento.classList.add('aberto');
    elemento.classList.remove('fechado');
    document.getElementById('titulo-site').classList.remove('visivel');
    document.getElementById('titulo-site').classList.add('invisivel');
    document.getElementById('sessaoMenu').classList.remove('visivelMenu')
    document.getElementById('sessaoMenu').classList.add('invisivelMenu')
}

console.log('button.js')

function fechaBusca(elemento){
    elemento.classList.add('fechado');
    elemento.classList.remove('aberto');
    document.getElementById('titulo-site').classList.remove('invisivel')
    document.getElementById('titulo-site').classList.add('visivel')
    document.getElementById('sessaoMenu').classList.remove('invisivelMenu')
    document.getElementById('sessaoMenu').classList.add('visivelMenu')
}

$(document).ready(function(){
    $s('.swiperprev').click(function(){
        $('.cheers').find('div.item').swiperprev().
        addClass('item');
        $('.cheers').find('div.item').swipernext().
        addClass('item');
    })

    $s('.swipernext').click(function(){
        $('.cheers').find('div.item').swipernext().
        addClass('item'); 
        $('.cheers').find('div.item').swiperprevt().
        addClass('item');
    })
})