use std::{thread, time};
use getch_rs::{Getch, Key};

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
            if field[y+position.y][x+position.x] & PIECES[piece as usize][y][x] == 1 {
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
    let g = Getch::new();

    // 画面クリア
    println!("\x1b[2J\x1b[H\x1b[?25l");

    // 何秒経過したか
    let mut count = 0;

    // スコア
    let mut score = 0;

    loop {
        // 描画用フィールド
        let mut field_buf = field;

        let new_position = Position {
            x: position.x,
            y: position.y + 1,
        };

        // 衝突しなかったら1つ下に落とす
        if !is_collision(&field, &new_position, PieceKind::I) {
            position = new_position;
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
        thread::sleep(time::Duration::from_millis(10));

        match g.getch() {
            Ok(Key::Char('h')) => {
                let new_position = Position {
                    x: position.x - 1,
                    y: position.y,
                };

                if !is_collision(&field, &new_position, PieceKind::I) {
                    position = new_position;
                }
            },
            Ok(Key::Char('j')) => {
                let new_position = Position {
                    x: position.x,
                    y: position.y + 1,
                };

                if !is_collision(&field, &new_position, PieceKind::I) {
                    position = new_position;
                }
            },
            Ok(Key::Char('l')) => {
                let new_position = Position {
                    x: position.x + 1,
                    y: position.y
                };

                if !is_collision(&field, &new_position, PieceKind::I) {
                    position = new_position;
                }
            },
            Ok(Key::Char('q')) => break,
            _ => (),
        }

        count += 1;

        println!("time: {}, score: {}", count, score);
    }

    // カーソルを再表示
    println!("\x1b[?25h");
}
