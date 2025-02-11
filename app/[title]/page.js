import contentData from "../assets/paragraphs";

const page = async ({ params }) => {
  const { title } = await params;
  const content = contentData[title];

  // console.log(content);

  if (!content) {
    return (
      <div className="text-center text-gray-500 mt-10">Content not found</div>
    );
  }

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="card bg-base-100 shadow-xl">
        <div className="card-body">
          <h1 className="card-title text-3xl font-bold text-center mb-6">
            {content.Title}
          </h1>
          <div className="divider"></div>
          <div className="space-y-6">
            {Object.entries(content).map(([key, value]) => {
              if (key === "Title") return null;

              return (
                <div key={key} className="prose max-w-none">
                  <h2 className="text-xl font-semibold text-primary mb-2">
                    {key}
                  </h2>
                  <p className="text-base-content leading-relaxed">{value}</p>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
};

export default page;
