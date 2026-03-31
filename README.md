# ToukrichteMed — Landing Page

Landing page professionnelle pour la promotion des services de création de sites web de Mohamed Toukrichte.

## Stack technique

- **HTML / CSS / JS** — Landing page statique
- **Nginx** — Serveur web (Alpine)
- **Docker + Docker Compose** — Conteneurisation
- **Traefik v3** — Reverse proxy + HTTPS (Let's Encrypt)
- **GitHub Actions** — CI/CD automatique

## Développement local

```bash
# Prévisualiser sur http://localhost:4001
docker compose up -d --build
```

## Déploiement

Le déploiement est automatique à chaque push sur `main` via GitHub Actions.

### Prérequis GitHub Secrets

| Secret         | Description                          |
|----------------|--------------------------------------|
| `VPS_HOST`     | Adresse IP ou hostname du VPS        |
| `VPS_USER`     | Utilisateur SSH                      |
| `VPS_SSH_KEY`  | Clé SSH privée                       |

### DNS

Pointer `toukrichtemed.com` et `www.toukrichtemed.com` vers l'IP du VPS (enregistrement A).

## Images

Les placeholders sont en place. Remplacer les fichiers dans `src/images/` et mettre à jour les références dans `src/index.html`.
