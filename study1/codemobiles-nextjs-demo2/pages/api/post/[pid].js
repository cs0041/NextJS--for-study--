export default (req, res) => {
  const {
    query: { pid },
  } = req;

  if (pid == "1") {      
    res.end("One");
  } else if (pid == "2") {
    res.end("Two");
  } else {
    res.end("Something else");
  }
};
