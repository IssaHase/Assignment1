export default function ListComponent({ items = [] }) {
    return (
      <>
        {items.map((p, i) => (
          <div className="row" key={i}>
            <img src={p.imagePath} alt={p.title} />
            <div>
              <h3>{p.title}</h3>
              <p>{p.description}</p>
            </div>
          </div>
        ))}
      </>
    );
  }
  