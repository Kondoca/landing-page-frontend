/* Criação de uma timeline do GSAP para animações sincornizadas com o scroll */

var tl = gsap.timeline({
    scrollTrigger: {
        trigger: '.two',
        start: '0% 95%',
        end: '70% 50%',
        scrub: true,
        markers: true /*DEPURAÇÃO*/
    }
});

tl.to(
    '#fanta',
    {
        top: '120%', /* Animação para a imagem da Fanta sair da tela */
        left: '0%', /* Animação para a imagem da Fanta sair da tela */
    },
'orange' /* Sincronização da animação com a imagem da laranja */
);

tl.to(
    '#laranja-cortada',
    {
        top: '160%', /* Animação para a imagem da laranja cortada sair da tela */
        left: '23%',
    },
'orange' /* Sincronização da animação com a imagem da laranja */
);

tl.to(
    '#laranja',
    {
        width: '15%', /* Animação para a imagem da laranja diminuir de tamanho */
        top: '160%', /* Animação para a imagem da laranja sair da tela */
        rigth: '10%',
    },
'orange' /* Sincronização da animação com a imagem da laranja */
);

tl.to(
    '#folha',
    {
        top: '110%', /* Animação para a imagem da folha sair da tela */
        rotate: '530deg', /* Animação para a imagem da folha rotacionar */
        left: '70%',
    },
'orange' /* Sincronização da animação com a imagem da laranja */
);

tl.to(
    '#folha2',
    {
        top: '110%', /* Animação para a imagem da folha sair da tela */
        rotate: '530deg', /* Animação para a imagem da folha rotacionar */
        left: '0%',
    },
'orange' /* Sincronização da animação com a imagem da laranja */
);

/*NOVA TIMELINE PARA ANIMAÇÕES DA TELA 3*/

var tl2 = gsap.timeline({
    scrollTrigger: {
        trigger: '.three',
        start: '0% 95%',
        end: '20% 50%',
        scrub: true,
        markers: true /*DEPURAÇÃO*/
    }
});

tl2.from(
    '.lemon1',
    {
        rotate: '-90deg', /* Animação para a imagem do limão rotacionar */
        left: '-100%', /* Animação para a imagem do limão sair da tela */
        top: '110%', /* Animação para a imagem do limão sair da tela */
    },
'ca' /* Sincronização da animação com a imagem do limão */
);

tl2.from(
    '#cocacola',
    {
        rotate: '-90deg', /* Animação para a imagem do limão rotacionar */
        left: '-100%', /* Animação para a imagem do limão sair da tela */
        top: '110%', /* Animação para a imagem do limão sair da tela */
    },
'ca' /* Sincronização da animação com a imagem do limão */
);

tl2.from(
    '.lemon2',
    {
        rotate: '90deg', /* Animação para a imagem do limão rotacionar */
        left: '100%', /* Animação para a imagem do limão sair da tela */
        top: '110%', /* Animação para a imagem do limão sair da tela */
    },
'ca' /* Sincronização da animação com a imagem do limão */
);

tl2.from(
    '#pepsi',
    {
        rotate: '90deg', /* Animação para a imagem do limão rotacionar */
        left: '60%', /* Animação para a imagem do limão sair da tela */
        top: '110%', /* Animação para a imagem do limão sair da tela */
    },
'ca' /* Sincronização da animação com a imagem do limão */
);

tl2.to(
    '#laranja-cortada',
    {
        width: '18%', /* Animação para a imagem da laranja cortada aumentar de tamanho */
        left: '41.5%', /* Animação para a imagem da laranja cortada se posicionar no centro da tela */
        top: '200%', /* Animação para a imagem da laranja cortada sair da tela */
    },
'ca' /* Sincronização da animação com a imagem do limão */
);

tl2.to(
    '#fanta',
    {
        width: '25%', /* Animação para a imagem da Fanta aumentar de tamanho */
        left: '38%', /* Animação para a imagem da Fanta se posicionar no centro da tela */
        top: '193%', /* Animação para a imagem da Fanta sair da tela */
    },
'ca' /* Sincronização da animação com a imagem do limão */
);