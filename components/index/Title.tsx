const Title = ({ title }: { title: string }) => {
  return (
    <h2 className="pl-4 text-2xl font-bold tracking-tigh my-8 sm:text-3xl sm:my-4">
      {title}
    </h2>
  );
};

export default Title
