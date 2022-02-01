export const Failed = (
  text = "HTTP Error, check your internet connection or contact with site administrator"
) => {
  return (
    <div>
      <p>
        {text}
      </p>
    </div>
  );
};
