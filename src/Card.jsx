export const Card = ({ image, name, age, handleClick }) => {
  return (
    <article className="person">
      <img src={image} alt={name} style={{ objectFit: "cover" }} />
      <div>
        <h4>{name}</h4>
        <p>{age} years</p>
      </div>
    </article>
  );
};
