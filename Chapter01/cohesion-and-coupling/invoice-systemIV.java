class Document implements IPrintable {
  String title;
  String body;

  String getContent() {
    return this.title + this.body;
  }
}

class Note implements IPrintable {
  String message;

  String getContent() {
    return this.message;
  }
}

// everything else stays the same

// adding the new types to the list
class Program {
  public static void main(String[] args) {
    list.add(new Note());
    list.add(new Document());
  }
}
