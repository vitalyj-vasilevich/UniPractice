USE PHOTO_PORTAL;
SELECT DATEDIFF(CURDATE(), MAX(CREATION_DATE)) AS 'past from first post' FROM PHOTO_POST;