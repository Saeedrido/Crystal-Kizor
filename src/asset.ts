const base = import.meta.env.BASE_URL;

/** Resolve a public asset path against the deploy base, so the build works at any URL depth. */
export const asset = (path: string) =>
  base.replace(/\/$/, "") + "/" + path.replace(/^\//, "");
