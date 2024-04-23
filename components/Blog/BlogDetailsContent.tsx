const BlogDetailsContent = ({ blogDetails }) => {
  return (
    <section className="py-[60px]">
      {blogDetails !== undefined && (
        <div className="w-[1140px] m-auto">
          <div className="flex">
            <img
              src={blogDetails.image}
              alt={`blog image ${blogDetails.id}`}
              className="w-[500px] h-auto"
            />
            <div className="px-[30px]">
              <h2 className="text-black font-normal text-[35px]">
                {blogDetails.name}
              </h2>
              <span className="text-red italic">Ingredients</span>
              <p>
                {blogDetails.ingredients &&
                  blogDetails.ingredients.map((ingredient, index) => (
                    <span key={index}>{ingredient}, </span>
                  ))}
              </p>
              <span className="text-red italic">Instructions</span>
              <p>
                {blogDetails.instructions &&
                  blogDetails.instructions.map((instruction, index) => (
                    <span key={index}>{instruction} </span>
                  ))}
              </p>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};

export default BlogDetailsContent;