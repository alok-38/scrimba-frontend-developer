const Results = ({ data }) => {
    return (
      <div>
        <h2 className="mt-10 ml-2 text-3xl">Search Results</h2>
        <ul>
          {data.map((item) => (
            <li key={item.id}>{item.name}</li>
          ))}
        </ul>
      </div>
    );
};

export default Results