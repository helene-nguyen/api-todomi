--====================================
-- Create DB and table
--====================================
DROP DATABASE taskedo;

CREATE DATABASE taskedo;

--=======================================================
-- CONNECTO DB taskedo before launching these commands
--=======================================================

CREATE TABLE article (
    "id" INT GENERATED ALWAYS AS IDENTITY PRIMARY KEY,
    "content" TEXT NOT NULL,
    "created_at" TIMESTAMPTZ DEFAULT now(),
    "is_done" BOOLEAN DEFAULT false
);

--====================================
-- Insert some values
--====================================
INSERT INTO article ("content", "created_at") 
(
	SELECT 
		('task' || ' ' || serie_nb), 
		(now() + interval '23 hours') 
	FROM generate_series( 1, 9) as serie_nb
);


--========================================
-- Create 2 functions create and update
--========================================
CREATE OR REPLACE FUNCTION create_article(JSON)
RETURNS TEXT AS $$

    INSERT INTO "article"("content")
    VALUES ($1 ->> 'content')::TEXT
    RETURNING "content";

$$ LANGUAGE SQL;

CREATE OR REPLACE FUNCTION update_article(JSON)
RETURNS TEXT AS $$

    UPDATE "article"
    SET 
        "content" = COALESCE(($1 ->> 'content')::TEXT,"content"), 
        "is_done" = COALESCE(($1 ->> 'is_done')::BOOLEAN,"is_done"),
    WHERE "id" = articleId::INT
    RETURNING "content";

$$ LANGUAGE SQL;