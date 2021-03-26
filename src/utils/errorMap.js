const errorMap = (message) => {
  const map = {
    "The email address is badly formatted.": "Սխալ էլեկտրոնային հասցե",
    "Password should be at least 8 characters":
      "Գաղտնաբառը պետք է պարունակի 8 նիշ և ավել",
  };
  return map[message];
};

export default errorMap;
