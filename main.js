(function () {
    var carouselContent = [
        {path: 'res/img/portfolio/clipit1.png'},
        {path: 'res/img/portfolio/clipit4.png'},
        {path: 'res/img/portfolio/hercab4.png'},
    ];

    var portfolioContent = [
        {
            id: 0,
            title: 'Androino',
            subtitle: 'Projeto de Pesquisa. Coordenador: Rafael C. Pinto. 2015',
            cover: 'res/img/portfolio/androino1.png',
            description: 'Biblioteca de comunicação entre dispositivos Arduino e Android desenvolvida em Java. Com apenas uma 2 linhas de código é possivel enviar dados tanto via Bluetooth quanto via USB serial. Foi desenvolvida uma aplicação teste para apresentar as funcionalidades da biblioteca: uma plataforma robótica de telepresença controlada, pelo celular acoplado, via Internet.',
            images: [
                {path: 'res/img/portfolio/androino1.png'},
                {path: 'res/img/portfolio/androino2.png'},
                {path: 'res/img/portfolio/androino3.png'}
            ]
        },
        {
            id: 1,
            title: 'BrainSmart',
            subtitle: 'Projeto pessoal. 2014',
            cover: 'res/img/portfolio/brainsmart1.png',
            description: '<em>Crossplatform</em> desenvolvido em JavaScript, o <em>BrainSmart</em> é um app de anotações pessoais, permitindo anexar arquivos e páginas da Web. Em sua versão desktop, oferece a funcionalidade de Widgets.',
            images: [
                {path: 'res/img/portfolio/brainsmart1.png'},
                {path: 'res/img/portfolio/brainsmart2.png'}
            ]
        },
        {
            id: 2,
            title: 'Breadsy',
            subtitle: 'por Disrupt Code e Rafael Leite. 2015',
            cover: 'res/img/portfolio/breadsy2.jpg',
            description: 'Aplicação desenvolvida com Ionic Framework, mostra em mapa as diversas padarias da cidade (via Google Maps) cadastradas no sistema, possibilitando adicioná-las em favorito. Ao favoritar, o usuário passa a receber notificações sobre quando os produtos desta padaria estão prontos, facilitando a compra.',
            images: [
                {path: 'res/img/portfolio/breadsy1.jpg'},
                {path: 'res/img/portfolio/breadsy2.jpg'},
                {path: 'res/img/portfolio/breadsy3.png'},
                {path: 'res/img/portfolio/breadsy4.png'},
            ]
        },
        {
            id: 3,
            title: 'ClipIt',
            subtitle: 'Trabalho de Conclusão de Curso. Patente. 2016',
            cover: 'res/img/portfolio/clipit1.png',
            description: 'Desenvolvido com Ionic Framework, o ClipIt, junto a um chaveiro inteligente, notifica o usuário ao perder algum objeto pessoal. Isso se deve à comunicação bluetooth de ~25 metros. Dentro deste raio, o aplicativo possibilita a procura do objeto sinalizando-o com sinais sonoros. Com o objeto perdido, o usuário pode consultar a última localização onde esteve conectado com o seu pertence.',
            images: [
                {path: 'res/img/portfolio/clipit1.png'},
                {path: 'res/img/portfolio/clipit2.png'},
                {path: 'res/img/portfolio/clipit3.png'},
                {path: 'res/img/portfolio/clipit4.png'},
            ]
        },
        {
            id: 4,
            title: 'FlappyLaura',
            subtitle: 'Jogo. Projeto Pessoal. 2014',
            cover: 'res/img/portfolio/flappy1.png',
            description: 'Inspirado no jogo <em>Flappy Bird</em>, este jogo possui a dinâmica de desviar dos obstáculos utilzando o <em>touch</em>. Além disso, possui itens que interferem no jogo como ataques <em>laser</em> para destruir os obstáculos, <em>player</em> 2, moedas, inimigos e fases especiais. Desenvolvido com Construct 2, possui versão Desktop, Android, Windows Phone e Web.',
            images: [
                {path: 'res/img/portfolio/flappy1.png'},
                {path: 'res/img/portfolio/flappy2.png'},
                {path: 'res/img/portfolio/flappy3.png'},
            ]
        },
        {
            id: 5,
            title: 'HerCab',
            subtitle: 'Projeto Pessoal. +Leonardo Quevedo. 2016',
            cover: 'res/img/portfolio/hercab1.png',
            description: '',
            images: [
                {path: 'res/img/portfolio/hercab1.png'},
                {path: 'res/img/portfolio/hercab2.png'},
                {path: 'res/img/portfolio/hercab3.png'},
                {path: 'res/img/portfolio/hercab4.png'},
            ]
        },
        {
            id: 6,
            title: 'Material Walkthrough',
            subtitle: 'Projeto Pessoal. +Filipe de Oliveira. 2016',
            cover: 'res/img/portfolio/material.png',
            description: 'Inspirado no Material Design, o <em>Material Walkthrough</em> é um plugin jquery <em>open-source</em> que auxilia os usuários realizando explicações dos elementos da tela. Com uma chamada jQuery, o desenvolvedor consegue realizar um walktrough, personalizando cor e conteúdo.',
            images: [
                {path: 'res/img/portfolio/material.png'}
            ]
        },
    ];

    function init() {
        var wow = new WOW();
        wow.init();
        carouselLoader();
        portfolioLoader();
    }

    function carouselLoader() {
        $('#carousel-imgs').compile({images: carouselContent});
        $('#carousel-imgs > .item:first-child').addClass('active');
    }

    function portfolioLoader() {
        $('#portfolio-content').compile({content: portfolioContent});
    }

    window.seeDetails = function(id) {
        $('#details-modal').compile(portfolioContent[id]);
        //noinspection JSUnresolvedFunction
        $('#lightgallery').lightGallery();
    };

    init();
})();