// Profile Images
import profilePhoto from '../assets/images/photo.jpg';

// Background Images
import heroBg from '../assets/images/hero-bg.jpg';

// Logo
import logoImage from '../assets/images/image logo.png';
import btechLogo from '../assets/images/b_tech logo.png';
import sriChaitanyaLogo from '../assets/images/Sri Chaitanya.jpg';

// Project Images
import aiSummarizerImg from '../assets/images/projects/ai_summarizer.png';
import blogappImg from '../assets/images/projects/blogapp.png';
import caresyncImg from '../assets/images/projects/caresync.png';
import codecollabImg from '../assets/images/projects/codecollab.png';
import creatorspaceImg from '../assets/images/projects/creatorspace.png';
import earthTogetherImg from '../assets/images/projects/EarthTogether.png';
import imageGeneratorImg from '../assets/images/projects/image-generator.png';
import portfolioImg from '../assets/images/projects/portfolio.png';
import purecareFitnessImg from '../assets/images/projects/purecarefitness.png';
import tabledatamanagerImg from '../assets/images/projects/tabledatamanager.png';
import wanderlustImg from '../assets/images/projects/wanderlust.png';

export const images = {
  profile: profilePhoto,
  heroBg: heroBg,
  logo: logoImage,
  btechLogo: btechLogo,
  sriChaitanyaLogo: sriChaitanyaLogo,
  projects: {
    aiSummarizer: aiSummarizerImg,
    blogapp: blogappImg,
    caresync: caresyncImg,
    codecollab: codecollabImg,
    creatorspace: creatorspaceImg,
    earthTogether: earthTogetherImg,
    imageGenerator: imageGeneratorImg,
    portfolio: portfolioImg,
    purecareFitness: purecareFitnessImg,
    tabledatamanager: tabledatamanagerImg,
    wanderlust: wanderlustImg
  }
};

export const getProjectImage = (projectName) => {
  const normalizedName = projectName.toLowerCase().replace(/[-_\s]/g, '');
  
  const imageMap = {
    'aisummarizer': images.projects.aiSummarizer,
    'blogapp': images.projects.blogapp,
    'caresync': images.projects.caresync,
    'codecollab': images.projects.codecollab,
    'collabcodeeditor': images.projects.codecollab,
    'codeeditor': images.projects.codecollab,
    'collaborativeeditor': images.projects.codecollab,
    'creatorspace': images.projects.creatorspace,
    'creator': images.projects.creatorspace,
    'space': images.projects.creatorspace,
    'creatorspacereact': images.projects.creatorspace,
    'earthtogether': images.projects.earthTogether,
    'imagegenerator': images.projects.imageGenerator,
    'portfolio': images.projects.portfolio,
    'myportfolio': images.projects.portfolio,
    'purecarefitness': images.projects.purecareFitness,
    'purecarefitnesswebapplication': images.projects.purecareFitness,
    'tabledatamanager': images.projects.tabledatamanager,
    'wanderlust': images.projects.wanderlust
  };
  
  return imageMap[normalizedName] || null;
};