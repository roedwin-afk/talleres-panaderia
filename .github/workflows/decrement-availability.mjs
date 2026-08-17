import fs from 'node:fs';
import path from 'node:path';
import matter from 'gray-matter';

// Ajusta esta ruta si tus talleres viven en otra carpeta de Content Collections
const CONTENT_DIR = path.join(process.cwd(), 'src/content/talleres');

const slug = process.argv[2];
if (!slug) {
  console.error('❌ Falta el slug del taller (argumento requerido).');
  process.exit(1);
}

function findFile(dir) {
  const entries = fs.readdirSync(dir, { withFileTypes: true });
  for (const entry of entries) {
    const fullPath = path.join(dir, entry.name);
    if (entry.isDirectory()) {
      const found = findFile(fullPath);
      if (found) return found;
    } else if (/\.mdx?$/.test(entry.name)) {
      // Empareja por el campo "slug" del frontmatter (más confiable),
      // con fallback al nombre del archivo por si algún taller no lo define.
      const raw = fs.readFileSync(fullPath, 'utf8');
      const { data } = matter(raw);
      const fileSlug = data.slug || path.basename(entry.name, path.extname(entry.name));
      if (fileSlug === slug) return fullPath;
    }
  }
  return null;
}

if (!fs.existsSync(CONTENT_DIR)) {
  console.error(`❌ No existe el directorio ${CONTENT_DIR}. Ajusta CONTENT_DIR en el script.`);
  process.exit(1);
}

const filePath = findFile(CONTENT_DIR);
if (!filePath) {
  console.error(`❌ No se encontró ningún taller con slug "${slug}" dentro de ${CONTENT_DIR}`);
  process.exit(1);
}

const raw = fs.readFileSync(filePath, 'utf8');
const { data, content } = matter(raw);

if (typeof data.cuposDisponibles !== 'number') {
  console.error(`❌ El campo "cuposDisponibles" no existe o no es numérico en ${filePath}`);
  process.exit(1);
}

const before = data.cuposDisponibles;
data.cuposDisponibles = Math.max(0, data.cuposDisponibles - 1);

const updated = matter.stringify(content, data);
fs.writeFileSync(filePath, updated);

console.log(`✅ ${slug}: cuposDisponibles ${before} → ${data.cuposDisponibles} (${filePath})`);
