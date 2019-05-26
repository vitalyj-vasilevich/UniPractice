USE PHOTO_PORTAL;
SELECT (SELECT NAME FROM USER WHERE USER_ID = PHOTO_POST.USER_ID) AS 'Name', DESCRIPTION, CREATION_DATE FROM PHOTO_POST
WHERE LENGTH(DESCRIPTION) > 100;