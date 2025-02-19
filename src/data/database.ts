import {createClient} from "@supabase/supabase-js"


const URL = "https://uuzbangvjnascgpnadvl.supabase.co"
const key = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InV1emJhbmd2am5hc2NncG5hZHZsIiwicm9sZSI6InNlcnZpY2Vfcm9sZSIsImlhdCI6MTczOTc3Mjc3MywiZXhwIjoyMDU1MzQ4NzczfQ.Klcbf0PQEUUnIaG7SvDHGt6pTnx7tCMYrap3_mirx0Q"

export const supabase = createClient(URL, key);

/*
const sql = "CREATE TABLE Lender (
    id SERIAL PRIMARY KEY,
    business_name VARCHAR(255) unique NOT NULL ,
    phone_number VARCHAR(20) UNIQUE NOT NULL,
    email_address VARCHAR(255) UNIQUE NOT NULL,
    payment_plan VARCHAR(100) default 'None',
    payment_status VARCHAR(50) default 'None',
    sms_plan VARCHAR(100) default 'None',
    sms_plan_status VARCHAR(50) default 'None',
    username varchar(100) unique not null,
    password varchar(100)
);

CREATE TABLE Borrower (
    id SERIAL PRIMARY KEY,
    name VARCHAR(255) NOT NULL,
    phone_number VARCHAR(20) UNIQUE NOT NULL,
    email_address VARCHAR(255) UNIQUE NOT NULL
);

CREATE TABLE Loan (
    id SERIAL PRIMARY KEY,
    amount DECIMAL(15,2) NOT NULL,
    status VARCHAR(50) default 'Pending',
    start_payment_date DATE NOT NULL,
    type VARCHAR(100) NOT NULL,
    duration INT default 1,
    lender_id INT NOT NULL,
    borrower_id INT NOT NULL,
    FOREIGN KEY (lender_id) REFERENCES Lender(id) ON DELETE CASCADE,
    FOREIGN KEY (borrower_id) REFERENCES Borrower(id) ON DELETE CASCADE
);

CREATE TABLE Notifications(
  id serial primary key,
  date varchar(50) not null,
  message varchar(250) not null,
  title varchar(50) not null
);

CREATE TABLE MonthlyPerformance(
  id serial primary key,
  month varchar(50) not null,
  year varchar(50) not null,
  amount decimal(15,2) not null
);

CREATE TABLE DefaultRate(
  id serial primary key,
  month varchar(50) not null,
  year varchar(50) not null,
  total int not null,
  settled int not null
);

create view getBorrowers as 
select borrower.id, borrower.name, borrower.email_address, borrower.phone_number, loan.lender_id, loan.status
from loan 
left join borrower
on borrower.id = loan.borrower_id;
"*/