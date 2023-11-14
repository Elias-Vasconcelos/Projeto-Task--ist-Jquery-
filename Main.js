$(document).ready(function(){
    $('.Atividade').change(function(){
        let Valor = $('.Atividade').val();
        $('ul').append( `<li>
            <p> ${Valor} </p>
            <button class="Check"><img src="./Imagens/🦆 icon _check_.png" alt="check"></button>
            <button class="cancel"><img src="./Imagens/🦆 icon _cancel_.png" alt="cancel"></button>
        </li>`)
        $('.Atividade').val('')
    })
    
        $('ul').on('click','.cancel',function(){
        $(this).parent('li').fadeOut(1000);
        })
        
        $('ul').on('click','.Check', function(){
        $(this).parent('li').toggleClass('AtividadeConcluida');
    })
}) 