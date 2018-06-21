/*
Postgres SQL
brew install postgresql
brew upgrade postgresql
postgres --version

1.Start service:
brew services start postgresql
brew services restart postgresql
brew services stop postgresql

2.Start/stop DB
gem install lunchy
mkdir -p ~/Library/LaunchAgents
cp /usr/local/Cellar/postgresql/10.4/homebrew.mxcl.postgresql.plist ~/Library/LaunchAgents/
launchctl load -w ~/Library/LaunchAgents/homebrew.mxcl.postgresql.plist
lunchy start postgres
lunchy stop postgres

3. Open postgres admin user
psql postgres
Quit cmd:
\q


CREATE TABLE tblList (
	did    integer PRIMARY KEY GENERATED BY DEFAULT AS IDENTITY,
    name        varchar(40) NOT NULL CHECK (name <> '')
    priority    integer NOT NULL,
    duedate 	date NOT NULL    
);

CREATE TABLE tblTask (
	did    integer PRIMARY KEY GENERATED BY DEFAULT AS IDENTITY,
	listId integer    
);

CREATE TABLE distributors (
	name        varchar(40) NOT NULL CHECK (name <> '')
    did    integer PRIMARY KEY GENERATED BY DEFAULT AS IDENTITY,
     name   varchar(40) NOT NULL CHECK (name <> '')
);


Create a new DB:
initdb /usr/local/var/postgres -E utf8
*/
import { app } from './app';
import { PORT } from './constants';
import { listRouter } from './routers/listRouter';
import taskRouter from './routers/taskRouter';

app.listen(PORT, () => console.log(`Server is listening on port ${PORT}`));
