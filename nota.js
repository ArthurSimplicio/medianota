function entrar(){
    var nome = window.prompt('Qual ´w o nome do aluno(a)?')
    var n1 = Number(window.prompt(`Primeira nota de ${nome}:`))
    var n2 = Number(window.prompt(`Segunda nota de ${nome}:`))
    var res = document.getElementById('res')
    var m = (n1 + n2)/2
    if(m <3){
        res.innerHTML = `<h1>Analisando a situação de ${nome}</h1><p>Com as notas ${n1} e ${n2}, a média é ${m}</strong></p>Com média abaixo de 3,0, o aluno(a) está <strong id="rep">REPROVADO</rep>`
    }else if(m >=3 && m <=6){
        res.innerHTML = `<h1>Analisando a situação de ${nome}</h1><p>Com as notas ${n1} e ${n2}, a média é ${m}</strong></p>Com média entre 3,0 e 6,0, o aluno(a) está em <strong id="rec">RECUPERAÇÃO</strong>`
    }else{
        res.innerHTML = `<h1>Analisando a situação de ${nome}</h1><p>Com as notas ${n1} e ${n2}, a média é ${m}</strong></p>Com média acima de 6,0, o aluno(a) está <strong id="a">APROVADO</strong>`
    }
}
