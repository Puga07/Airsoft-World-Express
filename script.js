
function realizarLogin(event) {
    
    event.preventDefault(); 
    
    
    document.getElementById('tela-login').style.display = 'none';
    
    
    document.getElementById('tela-historia').style.display = 'block';
}



let armaAtual = ''; 
let precoBase = 0;
let alcanceBase = 0;

function abrirGunsmith(idArma) {
    armaAtual = idArma;
    
    const titulo = document.getElementById('modal-titulo-arma');
    const imagem = document.getElementById('modal-img-arma');
    const desc = document.getElementById('modal-desc-arma');
    
    const lblStat1 = document.getElementById('lbl-stat1'); const txtStat1 = document.getElementById('txt-stat1');
    const barOrig1 = document.getElementById('bar-orig1'); const barFill1 = document.getElementById('bar-fill1');
    
    const lblStat2 = document.getElementById('lbl-stat2'); const txtStat2 = document.getElementById('txt-stat2');
    const barOrig2 = document.getElementById('bar-orig2'); const barFill2 = document.getElementById('bar-fill2');

    const lblStat3 = document.getElementById('lbl-stat3'); const txtStat3 = document.getElementById('txt-stat3');
    const barOrig3 = document.getElementById('bar-orig3'); const barFill3 = document.getElementById('bar-fill3');

    const textAcc1 = document.getElementById('text-acc1');
    const textAcc2 = document.getElementById('text-acc2');
    const avisoComparativo = document.getElementById('comparativo-alcance');
    
    document.getElementById('check-acc1').checked = false;
    document.getElementById('check-acc2').checked = false;
    avisoComparativo.innerText = "";
    barFill1.style.backgroundColor = "#00E676";

    
    if (idArma === 'm4a1') {
        titulo.innerText = "Rifle M4A1";
        imagem.src = "./img/m4a1.png";
        desc.innerHTML = "<strong>Informações do Equipamento:</strong><br><br>O clássico Rifle M4A1 em sua versão AEG de alto desempenho. Possui corpo em polímero de alta densidade, gearbox de metal V2 e sistema de hop-up ajustável.";
        
        precoBase = 1500.00;
        alcanceBase = 70;

        lblStat1.innerText = "Alcance Eficaz"; txtStat1.innerText = "50m"; barOrig1.style.width = "70%"; barFill1.style.width = "70%";
        lblStat2.innerText = "Capacidade"; txtStat2.innerText = "300 BBs"; barOrig2.style.width = "90%"; barFill2.style.width = "90%";
        lblStat3.innerText = "Bateria"; txtStat3.innerText = "7.4v Lipo"; barOrig3.style.width = "60%"; barFill3.style.width = "60%";

        textAcc1.innerHTML = `<strong>Silenciador OS-9</strong> (+10m) - <span style="color: #00E676;">R$ 150,00</span>`;
        textAcc2.innerHTML = `<strong>Mira Red Dot</strong> - <span style="color: #00E676;">R$ 250,00</span>`;

    } else if (idArma === 'g17') {
        titulo.innerText = "Pistola Glock G17";
        imagem.src = "./img/glock.jpg";
        desc.innerHTML = "<strong>Informações do Equipamento:</strong><br><br>Pistola com sistema Blowback a Green Gas. Possui slide em metal e corpo em polímero, garantindo realismo no recuo e excelente durabilidade em combates confinados (CQB).";
        
        precoBase = 850.00;
        alcanceBase = 40;

        lblStat1.innerText = "Alcance Eficaz"; txtStat1.innerText = "25m"; barOrig1.style.width = "40%"; barFill1.style.width = "40%";
        lblStat2.innerText = "Capacidade"; txtStat2.innerText = "22 BBs"; barOrig2.style.width = "25%"; barFill2.style.width = "25%";
        lblStat3.innerText = "Consumo de Gás"; txtStat3.innerText = "Médio"; barOrig3.style.width = "50%"; barFill3.style.width = "50%";

        textAcc1.innerHTML = `<strong>Cano de Precisão</strong> (+5m) - <span style="color: #00E676;">R$ 120,00</span>`;
        textAcc2.innerHTML = `<strong>Lanterna Tática</strong> - <span style="color: #00E676;">R$ 180,00</span>`;

    } else if (idArma === 'L96') {
        titulo.innerText = "Sniper L96";
        imagem.src = "./img/sniper_L96.png";
        desc.innerHTML = "<strong>Informações do Equipamento:</strong><br><br>Rifle de precisão com ação por mola (Spring Bolt Action). Possui cano longo de precisão, corpo em polímero reforçado e trilho superior para acoplagem de lunetas. Ideal para atiradores de elite.";
        
        precoBase = 2500.00;
        alcanceBase = 80;

        lblStat1.innerText = "Alcance Eficaz"; txtStat1.innerText = "60m"; barOrig1.style.width = "80%"; barFill1.style.width = "80%";
        lblStat2.innerText = "Capacidade"; txtStat2.innerText = "20 BBs"; barOrig2.style.width = "20%"; barFill2.style.width = "20%";
        lblStat3.innerText = "Ação / Sistema"; txtStat3.innerText = "Mola (Spring)"; barOrig3.style.width = "100%"; barFill3.style.width = "100%";

        textAcc1.innerHTML = `<strong>Silenciador</strong> (+10m) - <span style="color: #00E676;">R$ 120,00</span>`;
        textAcc2.innerHTML = `<strong>Luneta Telescópica</strong> - <span style="color: #00E676;">R$ 180,00</span>`;
    }

    atualizarArma(); 
    document.getElementById('gunsmith-modal').style.display = 'flex';
}

