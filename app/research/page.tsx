export default function ResearchPage() {
  const sections = [
    {
      title: "Crime Mapping, GIS, and Predictive Models",
      papers: [
        {
          citation: "Ahmad et al. (2024). CHART: Intelligent Crime Hotspot Detection and Real-Time Tracking Using Machine Learning. Tech Science Press.",
          summary: "Introduces a machine learning model (CHART) for real-time hotspot tracking using smart preprocessing methods.",
          link: "https://www.techscience.com/cmc/v81n3/59035"
        },
        {
          citation: "Cesario et al. (2024). Multi-density crime predictor: An approach to forecast criminal activities in multi-density crime hotspots. Journal of Big Data.",
          summary: "Combines advanced clustering and time series forecasting to improve hotspot prediction in cities like Chicago.",
          link: "https://journalofbigdata.springeropen.com/articles/10.1186/s40537-024-00935-4"
        },
        {
          citation: "Kedia (2016). Crime mapping and analysis using GIS. ResearchGate.",
          summary: "Discusses the use of GIS and Kernel Density Estimation (KDE) for spatial crime analysis and visualization.",
          link: "https://www.researchgate.net/publication/309125859_Crime_Mapping_and_Analysis_using_GIS"
        },
        {
          citation: "Levy et al. (2020). SafeRoute: Learning to Navigate Streets Safely in an Urban Environment. University of California.",
          summary: "Proposes a deep reinforcement learning (RL) model that reroutes users away from crime-prone areas.",
          link: "https://dl.acm.org/doi/10.1145/3402818"
        },
        {
          citation: "Towers et al. (2018). Factors influencing temporal patterns in crime in a large American city: A predictive analytics perspective. Purdue University.",
          summary: "Explores how time-based variables (weather, school breaks, paydays) influence crime trends using predictive analytics.",
          link: "https://pmc.ncbi.nlm.nih.gov/articles/PMC6200217/"
        },
        {
          citation: "Muthamizharasan & Ponnusamy (2024). A comparative study of crime event forecasting using ARIMA versus LSTM. Journal of Theoretical and Applied Information Technology.",
          summary: "Compares traditional ARIMA and deep learning LSTM models for forecasting crime rates.",
          link: "https://www.jatit.org/volumes/Vol102No5/36Vol102No5.pdf"
        },
        {
          citation: "Newton et al. (2021). Introduction to the special issue: Urban mobility and crime patterns. European Journal on Criminal Policy and Research.",
          summary: "Discusses the link between urban movement patterns and crime, and introduces the idea of 'dynamic denominators.'",
          link: "https://link.springer.com/article/10.1007/s10610-021-09501-7"
        },
        {
          citation: '"Mapping the Way to Safer Urban Mobility." EMBARQ Networks.',
          summary: "Explores safe city design and mobility-focused crime risk mitigation strategies, potentially relevant for routing tools.",
          link: "https://www.smartcitiesdive.com/ex/sustainablecitiescollective/mapping-way-safer-urban-mobility/1049916/"
        },
      ],
    },
    {
      title: "Race, Policing, and Societal Perceptions",
      papers: [
        {
          citation: "Jefferson (2017). Predictable Policing: Predictive Crime Mapping and Geographies of Policing and Race. American Association of Geographers.",
          summary: "Discusses how race and neighborhood demographics shape crime mapping and raises concerns of bias in predictive systems.",
          link: "https://www.tandfonline.com/doi/full/10.1080/24694452.2017.1293500"
        },
        {
          citation: "Borg & Hermann (2023). Attitudes toward crime(s) and their relations to gender, age, and personal values.",
          summary: "Analyzes how personal demographics influence opinions about different crimes and safety priorities.",
          link: "https://www.sciencedirect.com/science/article/pii/S2666518223000165"
        },
      ],
    },
    {
      title: "Fear of Crime and Psychological/Social Impacts",
      papers: [
        {
          citation: "Lorenc et al. (2013). Fear of crime and the environment: Systematic review of UK qualitative evidence. BMC Public Health.",
          summary: "A comprehensive review of how fear of crime affects daily life, especially physical activity and mental stress.",
          link: "https://bmcpublichealth.biomedcentral.com/articles/10.1186/1471-2458-13-496"
        },
        {
          citation: "George (2010). Visitor perceptions of crime-safety and attitudes towards risk: The case of Table Mountain National Park, Cape Town. Tourism Management.",
          summary: "Shows how crime perception influences tourism and site reputation.",
          link: "https://www.sciencedirect.com/science/article/pii/S0261517709001630"
        },
        {
          citation: "Saad (2023). Personal Safety Fears at Three-Decade High in the U.S. Gallup.",
          summary: "U.S. poll showing rising fear of crime and its effect on public behavior and policy.",
          link: "https://news.gallup.com/poll/544415/personal-safety-fears-three-decade-high.aspx"
        },
        {
          citation: "Baumer & Rosenbaum (1983). Measuring Fear of Crime: Perceptual, Affective, and Behavioral Components. National Criminal Justice Reference Service.",
          summary: "Classic study breaking down fear into measurable components, showing how fear affects decision-making and behavior.",
          link: "https://www.ojp.gov/ncjrs/virtual-library/abstracts/measuring-fear-crime-perceptual-affective-and-behavior-components"
        },
      ],
    },
    {
      title: "Crime Severity Perception and Public Opinion",
      papers: [
        {
          citation: "O’Connel & Whelan (1996). Taking wrongs seriously: Public perceptions of crime seriousness. British Journal of Criminology.",
          summary: "Analyzes how the public rates the severity of different crimes (e.g., rape vs. theft), influencing policing priorities.",
          link: "https://www.researchgate.net/publication/31022461_Taking_wrongs_seriously_public_perceptions_of_crime_seriousness"
        },
        {
          citation: "Wolfgang et al. (1985). National Survey of Crime Severity. Bureau of Justice Statistics.",
          summary: "Large-scale U.S. study ranking crimes based on perceived severity (e.g., murder, assault vs. vandalism).",
          link: "https://bjs.ojp.gov/content/pub/pdf/nscs.pdf"
        },
      ],
    },
  ];

  return (
    <section className="min-h-screen px-4 py-20 bg-gray-100 dark:bg-gray-900 transition-colors">
      <div className="max-w-4xl mx-auto animate-fade-in">
        <h1 className="text-center text-6xl font-bold text-gray-900 dark:text-gray-100 mb-12">
          Research Literature
        </h1>
  
        {sections.map((section, idx) => (
          <div key={idx} className="mb-14">
            <h2 className="text-3xl font-semibold text-gray-800 dark:text-gray-100 mb-4">
              {section.title}
            </h2>
  
            <div className="max-h-96 overflow-y-auto border rounded-xl p-5 bg-white dark:bg-gray-800 shadow-md space-y-6">
              {section.papers.map((paper, i) => (
                <div key={i}>
                  <p className="text-gray-800 dark:text-gray-200 font-medium">
                    <a
                      href={paper.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="underline hover:text-blue-600"
                    >
                      {paper.citation}
                    </a>
                  </p>
                  <p className="text-gray-600 dark:text-gray-400 text-justify">{paper.summary}</p>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}