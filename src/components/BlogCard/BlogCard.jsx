export const BlogCard = ({name, avatar}) => {
  
    return (
      <div>
        BlogCard
        <h2>Name{name}</h2>
        <img src={avatar} alt={name} />
        {/* <h2>name {name}</h2>
        <img src={avatar} alt={name} />
        <p>tag{tag}</p>
        <img src={poster} alt={tag} />
        <p>title {title}</p>
        <p>description {description}</p> */}
      </div>
    );
  };