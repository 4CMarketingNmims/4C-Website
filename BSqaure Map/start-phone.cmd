@echo off
setlocal
cd /d "%~dp0"

echo Starting BOMBae Square for phone access...
echo.
echo On your phone, open: http://192.168.1.101:5174/
echo Keep this window open while using the app.
echo.

call npm run phone

pause
