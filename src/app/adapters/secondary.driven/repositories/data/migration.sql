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