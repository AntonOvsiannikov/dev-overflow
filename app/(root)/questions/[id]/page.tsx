const QuestionDetails = async ({ params }: RouteParams) => {
  const { id } = await params;
  return (
    <div>
      <h1>Question Page: {id}</h1>
    </div>
  );
};

export default QuestionDetails;
