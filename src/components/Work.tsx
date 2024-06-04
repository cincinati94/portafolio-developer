interface WorkProps {
    job: string;
    company: string;
    time: string;
    description: string;
  }
  
  const Work: React.FC<WorkProps> = ({ job, company, time, description }) => {
    return (
      <>
        <ol className="relative">
          <li>
            <div className="relative mx-12 pb-12 grid before:absolute before:left-[-35px] before:block before:h-full before:border-l-2 before:border-black/20 dark:before:border-white/15 before:content-[''] md:grid-cols-auto gap-10 space-x-4]">
              <div>
                <span className="text-yellow-600 -left-[42px] absolute rounded-full text-5xl">
                  •
                </span>
                <h3 className="text-xl font-bold text-yellow-600">{job}</h3>
                <h4 className="font-semibold text-l text-gray-400">{company}</h4>
                <h5 className="p-0 m-0 text-sm text-gray-600/80 dark:text-white/80">
                  {time}
                </h5>
              </div>
              <div>
                <p className="text-white">{description}</p>
              </div>
            </div>
          </li>
        </ol>
      </>
    );
  };
  
  export default Work;