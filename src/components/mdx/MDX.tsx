import { MDXComponents } from 'mdx/types'
import { MDXRemote } from 'next-mdx-remote/rsc'
import Image from 'next/image';

const components: MDXComponents = {
    Image
};

interface MDXProps{
    mdxSource: string
}

const MDX: React.FC<MDXProps> = ({ mdxSource }) => {
    return (
        <MDXRemote source={mdxSource} components={components} />
    );
};

export default MDX;