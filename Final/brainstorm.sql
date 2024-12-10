CREATE TABLE person(
    p_status VARCHAR(100) DEFAULT NULL,
    p_email VARCHAR(100) NOT NULL,
    p_user_id VARCHAR(100) NOT NULL,
    p_name VARCHAR(100) NOT NULL,
    p_password VARCHAR(100) NOT NULL,
    PRIMARY KEY (p_user_id) 

);

CREATE TABLE comments(
    p_comment_id VARCHAR(100) NOT NULL,
    p_user_id VARCHAR(100) NOT NULL,
    p_post_id VARCHAR(100) NOT NULL,
);

CREATE TABLE post (
    p_post_id VARCHAR(100) NOT NULL,
    p_user_id VARCHAR(100) NOT NULL,
    p_content VARCHAR(500) NOT NULL,
    p_image BLOB,
    p_timestamp TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    PRIMARY KEY (p_post_id)
);

CREATE TABLE likes(
    p_user_id VARCHAR(100) NOT NULL,
    p_post_id VARCHAR(100) NOT NULL
);

CREATE TABLE follow(
    f_user_id VARCHAR(100) NOT NULL,
    f_friend_id VARCHAR(100) NOT NULL
);

-- post page
-- profile
-- feed
-- followed page
-- search page
-- others person profile page
