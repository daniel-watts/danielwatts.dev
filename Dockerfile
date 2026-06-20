# ─────────────────────────────────────────────────────────────────────────
# Stage 1 — build the static site with Node
# ─────────────────────────────────────────────────────────────────────────
FROM node:24-alpine AS build
WORKDIR /app

# Install dependencies first (cached unless package files change)
COPY package*.json ./
RUN npm ci

# Copy source and build to /app/dist
COPY . .
RUN npm run build

# ─────────────────────────────────────────────────────────────────────────
# Stage 2 (dev) — live hot-reload server (used by the `dev` compose service)
# ─────────────────────────────────────────────────────────────────────────
FROM node:24-alpine AS dev
WORKDIR /app
COPY package*.json ./
RUN npm ci
COPY . .
EXPOSE 4321
# --host makes the dev server reachable from outside the container
CMD ["npm", "run", "dev", "--", "--host"]

# ─────────────────────────────────────────────────────────────────────────
# Stage 3 — serve the static output with nginx (production)
# ─────────────────────────────────────────────────────────────────────────
FROM nginx:1.27-alpine AS runtime

# Custom config (gzip, caching, custom 404)
COPY nginx.conf /etc/nginx/conf.d/default.conf

# Static site from the build stage
COPY --from=build /app/dist /usr/share/nginx/html

EXPOSE 80
HEALTHCHECK --interval=30s --timeout=3s --start-period=5s \
  CMD wget -qO /dev/null http://localhost/ || exit 1

CMD ["nginx", "-g", "daemon off;"]
