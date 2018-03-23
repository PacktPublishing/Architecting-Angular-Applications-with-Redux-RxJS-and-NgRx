class Email {
  String from;
  String to;
  String subject;
  String body;
  String getSubject() { return this.subject; }
  String getFrom() { return this.from; }
  String getTo() { return this.to; }
  String getBody() { return this.body; }

}

class Invoice {
 String title;
 String details;
 int total;
 Date date;

 String getTitle(){ return this.title; }
 String getDetails() { return this.details; }
 Date getDate() { return this.date; }
}

class Printer {
  print(Invoice invoice) {
    String total ="";
    total += invoice.getTitle();
    total += invoice.getDetails();
    total += invoice.getDate();
 
    //print 'total'
  }

  print(Email email) {
    String total ="";
    total += email.getSubject();
    total += email.getFrom();
    total += email.getTo();
    total += email.getBody();
  }
}

class Program {
 private Printer printer = new Printer();
 
 run(ArrayList list) {
   for(int i=0; i< list.length; i++) {
     Object item = list.getItem(i);
   
     if(item instanceof Invoice) {
       Invoice invoice = (Invoice) item;
       printer.print( invoice );
     } else if( item instanceof Email ) {
       Email email = (Email) item;
       printer.print( email );
     }
   } 
 }

 public static void main(String [] args) {
   ArrayList list = new ArrayList();
   list.add( new Invoice() );
   list.add( new Email() );
   Program program = new Program();
   program.run( list );
 }
}
