import path from 'path';
import url from 'url';
import { promises as fs } from 'fs';

const __filename = url.fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const arquivo = path.join(__dirname, 'totalVendas.json'); 

try {
    const buffer = await fs.readFile(arquivo)
    //console.log(String(buffer))
    const conteudoJSON = JSON.parse(buffer); 
    console.log(conteudoJSON.total); 
} catch (error) {
    console.log('Erro', error); 
}