function fecharGunsmith() {
    document.getElementById('gunsmith-modal').style.display = 'none';
}

function atualizarArma() {
    let temAcc1 = document.getElementById('check-acc1').checked;
    let temAcc2 = document.getElementById('check-acc2').checked;
    
    let precoAtual = precoBase;
    let novoAlcance = alcanceBase;
    
    const barraAlcance = document.getElementById('bar-fill1');
    const avisoComparativo = document.getElementById('comparativo-alcance');
    
    if (armaAtual === 'm4a1') {
        if (temAcc1) { 
            precoAtual += 150.00; novoAlcance += 15; avisoComparativo.innerText = " (+10m)"; barraAlcance.style.backgroundColor = "#FF6600";
        } else {
            avisoComparativo.innerText = ""; barraAlcance.style.backgroundColor = "#00E676";
        }
        if (temAcc2) precoAtual += 250.00; 
    } 
    else if (armaAtual === 'g17') {
        if (temAcc1) { 
            precoAtual += 120.00; novoAlcance += 15; avisoComparativo.innerText = " (+5m)"; barraAlcance.style.backgroundColor = "#FF6600";
        } else {
            avisoComparativo.innerText = ""; barraAlcance.style.backgroundColor = "#00E676";
        }
        if (temAcc2) precoAtual += 180.00; 
    }
    else if (armaAtual === 'L96') {
        if (temAcc1) { 
            precoAtual += 120.00; novoAlcance += 15; avisoComparativo.innerText = " (+10m)"; barraAlcance.style.backgroundColor = "#FF6600";
        } else {
            avisoComparativo.innerText = ""; barraAlcance.style.backgroundColor = "#00E676";
        }
        if (temAcc2) precoAtual += 180.00; 
    }
    
    barraAlcance.style.width = novoAlcance + '%';
    document.getElementById('modal-preco').innerText = "R$ " + precoAtual.toFixed(2).replace('.', ',');
}

function adicionarAoCarrinho() {
    alert("Arma customizada adicionada ao carrinho!");
    fecharGunsmith();
    document.querySelector('nav a:last-child').innerText = "🛒 Carrinho (1)";
}
