import "./home.css";
import Layout from "../../Components/Layout/Layout";
import Card from "../../Components/Card/Card";
import useFetch from "../../Hooks/FetchHooks";

function Home() {
  const url = "https://fakestoreapi.com/products";
  const { data: products, loading, error } = useFetch(url, null);

  if (loading) {
    return <div>loading...</div>;
  }
  if (error) {
    return <div>Error: {error}</div>;
  }
  return (
    <Layout>
      Home
      <div className="grid gap-4 grid-cols-4 w-full max-w-screen-lg">
        {products?.map((product) => (
          <Card key={product.id} data={product} />
        ))}
      </div>
    </Layout>
  );
}

export default Home;
