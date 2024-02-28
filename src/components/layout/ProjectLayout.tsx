
interface ProjectLayoutProps {
    children: React.ReactNode;
}

const ProjectLayout: React.FC<ProjectLayoutProps> = ({ children }) => {
    return (
        <div>
            {children}
        </div>
    );
};

export default ProjectLayout;