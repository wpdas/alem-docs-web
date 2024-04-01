const fs = require("fs");
const path = require("path");

function deleteTsxFiles(directoryPath) {
  fs.readdir(directoryPath, { withFileTypes: true }, (err, entries) => {
    if (err) {
      console.error("Erro ao ler o diretório:", err);
      return;
    }

    entries.forEach((entry) => {
      const entryPath = path.join(directoryPath, entry.name);
      if (entry.isDirectory()) {
        // Se for um diretório, chama a função recursivamente
        deleteTsxFiles(entryPath);
      } else if (path.extname(entry.name) === ".tsx") {
        // Se for um arquivo .tsx, apaga o arquivo
        fs.unlink(entryPath, (err) => {
          if (err) {
            console.error("Erro ao apagar arquivo:", err);
          } else {
            // console.log(`Arquivo apagado: ${entryPath}`);
          }
        });
      }
    });
  });
}

function toCamelCase(str) {
  return str
    .replace(/(?:^\w|[A-Z]|\b\w)/g, (word, index) =>
      index === 0 ? word.toUpperCase() : word.toUpperCase(),
    )
    .replace(/[\s-_]+/g, "");
}

// Função para processar arquivos .md recursivamente em todas as subpastas
function processMdFiles(directoryPath) {
  fs.readdir(directoryPath, { withFileTypes: true }, (err, entries) => {
    if (err) {
      console.error("Erro ao ler o diretório:", err);
      return;
    }

    entries.forEach((entry) => {
      const entryPath = path.join(directoryPath, entry.name);
      if (entry.isDirectory()) {
        // Se for um diretório, processe recursivamente
        processMdFiles(entryPath);
      } else if (path.extname(entry.name) === ".md") {
        // Se for um arquivo .md, gere o arquivo .tsx
        generateTsxFile(entryPath, entry.name);
      }
    });
  });
}

function generateTsxFile(filePath, fileName) {
  const mdContent = fs.readFileSync(filePath, "utf-8");
  const mdContentBase64 = Buffer.from(mdContent).toString("base64");
  const componentName = toCamelCase(fileName.replace(path.extname(fileName), ""));

  const tsxContent = `import { Markdown } from 'alem';

const ${componentName} = () => {
   const mdContent = Buffer.from(\`${mdContentBase64}\`, "base64").toString("utf-8");
   return <Markdown text={mdContent} />
}

export default ${componentName};
`;

  const tsxFilePath = path.join(path.dirname(filePath), `${componentName}.tsx`);
  fs.writeFileSync(tsxFilePath, tsxContent, "utf-8");
  console.log(`${tsxFilePath} file generated successfully.`);
}

// Caminho da pasta contendo os arquivos .md
const directoryPath = path.join("./src/md");
deleteTsxFiles(directoryPath);
processMdFiles(directoryPath);
