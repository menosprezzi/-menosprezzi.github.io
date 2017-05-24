(function () {
    var loader;
    var stage;
    var wall = [[]];
    var bricksVariantY = [[]];
    var colors = ['blue', 'red', 'green', 'yellow', 'none'];

    function init() {
        stage = new createjs.Stage("lego-anm");
        stage.canvas.width = document.querySelector("#lego-anm").parentElement.clientWidth;
        stage.canvas.height = document.querySelector("#lego-anm").parentElement.clientHeight;

        var manifest = [
            {
                src: "res/img/blue2x1.png",
                id: "blue2x1"
            },
            {
                src: "res/img/green2x1.png",
                id: "green2x1"
            },
            {
                src: "res/img/red2x1.png",
                id: "red2x1"
            },
            {
                src: "res/img/yellow2x1.png",
                id: "yellow2x1"
            }
        ];

        loader = new createjs.LoadQueue(true);
        loader.addEventListener("complete", onLoad);
        loader.loadManifest(manifest, true);

        window.addEventListener('resize', function () {
            delete stage;
            stage = new createjs.Stage("lego-anm");
            stage.canvas.width = document.querySelector("#lego-anm").parentElement.clientWidth;
            stage.canvas.height = document.querySelector("#lego-anm").parentElement.clientHeight;
            onLoad();
        });

        createjs.Ticker.addEventListener("tick", loop);
    }

    function onLoad() {
        var blockBase = new createjs.Bitmap(loader.getResult("blue2x1"));
        var numbersOfXBlocks = Math.ceil(stage.canvas.width / (blockBase.image.width * 0.5));
        var numbersOfYBlocks = Math.ceil(stage.canvas.height / (blockBase.image.height * 0.10));

        var yAmount = stage.canvas.height - (blockBase.image.height * 0.25);
        for (var row = 0; row < numbersOfYBlocks; row++) {
            wall[row] = [];
            bricksVariantY[row] = [];
            for (var col = 0; col < numbersOfXBlocks; col++) {
                colors.shuffle();
                wall[row][col] = new
                createjs.Bitmap(loader.getResult(colors[0] + "2x1"));
                wall[row][col].scaleX = 0.5;
                wall[row][col].scaleY = 0.5;
                bricksVariantY[row][col] = {
                    variantAmount: 0,
                    correctYPostion: 0
                };
                if (row > 0) {
                    var thisBrickY;
                    if (Math.random() * 10 > 5) {
                        bricksVariantY[row][col].variantAmount = Math.abs(Math.random() * 100) * blockBase.image.height * 0.15;
                        bricksVariantY[row][col].correctYPostion = yAmount;
                        thisBrickY = yAmount + bricksVariantY[row][col].variantAmount;
                    } else {
                        thisBrickY = yAmount;
                    }

                    wall[row][col].y = thisBrickY + bricksVariantY[row - 1][col].variantAmount;
                } else {
                    wall[row][col].y = yAmount;
                }
                wall[row][col].x = ((blockBase.image.width * 0.5) * col) + 10 * col;
                stage.addChild(wall[row][col]);
            }
            yAmount = yAmount - (blockBase.image.height * 0.15);
        }

        stage.update();

        for (var row = 0; row < numbersOfYBlocks; row++) {
            for (var col = 0; col < numbersOfXBlocks; col++) {
                if (bricksVariantY[row][col].variantAmount > 0) {
                    var oldY = wall[row][col].y;
                    createjs.Tween.get(wall[row][col], {
                            loop: true
                        })
                        .to({
                            y: bricksVariantY[row][col].correctYPostion
                        }, 2000, createjs.Ease.getPowInOut(4))
                        .to({
                            y: oldY
                        }, 2000, createjs.Ease.getPowInOut(4));
                }
            }
        }
    }

    function loop() {
        stage.update();
    }

    init();
})();