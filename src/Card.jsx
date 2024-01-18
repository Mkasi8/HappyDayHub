export const Card = (props) => {
  const { image, name, age, handleClick } = props;
  return (
    <div>
      <img
        src={image}
        alt={name}
        style={{ width: "200px", height: "200px", objectFit: "cover" }}
      />
      <h2>{name}</h2>
      <h2>{age} years</h2>
    </div>
  );
};
