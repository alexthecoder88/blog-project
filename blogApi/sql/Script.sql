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


INSERT INTO post values
    (1, 'blog title test','BLAH BLAH BLAH');
   
select * from post
full join comment c on c.post_id = post.id 

select * from comment
    
 