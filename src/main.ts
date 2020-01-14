
// Phaser3のインポート //
import * as Phaser from "phaser";


// Phaser3のゲームクラスの記述（Phaser.Gameクラスを継承したMainクラスの記述）
class Main extends Phaser.Game {
  constructor() {

    // Phaser のコンフィグ
    const config: Phaser.Types.Core.GameConfig = {
      type: Phaser.AUTO,
      width: 800, // ゲームの幅
      height: 600 // ゲーム高さ
    };
    super(config);


  }
}