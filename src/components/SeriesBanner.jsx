import { AalborgSign } from "./AalborgSign";

export const SeriesBanner = ({ series }) => {
  return (
    <>
      {series === 'aalborg-love-stories' && <AalborgSign showHearts={true} />}
    </>
  );
}
