DROP DATABASE IF EXISTS launchPartner;
CREATE DATABASE launchPartner;

\c launchPartner;


DROP TABLE IF EXISTS users;

CREATE TABLE users (
    ID SERIAL PRIMARY KEY,
    fullName VARCHAR,
    username VARCHAR UNIQUE,
    password_digest VARCHAR,
    profile_pic VARCHAR DEFAULT 'https://image.flaticon.com/icons/svg/16/16480.svg',
    bio VARCHAR
);

INSERT INTO users ( fullName, username, password_digest, profile_pic, bio)
  VALUES('Simon Gaviria','simongaviria1', '$2a$10$noryJFgByFccCS/F6XILSeqM.3TqBhmRJ0QtAMPHtlzriqk6rsY8S', 'https://media.licdn.com/dms/image/C5603AQH4BiE3sUUIWQ/profile-displayphoto-shrink_800_800/0?e=1527746400&v=alpha&t=T_1KJr52ctP68HOtsmfnTMkfsVcLWXoInOGkTp3SzSQ', 'I am a developer'),
  ('Simon Gaviri','simonia1', '$2a$10$noryJFgByFccCS/F6XILSeqM.3TqBhmRJ0QtAMPHtlzriqk6rsY8S', 'https://media.licdn.com/dms/image/C5603AQH4BiE3sUUIWQ/profile-displayphoto-shrink_800_800/0?e=1527746400&v=alpha&t=T_1KJr52ctP68HOtsmfnTMkfsVcLWXoInOGkTp3SzSQ', 'I am a developer'),
  ('Simon Gavir','simoniria1', '$2a$10$noryJFgByFccCS/F6XILSeqM.3TqBhmRJ0QtAMPHtlzriqk6rsY8S', 'https://media.licdn.com/dms/image/C5603AQH4BiE3sUUIWQ/profile-displayphoto-shrink_800_800/0?e=1527746400&v=alpha&t=T_1KJr52ctP68HOtsmfnTMkfsVcLWXoInOGkTp3SzSQ', 'I am a developer'),
  ('Simon Gav','simviria1', '$2a$10$noryJFgByFccCS/F6XILSeqM.3TqBhmRJ0QtAMPHtlzriqk6rsY8S', 'https://media.licdn.com/dms/image/C5603AQH4BiE3sUUIWQ/profile-displayphoto-shrink_800_800/0?e=1527746400&v=alpha&t=T_1KJr52ctP68HOtsmfnTMkfsVcLWXoInOGkTp3SzSQ', 'I am a developer'),
  ('Sim Garia','ogavria1', '$2a$10$noryJFgByFccCS/F6XILSeqM.3TqBhmRJ0QtAMPHtlzriqk6rsY8S', 'https://media.licdn.com/dms/image/C5603AQH4BiE3sUUIWQ/profile-displayphoto-shrink_800_800/0?e=1527746400&v=alpha&t=T_1KJr52ctP68HOtsmfnTMkfsVcLWXoInOGkTp3SzSQ', 'I am a developer'),
  ('Sion aviria','sngaviria1', '$2a$10$noryJFgByFccCS/F6XILSeqM.3TqBhmRJ0QtAMPHtlzriqk6rsY8S', 'https://media.licdn.com/dms/image/C5603AQH4BiE3sUUIWQ/profile-displayphoto-shrink_800_800/0?e=1527746400&v=alpha&t=T_1KJr52ctP68HOtsmfnTMkfsVcLWXoInOGkTp3SzSQ', 'I am a developer'),
  ('Simon aria','songaviria1', '$2a$10$noryJFgByFccCS/F6XILSeqM.3TqBhmRJ0QtAMPHtlzriqk6rsY8S', 'https://media.licdn.com/dms/image/C5603AQH4BiE3sUUIWQ/profile-displayphoto-shrink_800_800/0?e=1527746400&v=alpha&t=T_1KJr52ctP68HOtsmfnTMkfsVcLWXoInOGkTp3SzSQ', 'I am a developer'),
  ('Sin airia','sionviria1', '$2a$10$noryJFgByFccCS/F6XILSeqM.3TqBhmRJ0QtAMPHtlzriqk6rsY8S', 'https://media.licdn.com/dms/image/C5603AQH4BiE3sUUIWQ/profile-displayphoto-shrink_800_800/0?e=1527746400&v=alpha&t=T_1KJr52ctP68HOtsmfnTMkfsVcLWXoInOGkTp3SzSQ', 'I am a developer'),
  ('imon Gaviria','smogairia1', '$2a$10$noryJFgByFccCS/F6XILSeqM.3TqBhmRJ0QtAMPHtlzriqk6rsY8S', 'https://media.licdn.com/dms/image/C5603AQH4BiE3sUUIWQ/profile-displayphoto-shrink_800_800/0?e=1527746400&v=alpha&t=T_1KJr52ctP68HOtsmfnTMkfsVcLWXoInOGkTp3SzSQ', 'I am a developer'),
  ('Smon Gaviria','ongaviria1', '$2a$10$noryJFgByFccCS/F6XILSeqM.3TqBhmRJ0QtAMPHtlzriqk6rsY8S', 'https://media.licdn.com/dms/image/C5603AQH4BiE3sUUIWQ/profile-displayphoto-shrink_800_800/0?e=1527746400&v=alpha&t=T_1KJr52ctP68HOtsmfnTMkfsVcLWXoInOGkTp3SzSQ', 'I am a developer'),
  ('Sin viria','iria1', '$2a$10$noryJFgByFccCS/F6XILSeqM.3TqBhmRJ0QtAMPHtlzriqk6rsY8S', 'https://media.licdn.com/dms/image/C5603AQH4BiE3sUUIWQ/profile-displayphoto-shrink_800_800/0?e=1527746400&v=alpha&t=T_1KJr52ctP68HOtsmfnTMkfsVcLWXoInOGkTp3SzSQ', 'I am a developer');