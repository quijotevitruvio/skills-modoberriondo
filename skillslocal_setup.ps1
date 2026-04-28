# Vanguard Sovereignty Alias Setup
# Run this script to enable /build and /map commands in your current session.
# To make them permanent, add these lines to your $PROFILE.

function /build { python C:\Users\Rocka\.antigravity\vanguard.py build }
function /map { python C:\Users\Rocka\.antigravity\vanguard.py map }
function /status { python C:\Users\Rocka\.antigravity\vanguard.py status }
function /sync { python C:\Users\Rocka\.antigravity\vanguard.py sync }

Write-Host "🏛️ VANGUARD Aliases Enabled:" -ForegroundColor Gold
Write-Host "  [/build] -> Autonomous Build Loop"
Write-Host "  [/map]   -> Living Repository Map"
Write-Host "  [/status]-> Ecosystem Health"
Write-Host "  [/sync]  -> Sovereignty Synchronization"
