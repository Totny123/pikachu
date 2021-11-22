let string = `/*
 * 首先，需要准备皮卡丘的皮
 */
 .container {
    position: fixed;
    left:0;
    bottom:0;
    background-color: #ffe600;
    min-width: 100vw;
    min-height: 50vh;
}
/*
 * 接下来，画皮卡丘的鼻子
 */
.nose {
    position: absolute;
    top: 200px;
    left: 50%;
    transform: translateX(-50%);
    border: 15px solid transparent;
    border-top-color: #000000;
    border-radius: 50%;
}
/*
 * 接下来，画皮卡丘的眼睛
 */
.eye {
    position: absolute;
    top: 172px;
    left: 50%;
    transform: translateX(-50%);
    width: 60px;
    height: 60px;
    border-radius: 50%;
    background-color: #2e2e2e;
    border: 3px solid #000000;
}
/*
 * 眼睛里面的珠子
 */
.eye::after {
    content: '';
    position: absolute;
    top: 2px;
    left: 5px;
    display: block;
    width: 30px;
    height: 30px;
    background-color: #ffffff;
    border-radius: 50%;
    border: 3px solid #000000;
}
/*
 * 左眼在左边（废话）
 */
.eye.left {
    margin-left: -120px;
}
/*
 * 右眼在右边（废话）
 */
.eye.right {
    margin-left: 120px;
}
/*
 * 然后，画皮卡丘的脸
 */
.cheek {
    position: absolute;
    top: 294px;
    left: 50%;
    transform: translateX(-50%);
    width: 88px;
    height: 88px;
    border-radius: 50%;
    background-color: #ff0000;
    border: 3px solid #000000;
}
/*
 * 将脸放到正确的位置
 */
.cheek.left {
    margin-left: -160px;
}
.cheek.right {
    margin-left: 160px;
}
/*
 * 上嘴唇
 */
.mouth .lip {
    position: absolute;
    top: -17px;
    left: 50%;
    width: 90px;
    height: 40px;
    border: 3px solid transparent;
    border-bottom-color: #000000;
    background-color: #ffe600;
    z-index: 9;
}
.mouth .lip.left {
    transform: translateX(-50%) rotate(-25deg);
    margin-left: -48px;
    border-bottom-left-radius: 80px 40px;
}
.mouth .lip.right {
    transform: translateX(-50%) rotate(25deg);
    margin-left: 48px;
    border-bottom-right-radius: 80px 40px;
}
.mouth .lip::after {
    content: '';
    position: absolute;
    bottom: 0;
    display: block;
    width: 5px;
    height: 20px;
    background-color: #ffe600;
    border: 1px solid #ffe600;
}
.mouth .lip.left::after {
    right: -3px;
}
.mouth .lip.right::after {
    left: -3px;
}
/*
 * 下嘴唇
 */
.mouth {
    position: absolute;
    top: 240px;
    left: 50%;
    transform: translateX(-50%);
    width: 300px;
    height: 300px;
    overflow: hidden;
}
.mouth .down {
    position: absolute;
    top: -800px;
    left: 50%;
    transform: translateX(-50%);
    border-radius: 100%;
    width: 200px;
    height: 1000px;
    border: 3px solid #000000;
    background-color: #9b000a;
    overflow: hidden;
}
/*
 * 小舌头
 */
.mouth .down .tongue {
    position: absolute;
    left: 50%;
    bottom: -10px;
    transform: translateX(-50%);
    width: 180px;
    height: 180px;
    background-color: #ff485f;
    border-radius: 100%;
}/*
 * 好了，这只皮卡丘送给你
 */`
export default string