create database shirtest;
use shirtest;

create table todos (
	id int auto_increment,
    task varchar(255),
    status bool default 0,
    primary key(id)
);


insert into todos(task)
values("Find a new job"),("Go for a walk with my dog"),("Make dinner"),("To finish the project");