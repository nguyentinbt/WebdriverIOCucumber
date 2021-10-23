import * as path from 'path';
import { existsSync, readFileSync } from 'fs';
import { DEFAULT_DOWNLOAD_PATH } from './constants';

export class Common {
    static getAbsolutePath(fileName: string, downloadFolderPath: string = DEFAULT_DOWNLOAD_PATH): string {
        const filePath = `${downloadFolderPath}/${fileName}`;
        return path.resolve(__dirname, filePath);
    }

    static readFileContent(absolutePath: string): string {
        return readFileSync(absolutePath, 'utf8');
    }
}