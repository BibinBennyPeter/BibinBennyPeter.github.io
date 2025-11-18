import ProjectCard from "../components/ProjectCard.tsx";
const Projects = () =>
{
  const projects = [
    {
      title: "Permissionless Federated Learning",
      description: "Built a system with DP-noised client updates, Python FedAvg aggregation, and Solidity contracts for on-chain model publishing and token rewards for contributions.",
      link: "https://github.com/BibinBennyPeter/permissionless-federated-learning"
    },
    {
      title: "Decentralized Cryptocurrency Exchange",
      description: "Simple DEX integrated with 1inch aggregator for swaps. Used Moralis API for offchain data and WAGMI for Web3 authentication.",
      link: "https://github.com/BibinBennyPeter/DEX-Moralis-1inch"
    },
    {
      title: "Blockchain Based Medical Records System",
      description: "Built Solidity smart contracts to tokenize medical records as NFTs. Used IPFS for decentralized storage of encrypted medical records.",
      link: "https://github.com/BibinBennyPeter/Me.D"
    }
  ];

  return (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project, index) => (
            <div key={index} className="flex">
              <ProjectCard
                title={project.title}
                description={project.description}
                link={project.link}
              />
            </div>
          ))}
      </div>
  );
};

export default Projects
