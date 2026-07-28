@echo off
:: Simple wrapper to install deps and start dev server
node -v >nul 2>&1
if %errorlevel% neq 0 (
  echo Node.js not found. Install from https://nodejs.org/
  exit /b 1
)
npm -v >nul 2>&1
if %errorlevel% neq 0 (
  echo npm not found. Install Node.js which includes npm.
  exit /b 1
)

pushd "%~dp0\.."
echo Installing dependencies...
npm install --no-audit --no-fund
echo Starting dev server...
npm run dev
popd
