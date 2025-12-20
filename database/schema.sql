-- database/schema.sql
-- Initial database schema for SoftManga (demo)

-- =====================
-- Users table
-- =====================
CREATE TABLE IF NOT EXISTS users (
    id SERIAL PRIMARY KEY,
    username VARCHAR(50) NOT NULL UNIQUE,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

-- =====================
-- Manga table
-- Corresponds to backend/models/mangaModel.js
-- =====================
CREATE TABLE IF NOT EXISTS mangas (
    id SERIAL PRIMARY KEY,
    title VARCHAR(255) NOT NULL,
    status VARCHAR(32) NOT NULL, -- ongoing | completed
    chapters INTEGER NOT NULL DEFAULT 0,
    description TEXT,

    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

-- =====================
-- Example data (optional)
-- =====================
-- INSERT INTO mangas (title, status, chapters, description)
-- VALUES
-- ('Solo Leveling', 'completed', 179, 'Hunter awakening and leveling story'),
-- ('Omniscient Reader', 'ongoing', 210, 'World turns into a novel'),
-- ('Nano Machine', 'ongoing', 230, 'Martial arts with nano tech');
