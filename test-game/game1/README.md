``` js
tt.navigateToScene({
    scene: "sidebar",
    success: (res) => {
        console.log("navigate to scene success");
        // 跳转成功回调逻辑
    },
    fail: (res) => {
        console.log("navigate to scene fail: ", res);
        // 跳转失败回调逻辑
    },
});
// 设置画布大小
const canvasWidth = 300;
const canvasHeight = 400;

// 贪吃蛇的初始设置
let snake = [{x: 150, y: 200}, {x: 140, y: 200}, {x: 130, y: 200}];
let dx = 10; // 每次移动的距离(X轴)
let dy = 0; // 每次移动的距离(Y轴)
let foodX;
let foodY;
let score = 0;

// 获取canvas元素并设置其宽高
const gameCanvas = tt.createCanvas()
const ctx = gameCanvas.getContext("2d");
gameCanvas.width = canvasWidth;
gameCanvas.height = canvasHeight;

// 游戏主函数
function main() {
    if (didGameEnd()) {
        // alert('游戏结束! 你的得分是: ' + score + '。点击确定重新开始。');
        document.location.reload(); // 重新加载页面以重启游戏
        return;
    }

    setTimeout(function onTick() {
        clearCanvas();
        drawFood();
        advanceSnake();
        drawSnake();

        // 递归调用main来不断更新游戏状态
        main();
    }, 100);
}

// 检查游戏是否结束
function didGameEnd() {
    for (let i = 4; i < snake.length; i++) {
        const didCollide = snake[i].x === snake[0].x && snake[i].y === snake[0].y;
        if (didCollide) return true;
    }

    const hitLeftWall = snake[0].x < 0;
    const hitRightWall = snake[0].x > canvasWidth - 10;
    const hitTopWall = snake[0].y < 0;
    const hitBottomWall = snake[0].y > canvasHeight - 10;

    return hitLeftWall || hitRightWall || hitTopWall || hitBottomWall;
}

// 清除画布
function clearCanvas() {
    ctx.fillStyle = "white";
    ctx.fillRect(0, 0, gameCanvas.width, gameCanvas.height);
}

// 绘制贪吃蛇
function drawSnake() {
    snake.forEach(part => {
        ctx.fillStyle = 'lightgreen';
        ctx.strokeStyle = 'darkgreen';
        ctx.fillRect(part.x, part.y, 10, 10);
        ctx.strokeRect(part.x, part.y, 10, 10);
    });
}

// 移动贪吃蛇
function advanceSnake() {
    const head = {x: snake[0].x + dx, y: snake[0].y + dy};
    snake.unshift(head);

    // 如果吃到食物，增加分数，否则移除尾部
    const didEatFood = snake[0].x === foodX && snake[0].y === foodY;
    if (didEatFood) {
        score += 10;
        createFood();
    } else {
        snake.pop();
    }
}

// 绘制食物
function drawFood() {
    ctx.fillStyle = 'red';
    ctx.fillRect(foodX, foodY, 10, 10);
}

// 随机生成食物位置
function createFood() {
    foodX = Math.round((Math.random() * (canvasWidth - 10)) / 10) * 10;
    foodY = Math.round((Math.random() * (canvasHeight - 10)) / 10) * 10;
}

// 初始化游戏
function init() {
    createFood();
    main();
}

// 监听键盘事件来控制贪吃蛇的方向
document.addEventListener("keydown", changeDirection);

function changeDirection(event) {
    const LEFT_KEY = 37;
    const RIGHT_KEY = 39;
    const UP_KEY = 38;
    const DOWN_KEY = 40;

    const keyPressed = event.keyCode;
    const goingUp = dy === -10;
    const goingDown = dy === 10;
    const goingRight = dx === 10;
    const goingLeft = dx === -10;

    if (keyPressed === LEFT_KEY && !goingRight) {
        dx = -10;
        dy = 0;
    }
    if (keyPressed === UP_KEY && !goingDown) {
        dx = 0;
        dy = -10;
    }
    if (keyPressed === RIGHT_KEY && !goingLeft) {
        dx = 10;
        dy = 0;
    }
    if (keyPressed === DOWN_KEY && !goingUp) {
        dx = 0;
        dy = 10;
    }
}

// 启动游戏
init();

```

## Autumn Forest: A Traditional Chinese Art Game
在"秋林"这个迷人的世界里，玩家将踏上一个独特的旅程，目标是收集树皮，同时巧妙地避开树心。游戏包含36片塑胶树皮、9片塑胶树心、1个塑胶树根和1支塑胶斧头，通过这些元素，将传统的中国艺术游戏带入生活。

### 游戏内容
- 36片塑胶树皮
- 9片塑胶树心
- 1个塑胶树根
- 1支塑胶斧头

### 目的
目标是收集尽可能多的树皮，而不是砍倒树心。

### 规则
1. 组装树，并将斧头交给起始玩家。
2. 使用斧头砍树时必须发出声音，一次只能砍两下。
3. 收集掉落的任何东西。树皮得+1分，树心扣-5分。
4. 进行三轮游戏，得分最高的玩家获胜。

### 游戏结束
当树上没有任何树皮时，游戏结束。

这个传统游戏不仅考验玩家的灵巧和策略，还通过其引人入胜的游戏玩法，让玩家沉浸在中国艺术的美丽之中。





### Game Content
- 36 Plastic Tree Barks
- 9 Plastic Tree Cores
- 1 Plastic Tree Root
- 1 Plastic Axe

### Objective
The aim is to collect as many tree barks as possible without chopping down the tree core.

### Rules
1. Assemble the tree, and hand the axe to the starting player.
2. The axe must make a sound when chopping; only two chops are allowed at a time.
3. Collect anything that falls off. Tree bark scores +1 point, while tree core deducts -5 points.
4. Play three rounds, and the player with the highest score wins.

### Game End
The game concludes when there are no more tree barks left on the tree.

This traditional game not only tests the players' dexterity and strategy but also immerses them in the beauty of Chinese art through its engaging gameplay.

















```