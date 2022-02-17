import { PageExampleComp, ssrExample } from "../queries/generated/page";

const Home: PageExampleComp = ({data}) => {
  const countries = data?.countries.slice(0, 4);
  return (
    <div>
      {countries ? countries.map((country) => (
        <div key={country.code} >
          <h3>
            {country.name}
          </h3>
          <p>
            {country.code} - {country.emoji}
          </p>
        </div>
      )) : (
        <div>aaa</div>
      )}
    </div>
  );
};

export const getServerSideProps = async (context) => {
  return await ssrExample.getServerPage({}, context);
};

export default Home;
