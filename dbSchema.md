Table Users {
ID integer [primary key]
Name varchar
CenterCost varchar
Email varchar
}

Table Computers {
ID integer [primary key]
UserID integer [ref: > Users.ID]
Hostname varchar
AssetTag varchar
Model varchar
SerconTag varchar
ServiceTag varchar
ExpressCode varchar
Warranty date
}

Table Phones {
ID integer [primary key]
UserID integer [ref: > Users.ID]
IMEI varchar
Model varchar
OutOfPolicy bool
LineID integer [ref: > Lines.ID]
}

Table Lines {
ID integer [primary key]
PhoneNumber varchar
IsUsing bool
}

Table LastChange {
ID integer [primary key]
ComputerID integer [ref: > Computers.ID]
Reason varchar
FromUserID integer [ref: > Users.ID]
ToUserID integer [ref: > Users.ID]
ChangeDate date
}

Table ConfigInfo {
ID integer [primary key]
UserID integer [ref: > Users.ID]
PhoneID integer [ref: > Phones.ID]
PIN bcrypt
Email varchar
Password bcrypt
}

Table Term_Status{
ID integer [primary key]
UserID integer [ref:> Users.ID]
ComputerID integer [ref:> Computers.ID]
PhoneID integer [ref:> Phones.ID]
IsSigned bool
SignedDate date
}

Table Devices{
ID integer [primary key]
Type varchar
Departament varchar
Model varchar
SerialNumber varchar
CostCenter varchar

}
