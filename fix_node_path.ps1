$oldUserPath = [Environment]::GetEnvironmentVariable('Path', 'User')
$nodePath = 'C:\Program Files\nodejs'
if ($oldUserPath -notlike "*$nodePath*") {
    [Environment]::SetEnvironmentVariable('Path', "$oldUserPath;$nodePath", 'User')
    Write-Host "User PATH updated"
} else {
    Write-Host "User PATH already contains Node.js"
}
$processPath = [Environment]::GetEnvironmentVariable('Path', 'Process')
if ($processPath -notlike "*$nodePath*") {
    $env:Path = "$processPath;$nodePath"
    Write-Host "Current shell PATH updated"
} else {
    Write-Host "Current shell PATH already contains Node.js"
}
Write-Host "Current PATH:"
Write-Host $env:Path
