CREATE TABLE post (
	id serial primary key,
	title varchar,
	content varchar
);

CREATE TABLE Comment (
	id serial primary key,
	post_id integer not null references post(id),
	comment varchar
);



 
