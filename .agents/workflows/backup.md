---
description: Sincroniza la arquitectura Vanguard e historial con GitHub.
---

Este comando automatiza el respaldo de la soberanía técnica en la nube.

1. Verificar que el repositorio Git esté inicializado.
2. Validar la existencia de un origen remoto.
3. Asegurar que .vanguard/ sea rastreado en el .gitignore.
// turbo
4. if (!(Test-Path .git)) { echo "Error: El repositorio no está inicializado. Solicita la URL de GitHub."; return }
// turbo
5. git remote -v

6. Sincronizar cambios.
// turbo
7. git add .vanguard/
// turbo
8. git commit -m "chore(vanguard): automated skill and config backup [$(Get-Date -Format 'yyyy-MM-dd')]"
// turbo
9. git push origin main
