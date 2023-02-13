use std::{thread, time};

const FIELD_WIDTH: usize = 15;
const FIELD_HEIGHT: usize = 23;

type Field = [[usize; FIELD_WIDTH]; FIELD_HEIGHT];

mod piece;

use piece::{PIECES, PieceKind};

struct Position {
    x: usize,
    y: usize,
}

// 壁やピースに衝突すればtrueを返す
fn is_collision(field: &Field, position: &Position, piece: PieceKind) -> bool {
    for y in 0..4 {
        for x in 0..4 {
            if field[y+position.y+1][x+position.x] & PIECES[piece as usize][y][x] == 1 {
                return  true;
            }
        }
    }

    false
}

fn main() {
    // 初期フィールド
    // y軸 : 22（壁1、空白21）
    // x軸 : 15（壁2、空白13）
    let field = [
        [1,0,0,0,0,0,0,0,0,0,0,0,0,0,1],
        [1,0,0,0,0,0,0,0,0,0,0,0,0,0,1],
        [1,0,0,0,0,0,0,0,0,0,0,0,0,0,1],
        [1,0,0,0,0,0,0,0,0,0,0,0,0,0,1],
        [1,0,0,0,0,0,0,0,0,0,0,0,0,0,1],
        [1,0,0,0,0,0,0,0,0,0,0,0,0,0,1],
        [1,0,0,0,0,0,0,0,0,0,0,0,0,0,1],
        [1,0,0,0,0,0,0,0,0,0,0,0,0,0,1],
        [1,0,0,0,0,0,0,0,0,0,0,0,0,0,1],
        [1,0,0,0,0,0,0,0,0,0,0,0,0,0,1],
        [1,0,0,0,0,0,0,0,0,0,0,0,0,0,1],
        [1,0,0,0,0,0,0,0,0,0,0,0,0,0,1],
        [1,0,0,0,0,0,0,0,0,0,0,0,0,0,1],
        [1,0,0,0,0,0,0,0,0,0,0,0,0,0,1],
        [1,0,0,0,0,0,0,0,0,0,0,0,0,0,1],
        [1,0,0,0,0,0,0,0,0,0,0,0,0,0,1],
        [1,0,0,0,0,0,0,0,0,0,0,0,0,0,1],
        [1,0,0,0,0,0,0,0,0,0,0,0,0,0,1],
        [1,0,0,0,0,0,0,0,0,0,0,0,0,0,1],
        [1,0,0,0,0,0,0,0,0,0,0,0,0,0,1],
        [1,0,0,0,0,0,0,0,0,0,0,0,0,0,1],
        [1,0,0,0,0,0,0,0,0,0,0,0,0,0,1],
        [1,1,1,1,1,1,1,1,1,1,1,1,1,1,1],
    ];

    let mut position = Position { x: 4, y: 0 };

    // 画面クリア
    println!("\x1b[2J\x1b[H\x1b[?25l");

    for _ in 0..30 {
        // 描画用フィールド
        let mut field_buf = field;

        // 衝突しなかったら1つ下に落とす
        if !is_collision(&field, &position, PieceKind::I) {
            position.y += 1;
        }

        // ピースを追記
        for y in 0..4 {
            for x in 0..4 {
                if PIECES[PieceKind::I as usize][y][x] == 1 {
                    field_buf[y+position.y][x+position.x] = 1;
                }
            }
        }

        // カーソルを先頭に移動
        println!("\x1b[H");

        // フィールドを描画
        for y in 0..FIELD_HEIGHT {
            for x in 0..FIELD_WIDTH {
                if field_buf[y][x] == 1 {
                    print!("[]");
                } else {
                    print!(" .");
                }
            }
            println!();
        }

        // 1秒間スリーブする
        thread::sleep(time::Duration::from_millis(1000));
    }

    // カーソルを再表示
    println!("\x1b[?25h");
}
