use std::fs;
use actix_web::{get, web, App, HttpServer, Responder, HttpResponse};
use serde::{Deserialize, Serialize};

#[derive(Debug, Serialize, Deserialize)]
struct Book {
    id: u32,
    title: String,
    author: String,
}

#[get("/books")]
async fn get_books() -> impl Responder {
    let data = fs::read_to_string("data.json").expect("json error");

    let books: Vec<Book> = serde_json::from_str(&data).expect("parse error");

    web::Json(books)
}

#[get("/hello")]
async fn hello() -> impl Responder {
    HttpResponse::Ok().body("Hello, world!")
}

#[actix_web::main]
async fn main() -> std::io::Result<()> {
    HttpServer::new(|| {
        App::new()
            .service(hello)
            .service(get_books)
    })
    .bind(("0.0.0.0", 8000))?
    .run()
    .await
}
