CREATE TABLE person(
    p_status VARCHAR(100) DEFAULT NULL,
    p_email VARCHAR(100) NOT NULL,
    p_user_id VARCHAR(100) NOT NULL,
    p_name VARCHAR(100) NOT NULL,
    p_password VARCHAR(100) NOT NULL,
    PRIMARY KEY (p_user_id) 

);
CREATE TABLE friend(
    f_user_id VARCHAR(100) NOT NULL,
    PRIMARY KEY (f_user_id, f_friend_id)
);

CREATE TABLE comments(
    p_comment_id VARCHAR(100) NOT NULL,
    p_user_id VARCHAR(100) NOT NULL,
    p_post_id VARCHAR(100) NOT NULL,
);

CREATE TABLE post();

CREATE TABLE likes();

CREATE TABLE dislikes();

CREATE TABLE follow();

