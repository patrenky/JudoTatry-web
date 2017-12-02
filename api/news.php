<?php
class News { 
    private $conn;
 
    public $id;
    public $title;
    public $time;
    public $text;
 
    // constructor with $db as database connection
    public function __construct($db) {
        $this->conn = $db;
    }

    function read(){
        $query = "SELECT *
            FROM news";
    
        $stmt = $this->conn->prepare($query);
        $stmt->execute();
        
        return $stmt;
    }

    function create(){
        $query = "INSERT INTO news
            SET title=:title, time=:time, text=:text";
        $stmt = $this->conn->prepare($query);

        $this->title=htmlspecialchars(strip_tags($this->title));
        $this->time=htmlspecialchars(strip_tags($this->time));
        $this->text=htmlspecialchars(strip_tags($this->text));

        $stmt->bindParam(":title", $this->title);
        $stmt->bindParam(":time", $this->time);
        $stmt->bindParam(":text", $this->text);

        if(!$stmt->execute()) {
            echo "[\"ERR\", \"Operácia zlyhala\"]";
        } else {
            echo "[\"OK\", \"Novinka bola pridaná\"]";
        }
    }

    function update(){
        $query = "UPDATE news
            SET title=:title, time=:time, text=:text
            WHERE id = :id";
        $stmt = $this->conn->prepare($query);

        $this->title=htmlspecialchars(strip_tags($this->title));
        $this->time=htmlspecialchars(strip_tags($this->time));
        $this->text=htmlspecialchars(strip_tags($this->text));
        $this->id=htmlspecialchars(strip_tags($this->id));

        $stmt->bindParam(":title", $this->title);
        $stmt->bindParam(":time", $this->time);
        $stmt->bindParam(":text", $this->text);
        $stmt->bindParam(":id", $this->id);

        if(!$stmt->execute()) {
            echo "[\"ERR\", \"Operácia zlyhala\"]";
        } else {
            echo "[\"OK\", \"Novinka bola upravená\"]";
        }
    }

    function delete(){
        $query = "DELETE FROM news WHERE id = :id";
        $stmt = $this->conn->prepare($query);
        
        $this->id=htmlspecialchars(strip_tags($this->id));
        $stmt->bindParam(":id", $this->id);

        if(!$stmt->execute()){
            echo "[\"ERR\", \"Operácia zlyhala\"]";
        } else {
            echo "[\"OK\", \"Novinka zmazaná\"]";
        }
   }
}
?>