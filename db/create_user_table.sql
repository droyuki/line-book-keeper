CREATE TABLE "user" (
    "id" uuid NOT NULL DEFAULT uuid_generate_v4(),
    "user_id" text NOT NULL,
    "sheet_id" text,
    "description" text,
    "status" integer DEFAULT '1',
    "access_token" text,
    "refresh_token" text,
    "create_time" timestamp NOT NULL DEFAULT NOW(),
    "expiry_date" timestamp,
    PRIMARY KEY ("id")
);
