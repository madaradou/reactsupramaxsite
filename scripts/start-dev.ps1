# Start dev server helper
$ErrorActionPreference = 'Stop'

Write-Host 'Checking Node and npm availability...'
try {
  $node = node -v 2>$null
  $npm = npm -v 2>$null
  Write-Host "node: $node"
  Write-Host "npm: $npm"
} catch {
  Write-Error "Node.js or npm not found. Please install Node.js LTS: https://nodejs.org/"
  exit 1
}

# Determine repository root (parent of scripts folder)
$scriptDir = Split-Path -Parent $MyInvocation.MyCommand.Path
$repoRoot = Split-Path -Parent $scriptDir
Push-Location $repoRoot

Write-Host 'Installing dependencies (this may take a moment)...'
npm install --no-audit --no-fund

Write-Host 'Starting Vite dev server...'
npm run dev

Pop-Location
