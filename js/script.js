function calcular() {
    const nota1 = parseFloat(document.getElementById('nota1').value);
    const nota2 = parseFloat(document.getElementById('nota2').value);
    const nota3 = parseFloat(document.getElementById('nota3').value);
    const frequencia = parseFloat(document.getElementById('frequencia').value);

    if (isNaN(nota1) || isNaN(nota2) || isNaN(nota3) || isNaN(frequencia)) {
        alert("Por favor, preencha todas as notas e a frequência corretamente.");
        return;
    }

    const media = (nota1 + nota2 + nota3) / 3;
    const resultadoMedia = document.getElementById('media');
    const resultadoSituacao = document.getElementById('situacao');

    resultadoMedia.textContent = `Média: ${media.toFixed(2)}`;
    
    if (media >= 7 && frequencia >= 75) {
        resultadoSituacao.textContent = "Aprovado!";
        resultadoSituacao.style.color = "#4CAF50";  
    } else if (frequencia < 75) {
        resultadoSituacao.textContent = "Reprovado por frequência!";
        resultadoSituacao.style.color = "#E74C3C";  
    } else {
        resultadoSituacao.textContent = "Reprovado por média!";
        resultadoSituacao.style.color = "#E74C3C";  
    }
}
