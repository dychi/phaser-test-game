
// Phaser3のインポート //
import * as Phaser from "phaser";
import {Preload} from "./scene/preload";


// Phaser3のゲームクラスの記述（Phaser.Gameクラスを継承したMainクラスの記述）
class Main extends Phaser.Game {
  constructor() {

    // Phaser のコンフィグ
    const config: Phaser.Types.Core.GameConfig = {
      type: Phaser.AUTO,
      width: 800, // ゲームの幅
      height: 600 // ゲーム高さ
    };
    super(config); // Phaser.Gameにコンフィグを渡す


    // シーンにキーを割り振って登録
    this.scene.add("preload", Preload, false);

    // シーンをスタート
    this.scene.start("preload");
  }
}

// ブラウザでDOM描画後に呼び出される
window.onload = () => {
  // Mainクラスのインスタンスの生成
  const GameApp: Phaser.Game = new Main();
};