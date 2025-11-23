import express, { Request, Response, NextFunction } from "express";
import helmet from "helmet";
import { createServer } from "http";
import path from "path";
import { fileURLToPath } from "url";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

async function startServer() {
  const app = express();

  // 1. Security Middleware (Helmet)
  app.use(helmet());

  // 2. HTTP to HTTPS Redirection (Production only, assumes a proxy sets X-Forwarded-Proto)
  app.use((req: Request, res: Response, next: NextFunction) => {
    if (process.env.NODE_ENV === "production" && req.headers["x-forwarded-proto"] !== "https") {
      return res.redirect("https://" + req.headers.host + req.url);
    }
    next();
  });

  // 3. Strict-Transport-Security (HSTS) header for SSL security
  // This is already included in helmet(), but we can ensure a strong setting
  // by configuring it explicitly if needed, but helmet's default is usually good.
  // We will rely on helmet's default for simplicity and correctness.
  // The redirection above ensures all traffic is HTTPS.
  const server = createServer(app);

  // Serve static files from dist/public in production
  const staticPath =
    process.env.NODE_ENV === "production"
      ? path.resolve(__dirname, "public")
      : path.resolve(__dirname, "..", "dist", "public");

  app.use(express.static(staticPath));

  // Handle client-side routing - serve index.html for all routes
  app.get("*", (_req, res) => {
    res.sendFile(path.join(staticPath, "index.html"));
  });

  const port = process.env.PORT || 3000;

  server.listen(port, () => {
    console.log(`Server running on http://localhost:${port}/`);
  });
}

startServer().catch(console.error);
