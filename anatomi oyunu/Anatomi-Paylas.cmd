@echo off
chcp 65001 >nul
title İnsan Anatomisi - İnternet Linki
cd /d "%~dp0"

echo.
echo   İnsan Anatomisi paylaşıma açılıyor...
echo.

start "Anatomi Sunucu" /min cmd /c "node anatomi-sunucu.js"
timeout /t 2 >nul

echo   Aşağıda çıkan https://....trycloudflare.com adresini paylaşabilirsin.
echo   Bu pencere açık kaldığı sürece link çalışır.
echo.

"%~dp0tools\cloudflared.exe" tunnel --url http://127.0.0.1:4322 --no-autoupdate

echo.
echo Link kapandı. Tekrar açmak için bu dosyaya çift tıkla.
pause >nul
