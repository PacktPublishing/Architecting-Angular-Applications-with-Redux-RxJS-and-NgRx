class Email implements IPrintable {
  String from;
  String to;
  String subject;
  String body;

  String getSubject() {
    return this.subject;
  }

  String getFrom() {
    return this.from;
  }

  String getTo() {
    return this.to;
  }

  String getBody() {
    return this.body;
  }

  public String getContent() {
    String total = "";
    total += email.getSubject();
    total += email.getFrom();
    total += email.getFrom();
    total += email.getBody();
    return total;
  }
}

class Invoice implements IPrintable {
  String title;
  String details;
  int total;
  Date date;

  String getTitle() {
    return this.title;
  }

  String getDetails() {
    return this.details;
  }

  String getDate() {
    return this.date;
  }

  public String getContent() {
    String total = "";
    total += invoice.getTitle();
    total += invoice.getDetails();
    total += invoice.getDate();
    return total;
  }
}

interface IPrintable {
  String getContent();
}

interface IPrinter {
  print(IPrintable printable);
}

class Printer implements IPrinter {
  print( IPrintable printable ) {
      String content = printable.getContent();
      // print content
  }
}

class Program {
  private IPrinter printer;

  public Program(IPrinter printer) {
    this.printer = printer;
  }

  run(ArrayList<IPrintable> list) {
    for(int i=0; i< list.length; i++) {
      IPrintable item = list.getItem(i);
      printer.print(item);
    }
  }

  public static void main(String[] args) {
    ArrayList<IPrintable> list = new ArrayList<IPrintable>();
    Printer printer = new Printer();
    list.add(new Invoice());
    list.add(new Email());
    Program program = new Program(printer);
  }
}
