import fs from "node:fs";
import path from "node:path";
import matter from "gray-matter";

const slug = process.argv[2];

if (!slug) {
  console.error("❌ Error: debes pasar el slug del taller como argumento.");
  process.exit(1);
}

const filePath = path.join("src", "content", "talleres", `${slug}.md`);

if (!fs.existsSync(filePath)) {
  console.error(`❌ Error: no se encontró el archivo ${filePath}`);
  process.exit(1);
}

const raw = fs.readFileSync(filePath, "utf8");
const parsed = matter(raw);

const cuposActuales = parsed.data.cuposDisponibles;

if (typeof cuposActuales !== "number") {
  console.error(`❌ Error: el campo "cuposDisponibles" no existe o no es numérico en ${filePath}`);
  process.exit(1);
}

if (cuposActuales <= 0) {
  console.log(`⚠️ El taller "${slug}" ya tiene 0 cupos disponibles. No se decrementa más.`);
  process.exit(0);
}

parsed.data.cuposDisponibles = cuposActuales - 1;

const nuevoContenido = matter.stringify(parsed.content, parsed.data);

fs.writeFileSync(filePath, nuevoContenido, "utf8");

console.log(`✅ Cupos actualizados para "${slug}": ${cuposActuales} → ${parsed.data.cuposDisponibles}`);
