class Printer {
  print(Invoice invoice) {
      String total ="";
      total += invoice.getTitle();
      total += invoice.getDetails();
      total += invoice.getDate();
      //print 'total'
  }
}

class Invoice {
  String title;
    String details;
    int total;
    Date date;
    public String getTitle() { return this.title; }
    public String getDetails() { return this.details; }
    public String getDate() { return this.date; }
}

public class Program {
  private Printer printer = new Printer();
    public void run(ArrayList list) {
      for(int i=0; i< list.length; i++) {
        Object item = list.getItem(i);
        if(item instanceof Invoice) {
          Invoice invoice = (Invoice) item;
          printer.print( invoice );
        }
   }
  }

  public static void main(String [] args) {
    ArrayList list = new ArrayList();
       list.add(new Invoice());
       Program program = new Program();
       program.run( list );
  }
}