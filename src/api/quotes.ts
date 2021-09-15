export const getNewQuote = async () => {
  const req = await fetch(
    'https://quote-garden.herokuapp.com/api/v3/quotes/random',
  );

  if (!req.ok) throw new Error();

  const data = await req.json();

  return data.data[0].quoteText;
};
