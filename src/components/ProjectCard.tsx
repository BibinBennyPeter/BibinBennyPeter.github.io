const ProjectCard = ({ title, description, link }) => {
  return (
    <div className="w-full h-64 bg-gradient-to-br  to-portfolio-purple/5 hover:to-portfolio-teal/15 rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-colors duration-300 delay-100 flex flex-col">
      {/* Card Content */}
      <div className="flex-1 p-6 flex flex-col justify-between">
        <div>
          <h3 className="text-xl min-h-14 font-semibold text-portfolio-teal mb-2">{title}</h3>
          <p className="text-white/55 text-sm">{description}</p>
        </div>
        
        <div className="mt-4">
          <a
            href={link}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 text-sm font-medium text-purple-700 hover:text-teal-600 transition-colors duration-200 group"
          >
            View on GitHub
          </a>
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;
