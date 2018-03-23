class FakePrinter implements IPrinter {
  print(IPrintable printable) { System.out.println("printing"); }
}

class Program {
  FakePrinter fakePrinter;

  Program(FakePrinter fakePrinter) {
    this.fakePrinter = fakePrinter;
  }

  public static void main(String[] args) {
    ArrayList<IPrintable> list = new ArrayList<IPrintable>();
    Printer printer = new FakePrinter();
    list.add(new Invoice());
    list.add(new Email());
    Program program = new Program(printer);
  }
}
