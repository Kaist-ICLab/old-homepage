import fs from 'fs';
import path from "path";
import matter from 'gray-matter'



export const getMarkDownFileByPath = (path: string) => {
    const source = fs.readFileSync(path);
    const { data: frontmatter, content: content } = matter(source)
    return {
        content: content,
        ...frontmatter
    }
}

export const getAllMarkDownFiles = (folder: string) => {
    const files = fs.readdirSync(folder);
    
    return files.map((file) =>  ({
        slug: file.replace('.md', ''),
    }))
}

export const getAllMarkDownFilesData = (folder: string) => {
    const files = fs.readdirSync(folder);
    
    return files.map((file) =>  ({
        slug: file.replace('.md', ''),
        ...getMarkDownFileByPath(path.join(folder, file))
    }))
}