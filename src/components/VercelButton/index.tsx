const IS_PRODUCTION = process.env.IS_PRODUCTION;
//https://github.com/kumard3/dev-folio-templates
const VercelButton = () => {
  const deployUrl = "https://vercel.com/new/git/external?repository-url=";
  const repository = "https://github.com/kumard3/dev-folio-templates";
  const variables = `&env=NEXT_PUBLIC_USERNAME`;
  const projectName = "&project-name=my-awesome-portfolio";
  const repositoryName = "&repository-name=my-awesome-portfolio";
  const envDescription = "&envDescription=Enter%20your%20Github%20username%20.";
  const demoTitle = "&demo-title=APM%20Story";
  const demoDescription =
    "&A%20statically%20generated%portfolio%created%20using%20Devcover";
  const link = `${deployUrl}${repository}${variables}${projectName}${repositoryName}${envDescription}${demoTitle}${demoDescription}`;
  const handleClickLink = () => {
    if (IS_PRODUCTION) {
      //@ts-ignore
      gtag.event(
        "vercel_deploy",
        "deploy",
        "user clicked on vercel deploy button button",
        link
      );
    }
    window.open(link, "_blank");
  };
  return (
    <div className="flex justify-end w-full fixed bottom-[2rem] right-4 z-50">
      <div
        //@ts-ignore

        rel="noreferrer"
        target="_blank"
        onClick={handleClickLink}
        className="flex bg-[#0070f3] items-center py-[1.5rem] px-[2.4rem] rounded-md transition-all duration-200 "
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width={20}
          height={20}
          viewBox="0 0 116 100"
          fill="#fff"
        >
          <path
            fill-rule="evenodd"
            clip-rule="evenodd"
            d="M57.5 0L115 100H0L57.5 0z"
          />
        </svg>
        <span className="flex text-white text-lg">Deploy on Vercel</span>
      </div>
    </div>
  );
};

export default VercelButton;

//    <ButtonContainer>
{
  /* <StyledButton rel="noreferrer" target="_blank" onClick={handleClickLink}>
<img width={20} height={20} src="/vercel-light-logo.svg" alt="Vercel Logo" />
<span>Deploy on Vercel</span>
</StyledButton>
</ButtonContainer> */
}
